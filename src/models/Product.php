<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 30/09/2018
 * Time: 08:30 AM
 */

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
    protected $fillable = [
        'title', 'description'
    ];

    public function variants()
    {
        return $this->hasMany('App\Models\Variant', 'product_id');
    }
}