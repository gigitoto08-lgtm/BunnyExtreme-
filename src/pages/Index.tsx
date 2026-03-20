import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const trending = useMemo(() => getTrendingVideos(8), []);
  const latest = useMemo(() => getLatestVideos(8), []);

  const filteredVideos = useMemo(() => {
    let result = selectedCategory === "All" ? videos : getVideosByCategory(selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        v => v.title.toLowerCase().includes(q) ||
             v.description.toLowerCase().includes(q) ||
             v.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery, selectedCategory]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        setVisibleCount(prev => prev + 8);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>BunnyExtreme – Watch Free Adult Videos Online</title>
        <meta name="description" content="Watch unlimited high-quality videos online. Explore categories like POV, Anal, Threesome, Hardcore, Deepthroat, and more."/>
        <link rel="canonical" href="https://yourdomain.vercel.app/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <Navbar />
        {/* HERO Section */}
        <div className="text-center py-16 px-4 bg-gradient-to-r from-cyan-800 via-purple-900 to-pink-800 relative overflow-hidden rounded-b-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-neon mb-4 animate-neon-glow relative inline-block">
            BunnyExtr
            <span className="relative inline-block">
              <span className="text-pink-500 drop-shadow-neon">E</span>
              <img src="/logo-rabbit.png" alt="Bunny Logo" className="w-8 h-8 absolute -top-4 -right-4 animate-bounce"/>
            </span>
            me
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-neon mb-6 text-lg md:text-xl">
            Watch unlimited high-quality videos online. Explore categories like POV, Anal, Threesome, Hardcore, Deepthroat, and more. Daily updates, fast streaming, and smooth experience.
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar query={searchQuery} onChange={setSearchQuery}/>
          </div>
        </div>

        {/* Sections */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={TrendingUp} title="Trending" accent="Now" id="trending"/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trending.map(v => <VideoCard key={v.id} video={v}/>)}
          </div>
        </section>

        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Grid3X3} title="Browse" accent="Categories" id="categories"/>
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory}/>
        </section>

        <section className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Clock} title="Latest" accent="Uploads" id="latest"/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {latest.map(v => <VideoCard key={v.id} video={v}/>)}
          </div>
        </section>

        <section id="all-videos" className="py-12 px-4 max-w-7xl mx-auto">
          <SectionHeading icon={Film} title="All" accent="Videos" id="all-videos"/>
          {filteredVideos.length === 0 ? (
            <p className="text-center text-gray-400 py-10">No results found</p>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {visibleVideos.map(v => <VideoCard key={v.id} video={v}/>)}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-8">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
