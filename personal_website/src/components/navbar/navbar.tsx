import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Michael Wiciak-logos_white.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
import { navItems, contactNavItem } from "../../data/navItems";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="LogoContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="desktopMenu">
        {navItems.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuButton"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            contactElement.scrollIntoView({
              block: "end",
              behavior: "smooth",
            });
            window.scrollBy(0, -50);
          }
        }}
      >
        <img src={contact} alt="menu" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="logo"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          activeClass="active"
          to={contactNavItem.id}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          {contactNavItem.label}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
