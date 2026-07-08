import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectFilter from './ProjectFilter';
import ProjectWindow from './ProjectWindow';

// Fallback mock data to showcase the premium UI if the API doesn't have the rich format yet
const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    shortDescription: "A scalable e-commerce backend built with Spring Boot and React.",
    image: "https://images.unsplash.com/photo-1557821552-17105153ce67?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Spring Boot", "Java", "React", "Tailwind", "MySQL", "Docker", "JWT", "Redis"],
    categories: ["Full Stack", "Java", "Spring Boot", "React"],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      overview: "Developed a fully functional microservices architecture for an e-commerce platform.",
      features: [
        "User authentication and authorization with JWT",
        "Product catalog with Redis caching",
        "Order processing and payment gateway integration"
      ],
      challenges: "Handling distributed transactions and maintaining data consistency.",
      solutions: "Implemented the Saga pattern and eventual consistency.",
      role: "Lead Backend Developer",
      duration: "3 months",
      architecture: "Microservices",
      database: "MySQL & Redis",
      authentication: "JWT",
      deployment: "Docker & AWS"
    }
  },
  {
    id: 2,
    title: "AI Image Generator",
    shortDescription: "Generate images from text prompts using OpenAI's DALL-E model.",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e4958?q=80&w=1600&auto=format&fit=crop",
    techStack: ["React", "Next.js", "Tailwind", "OpenAI API"],
    categories: ["React", "AI"],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      overview: "An AI-powered web app allowing users to generate high-quality images from textual descriptions.",
      features: [
        "Real-time image generation",
        "Image history and gallery",
        "Download and share functionality"
      ],
      role: "Frontend Developer",
      duration: "1 month",
      architecture: "Serverless",
      database: "PostgreSQL",
      authentication: "NextAuth",
      deployment: "Vercel"
    }
  }
];

const FILTERS = ["All", "Full Stack", "Java", "Spring Boot", "React", "AI", "Open Source"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects] = useState(mockProjects);
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real scenario, you'd fetch projects here
  // useEffect(() => { ...fetchProjects() }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.categories?.includes(activeFilter));
  }, [projects, activeFilter]);

  const currentProject = filteredProjects[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < filteredProjects.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (hasNext) setCurrentIndex(prev => prev + 1);
  };

  return (
    <section className="relative min-h-screen bg-transparent py-24 overflow-hidden selection:bg-accent/30">
      
      {/* Global Background handles effects now */}

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Project</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ProjectFilter 
              filters={FILTERS} 
              activeFilter={activeFilter} 
              onFilterChange={(f) => {
                setActiveFilter(f);
                setCurrentIndex(0);
              }} 
            />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {currentProject ? (
            <ProjectWindow 
              key={currentProject.id}
              project={currentProject}
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
            />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-white/50"
            >
              No projects found for this category.
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProjectsSection;
