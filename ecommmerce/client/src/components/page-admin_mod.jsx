import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        // Fetch products from your API
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setEditedProduct({
            product_name: product.product_name,
            price: product.price,
            category: product.category,
            description: product.description,
            available: product.available,
        });
        console.log(editedProduct);
    };

    // const handleDeleteProduct = (productId) => {
    //     axios.delete(`http://localhost:8000/api/products/${productId}`)
    //         .then(response => {
    //             // Filter out the deleted product from the products array
    //             setProducts(products.filter(product => product.id !== productId));
    //         })
    //         .catch(error => {
    //             console.error('Error deleting product:', error);
    //         });
    // };
    const handleDeleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/admin-gest/${productId}`)
            .then(response => {
                // Filter out the deleted product from the products array
                setProducts(products.filter(product => product.id !== productId));
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };
    

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    };

    // const handleSaveChanges = () => {
    //     axios.put(`http://localhost:8000/api/products/${selectedProduct.id}`, editedProduct)
    //         .then(response => {
    //             console.log('Server response:', response.data); // Add this line

    //             // Update products array with edited product
    //             const updatedProducts = products.map(product =>
    //                 product.id === selectedProduct.id ? response.data.product : product
    //             );
    //             setProducts(updatedProducts);
    //             setSelectedProduct(null);
    //             setEditedProduct(null);
    //         })
    //         .catch(error => {
    //             console.error('Error updating product:', error);
    //         });
    // };
    const handleSaveChanges = (event) => {
        event.preventDefault();
        console.log(editedProduct);
        axios.put(`http://localhost:8000/api/admin-gest/${selectedProduct.id}`, editedProduct)
            .then(response => {
                console.log('Server response:', response.data);
    
                // Update products array with edited product
                const updatedProducts = products.map(product =>
                    product.id === selectedProduct.id ? response.data : product
                );
                setProducts(updatedProducts);
                setSelectedProduct(null);
                setEditedProduct(null);
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };
    
    return (
        <div>
            <h1>Product List</h1>
            {/* {console.log(products)}; */}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.product_name} - ${product.price}
                        <button onClick={() => handleProductSelect(product)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <div>
                    <h2>Edit Product</h2>
                    <form>
                        <div>
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="product_name"
                                value={editedProduct.product_name}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div>
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={editedProduct.price}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div>
                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                value={editedProduct.category}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                value={editedProduct.description}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div>
                            <label>Available</label>
                            <input
                                type="text"
                                name="available"
                                value={editedProduct.available}
                                onChange={handleEditChange}
                            />
                        </div>
                        <button onClick={handleSaveChanges}>Save Changes</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProductList;
