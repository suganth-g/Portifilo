import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <header className="navbar">
            <div className="container">
                <a href="#hero" className="logo-link">
                    <div className="logo-circle">S</div>
                </a>
                <nav className="nav-links">
                    <a href="#about" className="hover-target">About</a>
                    <a href="#skills" className="hover-target">Skills</a>
                    <a href="#projects" className="hover-target">Projects</a>
                    <a href="#achievements" className="hover-target">Achievements</a>
                    <a href="Suganth G Resume  (1).pdf" target="_blank" rel="noopener noreferrer" className="btn-primary-outline hover-target">Resume</a>
                    <button id="theme-toggle" className="theme-btn hover-target" aria-label="Toggle Dark/Light Mode" onClick={toggleTheme}>
                        <span className="icon">{theme === 'light' ? '🌙' : '☀️'}</span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
