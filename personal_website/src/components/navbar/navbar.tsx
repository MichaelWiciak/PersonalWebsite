import { useState } from "react";
import logo from "../../assets/Michael Wiciak-logos_white.png";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";
import { navItems, contactNavItem } from "../../data/navItems";
import { LinkButton } from "../ui/Button";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `hidden md:inline-block mx-4 cursor-pointer transition-all duration-300 ${
      isActive
        ? "text-accent border-b-4 border-accent pb-2"
        : "text-text-primary hover:text-accent hover:border-b-4 hover:border-accent hover:pb-2"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-12 my-1 rounded-lg transition-colors duration-200 ${
      isActive ? "text-accent font-semibold" : "text-text-primary hover:text-accent"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-lg border-b border-white/10 h-20 w-full px-6 md:px-8 flex items-center justify-between">
      <NavLink to="/">
        <img
          src={logo}
          alt="Michael Wiciak Logo"
          className="w-16 h-auto object-cover logo-spin"
          loading="eager"
          decoding="async"
        />
      </NavLink>

      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id === "intro" ? "/" : `/${item.id}`}
            className={navLinkClass}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:block">
        <LinkButton href="/contact" external={false}>
          Contact Me
        </LinkButton>
      </div>

      <button
        type="button"
        className="md:hidden bg-transparent border-none cursor-pointer p-2"
        aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <img src={menu} alt="Menu" className="w-8 h-8 object-cover" loading="lazy" decoding="async" />
      </button>

      {showMenu && (
        <div className="absolute top-16 right-6 z-40 flex flex-col p-2 h-fit min-w-[15rem] bg-background/95 backdrop-blur-md rounded-xl md:hidden border border-white/10">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.id === "intro" ? "/" : `/${item.id}`}
              className={mobileNavLinkClass}
              onClick={() => setShowMenu(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to={`/${contactNavItem.id}`}
            className={mobileNavLinkClass}
            onClick={() => setShowMenu(false)}
          >
            {contactNavItem.label}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
