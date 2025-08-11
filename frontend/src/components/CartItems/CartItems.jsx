import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removefromCart } = useContext(ShopContext)
    
    return (
        <div className="luxury-cart-items">
            {/* Cart Header */}
            <div className="luxury-cart-header-row">
                <p>Item</p>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            {/* Cart Items */}
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id} className="luxury-cart-item-row">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="luxury-cart-item-image"
                            />
                            <p className="luxury-cart-item-name">{product.name}</p>
                            <p className="luxury-cart-item-price">${product.new_price}</p>
                            <div className="luxury-quantity-btn">{cartItems[product.id]}</div>
                            <p className="luxury-cart-item-total">${product.new_price * cartItems[product.id]}</p>
                            <button 
                                className="luxury-remove-btn"
                                onClick={() => removefromCart(product.id)}
                            >
                                <img src={remove_icon} alt="Remove" />
                            </button>
                        </div>
                    )
                }
                return null
            })}

            {/* Cart Summary */}
            <div className="luxury-cart-summary">
                <div className="luxury-cart-total">
                    <h2>Order Summary</h2>
                    <div className="luxury-total-item">
                        <p>Subtotal</p>
                        <p className="amount">${getTotalCartAmount()}</p>
                    </div>
                    <div className="luxury-total-item">
                        <p>Shipping</p>
                        <p className="amount">Free</p>
                    </div>
                    <div className="luxury-total-item">
                        <p><strong>Total</strong></p>
                        <p className="amount"><strong>${getTotalCartAmount()}</strong></p>
                    </div>
                    <button className="luxury-checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>

                <div className="luxury-promo-section">
                    <h3>Promotional Code</h3>
                    <p>Have a promo code? Enter it below to receive exclusive discounts.</p>
                    <div className="luxury-promo-input">
                        <input 
                            type="text" 
                            placeholder="Enter promo code"
                        />
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
