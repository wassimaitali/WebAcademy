import axios from 'axios';
import React, { useState } from 'react';

function ProductGest() {
    const [product_name, setProduct_name] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [available, setAvailable] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('product_name', product_name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('available', available);

        if (image) {
            formData.append('image', image);
        }

        axios.post('http://localhost:8000/api/admin', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response.data);
            setMessage(response.data.message);

            setProduct_name('');
            setPrice('');
            setCategory('');
            setDescription('');
            setAvailable('');
            setImage(null);
        })
        .catch(error => {
            setMessage('An error occurred during registration.');
            console.error(error);
        });
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="boxLeft">
                    <div className="boxContainer">
                        <div className="boxTitle">
                            <h1>Create your Product</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Product name <span>*</span></label>
                                </div>
                                <input type="text" value={product_name} onChange={(e) => setProduct_name(e.target.value)} placeholder="Enter Name Product"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Price<span>*</span></label>
                                </div>
                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your Price"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Category<span>*</span></label>
                                </div>
                                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Description <span>*</span></label>
                                </div>
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description"/>
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Image <span>*</span></label>
                                </div>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
                            </div>

                            <div className="boxInput">
                                <div className="boxLabel">
                                    <label htmlFor="">Available<span>*</span></label>
                                </div>
                                <input type="text" value={available} onChange={(e) => setAvailable(e.target.value)} placeholder="Enter Availability"/>
                            </div>

                            <button type='submit'>Validate</button>
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

export default ProductGest;

// import axios from 'axios';
// import React, { useState } from 'react'; // Import 'useState'

// function ProductGest() {
//     const [product_name, setProduct_name] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [description, setDescription] = useState('');
//     // const [image, setImage] = useState('');
//     const [available, setAvailable] = useState('');
//     const [message, setMessage] = useState(''); // Define 'setMessage' using 'useState'
//     const [image, setImage] = useState(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setImage(file);
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const formData = new FormData();
    
//         formData.append('product_name', product_name);
//         formData.append('price', price);
//         formData.append('category', category);
//         formData.append('description', description);
//         formData.append('available', available);
        
//         // Ajoutez l'image téléchargée au FormData s'il y en a une
//         if (image) {
//             formData.append('image', image);
//         }
    
//         axios.post('http://localhost:8000/api/admin', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         })
//         .then(response => {
//             console.log(response.data);
//             setMessage(response.data.message);
    
//             setProduct_name('');
//             setPrice('');
//             setCategory('');
//             setDescription('');
//             setAvailable('');
//             setImage(null);
//         })
//         .catch(error => {
//             setMessage('An error occurred during registration.');
//             console.error(error);
//         });
//     };
    
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     const adminData = {
//     //         product_name: product_name,
//     //         price: price,
//     //         category: category,
//     //         description: description,
//     //         // image: image,
//     //         available: available,
//     //     };

//     //     axios.post('http://localhost:8000/api/admin', adminData)
//     //         .then(response => {
//     //             console.log(response.data);
//     //             setMessage(response.data.message);

//     //             setProduct_name('');
//     //             setPrice('');
//     //             setCategory('');
//     //             setDescription('');
//     //             setImage('');
//     //             setAvailable('');
//     //         })
//     //         .catch(error => {
//     //             setMessage('An error occurred during registration.'); // Use 'setMessage' here
//     //             console.error(error);
//     //         });
//     };
//     return (
//         <div className="wrapper">
//             <div className="container">
                
//                 <div className="boxLeft">
//                     <div className="boxContainer">

//                         <div className="boxTitle">
//                             <h1>Create your Product</h1>
//                         </div>


//                         <form onSubmit={handleSubmit}>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Product name <span>*</span></label>
//                                     {/* <FontAwesomeIcon icon={faUser} /> */}
//                                 </div>
//                                 <input type="text" value={product_name} onChange={(e) => setProduct_name(e.target.value)} placeholder="Enter Name Product"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Price<span>*</span></label>
//                                 </div>
//                                 <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your Price"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Category<span>*</span></label>
//                                 </div>
//                                 <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category"/>
//                             </div>

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Description <span>*</span></label>
//                                 </div>
//                                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description"/>
//                             </div>
//                             <div className="boxInput">
//                             <div className="boxLabel">
//                                 <label htmlFor="">Image <span>*</span></label>
//                             </div>
//                                 <input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
//                             </div>


//                             {/* <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Image <span>*</span></label>
//                                 </div>
//                                 <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Image"/>
//                             </div> */}

//                             <div className="boxInput">
//                                 <div className="boxLabel">
//                                     <label htmlFor="">Available<span>*</span></label>
//                                 </div>
//                                 <input type="text" value={available} onChange={(e) => setAvailable(e.target.value)} placeholder="Enter Availability"/>
//                             </div>

//                             <button type='submit'>Validate</button>
//                         </form>

//                     </div>
//                 </div>

//                 <div className="boxRight">
//                     <div className="boxRightImg"></div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default ProductGest;