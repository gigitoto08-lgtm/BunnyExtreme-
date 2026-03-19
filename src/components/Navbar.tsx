import { Rabbit, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Rabbit className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--neon-cyan)/0.7)] transition-all" />
          <span className="font-display font-black text-lg tracking-widest">
            <span className="text-foreground">BUNNY</span>
            <span className="text-primary">EXTREME</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-display text-xs tracking-widest uppercase">
          <a href="#trending" className="text-muted-foreground hover:text-primary transition-colors">Trending</a>
          <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
          <a href="#latest" className="text-muted-foreground hover:text-primary transition-colors">Latest</a>
          <a href="#all-videos" className="text-muted-foreground hover:text-primary transition-colors">All Videos</a>
          <a href="#how-to" className="text-muted-foreground hover:text-primary transition-colors">How To</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg px-4 py-4 flex flex-col gap-3 font-display text-xs tracking-widest uppercase">
          <a href="#trending" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">Trending</a>
          <a href="#categories" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">Categories</a>
          <a href="#latest" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">Latest</a>
          <a href="#all-videos" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">All Videos</a>
          <a href="#how-to" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">How To</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
