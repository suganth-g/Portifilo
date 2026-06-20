const express = require('express');
const router = express.Router();

// Mock database for projects
const projects = [
    {
        title: "Stream",
        desc: "Real-Time Collaborative Video Platform. This project allows multiple users to join a room, share video/audio, and collaborate in real-time. Built with WebRTC, Socket.io, Node.js, and React.",
        tags: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Campus Management System",
        desc: "A comprehensive system designed to streamline campus operations, including student data management, course enrollments, and resource allocation. Features role-based access control and analytics dashboards.",
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "UniquePaths",
        desc: "An algorithmic visualization tool that helps students understand dynamic programming and pathfinding algorithms visually. Users can draw obstacles and watch the algorithm find the optimal path in real-time.",
        tags: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
        githubLink: "#",
        demoLink: "#"
    }
];

// GET all projects
router.get('/', (req, res) => {
    res.json(projects);
});

module.exports = router;
