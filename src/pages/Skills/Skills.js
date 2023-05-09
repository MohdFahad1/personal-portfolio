import React from 'react'
import brackets from '../../Assets/braces-fill.png'
import './Skills.css';
import { data } from './data.js';
const Skills = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <div id='skills'>
        <div className='skills-para'>
          <p>I have learned a lot of skills as a frontend developer and I am always learning something new to add a new skill to the list
          </p>
        </div>
        <div>
          <div className='skills-container'>
            <div className='skills-content'>
              <h3 className='skills-title'>
                <img src={brackets} alt="brackets" /> FrontEnd Developer
              </h3>
              <div className='skills-info'>
                {data.map(({id, skillName, level, skillLogo}) => {
                  return (
                    <div className='skills-data'>
                      <div className='skills-blob'>
                        <img src={skillLogo} alt={skillName} key={id} />
                      </div>
                      <h3 className='skills-name'>{skillName}</h3>
                      <span className='skills-subtitle'>{level}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills