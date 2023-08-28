import React from 'react'
import profile from '../Assets/Ellipse 1.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <>
    <nav>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="logo">colorpress</div>

    <div className='nav-input'>
    <input placeholder='Find Product' className='nv-input'/>

    <div className='nav-search'><i class="bi bi-search"></i></div>
    </div>
    <ul class="nav-links">
      <li><Link to="/">Home</Link></li>
      <li> <Link to="/productpage">Products</Link></li>
      <li><Link to="/myorder">My Orders</Link></li>
      <li><Link to="/cart">My Cart</Link></li>
      <li><Link to="/productpagereview"><img src={profile} style={{marginLeft:'30px',marginTop:'-10px'}} /></Link></li>
    </ul>
  </nav>
   </>
  )
}

export default Navbar