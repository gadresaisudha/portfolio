import React from 'react';
import './skills.css'
import { skills,certficates } from '../../../portfolio';
import uniqid from 'uniqid';

function Skills() {
    return (
        <section className='skills' id='skills'>
          <div className='section-title'>CERTIFICATIONS</div>
          <ul className='skills-list'>
            {certficates.map((certficate) => (
              <li key={uniqid()} className='certification-list-item'>
                <h1>{certficate.name}</h1>
              <p>{certficate.acquired}</p>
              <p> {certficate.validity}</p>
              </li>
            ))}
          </ul>
       
        <div className='section-title'>SKILLS</div>


          <ul className='skills-list'>
            {skills.map((skill) => (
              <li key={uniqid()} className='skills-list-item'>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )

}

export default Skills;