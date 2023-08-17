import React from 'react'
import img1 from '../Assets/Rectangle 153.png'
import img2 from '../Assets/Rectangle 154.png'
import img3 from '../Assets/Rectangle 155.png'
import img4 from '../Assets/Rectangle 156.png'
import img5 from '../Assets/Rectangle 157.png'
import img6 from '../Assets/Rectangle 158.png'
import img7 from '../Assets/Rectangle 159.png'


function Grid() {
  return (
    <>
        <div className='grid'>

        <div className='part-one'>
        <div className='part1'>
       <div className='coldiv'>
       <div className='pt1'>
        <img src={img1}/>

        </div>
        <div className='pt1'>
        <img src={img2}/>

        </div>
       </div>
       <br/>
       <div className='coldiv2'>

       <img src={img4}/>

       </div>

        </div>
        <div className='part2'>
         <div className='coldiv2'>

       <img className='img3' src={img3}/>

       </div>
            
            </div>

        </div><br/>
        <div className='part-two'>
   <div className='prt'>
   <div className='pt2'>
<img src={img5}/>
        </div>
        <div className='pt3'>
<img src={img6}/>
        </div>
        <div className='pt4'>
<img src={img7}/>
        </div>
   </div>

        </div>

        </div>
    </>
  )
}

export default Grid