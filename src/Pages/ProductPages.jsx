import React from 'react'
// import Navbar from '../Components/Navbar'
import img from '../Assets/material-symbols_search.png'
import img1 from '../Assets/Rectangle 122.png'


function ProductPages() {
  return (
    <>
    {/* <Navbar/> */}
        <div className='productpage'>

        <div className='productpage-list'>
        <h3>Products</h3>
  
        <ul className='pdl'>
        <div  className='scroll-container'>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
            <li className='lis'>Categories</li>
        </div>
        </ul>

        </div>
        <div className='productpage-item'>
        <h1>All Products</h1>
        <div className='filter'>
<div className='filterinput'>
<input placeholder='Search products...'/>
<img src={img}/>

</div>


<div class="dropdown">
    <select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
  <div class="dropdown">
    <select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
        </div>

        <div  className='scroll-container'>
        <div className='productpage-item'>
        <div className='productpage-cards'>

        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>




<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>

        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>




<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>
        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>




<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>

        
        </div>
      
      
        <div className='productpage-cards' id='c2'>

        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>
<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>

        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>




<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>
        <div className='pd-card'>
        <div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-details'>
<div className='pd-name'>
  <p className='pd-name-name'>Product name</p>
  <p className='pd-name-start'>STARTING AT</p>

</div>




<div className='pd-name'>
  <p className='rate-star'>
   <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i> 
 <p className='rate-no'>(297 Rating)</p> </p>
  <p className='rate-rate'>$ 400</p>

</div>

</div>
        </div>
        </div>




        </div>
        </div>

</div>

        </div>
    </>
  )
}

export default ProductPages