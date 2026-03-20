import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { videos, formatViews } from "@/lib/data";
import { ArrowLeft, Eye } from "lucide-react";

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => v.id === id);

  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(video?.views || 0);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState<typeof videos>([]);

  // 🔥 Loader fake
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  // 🔥 Views system
  useEffect(() => {
    if (!video) return;
    const key = `views-${video.id}`;
    const stored = localStorage.getItem(key);

    if (!stored) {
      const newViews = video.views + 1;
      localStorage.setItem(key, newViews.toString());
      setViews(newViews);
    } else {
      setViews(parseInt(stored));
    }
  }, [video]);

  // 🔥 Related Videos based on tags (not just category)
  useEffect(() => {
    if (!video) return;

    const related = videos
      .filter((v) => v.id !== video.id)
      .filter((v) =>
        v.tags.some((tag) => video.tags.includes(tag))
      )
      .slice(0, 8);

    setTimeout(() => {
      setRelatedVideos(related);
      setRelatedLoading(false);
    }, 500); // simulate fetch delay
  }, [video]);

  if (!video) {
    return <div className="text-center py-20 text-white">Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400 hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* 🎬 Video Player */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-6 shadow-lg">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div
            className={`w-full h-full ${loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}
            dangerouslySetInnerHTML={{ __html: video.embedCode }}
          />
        </div>

        {/* 🧠 Info */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
          {video.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {formatViews(views)}
          </span>
          <span>{video.uploadDate}</span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{video.description}</p>

        <span className="inline-block bg-primary px-3 py-1 text-xs rounded mb-8">
          {video.category}
        </span>

        {/* 🔥 Related Videos Section */}
        <h2 className="text-xl font-bold mb-4">Suggested Videos</h2>

        {relatedLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg animate-pulse h-40"></div>
            ))}
          </div>
        ) : relatedVideos.length === 0 ? (
          <p className="text-gray-400">No related videos found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedVideos.map((v) => (
              <a
                key={v.id}
                href={`/video/${v.id}`}
                className="block bg-gray-900 rounded overflow-hidden hover:scale-105 hover:shadow-neon transition transform duration-300"
              >
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full object-cover h-40"
                  loading="lazy"
                />
                <p className="text-sm p-2 line-clamp-2">{v.title}</p>
              </a>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
