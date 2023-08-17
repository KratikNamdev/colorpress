import React from 'react'
import img from '../Assets/pngwing 1.png'
import img2 from '../Assets/Group 46.png'



function Footer() {
  return (
   <>
    <div className='footer'>
    <div className='footer-part1'>
    <h1>colorpress</h1>
    <p>
    Easy Returns: Free Replacement<br></br> or Full Refund
    </p>
    <img className='cardpay' src={img}/><br></br>
    <img src={img2}/>

    </div>
  <div className='foot-ul'>
  <div className='footer-part2'>
    <ul>
    Let us help<br/><br/><br/>

    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>

   

    </ul>

</div>
 <div className='footer-part2'>
 <ul>
    Let us help<br/><br/><br/>

    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>

   

    </ul>

</div>
 <div className='footer-part2'>
 <ul>
    Let us help<br/><br/><br/>

    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li><br/>
    <li><strong>My Account</strong></li>

   

    </ul>

</div>
  </div>

    </div>
   </>
  )
}

export default Footer