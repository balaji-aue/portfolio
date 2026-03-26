import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import Game from './pages/Game';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App dark-theme">
        <nav className="primary-nav">
          <div className="container nav-inner">
            <div className="brand">Balaji Palanisamy</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/education">Education</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/game">Game</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
