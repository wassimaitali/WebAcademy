// App.js

import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css"; // Vous pouvez ajouter des styles globaux à l'application si nécessaire

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Effectuez ici la requête pour récupérer les produits depuis votre backend Laravel
    // par exemple, en utilisant fetch()
    fetch("http://localhost:8000/web/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="app-container">
      {/* Vous pouvez ajouter des en-têtes, pieds de page, etc. ici */}
      <ProductList products={products} />
      {/* Vous pouvez ajouter d'autres composants ici */}
    </div>
  );
}

export default App;
