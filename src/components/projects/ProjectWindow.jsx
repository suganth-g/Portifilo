import { motion } from 'framer-motion';
import WindowHeader from './WindowHeader';
import TechBadge from './TechBadge';
import ProjectImage from './ProjectImage';
import ProjectButtons from './ProjectButtons';
import ExpandableSection from './ExpandableSection';
import ProjectNavigation from './ProjectNavigation';

const ProjectWindow = ({ project, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto rounded-[24px] border border-white/20 bg-dark/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <WindowHeader title={project.title} />
      
      <div className="p-6 md:p-10 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        
        {/* Top Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {project.techStack.map(tech => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Center Section (Left 2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <ProjectImage src={project.image} alt={project.title} />
            
            <ProjectButtons 
              liveUrl={project.liveUrl} 
              githubUrl={project.githubUrl} 
            />

            <div className="mt-12 space-y-2">
              <ExpandableSection title="Overview" defaultOpen={true}>
                {project.details.overview}
              </ExpandableSection>
              
              {project.details.features && (
                <ExpandableSection title="Key Features">
                  <ul className="list-disc pl-5 space-y-2">
                    {project.details.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </ExpandableSection>
              )}
              
              {project.details.challenges && (
                <ExpandableSection title="Challenges & Solutions">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white/90 font-medium mb-1">Challenge</h4>
                      <p>{project.details.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-white/90 font-medium mb-1">Solution</h4>
                      <p>{project.details.solutions}</p>
                    </div>
                  </div>
                </ExpandableSection>
              )}
            </div>
          </div>

          {/* Right Side (Sidebar) */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <DetailRow label="Role" value={project.details.role} />
                <DetailRow label="Duration" value={project.details.duration} />
                <DetailRow label="Architecture" value={project.details.architecture} />
                <DetailRow label="Database" value={project.details.database} />
                <DetailRow label="Authentication" value={project.details.authentication} />
                <DetailRow label="Deployment" value={project.details.deployment} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <ProjectNavigation 
          onPrevious={onPrevious} 
          onNext={onNext} 
          hasPrevious={hasPrevious} 
          hasNext={hasNext} 
        />
      </div>
    </motion.div>
  );
};

const DetailRow = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-white/40 text-sm mb-1">{label}</span>
      <span className="text-white/90 font-medium">{value}</span>
    </div>
  );
};

export default ProjectWindow;
