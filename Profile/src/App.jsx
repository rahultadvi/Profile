import { Routes, Route } from 'react-router-dom';
import WorkExperience from './Pages/WorkExperience';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
  

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;