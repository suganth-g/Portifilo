
const WindowHeader = ({ title }) => {
  return (
    <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10 rounded-t-[24px]">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
      </div>
      <div className="flex-1 text-center">
        <span className="text-sm font-medium text-white/70">{title || 'Project Window'}</span>
      </div>
      <div className="w-12"></div> {/* Spacer for centering title */}
    </div>
  );
};

export default WindowHeader;
