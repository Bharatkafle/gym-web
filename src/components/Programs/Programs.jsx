import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import rightArrow from'../../assests/rightArrow.png'
const Programs = () => {
  return (
      <div className='Programs' id='programs'>
          <div className='programs-header'>
              <span className='stroke-text'>Explore our</span>
              <span>Programs</span>
              <span className='stroke-text'>to shape you</span>
          </div> 
          <div className='program-categories'>
              {programsData.map((program) => {
                 
                  return (
                    
                      <div className='category'>
                         
                          <span>{program.heading}</span><span>{program.details}</span>
                          <div className='join-now'>
                  <div className='Join-now'><span>join Now</span><img src={rightArrow } /> </div>
              </div>
                      </div>
                  
                  )
                 
                 
              })} 
             
          </div>
    </div>
  )
}

export default Programs