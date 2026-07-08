
const ProjectFilter = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out border
            ${activeFilter === filter 
              ? 'bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
