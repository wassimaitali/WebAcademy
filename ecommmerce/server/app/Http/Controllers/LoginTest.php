<?php

// app/Http/Controllers/LoginController.php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

// class LoginController extends Controller
// {
//     // Afficher le formulaire de connexion
//     public function showLoginForm()
//     {
//         return view('login');
//     }

//     // Traiter le formulaire de connexion
//     public function login(Request $request)
//     {
//         $credentials = $request->validate([
//             'email' => 'required|email',
//             'password' => 'required',
//         ]);

//         if (Auth::attempt($credentials)) {
//             // L'authentification a réussi, rediriger l'utilisateur vers une page protégée
//             return redirect()->route('dashboard');
//         } else {
//             // L'authentification a échoué, rediriger l'utilisateur vers le formulaire de connexion avec un message d'erreur
//             return redirect()->route('login')->with('error', 'Identifiants invalides');
//         }
//     }

//     // Déconnecter l'utilisateur
//     public function logout()
//     {
//         Auth::logout();
//         return redirect()->route('login');
//     }
// }


?>