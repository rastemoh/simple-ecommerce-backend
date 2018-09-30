<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 27/09/2018
 * Time: 07:07 PM
 */

namespace App;
use App\Models\Product;
use App\Models\Variant;
use App\Models\User;
use Predis\Client as RedisClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController
{
    private $elasticClient;
    private $redisClient;
    public function __construct()
    {
        $this->elasticClient = new ElasticClient(getenv('ELASTIC_INDEX'), getenv('ELASTIC_TYPE'));
        $this->redisClient = new RedisClient(['host' => getenv('REDIS_HOST')
            , 'port' => getenv('REDIS_PORT')
            , 'database' => getenv('REDIS_DATABASE')
        ]);
    }

    public function allProducts() : Response
    {
        return $this->response(array('products' => Product::with('variants')->get()->all()));
    }

    public function showProduct($productId) : Response
    {
        $product = Product::where("id", $productId)->with('variants')->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        return $this->response(compact('product'));
    }

    public function addProduct(Request $request): Response
    {
        $this->parseJson($request);
        $title = $request->request->get('title');
        $description = $request->request->get('description');
        if (empty($title)) {
            return $this->error("Validation error", 400);
        }
        $product = new Product;
        $product->title = $title;
        $product->description = $description;
        $product->save();
        $variants = $request->request->get('variants', []);
        $variantsToBeSaved = array();
        foreach ($variants as $variant) {
            if (!empty($variant['color'] and !empty($variant['price']))) {
                $instance = new Variant;
                $instance->color = $variant['color'];
                $instance->price = $variant['price'];
                $variantsToBeSaved[] = $instance;
            }
        }
        if (count($variantsToBeSaved)) {
            $product->variants()->saveMany($variantsToBeSaved);
            $this->redisClient->flushdb(); // clear all keys
        }

        // indexing to elastic
        foreach ($variantsToBeSaved as $item) {
            $object = array("title" => $product->title, "description" => $product->description, "productId" => $product->id,
                "color" => $item['color'], "price" => $item['price']);
            $this->elasticClient->insert($object);
        }
        return $this->response(compact('product'));
    }

    public function addVariant(Request $request, $productId)
    {
        $this->parseJson($request);
        $product = Product::where("id", $productId)->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        $color = $request->request->get('color');
        $price = $request->request->get('price');
        if (empty($color) or empty($price)){
            return $this->error("Validation error", 400);
        }
        $variant = new Variant;
        $variant->color = $color;
        $variant->price = $price;
        $product->variants()->save($variant);
        $object = array("title" => $product->title, "description" => $product->description, "productId" => $product->id,
            "color" => $color, "price" => $price);
        $this->elasticClient->insert($object);
        $this->redisClient->flushdb(); // clear all keys
        return $this->response(compact('product'));
    }

    public function editProduct(Request $request, $productId)
    {
        $this->parseJson($request);
        $product = Product::where("id", $productId)->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        $title = $request->request->get('title');
        $description = $request->request->get('description');
        if (empty($title)) {
            return $this->error("Validation error", 400);
        }
        $product->title = $title;
        $product->description = $description;
        $product->save();
        // todo update elastic and dirty cache
        return $this->response(compact('product'));
    }

    public function editVariant(Request $request, $variantId)
    {
        $this->parseJson($request);
        $variant = Variant::where("id", $variantId)->first();
        if($variant === null) {
            return $this->error("Variant not found", 404);
        }
        $color = $request->request->get('color');
        $price = $request->request->get('price');
        if (empty($color) or empty($price)){
            return $this->error("Validation error", 400);
        }
        $variant->color = $color;
        $variant->price = $price;
        $variant->save();
        // todo update elastic and dirty cache
        return $this->response(compact('variant'));
    }

    public function deleteProduct($productId)
    {
        $product = Product::where("id", $productId)->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        if ($product->delete()) {
            // todo update elastic and dirty cache
            return $this->response(array('message' => 'Successfully deleted'));
        } else {
            return $this->error("Problem deleting the product", 500);
        }
    }

    public function deleteVariant($variantId)
    {
        $variant = Variant::where("id", $variantId)->first();
        if($variant === null) {
            return $this->error("Variant not found", 404);
        }
        if ($variant->delete()) {
            // todo update elastic and dirty cache
            return $this->response(array('message' => 'Successfully deleted'));
        } else {
            return $this->error("Problem deleting the variant", 500);
        }
    }

    public function search($query)
    {
        $redisKey = $query;
        $cacheExists = $this->redisClient->exists($redisKey);
        if ($cacheExists && getenv('CACHE_ENABLED', true)){
            $result = json_decode($this->redisClient->get($redisKey));
        } else {
            $searchParam = ["multi_match" => ["query" => $query, "fields" => ["title", "description", "color", "price"]]];
            $result = $this->elasticClient->simpleSearch($searchParam);
            $this->redisClient->set($redisKey, json_encode($result));
        }
        return $this->response(compact('result'));
    }

    public function registerUser(Request $request): Response
    {
        $this->parseJson($request);
        $email = $request->request->get('email');
        $password = $request->request->get('password');
        $name = $request->request->get('name');
        if (empty($email) or empty($password)) {
            // todo validate email
            return $this->error("Email or password is invalid", 400);
        }
        $user = new User;
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_BCRYPT);
        $user->name = $name;
        $user->save();
        return $this->response(compact('user'));
    }

    public function login(Request $request): Response
    {
        $this->parseJson($request);
        $email = $request->request->get('email');
        if (empty($email)) {
            return $this->error("Email is mandatory", 400);
        }
        $user = User::where('email', $email)->first();
        if ($user === null) {
            return $this->error("User not found", 404);
        }
        if (password_verify($request->request->get('password'), $user->password)) {
            $api_key = $user->email.str_random(10);
            $user->api_key = $api_key;
            $user->save();
            return $this->response(compact('user', 'api_key'));
        }
        return $this->error("Email or password is invalid", 400);
    }

    public function logout(Request $request) : Response
    {
        $this->parseJson($request);
        $apiKey = $request->request->get('api_key');
        if ($apiKey === null) {
            return $this->error("Not valid request", 400);
        }
        $user = User::where('api_key', $apiKey)->first();
        if ($user === null) {
            return $this->error("No such api key found", 400);
        }
        $user->api_key = null;
        $user->save();
        $message = "User logged out";
        return $this->response(compact('message'));
    }

    private function error($message, $code) {
        $error = $message;
        $response = new JsonResponse(compact('error'), $code);
        $response->setCharset('UTF-8');
        return $response;
    }

    private function response($str, $code = 200) {
        extract($str);
        $response = new JsonResponse(compact(array_keys($str)), $code);
        $response->setCharset('UTF-8');
        return $response;
    }

    private function parseJson(Request $request) {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
        }
    }

    private function checkApiKey($apiKey = null) : bool
    {
        return true; //todo implement it
    }
}