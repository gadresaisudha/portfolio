import React from 'react';
import './MainInfo.css'
import { contact } from '../../../portfolio';
function MainInfo() {
  const {name,profession,email,phone,linkedIn,Github,resume} = contact;
  return (
<section id = 'about' className='maininfo'>
  <div>
  <h1> Hi, I am {name}</h1>
  </div>
  <div>
  <h2> A {profession}</h2>
  </div>
  <div>
    <p>
    I am a recent graduate with a Master's degree in Computer Science from the University of South Florida, Class of 2024. With a strong background in programming, cloud technologies, and Full Stack development, 
    I am actively seeking full-time opportunities to contribute and further develop my skills in software development and cloud computing.
    </p>
  </div>
  <div className='icon'> 
  <a href={Github} target="_blank" ><i class="fab fa-github"></i></a>
  <a href={linkedIn} target="_blank"><i class="fab fa-linkedin"></i></a>
  </div>
  <div className='btn-info'>
  <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
  </div>
  <div className='btn-info'>
  <a href={`mailto:${email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
        </a>
  </div>
  </section>
  
  );
}

export default MainInfo;