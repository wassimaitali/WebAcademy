import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const userData = {
          email: email,
          password: password,
        };
    
        axios.post('http://localhost:8000/api/login', userData)
            .then(response => {
                console.log(response.data);
                setMessage(response.data.message);
    
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                setMessage('Une erreur s\'est produite lors de l\'inscription.');
                console.error(error);
            });
    };
  
    return (
        <div className="wrapper">
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
            <div className="container">
                
                <div className="boxLeft">
                    <div className="boxContainer">

                        <div className="boxTitle">
                            <h1>Log In your account</h1>
                            <p>Log in to access your account</p>
                        </div>


                        <form className="boxForm" onSubmit={handleSubmit}>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">E-mail <span>*</span></label>
                                </div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your e-mail"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Password <span>*</span></label>
                                </div>
                                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                            </div>

                            <button>Sign In</button>
                            <p className='link'>Already have an account? <Link to="/Form" className='linkTo'>Sign Up</Link> </p>

                            <div className='messageError'>{message}</div>

                        </form>

                    </div>
                </div>

                <div className="boxRight">
                    <div className="boxRightImg"></div>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm;

// import React, { Component } from "react";

// class Login extends Component {
//   constructor() {
//     super(); // Appeler le constructeur de la classe parente
//     this.state = {
//       email: null,
//       password: null,
//       login: false,
//       store: null
//     };
//   }

//   login = () => {
//     fetch('http://localhost:8000/api/login', {
//       method: "POST",
//       body: JSON.stringify(this.state)
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.warn("result", result);
//         localStorage.setItem('login', JSON.stringify({
//           login: true,
//           token: result.token
//         }));
//       })
//       // .catch(error => {
//       //   console.error("Error:", error);
//       // });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Token React</h1>
//         <input type="text" placeholder="email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
//         <input type="password" placeholder="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
//         <button onClick={() => { this.login() }}>Login</button>
//       </div>
//     )
//   }
// }

// export default Login;
