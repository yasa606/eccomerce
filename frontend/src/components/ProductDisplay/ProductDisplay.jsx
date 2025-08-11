
import React, { useContext } from 'react'
import './ProductDisplay-luxury.css'
import star_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    
    return (
        <div className='productdisplay-luxury'>
            <div className="productdisplay-luxury-left">
                <div className="productdisplay-luxury-img-list">
                   
                    
                </div>
                <div className="productdisplay-luxury-image">
                    <img className='productdisplay-luxury-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-luxury-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-luxury-rating">
                    <div className="stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                    </div>
                    <span className="reviews">(122 reviews)</span>
                </div>
                <div className="productdisplay-luxury-prices">
                    <div className="productdisplay-luxury-price-new">${product.new_price}</div>
                    <div className="productdisplay-luxury-price-old">${product.old_price}</div>
                    <div className="productdisplay-luxury-price-discount">-30%</div>
                </div>
                <div className="productdisplay-luxury-description">
                    <p>{product.description}</p>
                </div>
                <div className="productdisplay-luxury-size">
                   
                    <div className="productdisplay-luxury-sizes">
                        
                    </div>
                </div>
                <div className="productdisplay-luxury-actions">
                    <button className="productdisplay-luxury-add-cart" onClick={()=>{addToCart(product.id)}}>
                        Add to Cart
                    </button>
                    <button  className="productdisplay-luxury-wishlist"><a href={product.url}>Buy</a>
                        
                    </button>
                    
                </div>
                <div className="productdisplay-luxury-details">
                    
                    <p><strong>NEW</strong>  products</p>
                    <p><strong>Tags:</strong> Modern, Latest, Luxury</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
