<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 19/10/2018
 * Time: 09:13 PM
 */

namespace App\controllers;


use App\connectors\ElasticClient;
use App\Models\Product;
use App\Models\Variant;
use App\connectors\RedisClient;
use Symfony\Component\HttpFoundation\Request;

class VariantController
{
    use BasicController;
    private $elasticClient;
    private $redisClient;
    public function __construct()
    {
        $this->elasticClient = new ElasticClient(getenv('ELASTIC_INDEX'), getenv('ELASTIC_TYPE'));
        $this->redisClient = RedisClient::getInstance();
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

}