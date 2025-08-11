import React, { useContext } from 'react'
import CartItems from '../components/CartItems/CartItems'
import { ShopContext } from '../context/ShopContext'
import './CSS/Cart-luxury.css'

function Cart() {
  const { getTotalCartAmount } = useContext(ShopContext)
  const cartAmount = getTotalCartAmount()

  return (
    <div className="luxury-cart-container">
      <div className="luxury-cart-wrapper">
        <div className="luxury-cart-header">
          <h1>Your Luxury Cart</h1>
          <p>Complete your premium shopping experience</p>
        </div>
        
        {cartAmount > 0 ? (
          <CartItems />
        ) : (
          <div className="luxury-empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Discover our premium collection and add items to your cart</p>
            <a href="/womens" className="luxury-continue-btn">
              Continue Shopping
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
