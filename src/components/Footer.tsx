const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold uppercase mb-2">
          🥋 <span className="text-primary">Iron Fist</span> Martial Arts Academy
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Iron Fist Martial Arts Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
