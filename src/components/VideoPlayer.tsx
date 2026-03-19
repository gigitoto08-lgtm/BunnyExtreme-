import { X, Eye, Tag } from "lucide-react";
import { Video, formatViews } from "@/lib/data";

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

const VideoPlayer = ({ video, onClose }: VideoPlayerProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors font-display text-sm tracking-wider uppercase"
        >
          <X className="w-4 h-4" />
          Close Player
        </button>

        <div className="neon-border rounded-lg overflow-hidden aspect-video bg-muted mb-6">
          <div dangerouslySetInnerHTML={{ __html: video.embedCode }} className="w-full h-full" />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-display font-black text-foreground">
            {video.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-primary" />
              {formatViews(video.views)} views
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-display text-xs tracking-wider uppercase">
              {video.category}
            </span>
            <span>{video.uploadDate}</span>
          </div>

          <p className="text-muted-foreground font-body text-base leading-relaxed max-w-3xl">
            {video.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag className="w-4 h-4 text-secondary mt-1" />
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-display tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
