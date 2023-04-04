import React, { useState, useEffect } from 'react';

function ButtonComponent(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(props.activeSection === props.sectionName);
  }, [props.activeSection, props.sectionName]);

  const handleClick = () => {
    setIsActive(true);
    props.onClick(props.sectionName);
  }

  return (
    <button 
      className={`btn btn-link nav-link ${isActive ? 'active' : ''}`}
      style={{color: isActive ? 'Pink' : 'white', backgroundColor: 'transparent', border: 'none', boxShadow: 'none'}}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default ButtonComponent;

// This code doesnt work exactly yet.. they wont go back to the default color when another button is rendered but i've tried so many things and nothing works 