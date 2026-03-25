  import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

// Contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Project from './contents/Project';
import Contact from './contents/Contact';
import Skills from './contents/skills';
import Certificate from './contents/Certificate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
