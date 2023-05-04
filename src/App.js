import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
