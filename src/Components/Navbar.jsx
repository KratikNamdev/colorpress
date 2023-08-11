import React from 'react'
import profile from '../Assets/Ellipse 1.png'

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
      <li><a href="#">Corporate pricing</a></li>
      <li><a href="#">Design service</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Cart</a></li>
      <li><img src={profile} style={{marginLeft:'30px',marginTop:'-10px'}} /></li>
    </ul>
  </nav>
   </>
  )
}

export default Navbar