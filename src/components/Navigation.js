import React from 'react';
import ButtonComponent from './ButtonComponent';

function Navigation(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' style={{position: 'sticky', top: 0, zIndex: 99}}>
      <div className='container-fluid justify-content-between'>
        <div className='navbar-brand text-white'>Joshua Orlando</div>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <ButtonComponent 
              text='Portfolio' 
              onClick={() => props.setActiveSection('showcase')}
              activeSection={props.activeSection}
              sectionName="showcase"
            />
          </li>
          <li className='nav-item'>
            <ButtonComponent 
              text='About Me' 
              onClick={() => props.setActiveSection('aboutme')}
              activeSection={props.activeSection}
              sectionName="aboutme"
            />
          </li>
          <li className='nav-item'>
            <ButtonComponent 
              text='Contact' 
              onClick={() => props.setActiveSection('contact')}
              activeSection={props.activeSection}
              sectionName="contact"
            />
          </li>
          <li className='nav-item'>
            <ButtonComponent 
              text='Resume' 
              onClick={() => props.setActiveSection('resume')}
              activeSection={props.activeSection}
              sectionName="resume"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
