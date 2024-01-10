<?php

// app/Http/Controllers/SignupController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SignupController extends Controller
{
    public function register(Request $request)
    {
        // Valider les données du formulaire
        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        // Créer un nouvel utilisateur
        $user = User::create([
            'firstname' => $validatedData['firstname'],
            'lastname' => $validatedData['lastname'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
        ]);

        return response()->json(['message' => 'Inscription réussie']);
    }
}


?>