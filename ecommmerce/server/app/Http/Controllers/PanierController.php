<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Panier;

class PanierController extends Controller
{
    public function addToCart(Request $request)
    {
        $data = $request->validate([
            'id_user' => 'required',
            'id_product' => 'required',
            'product_name' => 'required',
        ]);

        // Créez une nouvelle entrée dans la table "panier"
        Panier::create($data);
        

        // Répondez avec un statut ou un message approprié
        return response()->json(['message' => 'Produit ajouté au panier']);
    }



    // public function removeFromCart($id)
    // public function removeFromCartForUser1($id)

    // {
    //     // Recherchez l'élément du panier par son ID et l'ID de l'utilisateur (pour des raisons de sécurité)
    //     $panierItem = Panier::where('id', $id)
    //         ->where('id_user', auth()->id()) // Vous devez adapter cette partie en fonction de votre système d'authentification
    //         ->first();

    //     if (!$panierItem) {
    //         return response()->json(['message' => 'Article introuvable dans le panier'], 404);
    //     }

    //     // Supprimez l'élément du panier
    //     $panierItem->delete();

    //     // Répondez avec un message de confirmation
    //     return response()->json(['message' => 'Article supprimé du panier']);
    // }


    public function removeFromCartForUser1($id)
{
    // Recherchez l'élément du panier par son ID et l'ID de l'utilisateur
    $panierItem = Panier::where('id', $id)
        ->where('id_user', 1) // Remplacez 1 par l'ID de l'utilisateur que vous souhaitez cibler
        ->first();

    if (!$panierItem) {
        return response()->json(['message' => 'Article introuvable dans le panier'], 404);
    }

    // Supprimez l'élément du panier
    $panierItem->delete();

    // Répondez avec un message de confirmation
    return response()->json(['message' => 'Article supprimé du panier']);
}
}