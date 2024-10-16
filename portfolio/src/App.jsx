import React from 'react';
import './Index.css'
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Introduction title='Welcome to My Portfolio' description='Hi, I am Shreyash Dhekane. I am a passionate developer with a keen interest in building innovative solutions. 
          I enjoy coding, learning new technologies, and working on creative projects.'/>
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
