import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import img from '../Assets/Rectangle 303.png'
import tick from '../Assets/Check icon.png'
import star from '../Assets/star.png'
import profile from '../Assets/profile.png'
import like from '../Assets/helpfull-btn.png'

function ProductPageDetails() {
  
        const [activeTab, setActiveTab] = useState(1);
      
        const handleTabChange = (tabIndex) => {
          setActiveTab(tabIndex);
        };

  return (
    <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <div className='ProductPageDetails'>
        <div className='productimgs'>
        <img src={img}/>

        </div>
        <div className='productdetails'>
        <p>Availability: Only 2 in Stock</p>
        <h1>Standy</h1>
        <p style={{color: 'gold'}}><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>

        <ul>
        <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
        <li>Hands-free Voice Control, Always Ready</li>
        <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
        <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
    
        </ul>
        <p>Size</p>
        <hr></hr>
        <button>106 cm (42)</button>
        <button>106 cm (42)</button>
        <button>106 cm (42)</button>
        <br></br>
        <br></br>

        <button>106 cm (42)</button>
        <button>106 cm (42)</button>
        <button>106 cm (42)</button>
        <hr></hr>
        <p>USD(incl. of all taxes)</p>
        <h2>$600.72</h2>
      <button className='buynow'>Buy Now</button><button className='addtocart'>Add To Cart</button>
 

</div>

        </div>

<>
<br/>
<br/>
<br/>
<div className="tab-container">
      <div className="tabs">
        <button
          className={activeTab === 1 ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabChange(1)}
        >
          Description
        </button>
        <button
          className={activeTab === 2 ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabChange(2)}
        >
         Reviews
        </button>
       
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p>
        
        
        <h1>Product Description</h1>
        <p className='tab-p1'>When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge</p>
        
        <h1>Benefits</h1>

        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>
        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>
        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>
        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>
        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>
        <p><img src={tick}/>Durable leather is easily cleanable so you can keep your look fresh.</p>

        </p>}
        {activeTab === 2 && <p className='tb2'>
            <h1>
            Customers Feedback
            </h1>

            <div className='reviews'>
            <div className='ratings'>
           <h1> 4.8</h1>
           <img src={star}/>.
           <p>Product Rating</p>

            </div>
            <div className='bars'>

            </div>


            </div>

            <h1>Reviews</h1>
            <div className='review'>
            <div className='profile'>
            <img src={profile}/>

            </div>
            <div className='userreview'>
            <p style={{ fontWeight:'500',fontSize:'18px'}}>Nicolas cage</p>
            <img src={star}/>
            <p  style={{ fontWeight:'400',fontSize:'15px'}}>Greate Product</p>
            <p style={{ fontWeight:'400',fontSize:'15px',color:'#667085'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            <img src={like}/>
            </div>
         

            </div>

            <p style={{color:'#ff066e', textAlign:'center',fontWeight:'500'}}>View All Reviews</p>

            <br/>
            <h1>
            Write a Review
            </h1>
            <p>What is it like to Product?</p>
            <img className='star' src={star}/>
            <p>Review Title</p>
            <input className='ipt' placeholder='Great Products'/>
            <p>Review Content</p>
            <textarea placeholder='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.'></textarea>
           <br/> <button className='sbtbtn'>Submit</button>

        </p>
        
        
        
        }
        
      </div>
    </div>

    
  
</>




        
    </>
  )
}

export default ProductPageDetails