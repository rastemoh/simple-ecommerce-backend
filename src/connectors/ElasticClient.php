<?php
namespace App\connectors;
require_once __DIR__ . '/../../vendor/autoload.php';

use Elasticsearch\ClientBuilder;

class ElasticClient
{
    private $client;
    private $index;
    private $type;
    private $baseArray;
    public function __construct($index, $type)
    {
        $this->client = ClientBuilder::create()->build();
        $this->index = $index;
        $this->type = $type;
        $this->baseArray = compact('index', 'type');
    }

    public function insert($body)
    {
        return $this->client->index(array_merge($this->baseArray, compact( 'body')));
    }

    public function fetch($index, $type, $id)
    {
        return $this->client->get(compact('index', 'type', 'id'));
    }

    public function simpleSearch($query)
    {
        $body = compact('query');
        return $this->client->search(array_merge($this->baseArray, compact( 'body')));
    }

    public function delete($index, $type, $id)
    {
        return $this->client->delete(compact('index', 'type', 'id'));
    }

    public function update($index, $type, $id, $updatedObject )
    {
        $body = array("doc" => $updatedObject);
        return $this->client->update(compact('index', 'type', 'id', 'body'));
    }
}
