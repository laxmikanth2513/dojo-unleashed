const TopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-center h-14 px-4">
        <a href="#home" className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-[0.15em]">
          <span className="text-primary">MNS Success</span> Martial Arts Academy
        </a>
      </div>
    </header>
  );
};

export default TopHeader;
