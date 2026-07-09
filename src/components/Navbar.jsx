import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="container">
                <a href="#hero" className="logo-link">
                    <div className="logo-circle">S</div>
                </a>
                
                {/* Hamburger Icon */}
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#achievements" onClick={() => setIsOpen(false)}>Achievements</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <a
                        href="/Suganth G Resume  (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-outline"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
