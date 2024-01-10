<?php

// app/Http/Controllers/LoginController.php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Tymon\JWTAuth\Facades\JWTAuth;

// class LoginController extends Controller
// {
//     public function login(Request $request)
//     {
//         // Valider les données du formulaire
//         $validatedData = $request->validate([
//             'email' => 'required|email',
//             'password' => 'required',
//         ]);

//         // Tentative de connexion
//         if (Auth::attempt($validatedData)) {
//             $user = Auth::user();
//             $token = JWTAuth::fromUser($user);

//             return response()->json(['message' => 'Connexion réussie', 'token' => $token]);
//         } else {
//             return response()->json(['message' => 'Identifiants invalides'], 401);
//         }
//     }
// }
