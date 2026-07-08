import { ExternalLink, Github } from 'lucide-react';

const ProjectButtons = ({ liveUrl, githubUrl }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {liveUrl && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        >
          <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 rounded-lg group-hover:scale-100 group-active:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-center" />
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      )}
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-medium transition-all hover:bg-white/20 hover:scale-105"
        >
          <Github size={18} />
          <span>GitHub Repository</span>
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
