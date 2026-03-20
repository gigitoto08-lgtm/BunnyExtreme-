import { Dispatch, SetStateAction } from "react";

interface CategoryFilterProps {
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

const categories = [
  "All",
  "POV",
  "Anal",
  "Threesome",
  "Hardcore",
  "Deepthroat",
  "Facefuck",
  "Group Sex",
  "BBC",
  "Leaked",
];

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
            selected === cat
              ? "bg-pink-500 text-white shadow-neon"
              : "bg-gray-800 text-gray-400 hover:bg-pink-500 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
