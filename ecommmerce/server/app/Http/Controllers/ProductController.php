<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function creation(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string',
            'price' => 'required|numeric',
            'category' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:9048', // Validation de l'image
            'available' => 'required|numeric',
        ]);

        // Stockez l'image dans le dossier de stockage (par exemple, public/images)
        $imagePath = $request->file('image')->store('public/images');

        // Obtenez l'URL de l'image pour la sauvegarder dans la base de données si nécessaire
        $imageUrl = Storage::url($imagePath);

        $data = $request->except('image'); // Excluez l'image des données à insérer dans la base de données
        $data['image'] = $imageUrl; // Stockez l'URL de l'image dans la base de données

        $product = Product::create($data);

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $request->validate([
            'product_name' => 'required|string',
            'price' => 'required|numeric',
            'category' => 'required|string',
            'description' => 'required|string',
            'available' => 'required|numeric',
        ]);

        $product->product_name = $request->input('product_name');
        $product->price = $request->input('price');
        $product->category = $request->input('category');
        $product->description = $request->input('description');
        $product->available = $request->input('available');
        $product->save();

        return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
    }

    public function delete($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Supprimez également le fichier image du stockage si nécessaire
        Storage::delete($product->image);

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}

// <!-- <?php

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\Models\Product;

// class ProductController extends Controller
// {
//     public function creation(Request $request)
//     {
//         $data = $request->validate([
//             'product_name' => 'required|string',
//             'price' => 'required|numeric',
//             'category' => 'required|string',
//             'description' => 'required|string',
//             // 'image' => 'required|string',
//             'available' => 'required|numeric',
//         ]);

//         $product = Product::create($data);

//         return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
//     }

//     public function update(Request $request, $id)
//     {
//         $product = Product::find($id);

//         $data = $request->validate([
//             'product_name' => 'required|string',
//             'price' => 'required|numeric',
//             'category' => 'required|string',
//             'description' => 'required|string',
//             'available' => 'required|numeric',
//         ]);
        
//         if (!$product) {
//             return response()->json(['message' => 'Product not found'], 404);
//         } else {
//             $product->update($data);
//             echo $product;           
//         }


//         return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
//     }

//     public function delete($id)
//     {
//         $product = Product::find($id);

//         if (!$product) {
//             return response()->json(['message' => 'Product not found'], 404);
//         }

//         $product->delete();

//         return response()->json(['message' => 'Product deleted successfully'], 200);
//     }
// } -->