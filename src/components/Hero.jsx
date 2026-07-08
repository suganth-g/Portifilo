import { useState, useEffect } from 'react';

const words = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Java Developer'];

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const timer = setTimeout(() => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed, loopNum]);

    return (
        <section id="hero" className="section reveal">
            <div className="container hero-container">
                <div className="hero-content glass-card">
                    <p className="greeting">Hi, I'm <span className="highlight">Suganth G</span></p>
                    <h1 className="hero-title">
                        I am a <br />
                        <span className="highlight">{text}</span>
                        <span className="typing-cursor">|</span>
                    </h1>
                    <p className="hero-description">
                        I'm a passionate developer who enjoys building modern web applications. I love working with technologies like React, Spring Boot, and Node.js. I focus on writing clean code, solving real-world problems, and continuously learning.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">Let's Connect</a>
                        <a href="#projects" className="btn-secondary">View Work</a>
                    </div>
                </div>
                <div className="hero-image glass-card reveal delay-1">
                    <img src="/Screenshot 2026-03-16 105228.png" alt="Suganth G" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
