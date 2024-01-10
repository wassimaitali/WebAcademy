import './css/reset.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Connexion from './components/Connexion';
// import Connexiontest from './components/Con';
import Register from './components/Register';
import Home from './components/Home';
import ProductGest from './components/page_admin';
import Article from './components/Article';
import Panier from './components/Panier';
import ProductList from './components/page-admin_mod';
import Success from './components/Success';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/form" element={<Form />} />
        <Route path="/connexion" element={<Connexion />} />
        {/* <Route path="/con" element={<Connexiontest />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<ProductGest />} />
        <Route path="/products/:id" element={<Article />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/admin-gest" element={<ProductList />} />
        <Route path="/success" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;