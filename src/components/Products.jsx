import React, { useState } from 'react';
import dummyProducts from './data/dummyProducts';
import ProductDetails from './ProductDetail';
import './styling/productstyle.css'
import { useNavigate , Link} from 'react-router-dom';

const Products =() =>{

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    const navigate = useNavigate();
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        navigate(`/products/${product.id}`)

    }

    // const handleCloseDetails = () => {
    //     setSelectedProduct(null);
    // }
    const addToCart = (product) => {
        setCart([...cart, product]);
    };


    return (
        <div className="products">
            <div className="product-list">
            <h2>All Products</h2>
            <ul>
            {dummyProducts.map((product) => (

                <div key={product.id} className='product' >
                    <Link to={`/products/${product.id}`}>
                        <div className='product_overview'onClick={() => handleProductClick(product)}>
                        <img src={product.image} alt ={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        
                        </div> 
                    </Link>
                    
                    
                    <div className='addBtn'>       
                        <button onClick={()=> addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
            </ul>
        </div>
        {selectedProduct && ( 
            <ProductDetails product={selectedProduct} />
        )}
        {/* <div className="cart">
            <h2>Cart</h2>
            <ul>
            {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
            ))}
            </ul>
        </div>   */}
        </div>
        
    )
}

export default Products