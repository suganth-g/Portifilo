
const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <a href="#hero" className="logo-link">
                    <div className="logo-circle">S</div>
                </a>
                <nav className="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#contact">Contact</a>
                    <a
                        href="/Suganth G Resume  (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-outline"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
