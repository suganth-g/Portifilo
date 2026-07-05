const express = require('express');
const router = express.Router();

// Mock database for projects
const projects = [
    {
        title: "Pay Flow",
        desc: "A seamless payment flow application.",
        tags: ['React', 'Node.js'],
        githubLink: "#",
        demoLink: "https://pm-payment.vercel.app/"
    },
    {
        title: "CampusOS",
        desc: "A comprehensive system designed to streamline campus operations, including student data management, course enrollments, and resource allocation. Features role-based access control and analytics dashboards.",
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
        githubLink: "https://github.com/suganth-g/Camps-os",
        demoLink: "https://camps-os.vercel.app"
    },
    {
        title: "AlgoVerse",
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
