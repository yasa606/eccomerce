import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow.png' // Placeholder for arrow icon;

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        home <img src={arrow_icon} alt="" /> shop  <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

    </div>
  )
}

export default Breadcrums