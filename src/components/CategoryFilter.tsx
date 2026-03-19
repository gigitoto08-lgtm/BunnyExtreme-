import { categories } from "@/lib/data";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("All")}
        className={`px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase transition-all duration-300 ${
          selected === "All"
            ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--neon-cyan)/0.4)]"
            : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase transition-all duration-300 ${
            selected === cat
              ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--neon-cyan)/0.4)]"
              : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
