import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import tick from '../../assests/tick.png'

const Plans = () => {
  return (
      <div className='Plans-container'>
          <div className='blur plans-blur-1'></div>
          <div className='blur plans-blur-2'></div>
          <div className='programs-header' style={{gap: '2rem'}}>
              <span className='stroke-text'>READY TO START</span>
              <span>YOUR JOURNEY</span>
              <span className='stroke-text'>NOW WITHUS</span>
          </div> 
          <div className='plans'>
              {plansData.map((plan, i) => {
                  return(
                      <div className='plan' key={i}>
                          <span>{plan.name }</span>
                          <span> ${plan.price}</span> 
                          <div className='features'>
                              {
                                  plan.features.map((feature, i) => {
                                      return (
                                          <div className='feature'>
                                              <img src={tick} alt="tick" />
                                              <span key={i}>{feature }</span>

                                          </div>
                                      )
                                  })
                              }
                          </div>

                          <div>
                              <span>See more benefits -></span>
                              <button className='btn'>Join now</button>
                          </div>
                          
                      </div>

                      
                      

                          
                  )
                  
            

              })}
            
            
          </div>
    </div>
  )
}

export default Plans