import React from 'react'
import '../Assets/Styles/Footer.css'
import {  FaTag } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className='main'>
        <div className='footer-outter'>
            <div className='footer-inner'>
              <div className="footer-logo">
               Footer Logo
              </div>
              <div className="footer-qoute">
                "Love is composed of a single soul inhabiting two bodies"
              </div>
              <div className="divider">
                COLORS OF THE DAY
              </div>
              <div className="color-and-tag">
              <div><FaTag style={{color:'yellowgreen'}}/></div> 
              <div>Aqua Green</div>
              </div>
              <div className="color-and-tag">
                <div><FaTag style={{color:'purple'}}/></div> 
                <div>Aqua Green</div>
              </div> 
              <div className="divider">
                CONTACT
              </div>
              <div className="contact-info">
                <div><FiMessageSquare style={{color:'gold'}}/></div><div>ayobami_adetutu@gmail.com</div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer