import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Link as ScrollLink } from "react-scroll";
import "./Home.css";


const Home = () => {

  return (
    <>
      <div id="home">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="container1">
          <div className="heading">
            <h1>
              Hi, I'm Mohd Fahad
              <br />
            </h1>
          </div>
          <div className="lead">
              <Typewriter
            options={{
              strings: ['A keen and curious learner.'],
              autoStart: true,
              loop: false,
              pauseFor: 999999999999999,
            }}
          />
          </div>
          <div className="iconList">
            <a
              href="https://www.linkedin.com/in/mohd-fahad-254ba620a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icons" style={{ fontSize: "3rem" }} />
            </a>
            <a
              href="https://github.com/MohdFahad1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icons" style={{ fontSize: "3rem" }} />
            </a>
          </div>
          <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="more"
        >
          More About Me
        </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Home;
