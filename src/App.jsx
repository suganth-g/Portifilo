import { useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BackgroundCanvas />
      <Navbar />
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
