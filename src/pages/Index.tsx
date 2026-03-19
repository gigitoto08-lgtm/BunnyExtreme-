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
  <div id={id} className="flex items-center gap-3 mb-6 scroll-mt-20">
    <Icon className="w-5 h-5 text-primary" />
    <h2 className="text-xl md:text-2xl font-bold text-foreground">
      {title} <span className="text-primary">{accent}</span>
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          Unlimited Video Library
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore trending, latest, and categorized videos. Fast streaming,
          simple browsing, and easy discovery.
        </p>
      </div>

      {/* Trending */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={TrendingUp}
          title="Trending"
          accent="Now"
          id="trending"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trending.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
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
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <SectionHeading
          icon={Clock}
          title="Latest"
          accent="Uploads"
          id="latest"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {latest.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* All Videos */}
      <section id="all-videos" className="py-10 px-4 max-w-7xl mx-auto">
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
          <p className="text-center text-muted-foreground py-10">
            No results found
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
