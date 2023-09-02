import React from 'react'
// import Navbar from '../Components/Navbar'

function ProductPageReview() {
  return (
    <>
        {/* <Navbar/> */}
        <div className='product-review'>
        <p className='welcome'>Welcome! <span style={{color:"#ff066e"}}>Chaitany Goyal</span></p>



        <>
            <div className='product-review-section'>

                <div className='menu'>
<ul>
Manage My Account
<li>My Profile</li>
<li>Address Book</li>
<li>My Payment Options</li>

</ul>
<ul>
Manage My Account
<li>My Profile</li>
<li>Address Book</li>
<li>My Payment Options</li>

</ul>
<ul>
Manage My Account
<li>My Profile</li>
<li>Address Book</li>
<li>My Payment Options</li>

</ul>
                </div>
                <div className='review-form'>
                <p className='rfhead' >Edit Your Profile</p>
                <div className='review-form-input'>
                    <div className='int'>
                        <label>First Name</label>
                        <input />
                    </div>
                    <div className='int'>
                        <label>Last Name</label>
                        <input />
                    </div>
                </div>
                <br/>
                <div className='review-form-input'>
                    <div className='int'>
                        <label>Email</label>
                        <input />
                    </div>
                    <div className='int'>
                        <label>Address</label>
                        <input />
                    </div>
                </div>
                <div className='review-form-input'>
                    <div className='int1'>
                    <br/>
                        <label>Password Change</label>
                        <input />
                        <input />
                        <input />

                    </div>
                    
                </div>
                <br/>
                <div class="button-container">
    <button class="cncl">Cancel</button><br/>
    <button class="subt">Submit</button>
</div>





                </div>
            </div>
        </>


        </div>
    </>
  )
}

export default ProductPageReview