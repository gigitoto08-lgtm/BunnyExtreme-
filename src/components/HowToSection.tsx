import { Search, Play, Monitor } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Use the search bar or browse by category to find videos you love across all genres.",
  },
  {
    icon: Play,
    title: "Click to Play",
    description: "Click any video card to open the embedded player. Videos play instantly — no downloads needed.",
  },
  {
    icon: Monitor,
    title: "Enjoy Full Screen",
    description: "Use the fullscreen button on the player for an immersive viewing experience on any device.",
  },
];

const HowToSection = () => {
  return (
    <section id="how-to" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-foreground">
          How to <span className="text-primary neon-text">Watch</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Start watching your favorite content in three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative p-6 rounded-lg bg-card border border-border/50 text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--neon-cyan)/0.15)]"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="absolute top-4 right-4 text-4xl font-display font-black text-muted/50">
                {i + 1}
              </span>
              <h3 className="font-display font-bold text-foreground mb-2 tracking-wider">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
