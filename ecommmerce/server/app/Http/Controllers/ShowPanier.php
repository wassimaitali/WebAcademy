<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Panier;
use App\Models\Product; // Assurez-vous d'importer le modèle Product

class ShowPanier extends Controller
{
    // ...

    // Méthode pour afficher les articles du panier d'un utilisateur
    public function showCart(Request $request)
    {
        $id_user = $request->input('id_user'); // Récupérer l'ID de l'utilisateur depuis la requête

        // Récupérer les articles du panier de l'utilisateur avec le prix des produits
        $cartItems = Panier::select('panier.*', 'product.price') // Sélectionnez les colonnes du panier et le prix des produits
            ->join('product', 'panier.id_product', '=', 'product.id') // Faites la jointure avec la table des produits
            ->where('panier.id_user', $id_user)
            ->get();

        // Répondre avec les articles du panier (y compris les prix des produits)
        return response()->json($cartItems);
    }
}