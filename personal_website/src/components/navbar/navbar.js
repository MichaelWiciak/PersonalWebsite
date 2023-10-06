import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <nav className="navbar"> 
        <img src={logo} alt="logo" className="logo" />
        <div className = "desktopMenu"> 
            <Link className="desktopMenuButton">Home</Link>
            <Link className="desktopMenuButton">About</Link>
            <Link className="desktopMenuButton">Portfolio</Link>
            <Link className="desktopMenuButton">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contact} alt="menu" className="desktopMenuImg" /> 
            Contact Me    
        </button>
    </nav>
   )
}

export default Navbar
