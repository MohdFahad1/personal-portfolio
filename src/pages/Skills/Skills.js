import React, { useEffect, useState } from 'react';
import brackets from '../../Assets/braces-fill.png';
import './Skills.css';
import { data } from './data.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [isResponsiveMode, setIsResponsiveMode] = useState(false);

  useEffect(() => {
    Aos.init();

    const handleResize = () => {
      setIsResponsiveMode(window.innerWidth <= 600);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Skills</h1>
      <div id='skills'>
        <div className='skills-para'>
          <p
            data-aos={isResponsiveMode ? 'fade-up' : 'fade-right'}
            data-aos-duration='1000'
          >
            I have learned a lot of skills as a frontend developer and I am always learning something new to add a new skill to the list
          </p>
        </div>
        <div>
          <div className='skills-container'>
            <div className='skills-content'>
              <h3
                className='skills-title'
                data-aos={isResponsiveMode ? 'fade-up' : 'fade-left'}
                data-aos-duration='1200'
              >
                <img src={brackets} alt='brackets' /> FrontEnd Developer
              </h3>
              <div className='skills-info'>
                {data.map(({ id, skillName, level, skillLogo }) => {
                  return (
                    <div className='skills-data' key={id}>
                      <div className='skills-blob'>
                        <img src={skillLogo} alt={skillName} />
                      </div>
                      <h3 className='skills-name'>{skillName}</h3>
                      <span className='skills-subtitle'>{level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
