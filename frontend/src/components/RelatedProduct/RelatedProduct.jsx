import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='relatedproductS'>
        <h1>Related Product</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item, i)=>{
                return (<Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>)
            })}
        </div>
    </div>
  )
}

export default RelatedProduct