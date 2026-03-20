const Footer = () => {
  return (
    <footer className="bg-background/90 backdrop-blur-lg border-t border-border/50 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-white font-bold">BunnyExtreme</span>. All rights reserved.
        </p>
        <p className="mt-2">
          Built with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-pink-500 font-semibold">TailwindCSS</span> & 💻 AI Power
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Adult content. For educational/testing purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
