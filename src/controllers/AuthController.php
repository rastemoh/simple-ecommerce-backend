<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 19/10/2018
 * Time: 09:14 PM
 */

namespace App\controllers;


use App\Models\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController
{
    use BasicController;

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
}