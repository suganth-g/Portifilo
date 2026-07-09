import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data ───────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Payment Site: Modern FinTech Application',
    shortDescription:
      'A production-quality FinTech application with modern design and payment capabilities.',
    image:
      'https://api.microlink.io?url=https://pm-payment.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    categories: ['Frontend', 'Next.js', 'React'],
    liveUrl: 'https://pm-payment.vercel.app',
    githubUrl: '#',
    details: {
      overview:
        'A comprehensive payment gateway interface built as a production-ready FinTech application. Features a sleek, modern UI with robust dashboard elements and interactive data visualizations.',
      features: [
        'Modern, responsive FinTech dashboard',
        'Next.js 14 App Router architecture',
        'Tailwind CSS for sleek styling',
        'Production-ready performance optimizations'
      ],
      challenges: 'Creating a highly performant and secure UI for financial transactions.',
      solutions:
        'Leveraged Next.js Server Components and optimized rendering for maximum speed and security.',
      role: 'Frontend Developer',
      duration: '1 month',
      architecture: 'Next.js App Router',
      database: 'N/A',
      authentication: 'JWT / NextAuth',
      deployment: 'Vercel',
    },
  },
  {
    id: 2,
    title: 'Campus Management System',
    shortDescription:
      'A centralized dashboard tracking 100+ staff members with role-based access control.',
    image:
      'https://api.microlink.io/?url=https://camps-os.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    techStack: ['Node.js', 'MongoDB', 'React', 'JWT', 'Tailwind'],
    categories: ['Full Stack', 'Node.js', 'React'],
    liveUrl: 'https://camps-os.vercel.app',
    githubUrl: 'https://github.com/suganth-g/Camps-os',
    details: {
      overview:
        'Developed a centralized dashboard tracking 100+ staff members, replacing manual processes and reducing data retrieval time by 60%.',
      features: [
        'Centralized dashboard for tracking 100+ staff members',
        'Replaced manual processes reducing data retrieval time by 60%',
        'JWT authentication with role-based access control',
        'Support for 3 user tiers (admin, staff, supervisor)',
      ],
      role: 'Full Stack Developer',
      duration: '1 month',
      architecture: 'Monolithic',
      database: 'MongoDB',
      authentication: 'JWT',
      deployment: 'Vercel',
    },
  },
  {
    id: 3,
    title: 'UniquePaths Algorithm Visualization Tool',
    shortDescription:
      'An interactive tool to visualize dynamic programming algorithms, specifically the UniquePaths problem on a grid.',
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    categories: ['React', 'Open Source'],
    liveUrl: '#',
    githubUrl: '#',
    details: {
      overview:
        'An educational visualization tool that animates the step-by-step execution of dynamic programming solutions for grid-traversal problems, helping students understand DP concepts intuitively.',
      features: [
        'Interactive grid size configuration',
        'Step-by-step animation of the DP table filling process',
        'Adjustable animation speed control',
        'Path highlighting showing the computed routes',
        'Comparison mode for brute-force vs DP approaches',
      ],
      role: 'Frontend Developer',
      duration: '3 weeks',
      architecture: 'Single Page Application',
      database: 'None',
      authentication: 'None',
      deployment: 'GitHub Pages',
    },
  },
];

const FILTERS = ['All', 'Full Stack', 'Java', 'Spring Boot', 'React', 'Open Source'];

// ─── Sub-components ──────────────────────────────────────────────────────────

const TechBadge = ({ tech }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '4px 12px',
      fontSize: '0.78rem',
      fontWeight: 600,
      background: 'rgba(59,130,246,0.1)',
      border: '1px solid rgba(59,130,246,0.25)',
      borderRadius: '999px',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: 6,
    }}
  >
    {tech}
  </span>
);

const WindowHeader = ({ title }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      background: 'rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '24px 24px 0 0',
    }}
  >
    <div style={{ display: 'flex', gap: 8 }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
    </div>
    <div style={{ flex: 1, textAlign: 'center' }}>
      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
        {title}
      </span>
    </div>
    <div style={{ width: 52 }} />
  </div>
);

const ProjectImage = ({ src, alt }) => (
  <div
    style={{
      position: 'relative',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      background: '#0d0d0d',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
      aspectRatio: '16/9',
    }}
    className="project-img-wrapper"
  >
    {/* Browser mock bar */}
    <div
      style={{
        height: 28,
        background: 'rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: 6,
      }}
    >
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      <div
        style={{
          flex: 1,
          maxWidth: 200,
          margin: '0 auto',
          height: 14,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 7,
        }}
      />
    </div>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: '100%', height: 'calc(100% - 28px)', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
      className="project-img"
    />
  </div>
);

