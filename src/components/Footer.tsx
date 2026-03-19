import { Rabbit } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4 gradient-mesh">
    <div className="max-w-6xl mx-auto text-center space-y-4">
      <div className="flex items-center justify-center gap-2">
        <Rabbit className="w-6 h-6 text-primary" />
        <span className="font-display font-black text-sm tracking-widest">
          <span className="text-foreground">BUNNY</span>
          <span className="text-primary">EXTREME</span>
        </span>
      </div>
      <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
        Your ultimate destination for full-length streaming videos. Browse trending content, discover new categories, and enjoy seamless playback.
      </p>
      <p className="text-muted-foreground/60 font-body text-xs">
        © {new Date().getFullYear()} BunnyExtreme. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
