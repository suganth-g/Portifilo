import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const words = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

    useEffect(() => {
        let timer = setTimeout(() => {
            handleType();
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed, loopNum]);

    const handleType = () => {
        const i = loopNum % words.length;
        const fullText = words[i];

        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

        setTypingSpeed(isDeleting ? 50 : 100);

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(500);
        }
    };

    return (
        <section id="hero" className="section reveal">
            <div className="container hero-container">
                <div className="hero-content glass-card">
                    <p className="greeting">Hi, I'm <span className="highlight">Suganth G</span></p>
                    
                    <h1 className="hero-title">
                        I am a <br/>
                        <span id="typing-text" className="highlight">{text}</span><span className="typing-cursor">|</span>
                    </h1>
                    
                    <p className="hero-description">
                        I'm a passionate developer who enjoys building modern web applications. I love working with technologies like React, Node.js, and MongoDB. I focus on writing clean code, solving real-world problems, and continuously learning new technologies in web development and cloud computing.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary hover-target">Let's Connect</a>
                        <a href="#projects" className="btn-secondary hover-target">View Work</a>
                    </div>
                </div>
                <div className="hero-image glass-card reveal">
                    <img src="/Screenshot 2026-03-16 105228.png" alt="Suganth G" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
