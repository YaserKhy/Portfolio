import Header from './Header.js';
import About from './About.js';
import Skills from './Skills.js';
//import Projects from './Projects.js'
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Contact/>
    </div>
  );
}

export default App;
