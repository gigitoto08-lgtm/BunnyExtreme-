import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

const SearchBar = ({ query, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search videos, categories, tags..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.2)] transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;
