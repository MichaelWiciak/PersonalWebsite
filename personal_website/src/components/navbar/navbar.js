import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar"> 
            <img src={logo} alt="logo" className="logo" />
            <div className = "desktopMenu"> 
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuButton">Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuButton">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuButton">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contact} alt="menu" className="desktopMenuImg" /> 
                Contact Me    
            </button>

            <img src={menu} alt="logo" className="mobMenu" />
            <div className = "navMenuMenu" style={{display: showMenu? 'flex:': 'none'}}> 
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
                <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
            </div>
        </nav>
   )
}

export default Navbar
