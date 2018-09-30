<?php
use Symfony\Component\Routing;

$routes = new Routing\RouteCollection();
// all
$routes->add('all', new Routing\Route('/products',
    array('_controller' =>  'App\MainController::allProducts')));
// create
$routes->add('createProduct', new Routing\Route('/product/create',
    array('_controller' =>  'App\MainController::addProduct')));
// show
$routes->add('showProduct', new Routing\Route('/product/show/{productId}',
    array('_controller' =>  'App\MainController::showProduct')));
// delete
$routes->add('deleteProduct', new Routing\Route('/product/delete/{productId}',
    array('_controller' =>  'App\MainController::deleteProduct')));
// update
$routes->add('updateProduct', new Routing\Route('/product/update/{productId}',
    array('_controller' =>  'App\MainController::deleteProduct')));

return $routes;