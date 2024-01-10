import { Link } from 'react-router-dom';
import '../css/reset.css';  
import '../sass/Form.css';  
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useState } from 'react';


function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const userData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };

      axios.post('http://localhost:8000/api/register', userData)
        .then(response => {
          console.log(response.data);
          setMessage(response.data.message);
  
          setFirstName('');
          setLastName('');
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
                            <h1>Create your account</h1>
                            <p>Create your account to make your purchases</p>
                        </div>


                        <form className="boxForm" onSubmit={handleSubmit}>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">First name <span>*</span></label>
                                    {/* <FontAwesomeIcon icon={faUser} /> */}
                                </div>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your firstname"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Last name <span>*</span></label>
                                </div>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your lastname"/>
                            </div>

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
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                            </div>

                            <button>Sign Up</button>
                            <p className='link'>Already have an account? <Link to="/Connexion" className='linkTo'>Log In</Link> </p>

                            <div>{message}</div>
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

export default Form;


















// import { Link } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faUser } from '@fortawesome/free-solid-svg-icons';

// import axios from 'axios';
// import { useEffect, useState } from 'react';


// const Form = () => {

//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:3000/api/users')
//           .then(res => {
//                 setData(res.data);
//             })
//           .catch(err => console.log(err));
//     })



//     return (
//         <div className="wrapper">
//             <div className="container">
                
//                 <div className="boxLeft">
//                     <div className="boxContainer">

//                         <div className="boxTitle">
//                             <h1>Create your account</h1>
//                             <p>Create your account to make your purchases</p>
//                         </div>


//                         <div className="boxForm">

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">First name <span>*</span></label>
//                                     {/* <FontAwesomeIcon icon={faUser} /> */}
//                                 </div>
//                                 <input type="text" placeholder="Enter your firstname"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Last name <span>*</span></label>
//                                 </div>
//                                 <input type="text" placeholder="Enter your lastname"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">E-mail <span>*</span></label>
//                                 </div>
//                                 <input type="email" placeholder="Enter your e-mail"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Password <span>*</span></label>
//                                 </div>
//                                 <input type="password" placeholder="Enter your password"/>
//                             </div>

//                             <button>Sign Up</button>
//                             <p className='link'>Already have an account? <Link to="/Connexion" className='linkTo'>Log In</Link> </p>

//                         </div>

//                     </div>
//                 </div>

//                 <div className="boxRight">
//                     <div className="boxRightImg"></div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Form;
