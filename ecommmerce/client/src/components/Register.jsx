import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
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
    <div>
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Nom:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default RegistrationForm;















// import React, { useState } from 'react';
// import axios from 'axios';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // const response = await axios.post('/register', formData);
//       const response = await axios.post('http://localhost:8000/register', formData);
//       console.log(response.data); // Traitez la réponse du serveur en conséquence
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <h1>test</h1>
      
//       <input type="text" name="firstname" onChange={handleChange} value={formData.firstname} placeholder="Prénom" />
//       <input type="text" name="lastname" onChange={handleChange} value={formData.lastname} placeholder="Nom" />
//       <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
//       <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Mot de passe" />

//       <input type="hidden" name="_token" value="{{ csrf_token() }}" />
      
//       <button type="submit">Inscription</button>
//     </form>
//   );
// };

// export default SignupForm;
