import { useParams } from "react-router-dom";
import { videos } from "@/lib/data";

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

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Player */}
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden border border-border">
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: video.embedCode }}
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          {video.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span>{video.views} views</span>
          <span>{video.uploadDate}</span>
          <span className="bg-primary px-2 py-1 rounded text-white text-xs">
            {video.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {video.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-secondary rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoPage;
