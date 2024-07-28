import React from 'react';
import { contact } from '../../portfolio';
import './contact.css'
function Contact() {
  const {name,profession,email,phone,linkedIn,Github} = contact;
  return (
  <div className='box box-contact'>
    <ul className='contact-decor '>
    <li><h1> {name}</h1></li>
    <li className='box box-contact-detail'>{profession}</li>
    <li className='box box-contact-detail'><a href={Github} target="_blank"><i class="fab fa-github"></i></a>
    <a href={linkedIn} target="_blank"><i class="fab fa-linkedin"></i></a></li>
    <li className='box box-contact-detail'>Resume</li>
    <li className='box box-contact-detail-info'>
      <div className='contact-decor'>Contact</div>
    <a href={`mailto:${email}`} className='box detail-info'><i class="fas fa-envelope"></i>Email</a>
    <a href={`tel:${phone}`} className='box detail-info'> <i class="fas fa-phone"></i>Phone</a>
    </li>
    </ul>
  </div>
    

  
  );
}

export default Contact;