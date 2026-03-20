import { Dispatch, SetStateAction } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ query, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search videos..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-shadow duration-300 drop-shadow-neon"
      />
    </div>
  );
};

export default SearchBar;
