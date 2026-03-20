import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import CategoryFilter from "@/components/CategoryFilter";
import { videos, getTrendingVideos, getLatestVideos, getVideosByCategory } from "@/lib/data";
import { TrendingUp, Clock, Grid3X3, Film } from "lucide-react";
import { Helmet } from "react-helmet";

const SectionHeading = ({ icon: Icon, title, accent, id }: any) => (
  <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-20">
    <Icon className="w-6 h-6 text-cyan-400 drop-shadow-neon" />
    <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-neon">
      {title} <span className="text-pink-500 drop-shadow-neon">{accent}</span>
    </h2>
  </div>
);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const trending = useMemo(() => getTrendingVideos(8), []);
  const latest = useMemo(() => getLatestVideos(8), []);
  const filteredVideos = useMemo(() => (selectedCategory === "All" ? videos : getVideosByCategory(selectedCategory)), [selectedCategory]);
  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        setVisibleCount((prev) => prev + 8);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Demo Site – Video Test</title>
        <meta name="description" content="Test site for video playback and UX." />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={TrendingUp} title="Trending" accent="Now" id="trending" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trending.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
        </section>

        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Grid3X3} title="Categories" accent="" id="categories" />
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </section>

        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Clock} title="Latest" accent="Uploads" id="latest" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {latest.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
        </section>

        <section id="all-videos" className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Film} title="All" accent="Videos" id="all-videos" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {visibleVideos.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
          {hasMore && <div className="flex justify-center mt-8"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
