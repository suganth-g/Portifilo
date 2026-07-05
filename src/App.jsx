import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  useScrollReveal();

  return (
    <>
      <BackgroundCanvas />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
