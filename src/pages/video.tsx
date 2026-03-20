import { useParams } from "react-router-dom";
import { videos } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VideoPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <div className="text-center py-20 text-white">Video not found</div>;
  }

  // 🔥 SEO Dynamic
  document.title = `${video.title} | BunnyExtreme`;

  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `${video.title} - Watch high quality videos online. Explore categories like ${video.category}. Free streaming, fast loading and daily updates.`
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* VIDEO PLAYER */}
        <div
          className="w-full aspect-video bg-black mb-6 rounded-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: video.embedCode }}
        />

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          {video.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mb-6">
          {video.description}
        </p>

        {/* CATEGORY */}
        <span className="inline-block bg-primary px-3 py-1 text-xs rounded mb-6">
          {video.category}
        </span>

        {/* RELATED VIDEOS */}
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
                <img src={v.thumbnail} className="w-full" />
                <p className="text-sm p-2">{v.title}</p>
              </a>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
