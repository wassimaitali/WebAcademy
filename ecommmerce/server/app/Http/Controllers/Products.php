<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


// class Products extends Controller
// {

//     public function getAllProducts(Request $request)
// {
//     $query = Product::query();

//     // Vérifiez si un terme de recherche est fourni
//     if ($request->has('search')) {
//         $searchTerm = $request->input('search');
//         $query->where('product_name', 'LIKE', "%$searchTerm%")
//               ->orWhere('category', 'LIKE', "%$searchTerm%")
//               ->orWhere('price', 'LIKE', "%$searchTerm%");
//     }

//     $products = $query->get();

//     return response()->json($products);
// }


// public function getProductPrice(Request $request)
// {
//   $id_product = $request->query('id_product');
//   $product = Product::find($id_product);
//   if ($product) {
//     return response()->json(['price' => $product->price]);
//   } else {
//     return response()->json(['message' => 'Produit non trouvé'], 404);
//   }
// }
// }




class Products extends Controller
{
    public function getAllProducts(Request $request)
    {
        $query = Product::query();

        // Vérifiez si un terme de recherche est fourni
        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where('product_name', 'LIKE', "%$searchTerm%")
                ->orWhere('category', 'LIKE', "%$searchTerm%")
                ->orWhere('price', 'LIKE', "%$searchTerm%");
        }

        $products = $query->get();

        // Pour chaque produit, ajoutez les données de l'image sous forme de chaîne base64
        foreach ($products as $product) {
            $product->image = base64_encode($product->image); // Supposant que 'image' est la colonne contenant les données binaires de l'image
        }

        return response()->json($products);
    }

    public function getProductPrice(Request $request)
    {
        $id_product = $request->query('id_product');
        $product = Product::find($id_product);
        if ($product) {
            return response()->json(['price' => $product->price]);
        } else {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
    }
}

?>