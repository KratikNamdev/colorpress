import React from 'react'
// import Navbar from '../Components/Navbar';
import NavCategory from '../Components/NavCategory';
import img from '../Assets/Rectangle 122.png'
import HomeCards from '../Components/HomeCards';
import Footer from '../Components/Footer';

function MyCart() {
  return (
   <>
     {/* <Navbar/> */}
      <NavCategory/>
      <br/>
      <div className='container'>
      <h1 className='mycart'>My Cart</h1>
      <div className='cart'>
      <div className='cart-item-left'>

     <div className='cart-itm'>
     <div className='cart-img'>
<img src={img}/>
     </div>
     <div className='cart-title'>
<h1>Visiting Card</h1>
<p>In Stocks</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'130px'}}>
<h1>Each</h1>
<p>$60.00</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'-50px'}} >
<h1>Quantity</h1>
<p>$60.00</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'10px'}} >
<h1>Total</h1>
<p>$60.00</p>
     </div>


     </div>

      <br/>
      <div className='cart-itm'>
     <div className='cart-img'>
<img src={img}/>
     </div>
     <div className='cart-title'>
<h1>Visiting Card</h1>
<p>In Stocks</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'130px'}}>
<h1>Each</h1>
<p>$60.00</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'-50px'}} >
<h1>Quantity</h1>
<p>$60.00</p>
     </div>
     <div className='cart-Each' style={{marginLeft:'10px'}} >
<h1>Total</h1>
<p>$60.00</p>
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
      <p className='ttbil'>Enter Promo Code</p>
      <p>$60.00</p>


      </div>
      <div className='billdetails'>
      <p className='ttbil'>Shipping cost</p>
      <p>$19.05</p>


      </div>
      <div className='billdetails'>
      <p className='ttbil'>Estimated Sales Tax</p>
      <p>$0.00</p>


      </div>
      <div className='billdetails'>
      <p className='ttbil'>Total</p>
      <p><strong>$60.00</strong></p>


      </div>
      <p className='p'>Final shipping amount will be calculated <br/>at checkout based on delivery method and destination</p>
<button className='checkoutbtn'>CHECKOUT</button>

</div>


      </div>
      

      </div>
<h1 className='justfor'>JUST FOR YOU</h1>
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