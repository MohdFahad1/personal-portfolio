import React from "react";
import "./Footer.css";
import { FaReact, FaHeart, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Get In Touch</h1>
      <p className="info">
        I'm currently looking for Internship in Software Development or in Web
        Development.! If you know of any positions available, or if you have any
        questions, or if you just want to say hi, please feel free to email me
        at,{" "}
        <a className="E_mail" href="mailto: fahadmohammad312@gmail.com">
          fahadmohammad312@gmail.com
        </a>
      </p>
      <p className="thanks">
        <FaCode /> with <FaHeart /> by <span>Mohd Fahad</span> using <FaReact />
      </p>
    </div>
  );
}
