import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let codes = [];
        let symbols = ["< >", "{ }", "</>", "JS", "CSS", "HTML", "TS", "React", "Node"];
        let animationFrameId;

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

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

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

            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="bg" ref={canvasRef}></canvas>;
};

export default BackgroundCanvas;
