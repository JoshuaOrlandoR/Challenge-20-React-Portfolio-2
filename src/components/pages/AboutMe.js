import React from 'react';
import '../css/AboutMe.css';

function About() {
  return (
    <div className='about-container text-white'>
      <div className='about-header'>
        <img className='about-headshot' src={'https://cdn.midjourney.com/93b25d98-a77d-472f-a238-419f3f6fac03/grid_0.png'} alt='Headshot' />
      </div>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor enim. Nulla eget fermentum magna. Nam non sapien tincidunt, dignissim justo eget, lacinia orci. Suspendisse vitae efficitur augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget dolor vel arcu posuere consectetur. Morbi volutpat nibh id pharetra ullamcorper.</p>
        <p>Donec luctus sagittis ex, id efficitur est varius id. Fusce id placerat elit. Nulla facilisi. Suspendisse vestibulum, eros vitae ullamcorper eleifend, lectus sapien tincidunt enim, eu blandit tortor ex at justo. Donec eu diam sed ipsum consectetur finibus. Etiam fringilla mollis sem vel aliquet. Etiam elementum ante in nulla bibendum facilisis.</p>
        <p>👋🏼🌎👨🏻‍💻 PLACEHOLDER - Initially wanted to add a library to create a graphic to show levels of skills and technologies - but couldn't get it to work. Will continue to develop further on.</p>
      </div>
    </div>
  );
}

export default About;
