<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';

    protected $fillable = ['product_name', 'price', 'category', 'description', 'image', 'available'];
    public $timestamps = false;

    // Vous pouvez ajouter d'autres propriétés et méthodes ici si nécessaire
}