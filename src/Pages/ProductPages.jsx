import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Assets/material-symbols_search.png'
import img1 from '../Assets/Rectangle 122.png'


function ProductPages() {
  return (
    <>
    <Navbar/>
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

<div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

</div>
</div>

</div>

        <div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

</div>
</div>

</div>
       <div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

</div>
</div>

</div>
        </div>
        <br/>
        <br/>
      
        <div className='productpage-cards' id='c2'>

        <div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

</div>
</div>

</div>
       <div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

</div>
</div>

</div>
        <div className='new-card'>
<div className='new-card-img'>
<img src={img1}/>
</div>
<div className='new-card-detail'>
<p className='new-product-name'>Visiting Card</p>
<p className='new-star'><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill">

</i><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i></p>
<p className='newprise'>$ 400</p>
<div className='hov' id='h'>
<p>$400</p>
<button>Add To Cart</button>

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