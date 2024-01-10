import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';
import { Link } from "react-router-dom";


function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [searchTerm]);

    const fetchProducts = () => {
        axios.get(`http://localhost:8000/api/products?search=${searchTerm}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleAddToCart = async (product) => {
        try {
            const addToCartResponse = await axios.post('http://localhost:8000/api/add-to-cart', {
                id_user: 1,
                id_product: product.id,
                product_name: product.product_name,
            });

            console.log(addToCartResponse.data.message); // Affichez un message de confirmation

            // Récupérez le prix du produit en utilisant son ID
            const priceResponse = await axios.get(`http://localhost:8000/api/get-product-price?id_product=${product.id}`);
            const productWithPrice = { ...product, price: priceResponse.data.price };

            // Ajoutez le produit avec son prix au panier
            setCart(currentCart => [...currentCart, productWithPrice]);
        } catch (error) {
            console.error(error);
        }
    };


    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = event => {
        event.preventDefault();
        fetchProducts();
    };

    return (
        <div>
            <header>
                <div className="header-container">
                    <Link to={`/home`}><button>Mon Site E-commerce</button></Link>
                    <form className="search-bar" onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Rechercher des produits" value={searchTerm} onChange={handleSearchChange} />
                    </form>
                    <div className="auth-buttons">
                        <Link to={`/form`}><button>Inscription</button></Link>
                        <Link to={`/connexion`}><button>Connexion</button></Link>
                        <Link to={`/panier`}><button>Panier</button></Link>
                    </div>
                </div>
            </header>
            <main>

                <div className="product-block">
                    {products.map((product, index) => (
                      
                    <div className='cardProduct' key={product.id}>
                        <div className='cardProduct2'>
                            <Link to={`/products/${product.id}`} className='imgProduct'>
                            <img className='imgProduct2' src={`data:image/png;base64,${product.image}`} alt={product.product_name} />
                            <h2>{product.product_name}</h2>
                            <p>{product.price} €</p>
                            </Link>

                        </div>
                    <button onClick={() => handleAddToCart(product)} className='btnAddPanier'>Ajouter au Panier</button>
                    </div>
                        
                    ))}         
                </div>
                
            </main>
            <footer className="footer-container">
                <div className="footer-links">
                    <a href="/mentions-legales">Mentions légales</a>
                    <a href="/politique-confidentialite">Politique de confidentialité</a>
                    <a href="/conditions-utilisation">Conditions d'utilisation</a>
                </div>
                <div className="footer-social">
                    <p>Suivez-nous sur les réseaux sociaux :</p>
                    <div className="social-icons">
                        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <p className="footer-copyright">Tous droits réservés © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Home;
