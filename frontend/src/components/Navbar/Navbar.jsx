import React, { useContext, useState } from 'react'
import './Navbar-luxury-direct.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'


const Navbar = () => {
  const[menu,setmenu] = useState("shop")
  const {getTotalItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt="" />
        <p>ALITRONIX</p>
      </div>
      <ul className='nav-menu'>
         <li className='shssh' onClick={()=>{setmenu("shop")}}><Link style={{ textDecoration:'none' }} to='/'>HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li className='shssh' onClick={()=>{setmenu("mens")}}><Link style={{ textDecoration:'none' }} to='/mens'>TOP 10</Link>{menu==="mens"?<hr/>:<></>}</li>
         <li className='shssh' onClick={()=>{setmenu("womens")}}><Link style={{ textDecoration:'none' }} to='/womens'>Catalog</Link>{menu==="womens"?<hr/>:<></>}</li>
         <li  className='shssh' onClick={()=>{setmenu("kids")}}><Link style={{ textDecoration:'none' }} to='/kids'>VIP Zone</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        
        
       <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div >
  )
}

export default Navbar 