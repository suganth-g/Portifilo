
const skills = [
    { icon: 'devicon-java-plain', label: 'Core Java' },
    { icon: 'devicon-javascript-plain', label: 'JavaScript' },
    { icon: 'devicon-typescript-plain', label: 'TypeScript' },
    { icon: 'devicon-react-original', label: 'React.js' },
    { icon: 'devicon-spring-plain', label: 'Spring Boot' },
    { icon: 'devicon-nodejs-plain', label: 'Node.js' },
    { icon: 'devicon-mongodb-plain', label: 'MongoDB' },
    { icon: 'devicon-mysql-plain', label: 'MySQL' },
    { icon: 'devicon-docker-plain', label: 'Docker' },
    { icon: 'devicon-git-plain', label: 'Git' },
    { icon: 'devicon-html5-plain', label: 'HTML & CSS' },
    { icon: 'devicon-express-original', label: 'Express.js' },
];

const Skills = () => {
    // Duplicate for seamless loop
    const doubled = [...skills, ...skills];

    return (
        <section id="skills" className="section reveal">
            <div className="container">
                <h2 className="section-title">
                    My <span className="highlight">Skills</span>
                </h2>
            </div>
            <div className="skills-slider">
                <div className="skills-track">
                    {doubled.map((skill, index) => (
                        <div key={index} className="skill glass-card">
                            <i className={`${skill.icon} colored`}></i>
                            <p>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
