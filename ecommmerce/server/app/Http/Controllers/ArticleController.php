<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ArticleController extends Controller
{
    public function DescProducts($id)
    {
        $query = Product::query();

        // Vérifiez si un terme de recherche est fourni

        $query->where('id', '=', $id);


        $products = $query->get();

        return response()->json([
            "message" => "article récupéré",
            "products" => $products
        ], 201);

        // return "hello world";
    }
}