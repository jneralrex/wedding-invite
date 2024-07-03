import React from 'react'
import '../Assets/Styles/Header.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                Logo
            </div>
            <div className="nav-items">
            <div className="gallery navBtn">
            <NavLink to='/gallery'>Gallery</NavLink>
            </div>
            <div className="registry navBtn">
                Wedding Registry
            </div>
            <div className="timeCounter navBtn">
                00:00:00
            </div>
            </div>
        </nav>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Header