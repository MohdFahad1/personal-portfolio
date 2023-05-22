import React, { useEffect } from 'react'
import './Projects.css';
import { data } from './data';
import { FiGithub } from "react-icons/fi";
import { CgLink } from "react-icons/cg";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div id='projects'>
        {data.map(({ id, title, github, demo, logo, tech }) => {
          return (
            <div className='main-card' key={id} data-aos="fade-up" data-aos-duration="1000">
              <div className='card-info'>
                <h1>{title}</h1>
                <img src={logo} alt={title} />
              </div>
              <hr style={{marginTop:"1rem"}}/>
              <div className='card-tech'><p>Tech Used : {tech} </p></div>
              <hr style={{marginBottom:"1rem"}}/>
              
              <div className='card-links'>
                <a href={github} target='_blank' rel="noreferrer">
                  <FiGithub className='link-icon'/>
                </a>
                <a href={demo} target='_blank' rel="noreferrer">
                  <CgLink className='link-icon'/>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects