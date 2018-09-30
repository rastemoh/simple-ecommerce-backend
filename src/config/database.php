<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 30/09/2018
 * Time: 07:57 AM
 */
use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection([
    "driver" => getenv('DB_CONNECTION'),
    "host" => getenv('DB_HOST'),
    "database" => getenv('DB_DATABASE'),
    "username" => getenv('DB_USERNAME'),
    "password" => getenv('DB_PASSWORD')
]);

//Make this Capsule instance available globally.
$capsule->setAsGlobal();

// Setup the Eloquent ORM.
$capsule->bootEloquent();
