import React from 'react'
import './Reason.css'
import image1 from "../../assests/image1.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
import image4 from "../../assests/image4.jpg";
import nb from "../../assests/nb.png";
import adidas from "../../assests/adidas.png";
import nike from "../../assests/nike.png";
import tick from "../../assests/tick.png";



const Reasons = () => {
  return (
      <div className='Reasons' id='reason'>
      <div className='left-r'>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <div className='right-r'>
        <span>Some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={tick} />
            <span>OVER 140+  EXPERT COACH</span>
          </div>
          <div>
            <img src={tick} />
            <span>TRAINS SMARTER AND FASTER THAN</span>
          </div>
          <div>
            <img src={tick} />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} />
            <span>RELIABLE PARTNERS</span>
          </div>
          
        </div>
        <span style={ {color: 'var(--gray)', fontWeight : 'normal'}}>
            OUR PARTNERS
        </span>
        <div className='partners'>
          <img src={nb} alt='ab' />
          <img  src={adidas} alt='adidas'/>
          <img src={nike} alt='nike'/>
        </div>
      </div>
    </div>
  )
}

export default Reasons