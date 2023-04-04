import React, { useState } from 'react';
import './css/Header.css';

const Header = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://cdn.midjourney.com/93b25d98-a77d-472f-a238-419f3f6fac03/grid_0.png',
    'https://cdn.midjourney.com/775b6457-1851-4c6b-8a56-9d3aab6daa5d/grid_0.png',
    'https://cdn.midjourney.com/2e81280c-9911-4b16-9746-eae80a15a7b9/grid_0.png',
  ];

  const nextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div className="header">
      <div className="hero-image" style={{ backgroundImage: `url(${images[imageIndex]})`}}>
        <div className="hero-text">
          <p className='headingText'>My Name is Joshua Orlando</p>
          <p className='headingText'>I strive to learn, create, and explore.</p>
          <p className="small text-warning placeholderWarning d-none d-md-block"> These images, and most of the content, are placeholders! This is a site that is built to be built upon, relavent material will be added in the future :D</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
