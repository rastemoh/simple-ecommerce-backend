<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 20/10/2018
 * Time: 10:03 AM
 */

namespace App\connectors;
use Predis\Client as Client;

class RedisClient
{
    private static $instance;
    private function __construct()
    {
        self::$instance = new Client(['host' => getenv('REDIS_HOST')
            , 'port' => getenv('REDIS_PORT')
            , 'database' => getenv('REDIS_DATABASE')
        ]);
    }

    public static function getInstance() {
        if (!isset(self::$instance)) {
            new RedisClient();
        }
        return self::$instance;
    }

}