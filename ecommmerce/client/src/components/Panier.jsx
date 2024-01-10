import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Panier.css';
import { Link } from "react-router-dom";

function Panier() {
    const [cart, setCart] = useState([]);
    const [cartLoaded, setCartLoaded] = useState(false); // Nouvel état pour suivre si le panier a été chargé
    const [total, setTotal] = useState(0); 

    useEffect(() => {
        if (!cartLoaded) { // Vérifiez si le panier n'a pas encore été chargé
            panier();
            setCartLoaded(true); // Marquez le panier comme chargé
        }
    }, [cartLoaded]); // Dépendez de cartLoaded pour le chargement initial seulement




    useEffect(() => {
        // Calculez le total du panier lorsque le panier change
        const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
        setTotal(cartTotal);
    }, [cart]);

    const panier = () => {
        axios.get(`http://localhost:8000/api/show-cart?id_user=1`)
            .then(response => {
                console.log("Panier is called");
                console.log("Cart data:", response.data); 
                setCart(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    const reviewCommand = (name, price, total) => {
        axios.get(`http://localhost:8000/api/payment?name=${name}&price=${price}&total=${total}`)
        .then(response => {
            return response.data;
        })
        .then(reponse => {
            window.location = reponse.url;
        })
        // .catch(error => {
        //     console.error("Error:", error); 
        // });

    }





    const handleRemoveFromCart = async (cartItemId) => {
        try {
            // Envoyez une requête DELETE à votre API pour supprimer l'article du panier
            await axios.delete(`http://localhost:8000/api/remove-from-cart/${cartItemId}`);
    
            // Mettez à jour l'état local du panier en supprimant l'article supprimé
            setCart(currentCart => currentCart.filter(item => item.id !== cartItemId));
            console.log('article suprimé');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <header>
                <div className="header-container">
                    <Link to={`/home`}><button>Mon Site E-commerce</button></Link>
                    <div className="auth-buttons">
                        <Link to={`/form`}><button>Inscription</button></Link>
                        <Link to={`/connexion`}><button>Connexion</button></Link>
                        <Link to={`/panier`}><button>Panier</button></Link>
                    </div>
                </div>
            </header>
        
            <main>

                <h2>Panier</h2>
                <div className='auth-buttons'>
                    <button onClick={() => reviewCommand('Paiement', '200', total)}>Passer la Commande</button>
                </div>
                
                <div className="product-blockP">
                    {cart.map(item => (
                    <div key={item.id} className='cardProductP'>
                        <div className='cardProduct2P'>
                            {/* <div key={item.id} className="cart-item"> */}
                                {/* <div className='imgProductP'></div> */}
                                <p>{item.product_name}</p>
                                <p>{item.price} €</p>
                                {/* <p>{result= item.price + item.price} €</p> */}
                            {/* </div> */}
                        </div>
                        <button className='btnSupp' onClick={() => handleRemoveFromCart(item.id)}>Supprimer</button>
                    </div>
                    ))}
                </div>
                <div className='total'>
                <p>Total du panier : {total} €</p>
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

export default Panier;