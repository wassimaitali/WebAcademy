<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products;
use App\Http\Controllers\Signup;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\stripeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');


// Récupérer tous les produits
// Route::get('/products', [Products::class, 'getAllProducts']);



// inscription
Route::get('/signup', [Signup::class, 'showRegistrationForm'])->name('signup.form');
Route::post('/signup', [Signup::class, 'register'])->name('register');


// connexion
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');


// Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('auth');
Route::get('/dashboard', [DashboardController::class, 'showDashboard'])->name('dashboard');

Route::get('/success', [stripeController::class, 'success']);