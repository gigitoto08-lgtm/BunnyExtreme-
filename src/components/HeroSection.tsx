import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-32 h-32 rounded-full bg-neon-cyan/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-neon-pink/10 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-primary tracking-wider uppercase">Stream Unlimited Content</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.15s" }}>
          <span className="text-foreground">BUNNY</span>
          <span className="text-primary neon-text">EXTREME</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Your ultimate destination for full-length videos across every genre. Action, sci-fi, comedy, documentaries and more — all streaming free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <a
            href="#trending"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)] hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Explore Now
          </a>
          <a
            href="#categories"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-secondary/50 text-secondary font-display font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:bg-secondary/10 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)] hover:scale-105"
          >
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
