import React, {useEffect, useState} from 'react'
import './styling/productstyle.css'
import dummyProducts from './data/dummyProducts';
import { useNavigate, useParams } from 'react-router-dom';
const ProductDetails = ()  => {
    const {id} = useParams();

    const productId = parseInt(id, 10);
    
    const product = dummyProducts.find((product) => product.id === productId);
    const navigate = useNavigate();
    const back = () =>{
        navigate('/products');
    }
    if (!product) {
        return <p>Not found</p>
    }
    return (
        <div className='product_details'>
            <div className='detail_cont'>
                <h2>{product.title}</h2>
                <img src={product.img} alt={product.title} />
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <button onClick={()=> back()}>Back to Products</button>
                </div>
            </div>
        )
}

export default ProductDetails;