const ExpandableSection = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 16, marginBottom: 4 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer',
          padding: '12px 0',
          textAlign: 'left',
        }}
      >
        {title}
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.93rem', lineHeight: 1.75, paddingTop: 8 }}>
          {children}
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => {
  if (!value) return null;
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 12, marginBottom: 12 }}>
      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>{value}</div>
    </div>
  );
};

// ─── Main Projects Section ────────────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.categories?.includes(activeFilter));
  }, [activeFilter]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' && currentIndex < filtered.length - 1) setCurrentIndex((i) => i + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) setCurrentIndex((i) => i - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, filtered.length]);

  const project = filtered[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < filtered.length - 1;

  return (
    <section id="projects" className="section reveal" style={{ background: 'transparent', position: 'relative' }}>
      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', top: 80, left: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: 80, right: '15%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.10), transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

      <div className="container">
        <h2 className="section-title">
          <span className="highlight">Project</span>
        </h2>

        {/* Filter pills */}
        <div className="filter-container">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setCurrentIndex(0);
              }}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: 'Outfit, sans-serif',
                border: activeFilter === f ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.1)',
                background: activeFilter === f ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                color: activeFilter === f ? '#3B82F6' : 'rgba(255,255,255,0.6)',
                boxShadow: activeFilter === f ? '0 0 15px rgba(59,130,246,0.25)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Desktop Window */}
        <AnimatePresence mode="wait">
          {project ? (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                maxWidth: 1100,
                margin: '0 auto',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.06)',
                overflow: 'hidden',
              }}
            >
              <WindowHeader title={project.title} />

              <div className="project-modal-content">
                {/* Project header */}
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: 12, letterSpacing: '-0.03em' }}>
                    {project.title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 650, margin: '0 auto 20px' }}>
                    {project.shortDescription}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                    {project.techStack.map((t) => <TechBadge key={t} tech={t} />)}
                  </div>
                </div>

                {/* Body: screenshot + sidebar */}
                <div className="project-body-grid">
                  {/* Left */}
                  <div>
                    <ProjectImage src={project.image} alt={project.title} />

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                          🌐 Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                          💻 GitHub Repository
                        </a>
                      )}
                    </div>

                    {/* Expandable sections */}
                    <div style={{ marginTop: 36 }}>
                      <ExpandableSection title="Overview" defaultOpen>
                        {project.details.overview}
                      </ExpandableSection>
                      {project.details.features && (
                        <ExpandableSection title="Key Features">
                          <ul style={{ paddingLeft: 20 }}>
                            {project.details.features.map((f, i) => <li key={i} style={{ marginBottom: 8 }}>{f}</li>)}
                          </ul>
                        </ExpandableSection>
                      )}
                      {project.details.challenges && (
                        <ExpandableSection title="Challenges & Solutions">
                          <p><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Challenge:</strong> {project.details.challenges}</p>
                          <p style={{ marginTop: 10 }}><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Solution:</strong> {project.details.solutions}</p>
                        </ExpandableSection>
                      )}
                    </div>
                  </div>

                  {/* Right sidebar */}
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 16,
                      padding: '24px 20px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 20, color: 'rgba(255,255,255,0.9)' }}>
                      Project Details
                    </h3>
                    <DetailRow label="Role" value={project.details.role} />
                    <DetailRow label="Duration" value={project.details.duration} />
                    <DetailRow label="Architecture" value={project.details.architecture} />
                    <DetailRow label="Database" value={project.details.database} />
                    <DetailRow label="Authentication" value={project.details.authentication} />
                    <DetailRow label="Deployment" value={project.details.deployment} />
                  </div>
                </div>

                {/* Navigation */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginTop: 40,
                    paddingTop: 24,
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <button
                    onClick={() => hasPrev && setCurrentIndex((i) => i - 1)}
                    className={hasPrev ? 'btn-secondary' : ''}
                    style={!hasPrev ? { opacity: 0.3, cursor: 'not-allowed', padding: '10px 20px', background: 'none', border: 'none', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 600 } : {}}
                  >
                    ← Previous
                  </button>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    {currentIndex + 1} / {filtered.length} &nbsp;·&nbsp; ← → arrow keys
                  </span>
                  <button
                    onClick={() => hasNext && setCurrentIndex((i) => i + 1)}
                    className={hasNext ? 'btn-primary' : ''}
                    style={!hasNext ? { opacity: 0.3, cursor: 'not-allowed', padding: '10px 20px', background: 'none', border: 'none', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 600 } : {}}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', paddingTop: 60 }}
            >
              No projects found for this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .project-img-wrapper:hover .project-img { transform: scale(1.04); }
      `}</style>
    </section>
  );
};

export default Projects;
