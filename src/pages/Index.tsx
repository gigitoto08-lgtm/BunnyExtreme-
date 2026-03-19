import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import {
  videos,
  getTrendingVideos,
  getLatestVideos,
  getVideosByCategory,
} from "@/lib/data";
import { TrendingUp, Clock, Grid3X3, Film } from "lucide-react";

const SectionHeading = ({ icon: Icon, title, accent, id }: any) => (
  <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-20">
    <Icon className="w-6 h-6 text-cyan-400 drop-shadow-neon" />
    <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-neon">
      {title} <span className="text-pink-500 drop-shadow-neon">{accent}</span>
    </h2>
  </div>
);

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const trending = useMemo(() => getTrendingVideos(8), []);
  const latest = useMemo(() => getLatestVideos(8), []);

  const filteredVideos = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? videos
        : getVideosByCategory(selectedCategory);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      {/* HERO Section Neon 3D */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-cyan-800 via-purple-900 to-pink-800 relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-neon mb-4 animate-neon-glow">
          Unlimited Video Library
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-neon">
          Explore trending, latest, and categorized videos. Fast streaming,
          simple browsing, and easy discovery. Neon vibes & 3D effects included!
        </p>
        <div className="absolute -top-20 -left-32 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Trending */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={TrendingUp}
          title="Trending"
          accent="Now"
          id="trending"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trending.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={Grid3X3}
          title="Browse"
          accent="Categories"
          id="categories"
        />
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </section>

      {/* Latest */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={Clock}
          title="Latest"
          accent="Uploads"
          id="latest"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {latest.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* All Videos */}
      <section id="all-videos" className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={Film}
          title="All"
          accent="Videos"
          id="all-videos"
        />
        <div className="mb-6">
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
        </div>
        {filteredVideos.length === 0 ? (
          <p className="text-center text-gray-400 py-10 drop-shadow-neon">
            No results found
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
