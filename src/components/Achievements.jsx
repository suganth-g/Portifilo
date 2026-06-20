import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="section reveal">
            <div className="container">
                <div className="achievements-grid">
                    <div className="achievements-card glass-card">
                        <h2 className="section-title" style={{ marginBottom: '20px', textAlign: 'left' }}>Achievements</h2>
                        <ul className="achievement-list">
                            <li>
                                <strong>Instructor, BIT Campus:</strong> Mentored 50 first year students in Fundamentals of Web Development during a 15-day program, achieving 100% completion rate and positive feedback.
                            </li>
                            <li>
                                <strong>LeetCode:</strong> Solved 400+ problems in Data Structures and Algorithms.
                            </li>
                        </ul>
                    </div>
                    <div className="soft-skills-card glass-card reveal delay-1">
                        <h2 className="section-title" style={{ marginBottom: '20px', textAlign: 'left' }}>Soft Skills</h2>
                        <ul className="skills-list">
                            <li><strong>Collaboration:</strong> Worked effectively in team projects.</li>
                            <li><strong>Communication:</strong> Clear communication with team members and mentors.</li>
                            <li><strong>Problem Solving:</strong> Strong ability to analyze and solve coding problems.</li>
                            <li><strong>Time Management:</strong> Completed tasks within deadlines.</li>
                            <li><strong>Continuous Learning:</strong> Always learning new technologies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
