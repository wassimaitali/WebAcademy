<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showDashboard()
    {
        // Code pour afficher le tableau de bord
        return view('dashboard');
    }

    // Ajoutez d'autres méthodes du contrôleur Dashboard ici si nécessaire...
}
