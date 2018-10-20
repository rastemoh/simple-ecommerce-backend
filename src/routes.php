<?php
use Symfony\Component\Routing;

$routes = new Routing\RouteCollection();
$getRoutes = new Routing\RouteCollection();
$postRoutes = new Routing\RouteCollection();

// all products
$getRoutes->add('all', new Routing\Route('/products',
    array('_controller' =>  'App\controllers\ProductController::allProducts')));
// show product
$getRoutes->add('showProduct', new Routing\Route('/product/show/{productId}',
    array('_controller' =>  'App\controllers\ProductController::showProduct')));
// create product
$postRoutes->add('createProduct', new Routing\Route('/product/create',
    array('_controller' =>  'App\controllers\ProductController::addProduct')));
// delete product
$postRoutes->add('deleteProduct', new Routing\Route('/product/delete/{productId}',
    array('_controller' =>  'App\controllers\ProductController::deleteProduct')));
// update product
$postRoutes->add('updateProduct', new Routing\Route('/product/update/{productId}',
    array('_controller' =>  'App\controllers\ProductController::editProduct')));
// add variant
$postRoutes->add('addVariant', new Routing\Route('/variant/add/{productId}',
    array('_controller' =>  'App\controllers\VariantController::addVariant')));
// edit variant
$postRoutes->add('editVariant', new Routing\Route('/variant/edit/{variantId}',
    array('_controller' =>  'App\controllers\VariantController::editVariant')));
// delete variant
$postRoutes->add('deleteVariant', new Routing\Route('/variant/delete/{variantId}',
    array('_controller' =>  'App\controllers\VariantController::deleteVariant')));

// register user
$postRoutes->add('register', new Routing\Route('/register',
    array('_controller' =>  'App\controllers\AuthController::registerUser')));
// login
$postRoutes->add('login', new Routing\Route('/login',
    array('_controller' =>  'App\controllers\AuthController::login')));
// logout
$postRoutes->add('logout', new Routing\Route('/logout',
    array('_controller' =>  'App\controllers\AuthController::logout')));

// search
$getRoutes->add('search', new Routing\Route('/search/{query}',
    array('_controller' =>  'App\controllers\ProductController::search')));

$getRoutes->setMethods(array('GET'));
$postRoutes->setMethods(array('POST', 'OPTION'));
$getRoutes->addPrefix('/api');
$postRoutes->addPrefix('/api');
$routes->addCollection($getRoutes);
$routes->addCollection($postRoutes);
return $routes;