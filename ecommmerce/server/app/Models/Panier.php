<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    use HasFactory;

    protected $table = 'panier';

    protected $fillable = [
        'id_user',
        'id_product',
        'product_name',
    ];

    // Relation avec l'utilisateur
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // Relation avec le produit
    public function product()
    {
        return $this->belongsTo(Product::class, 'id_product');
    }
    public $timestamps = false;
}
