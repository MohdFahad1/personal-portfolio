import { FaGithub, FaLinkedin } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
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
          <h1 className="typingEffect">
            <ReactTypingEffect
              text={[
                "A Front-End Developer",
                "An Aspiring MERN stack Developer"
              ]}
            />
          </h1>
          <div className="lead">
            <p>A keen and curious learner</p>
          </div>
          <div className="iconList">
            <a
              href="https://www.linkedin.com/in/mohd-fahad-254ba620a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icons" style={{fontSize:"3rem"}}/>
            </a>
            <a
              href="https://github.com/MohdFahad1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icons" style={{fontSize:"3rem"}}/>
            </a>
          </div>
          <a
            activeclass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            href="#about"
            className="more"
          >
            More About Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
