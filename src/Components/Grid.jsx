import React from 'react'
import img from '../Assets/Rectangle 153.png'
import img1 from '../Assets/Rectangle 154.png'
import img2 from '../Assets/Rectangle 156.png'
import img3 from '../Assets/Rectangle 155.png'
import img4 from '../Assets/Rectangle 157.png'
import img5 from '../Assets/Rectangle 158.png'
import img6 from '../Assets/Rectangle 159.png'








function Grid() {
  return (
    <>
    <div className='newGrid'>
    <div className='topnode'>
    <div className='top-left'>
    <div className='top-left-top'>
    <img src={img} />
    <img src={img1} />


    </div>
    <div className='top-left-bottom'>
    <img src={img2} />


</div>

    </div>
    <div className='top-right'>
    <img  src={img3}/>

</div>
    </div>
    <div className='bottomnode'>
    <img className='one' src={img4}/>
    <img src={img5}/>
    <img className='lst' src={img6}/>

      
      </div>

    </div>
      
    </>
  )
}

export default Grid