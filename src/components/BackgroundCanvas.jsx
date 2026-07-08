import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stars = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2
}));

const BackgroundCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#050816]">

      {/* 1. Base Grid Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Floating Aurora / Mesh Gradients (Glassmorphism style) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0, -100, 67],
            y: [0, 50, 100, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)', filter: 'blur(120px)' }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, -50, -100, -50, 0],
            scale: [1, 0.8, 1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.8) 0%, transparent 70%)', filter: 'blur(150px)' }}
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 50, 0],
            y: [0, 100, 0, -100, 0],
            scale: [1, 1.1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8) 0%, transparent 70%)', filter: 'blur(130px)' }}
        />
      </div>

      {/* 3. Star Field / Particles */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: '0 0 10px 2px rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>

      {/* 4. Mouse Follow Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* 5. Noise Texture Overlay to add premium feel and reduce banding */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default BackgroundCanvas;
