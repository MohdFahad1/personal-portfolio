import "./Navbar.css";
import React from "react";
import { useState } from "react";
export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar navbar"}>
    <a className="brand" href="#home">
        Fahad{" "}
      </a>
      <div className="nav-links">
        <a
          activeclass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="#about"
        >
          About
        </a>
        <a
          activeclass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="#projects"
        >
          Projects
        </a>
        <a
          activeclass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="#skills"
        >
          Skills
        </a>
      </div>
    </div>
  );
}
