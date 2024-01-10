// ProductList.js

import React from "react";
import "./ProductList.css"; // Importez le fichier de styles CSS pour styliser la liste des produits

function ProductList({ products }) {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-name">{product.product_name}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-category">{product.categorie}</div>
            <div className="product-description">{product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;