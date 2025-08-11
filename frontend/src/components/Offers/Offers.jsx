import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Offers-luxury.css'
import exclusive_img from '../Assets/1.jpg'

const Offers = () => {
  const navigate = useNavigate()

  return (
    <div className='offers-luxury'>
        <div className="offers-left-luxury">
            <h1 className='offers-title-luxury'>Exclusive</h1>
            <h1 className='offers-title-luxury'>Offers For You</h1>
            <p className='offers-subtitle-luxury'>ONLY ON BEST SELLERS PRODUCTS</p>
            <p className='offers-description-luxury'>
                Experience luxury at unbeatable prices with our exclusive collection 
                of premium products. Limited time offers on our most sought-after items.
            </p>
            <div className="offers-cta-luxury">
                <button className='btn-offers-luxury' onClick={() => navigate('/womens')}>Shop Now</button>
                <button className='btn-offers-luxury btn-offers-outline' onClick={() => navigate('/kids')}>View All</button>
            </div>
        </div>
        <div className="offers-right-luxury">
            <div className="offers-image-container-luxury floating-offers">
                <div className="offers-badge-luxury">EXCLUSIVE</div>
                <img src={exclusive_img} alt="Exclusive Offer" className='offers-image-luxury' />
                <div className="offers-stats-luxury">
                    <div className="stat-item-luxury">
                        <span className="stat-number-luxury">50%</span>
                        <span className="stat-label-luxury">OFF</span>
                    </div>
                    <div className="stat-item-luxury">
                        <span className="stat-number-luxury">24h</span>
                        <span className="stat-label-luxury">LEFT</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers
