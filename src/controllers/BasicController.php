<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 19/10/2018
 * Time: 08:13 PM
 */

namespace App\controllers;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

trait BasicController
{

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