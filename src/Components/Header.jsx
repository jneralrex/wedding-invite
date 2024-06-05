import React from 'react'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                Logo
            </div>
            <div className="nav-items">
            <div className="home navBtn">
                Home
            </div>
            <div className="gallery navBtn">
                Gallery
            </div>
            <div className="registry navBtn">
                Wedding Registry
            </div>
            <div className="timeCounter navBtn">
                00:00:00
            </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Header