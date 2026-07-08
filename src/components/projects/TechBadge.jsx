
const TechBadge = ({ tech }) => {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/80 backdrop-blur-sm">
      {tech}
    </span>
  );
};

export default TechBadge;
