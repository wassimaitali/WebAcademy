import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';
import { Link , useLocation} from "react-router-dom";


function Article() {

    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    let id = location.pathname.split("/")[2];
  
    console.log(id);

    const fetchProducts = () => {
      axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
          setProducts(response.data.products[0]);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    useEffect(() => {
      fetchProducts();
    }, [id]);
  
    console.log(products);

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
        <div className="product-block">
            <p>{products.description}</p>
            <p>{products.price}</p>
            <p>{products.available}</p>

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

export default Article;