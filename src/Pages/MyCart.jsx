import React from 'react'
import Navbar from '../Components/Navbar';
import NavCategory from '../Components/NavCategory';
import img from '../Assets/Rectangle 122.png'
import HomeCards from '../Components/HomeCards';
import Footer from '../Components/Footer';

function MyCart() {
  return (
   <>
     <Navbar/>
      <NavCategory/>
      <br/>
      <div className='container'>
      <h1>My Cart</h1>
      <div className='cart'>
      <div className='cart-item-left'>

      <div className='cart-itm'>

      <div className='cart-img'>
      <img src={img} />

      </div>
      <div className='cart-title'>
      <h6>Visitng card print</h6>
      <p>In Stokes</p>

      </div>

      <div className='cart-rate'>
      <p>Each</p>

      <h6>$60.00</h6>
    </div>


      <div className='cart-qty'>
      <p>Quantity</p>

         <h6>$60.00</h6>
      </div>
      <div className='cart-x'>
      <h6>Total</h6>

      <p>$60.00</p>

      </div>
      <div className='cart-rate'>
<p style={{marginLeft:'15px'}}>X</p>

</div>

      </div><br/>
      <div className='cart-itm'>

<div className='cart-img'>
<img src={img} />

</div>
<div className='cart-title'>
<h6>Visitng card print</h6>
<p>In Stokes</p>

</div>

<div className='cart-rate'>
<p>Each</p>

<h6>$60.00</h6>
</div>


<div className='cart-qty'>
<p>Quantity</p>

   <h6>$60.00</h6>
</div>
<div className='cart-rate'>
<h6>Total</h6>

<p>$60.00</p>

</div>
<div className='cart-x'>
<p style={{marginLeft:'15px'}}>X</p>

</div>

</div>
      </div>
      <div className='cart-item-right'>
      <div className='promo'>
      <p>Enter Promo Code</p>
      <input/><button>Submit</button>

      </div>
      <div className='line'>

      </div>

      <div className='billdetails'>
      <p>Enter Promo Code</p>
      <p>$60.00</p>


      </div>
      <div className='billdetails'>
      <p>Shipping cost</p>
      <p>$19.05</p>


      </div>
      <div className='billdetails'>
      <p>Estimated Sales Tax</p>
      <p>$0.00</p>


      </div>
      <div className='billdetails'>
      <p>Total</p>
      <p><strong>$60.00</strong></p>


      </div>
      <p className='p'>Final shipping amount will be calculated <br/>at checkout based on delivery method and destination</p>
<button className='checkoutbtn'>CHECKOUT</button>

</div>


      </div>
      

      </div>

      <HomeCards/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Footer/>
   </>
  )
}

export default MyCart