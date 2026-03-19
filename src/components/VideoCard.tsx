import { Play, Eye } from "lucide-react";
import { Video, formatViews } from "@/lib/data";

interface VideoCardProps {
  video: Video;
  onSelect: (video: Video) => void;
}

const VideoCard = ({ video, onSelect }: VideoCardProps) => {
  return (
    <button
      onClick={() => onSelect(video)}
      className="group card-3d rounded-lg overflow-hidden bg-card border border-border/50 text-left w-full transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
        <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-display rounded bg-primary/80 text-primary-foreground tracking-wider uppercase">
          {video.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm font-bold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 font-body">
          {video.description}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatViews(video.views)}
          </span>
          <span>{video.uploadDate}</span>
        </div>
      </div>
    </button>
  );
};

export default VideoCard;
