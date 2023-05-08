import React from 'react'
import brackets from '../../Assets/braces-fill.png'
import './Skills.css';
// import mySkills from './MySkills';
import HTML from '../../Assets/html-1.svg'
import CSS from '../../Assets/css-3.svg'
import Javascript from '../../Assets/javascript-1.svg'
import ReactLogo from '../../Assets/react-2.svg'
import Tailwind from '../../Assets/tailwind-css-2.svg'

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

                    {/* {mySkills.map(({id, skillName, level, skillLogo}) => (
                    return (
                    <div className='skills-data'>
                      <div className='skills-blob'>
                        <img src={skillLogo} alt="skills image" />
                      </div>
                      <h3 className='skills-name'>{skillName}</h3>
                      <span className='skills-subtitle'>{level}</span>
                    </div>
                    )
                    ))} */}

                    {/* {mySkills.map((id, skillName, level) => {
                      return (
                        <div className='skills-data'>
                      <div className='skills-blob'>
                        {/* <img src={skillLogo} alt="skills image" /> */}
                      {/* </div>
                      <h3 className='skills-name'>{skillName}</h3>
                      <span className='skills-subtitle'>{level}</span>
                    </div>
                      )
                    })} */} 

                <div className='skills-data'>
                  <div className='skills-blob'>
                    <img src={HTML} alt="skills image" />
                  </div>
                  <h3 className='skills-name'>HTML</h3>
                  <span className='skills-subtitle'>Intermediate</span>
                </div>

                <div className='skills-data'>
                  <div className='skills-blob'>
                    <img src={CSS} alt="skills image" />
                  </div>
                  <h3 className='skills-name'>CSS</h3>
                  <span className='skills-subtitle'>Intermediate</span>
                </div>

                <div className='skills-data'>
                  <div className='skills-blob'>
                    <img src={Javascript} alt="skills image" />
                  </div>
                  <h3 className='skills-name'>Javascript</h3>
                  <span className='skills-subtitle'>Intermediate</span>
                </div>

                <div className='skills-data'>
                  <div className='skills-blob'>
                    <img src={ReactLogo} alt="skills image" />
                  </div>
                  <h3 className='skills-name'>React</h3>
                  <span className='skills-subtitle'>Intermediate</span>
                </div>

                <div className='skills-data'>
                  <div className='skills-blob'>
                    <img src={Tailwind} alt="skills image" />
                  </div>
                  <h3 className='skills-name'>Tailwind CSS</h3>
                  <span className='skills-subtitle'>Intermediate</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills