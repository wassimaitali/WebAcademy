<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Products;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\ShowPanier;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\stripeController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::get('/welcome', 'WelcomeController@index')->name('welcome');
// Route::get('/products', function () {
//     return view('welcome');
// });

Route::middleware('throttle:1000,1')->group(function () {
    // Vos routes API ici

    Route::get('/products', [Products::class, 'getAllProducts']);

    Route::get('/products/{id}', [ArticleController::class, 'DescProducts']);

    Route::get('/get-product-price', [Products::class, 'getProductPrice']);

    Route::post('/add-to-cart', [PanierController::class, 'addToCart']);

    Route::delete('/remove-from-cart/{id}', [PanierController::class, 'removeFromCartForUser1']);

    Route::get('/show-cart', [ShowPanier::class, 'showCart']);

    Route::post('/register', [SignupController::class, 'register']);

    Route::post('/admin', [ProductController::class, 'creation']);

    Route::put('/admin-gest/{id}', [ProductController::class, 'update']);

    Route::delete('/admin-gest/{id}', [ProductController::class, 'delete']);

    Route::get('/payment' , [stripeController::class, 'payment']);

    Route::post('/login', [LoginController::class, 'login']);


});