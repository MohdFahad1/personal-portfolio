import React from 'react'
import './Projects.css';
import { data } from './data';
import { FiGithub } from "react-icons/fi";
import { CgLink } from "react-icons/cg";


const Projects = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div id='projects'>
        {data.map(({ id, title, github, demo, logo, tech1, tech2, tech3, tech4, }) => {
          return (
            <div className='main-card' key={id}>
              <div className='card-info'>
                <h1>{title}</h1>
                <img src={logo} alt={title} />
              </div>
              <hr style={{marginTop:"1rem"}}/>
              <div className='card-tech'><p>Tech Used : {tech1}, {tech2}, {tech3}, {tech4}</p></div>
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