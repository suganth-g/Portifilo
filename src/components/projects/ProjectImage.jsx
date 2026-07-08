
const ProjectImage = ({ src, alt }) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group bg-darker">
      <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-white/10 to-transparent z-10 flex items-center px-3 border-b border-white/5">
         {/* Minimal mock browser header */}
         <div className="flex gap-1.5">
           <div className="w-2 h-2 rounded-full bg-white/20"></div>
           <div className="w-2 h-2 rounded-full bg-white/20"></div>
           <div className="w-2 h-2 rounded-full bg-white/20"></div>
         </div>
         <div className="mx-auto w-1/3 h-2 bg-white/10 rounded-full"></div>
      </div>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mt-6"
      />
    </div>
  );
};

export default ProjectImage;
