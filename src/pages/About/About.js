import React from "react";
import pic from "../../Assets/my-image.png";
import "./About.css";

export default function About() {
  return (
    <>
      <div id="about">
        <div className="row">
          <div className="my-image">
            <img src={pic} alt="Happy Coding" className="my-image"/>
          </div>
          <div className="information"data-aos="fade-up" data-aos-duration="1000">
            <h1>About Me</h1>
            <p>
              Hey, I'm Mohd Fahad. Currently in the pre final year of my
              undergraduate degree in Computer Science Engineering from Jamia 
              Hamdard University, New Delhi. I would describe myself as someone
              who is deeply fascinated by Technology and Innovation. I'm most
              passionate about Web Development and Competitive Programming. In
              my free time I explore other tech innovations like <br />Machine Learning, App
              development.
            </p>
            <a href="https://drive.google.com/file/d/1wcBi5kHezvdIpHOzCB6j8kBmGJNG8PlC/view?usp=sharing" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}
