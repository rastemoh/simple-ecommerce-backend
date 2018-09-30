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
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController
{
    public function allProducts(Request $request) : Response
    {
        $products = Product::with('variants')->get()->all();
        $response = new JsonResponse(compact('products'));
        $response->setCharset('UTF-8');
        return $response;
    }

    public function addProduct(Request $request)
    {
        $this->parseJson($request);
        $title = $request->get('title');
        $description = $request->get('description');
        if (empty($title)) {
            return $this->error("Validation error", 400);
        }
        $product = new Product;
        $product->title = $title;
        $product->description = $description;
        $variants = $request->get('variants', []);
        $product->save();
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
        }
        $response = new JsonResponse(compact('product'));
        $response->setCharset('UTF-8');
        return $response;
    }

    public function showProduct($productId)
    {
        $product = Product::where("id", $productId)->with('variants')->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        $response = new JsonResponse(compact('product'));
        $response->setCharset('UTF-8');
        return $response;
    }

    public function editProduct(Request $request, $productId)
    {

    }

    public function deleteProduct($productId)
    {
        $product = Product::where("id", $productId)->first();
        if($product === null) {
            return $this->error("Product not found", 404);
        }
        $product->delete();
        return $this->response(array('message' => 'Successfully deleted'));
    }

    public function search(Request $request)
    {

    }

    private function error($message, $code) {
        $error = $message;
        $response = new JsonResponse(compact('error'), $code);
        return $response;
    }

    private function response($str, $code = 200) {
        extract($str);
        $response = new JsonResponse(compact(array_keys($str)), $code);
        return $response;
    }

    private function parseJson(Request $request) {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
        }
    }
}