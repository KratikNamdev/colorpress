import React from 'react'
import img from '../Assets/Rectangle 140.png'
import img1 from '../Assets/Rectangle 141.png'
import img2 from '../Assets/Rectangle 142.png'
import img3 from '../Assets/Rectangle 143.png'


function TodayDeal() {
  return (
<>
    <div className='todaydeal'>

    <h1 style={{color: '#ffffff' , textAlign:'center'}}>Today's deal </h1>
<div className='scroll-container'>
<div className='cards-sets'>
   <div className='deal-card'>
    <img className='igt' src={img}/>
    <div className='detail'>
    <p>Visitng card print</p>
    <p style={{color: '#FF066E'}}>$45</p>

    </div>

    </div>
    <div className='deal-card'>
    <img className='igt' src={img1}/>
    <div className='detail'>
    <p>Visitng card print</p>
    <p style={{color: '#FF066E'}}>$45</p>

    </div>

    </div> 
    <div className='deal-card'>
    <img className='igt' src={img2}/>
    <div className='detail'>
    <p>Visitng card print</p>
    <p style={{color: '#FF066E'}}>$45</p>

    </div>

    </div>
     <div className='deal-card'>
    <img className='igt' src={img3}/>
    <div className='detail'>
    <p>Visitng card print</p>
    <p style={{color: '#FF066E'}}>$45</p>

    </div>

    </div>
   </div>
</div>
    </div>
</>
  )
}

export default TodayDeal



