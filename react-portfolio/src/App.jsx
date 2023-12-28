import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import AboutMe from './components/pages/aboutme/aboutme';
import Portfolio from './components/pages/portfolio/portfolio';
import Resume from './components/pages/resume/resume';
import Contact from './components/pages/contact/contact';
import Skills from './components/pages/skills/skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className='header-nav'>
          <Header />
          <Nav />
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
