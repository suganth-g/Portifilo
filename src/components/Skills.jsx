import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section reveal">
            <div className="container">
                <h2 className="section-title">My <span className="highlight">Skills</span></h2>
                <div className="skills-slider">
                    <div className="skills-track hover-target">
                        <div className="skill glass-card"><i className="devicon-java-plain colored"></i><p>Core Java</p></div>
                        <div className="skill glass-card"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
                        <div className="skill glass-card"><i className="devicon-typescript-plain colored"></i><p>TypeScript</p></div>
                        <div className="skill glass-card"><i className="devicon-react-original colored"></i><p>React.js</p></div>
                        <div className="skill glass-card"><i className="devicon-express-original colored"></i><p>Express.js</p></div>
                        <div className="skill glass-card"><i className="devicon-nodejs-plain colored"></i><p>Node.js</p></div>
                        <div className="skill glass-card"><i className="devicon-mongodb-plain colored"></i><p>MongoDB</p></div>
                        <div className="skill glass-card"><i className="devicon-git-plain colored"></i><p>Git & GitHub</p></div>
                        <div className="skill glass-card"><i className="devicon-html5-plain colored"></i><p>HTML & CSS</p></div>
                        <div className="skill glass-card"><i className="devicon-docker-plain colored"></i><p>Docker</p></div>
                        
                        {/* Duplicated for seamless infinite scroll */}
                        <div className="skill glass-card"><i className="devicon-java-plain colored"></i><p>Core Java</p></div>
                        <div className="skill glass-card"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
                        <div className="skill glass-card"><i className="devicon-typescript-plain colored"></i><p>TypeScript</p></div>
                        <div className="skill glass-card"><i className="devicon-react-original colored"></i><p>React.js</p></div>
                        <div className="skill glass-card"><i className="devicon-express-original colored"></i><p>Express.js</p></div>
                        <div className="skill glass-card"><i className="devicon-nodejs-plain colored"></i><p>Node.js</p></div>
                        <div className="skill glass-card"><i className="devicon-mongodb-plain colored"></i><p>MongoDB</p></div>
                        <div className="skill glass-card"><i className="devicon-git-plain colored"></i><p>Git & GitHub</p></div>
                        <div className="skill glass-card"><i className="devicon-html5-plain colored"></i><p>HTML & CSS</p></div>
                        <div className="skill glass-card"><i className="devicon-docker-plain colored"></i><p>Docker</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
