import { useState } from 'react';
import React from 'react';
import './Navigation.css';
import MainInfo from '../Info/MainInfo/MainInfo';
import Skills from '../Info/Skills/skills';
import Projects from '../Info/projects/projects';
function Navigation() {
 const [activeSection, setActiveSection] = useState('about');
/*  const handleNavClick =()=>setActiveSection(!activeSection)
  */
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
      <>
      
      <nav>
        <ul className='box-nav'>
        <li><a href="#about"  onClick={()=>handleNavClick('about')}className='nav-list-item'>About</a></li>
          <li><a href="#skills" onClick={()=>handleNavClick('skills')} className='nav-list-item'>Skills</a></li>
          <li><a href="#projects" onClick={()=>handleNavClick('projects')} className='nav-list-item'>Projects</a></li>
        </ul>
        </nav>
      
        <div className='info-sec'>
        {activeSection === 'about' && <MainInfo />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        </div>
        </>
  );
}

export default Navigation;