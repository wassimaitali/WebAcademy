<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('welcome'); // Renvoie la vue welcome.blade.php qui contient le composant React
    }
}
