import { useParams, Link } from "react-router-dom";
import { videos } from "@/lib/data";
import VideoCard from "@/components/VideoCard";

const VideoPage = () => {
  const { id } = useParams();

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="text-center py-20 text-red-500">
        Video not found
      </div>
    );
  }

  // 🔥 فيديوهات مشابهة
  const relatedVideos = videos
    .filter((v) => v.category === video.category && v.id !== video.id)
    .slice(0, 8);

  // 🔥 SEO (Title + Description)
  document.title = `${video.title} | Watch HD Videos Free`;

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8">

      <div className="max-w-6xl mx-auto">

        {/* 🔙 زر الرجوع */}
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-primary hover:underline"
        >
          ← Back to Home
        </Link>

        {/* 🎬 الفيديو */}
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden border border-border shadow-lg">
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: video.embedCode }}
          />
        </div>

        {/* 🧠 العنوان */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          {video.title}
        </h1>

        {/* 📊 معلومات */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
          <span>{video.views} views</span>
          <span>{video.uploadDate}</span>
          <span className="bg-primary px-2 py-1 rounded text-white text-xs uppercase">
            {video.category}
          </span>
        </div>

        {/* 📝 الوصف (SEO قوي 🔥) */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {video.description} — Watch {video.category} videos in HD quality,
          free streaming, fast loading, unlimited access. Discover trending,
          popular, and exclusive content updated daily. Enjoy the best online
          video experience with smooth playback and high-quality visuals.
        </p>

        {/* 🏷️ Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-secondary rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 🔥 فيديوهات مشابهة */}
        {relatedVideos.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Related Videos
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedVideos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VideoPage;
