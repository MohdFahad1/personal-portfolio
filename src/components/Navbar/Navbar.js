import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [icon, setIcon] = useState(<FaBars className="icon-transition" />);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setIcon(isMobile ? <FaBars className="icon-transition" /> : <CgClose className="icon-transition" />);
  };

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      <ScrollLink className="brand" to="home" smooth={true} duration={500}>
        {'<Fahad />'}
      </ScrollLink>
      <div className={isMobile ? "nav-links-mobile active" : "nav-links"}>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Skills
        </ScrollLink>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {icon}
      </button>
    </div>
  );
}
