const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('.icon');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    icon.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});
const reveals = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealObserver.observe(reveal);
});
const typingText = document.getElementById('typing-text');
const words = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if(!typingText) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}
setTimeout(typeEffect, 1000);

// 5. Project Modals
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalGithub = document.getElementById('modal-github');
const modalDemo = document.getElementById('modal-demo');

window.openModal = function(title, desc, tags, githubLink, demoLink) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    
    modalTags.innerHTML = '';
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    modalGithub.href = githubLink;
    modalDemo.href = demoLink;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

window.closeModal = function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// 6. Contact Form Handling
let submitted = false;
const contactForm = document.getElementById("contactForm");
const loadingScreen = document.getElementById("loading-screen");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        submitted = true;
        loadingScreen.style.display = "flex";
    });
}

document.querySelector("iframe[name='hidden_iframe']").onload = function () {
    if (submitted) {
        loadingScreen.style.display = "none";
        contactForm.reset();
        successMsg.style.display = "block";
        
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 5000);
        
        submitted = false;
    }
};

// 7. Background Canvas Animation
const canvas = document.getElementById("bg");
if (canvas) {
    const ctx = canvas.getContext("2d");

    let particles = [];
    let codes = [];
    let symbols = ["< >", "{ }", "</>", "JS", "CSS", "HTML", "TS", "React", "Node"];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = "rgba(56, 189, 248, 0.5)"; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class CodeSymbol {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.text = symbols[Math.floor(Math.random() * symbols.length)];
            this.speed = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) this.y = -20;
        }

        draw() {
            ctx.fillStyle = "rgba(129, 140, 248, 0.3)"; 
            ctx.font = "14px 'Inter', monospace";
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    function init() {
        particles = [];
        codes = [];
        
        const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const numCodes = Math.floor(numParticles / 4);

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        for (let i = 0; i < numCodes; i++) {
            codes.push(new CodeSymbol());
        }
    }

    let mouse = { x: null, y: null };

    window.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", function () {
        mouse.x = null;
        mouse.y = null;
    });

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = dx * dx + dy * dy;

                if (distance < 15000) {
                    ctx.strokeStyle = "rgba(56, 189, 248, 0.1)"; 
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function mouseGlow() {
        if (mouse.x && mouse.y) {
            let gradient = ctx.createRadialGradient(
                mouse.x, mouse.y, 10,
                mouse.x, mouse.y, 150
            );
            gradient.addColorStop(0, "rgba(56, 189, 248, 0.15)");
            gradient.addColorStop(1, "transparent");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        codes.forEach((c) => {
            c.update();
            c.draw();
        });

        connect();
        mouseGlow();

        requestAnimationFrame(animate);
    }

    init();
    animate();
}