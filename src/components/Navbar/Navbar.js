import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      <ScrollLink className="brand" to="home" smooth={true} duration={500}>
        Fahad
      </ScrollLink>
      <div className="nav-links">
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
    </div>
  );
}