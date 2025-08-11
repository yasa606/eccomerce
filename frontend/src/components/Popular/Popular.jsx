import React, { useContext } from 'react'
import './Popular-luxury.css'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'

const Popular = () => {
  const { all_product } = useContext(ShopContext)
  
  // Filter for women's products
  const womenProducts = all_product.filter(product => product.category === "womens")
  
  return (
    <div className='popular'>
        <h1>POPULAR PRODUCT</h1>
        <hr />
        <div className="popular-item">
          {womenProducts.slice(0, 5).map((item) => {
            return <Item key={item.id} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
          })}
        </div>
    </div>
  )
}

export default Popular
