import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoCard from "@/components/VideoCard";
import VideoPlayer from "@/components/VideoPlayer";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import HowToSection from "@/components/HowToSection";
import Footer from "@/components/Footer";
import { Video, videos, getTrendingVideos, getLatestVideos, searchVideos, getVideosByCategory } from "@/lib/data";
import { TrendingUp, Clock, Grid3X3, Film } from "lucide-react";

const SectionHeading = ({ icon: Icon, title, accent, id }: { icon: React.ElementType; title: string; accent: string; id: string }) => (
  <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-20">
    <Icon className="w-6 h-6 text-primary" />
    <h2 className="text-2xl md:text-3xl font-display font-black text-foreground">
      {title} <span className="text-primary neon-text">{accent}</span>
    </h2>
  </div>
);

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const trending = useMemo(() => getTrendingVideos(8), []);
  const latest = useMemo(() => getLatestVideos(8), []);

  const filteredVideos = useMemo(() => {
    let result = selectedCategory === "All" ? videos : getVideosByCategory(selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((v) =>
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
      <HeroSection />

      {/* Trending */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading icon={TrendingUp} title="Trending" accent="Now" id="trending" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((v) => (
            <VideoCard key={v.id} video={v} onSelect={setSelectedVideo} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading icon={Grid3X3} title="Browse" accent="Categories" id="categories" />
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </section>

      {/* Latest */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading icon={Clock} title="Latest" accent="Uploads" id="latest" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latest.map((v) => (
            <VideoCard key={v.id} video={v} onSelect={setSelectedVideo} />
          ))}
        </div>
      </section>

      {/* All Videos */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading icon={Film} title="All" accent="Videos" id="all-videos" />
        <div className="mb-8">
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
        </div>
        {filteredVideos.length === 0 ? (
          <p className="text-center text-muted-foreground font-body py-12">No videos found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((v) => (
              <VideoCard key={v.id} video={v} onSelect={setSelectedVideo} />
            ))}
          </div>
        )}
      </section>

      <HowToSection />
      <Footer />

      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
};

export default Index;
