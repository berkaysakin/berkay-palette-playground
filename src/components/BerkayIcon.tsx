const BerkayIcon = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center bg-gradient-primary rounded-lg text-primary-foreground font-heading font-bold relative overflow-hidden group`}>
      <div className="relative z-10 text-lg">
        B<span className="text-sm relative -ml-1">S</span>
      </div>
      <div className="absolute inset-0 bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-primary-foreground/30 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary-foreground/20 rounded-full"></div>
    </div>
  );
};

export default BerkayIcon;