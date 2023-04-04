import React, { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/Resume';
import './css/App.css';
function App() {
  const [activeSection, setActiveSection] = useState('showcase'); // Set the initial active section to 'showcase'

  return (
    <div className='bg-page'>
      <Navigation setActiveSection={setActiveSection} />
      {activeSection === 'aboutme' && <AboutMe />}
      {activeSection === 'showcase' && <Showcase />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
