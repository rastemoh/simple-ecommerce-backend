<?php
/**
 * Created by PhpStorm.
 * User: mbr
 * Date: 30/09/2018
 * Time: 08:30 AM
 */

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Variant extends Model
{
    protected $fillable = [
        'color', 'price'
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

}