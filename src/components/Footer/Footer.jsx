import React from 'react'
import './Footer.css'
import Github from "../../assests/github.png"
import Instagram from "../../assests/instagram.png"
import LinkedIn from "../../assests/linkedin.png"
import Logo from "../../assests/lgo.png"

const Footer = () => {
  return (
      <div className='Footer-container'>
          <hr /> 
          <div className='footer'>
              <div className='social-links'>
              <img src={Github} /> 
              <img src={Instagram} /> 
              <img src={LinkedIn} />
              </div>
             
         
          <div className='logo-f'>
          <img src={Logo } />   
              </div>
      </div>
      

      <div className='blur blur-f'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer