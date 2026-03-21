import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Michael Wiciak-logos_white.png";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";
import { navItems, contactNavItem } from "../../data/navItems";
import { LinkButton } from "../ui/Button";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderNavLink = (
    item: { id: string; label: string },
    isMobile = false,
  ) => {
    return (
      <NavLink
        to={item.id === "intro" ? "/" : `/${item.id}`}
        className={({ isActive }) =>
          `${isMobile ? "listItem" : "desktopMenuButton"} ${isActive ? "active" : ""}`
        }
        onClick={() => isMobile && setShowMenu(false)}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <nav className="navbar">
      <div className="LogoContainer">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="desktopMenu">
        {navItems.map((item) => renderNavLink(item))}
      </div>
      <LinkButton href="/contact">
        Contact Me
      </LinkButton>

      <button
        type="button"
        className="mobMenuButton"
        aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <img src={menu} alt="logo" className="mobMenu" />
      </button>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {navItems.map((item) => renderNavLink(item, true))}
        {renderNavLink(contactNavItem, true)}
      </div>
    </nav>
  );
};

export default Navbar;
