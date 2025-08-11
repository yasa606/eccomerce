import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './NewCollections-luxury.css'
import { ShopContext } from '../../context/ShopContext'

const NewCollections = () => {
  const { all_product } = useContext(ShopContext)
  
  // Get the latest products (last 5 items)
  const newCollectionProducts = all_product.slice(-5)

  return (
    <div className='new-collections-luxury' id="new-collections">
        <div className="luxury-container">
            <h1 className='new-collections-title-luxury'>NEW COLLECTIONS</h1>
            <p className='new-collections-subtitle'>Discover our latest products arrivals</p>
            <div className="luxury-divider-collections"></div>
            
            <div className="collections-luxury">
                {newCollectionProducts.map((item) => {
                    return (
                        <Link 
                            key={item.id} 
                            to={`/product/${item.id}`} 
                            className="collection-card-luxury floating-collection"
                            onClick={() => window.scrollTo(0,0)}
                        >
                            <div className="collection-badge-luxury">NEW</div>
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="collection-image-luxury"
                            />
                            <h3 className="collection-name-luxury">{item.name}</h3>
                            <div className="collection-price-luxury">
                                <span className="collection-old-price-luxury">${item.old_price}</span>
                                <span className="collection-new-price-luxury">${item.new_price}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default NewCollections
