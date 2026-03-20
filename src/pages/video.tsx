import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { videos, formatViews } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Eye } from "lucide-react";

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => v.id === id);

  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(video?.views || 0);

  // 🔥 Loader fake (UX)
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  // 🔥 Views system (localStorage)
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

  if (!video) {
    return <div className="text-center py-20 text-white">Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* 🔙 زر رجوع */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400 hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* 🎬 VIDEO */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-6">

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: video.embedCode }}
          />
        </div>

        {/* 🧠 INFO */}
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

        <p className="text-gray-300 mb-6 leading-relaxed">
          {video.description}
        </p>

        <span className="inline-block bg-primary px-3 py-1 text-xs rounded mb-8">
          {video.category}
        </span>

        {/* 🔥 RELATED VIDEOS */}
        <h2 className="text-xl font-bold mb-4">Related Videos</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos
            .filter((v) => v.category === video.category && v.id !== video.id)
            .slice(0, 8)
            .map((v) => (
              <a
                key={v.id}
                href={`/video/${v.id}`}
                className="block bg-gray-900 rounded overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <p className="text-sm p-2 line-clamp-2">{v.title}</p>
              </a>
            ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
