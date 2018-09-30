<?php

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing;
use Symfony\Component\HttpKernel;
use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$dotenv->load(__DIR__.'/../.env');

// Database connection
require __DIR__.'/../src/config/database.php';

$request = Request::createFromGlobals();
$routes = include __DIR__.'/../src/routes.php';
$context = new Routing\RequestContext();
$context->fromRequest($request);
$matcher = new Routing\Matcher\UrlMatcher($routes, $context);
$controllerResolver = new HttpKernel\Controller\ControllerResolver();
$argumentResolver = new HttpKernel\Controller\ArgumentResolver();
if ($request->getMethod() === 'OPTIONS') { // only for CORS requests
    $response = new Response('OK', 200);
    setAccessControlHeader($response);
    return $response->send();
}
try {
    $request->attributes->add($matcher->match($request->getPathInfo()));
    $controller = $controllerResolver->getController($request);
    $arguments = $argumentResolver->getArguments($request, $controller);
    $response = call_user_func_array($controller, $arguments);
} catch (Routing\Exception\ResourceNotFoundException $exception) {
    $response = new Response('Not Found', 404);
} catch (Exception $exception) {
    $response = new Response('An error occurred'. $exception->getMessage(), 500);
//    $response = new Response($exception->getTraceAsString() , 500);
}
setAccessControlHeader($response);
$response->send();

function setAccessControlHeader($response) {
    $response->headers->set('Access-Control-Allow-Origin', 'http://localhost:4200');
    $response->headers->set('Access-Control-Request-Method', 'POST');
    $response->headers->set('Access-Control-Allow-Headers', 'content-type');
    $response->headers->set('Access-Control-Allow-Credentials', 'true');
    $response->headers->set('Access-Control-Max-Age', '3600');
    $response->headers->set('Allow', 'GET,POST,OPTIONS');
    $response->headers->set('Vary', 'Origin');
}

