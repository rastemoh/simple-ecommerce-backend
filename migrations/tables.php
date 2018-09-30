<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 30/09/2018
 * Time: 08:04 AM
 */
require_once __DIR__.'/../vendor/autoload.php';
use Symfony\Component\Dotenv\Dotenv;
use Illuminate\Database\Capsule\Manager as Capsule;

$dotenv = new Dotenv();
$dotenv->load(__DIR__.'/../.env');

require __DIR__.'/../src/config/database.php';

Capsule::schema()->create('users', function ($table) {
    $table->increments('id');
    $table->string('name');
    $table->string('email')->unique();
    $table->string('password');
    $table->string('api_key')->nullable()->unique();
    $table->rememberToken();
    $table->timestamps();
});

Capsule::schema()->create('products', function($table) {
    $table->increments('id');
    $table->string('title');
    $table->text('description');
    $table->timestamps();
});

Capsule::schema()->create('variants', function($table) {
    $table->increments('id');
    $table->integer('product_id')->unsigned();
    $table->string('color');
    $table->float('price');
    $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
    $table->timestamps();
});