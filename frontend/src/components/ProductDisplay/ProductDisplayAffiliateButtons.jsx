import React, { useContext } from 'react'
import './ProductDisplay-luxury.css'
import { ShopContext } from '../../context/ShopContextAuth';

const ProductDisplayAffiliateButtons = (props) => {
    const { product } = props;
    const { addToCart, isAuthenticated, setShowLoginPrompt } = useContext(ShopContext);
    
    const handleAddToCart = () => {
        const success = addToCart(product.id);
        if (!success) {
            setShowLoginPrompt(true);
        }
    };

    const handleAffiliateClick = () => {
        if (product.affiliate_url) {
            window.open(product.affiliate_url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className='productdisplay-luxury'>
            <div className="productdisplay-luxury-left">
                <div className="productdisplay-luxury-image">
                    <img 
                        className='productdisplay-luxury-main-img' 
                        src={product.image} 
                        alt={product.name} 
                    />
                </div>
            </div>
            <div className="productdisplay-luxury-right">
                <h1>{product.name}</h1>
                
                <div className="productdisplay-luxury-prices">
                    <div className="productdisplay-luxury-price-new">${product.new_price}</div>
                    <div className="productdisplay-luxury-price-old">${product.old_price}</div>
                </div>

                <div className="productdisplay-luxury-actions">
                    {/* Add to Cart Button - requires authentication */}
                    <button 
                        className="productdisplay-luxury-add-cart" 
                        onClick={handleAddToCart}
                        disabled={!isAuthenticated}
                    >
                        {isAuthenticated ? 'Add to Cart' : 'Login to Add to Cart'}
                    </button>
                    
                    {/* Affiliate Link Button */}
                    <button 
                        className="productdisplay-luxury-affiliate-btn"
                        onClick={handleAffiliateClick}
                    >
                        Buy on Amazon
                    </button>
                    
                    {/* Alternative affiliate button */}
                    <button 
                        className="productdisplay-luxury-affiliate-btn secondary"
                        onClick={handleAffiliateClick}
                    >
                        View on Amazon
                    </button>
                </div>

                {/* Affiliate URL display */}
                <div className="productdisplay-affiliate-info">
                    <p>Affiliate Link: <a href={product.affiliate_url} target="_blank" rel="noopener noreferrer">{product.affiliate_url}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplayAffiliateButtons;
