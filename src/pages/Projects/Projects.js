import React from 'react'
import './Projects.css';
import { data } from './data';
import { DiGithubBadge } from "react-icons/di";
import { CgLink } from "react-icons/cg";

const Projects = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Projects</h1>
    <div id='projects'>
      {data.map(({ id, title, github, demo, logo }) => {
        return (
          <div className='main-card'>
            <div>
              <div className='card-title'><h1>{title}</h1></div>
              <div className='card-image'><img src={logo} alt={title} key={id}/></div>
            </div>
            <div className='card-links'>
              <a href={github} target='_blank' rel="noreferrer">
                <DiGithubBadge />
              </a>
              <a href={demo} target='_blank' rel="noreferrer">
                <CgLink />
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