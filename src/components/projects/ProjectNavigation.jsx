import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectNavigation = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrevious, onNext, hasPrevious, hasNext]);

  return (
    <div className="flex justify-between items-center mt-12 border-t border-white/10 pt-6">
      <button 
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          hasPrevious 
            ? 'text-white/80 hover:text-white hover:bg-white/10' 
            : 'text-white/30 cursor-not-allowed'
        }`}
      >
        <ArrowLeft size={18} />
        <span>Previous Project</span>
      </button>
      
      <div className="hidden md:flex gap-1">
        <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/50">←</kbd>
        <span className="text-white/30 text-xs py-1">or</span>
        <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/50">→</kbd>
      </div>

      <button 
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          hasNext 
            ? 'text-white/80 hover:text-white hover:bg-white/10' 
            : 'text-white/30 cursor-not-allowed'
        }`}
      >
        <span>Next Project</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default ProjectNavigation;
