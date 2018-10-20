<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 19/10/2018
 * Time: 07:18 PM
 */

namespace App\controllers;


use App\connectors\ElasticClient;
use App\Models\Product;
use App\Models\Variant;
use App\connectors\RedisClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductController
{
    use BasicController;
    private $elasticClient;
    private $redisClient;
    public function __construct()
    {
        $this->elasticClient = new ElasticClient(getenv('ELASTIC_INDEX'), getenv('ELASTIC_TYPE'));
        $this->redisClient = RedisClient::getInstance();
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
}