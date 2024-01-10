<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class stripeController extends Controller
{
    public function payment(Request $request){

        \Stripe\Stripe::setApiKey("sk_test_51NmyWQKl782CRdneEglSALKLKK5PCjm5SqzkenqYoiPLW4fdBxyaiukJ3Lqps28pPW2DOdz4ccMdXYtuhyHM9OvO00izqlOTEC");

        $montantEnEuros = $request->query('total'); // Montant en euros
        $montantEnCentimes = $montantEnEuros * 100;

        $session = \Stripe\Checkout\Session::create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'eur',
                        'product_data' => [
                            'name' => $request->query('name'),
                            
                        ],
                        'unit_amount' => $montantEnCentimes,
                        // 'amount' => 1000,
                    ],
                    'quantity' => 1,
                ]
            ],
            'mode' => 'payment',
            'success_url' => "http://localhost:8000/success",
            'cancel_url' => 'http://localhost:8000/cancel',
        ]);

        return response()->json(['url' => $session->url]);
    }

    public function success(){

        return redirect("http:localhost:3000/success");

    }
}
