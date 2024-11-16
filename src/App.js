import Header from './Components/Header.js';
import About from './Components/About.js';
import Areas from './Components/interests_section/Areas.js';
import Skills from './Components/skills_section/Skills.js';
import Projects from './Components/projects_section/Projects.js'
import ProjectsArray from './Components/projects_section/ProjectsArray.js';
import Contact from './Components/contact_section/Contact.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [numCards, setNumCards] = useState(3)

  // called only once
  useEffect(() => {
    const checkDeviceWidth = () => { window.innerWidth < 450 ? setNumCards(2) : setNumCards(3);}
    checkDeviceWidth();
    window.addEventListener('resize', checkDeviceWidth) // whenever user resize screen , perform checkDeviceWidth
    return () => { window.removeEventListener('resize', checkDeviceWidth) }
  }, []);

  return (
    <div>
      {/* Header Component : Contains navbar and logo */}
      <Header />

      {/* About Component : Contains circle, name, and title */}
      <About />

      {/* Interests Component : Contains slider of fields and icons */}
      <Areas numCards={numCards} />
      
      {/* Skills Component : Contains grid of skills and icons */}
      <Skills/>
      
      {/* Projects Component : Contains slider of projects */}
      <Projects ProjectsArray={ProjectsArray} />

      {/* Projects Component : Contains slider of projects */}
      {/* <Projects ProjectsArray={ProjectsArray} /> */}
      
      {/* Contact Component : Contains grid of contact */}
      <Contact />
    </div>
  );
}

export default App;