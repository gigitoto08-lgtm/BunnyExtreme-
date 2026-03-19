import { Play, Eye } from "lucide-react";
import { Video, formatViews } from "@/lib/data";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <a
      href={`/video/${video.id}`}
      className="group block rounded-lg overflow-hidden bg-gray-900 border border-gray-700 w-full transition-all hover:border-cyan-400 hover:scale-[1.03] drop-shadow-neon"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          onError={(e) =>
            (e.currentTarget.src =
              "https://via.placeholder.com/600x340.png?text=Video")
          }
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* زر التشغيل Neon */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-neon animate-pulse-slow">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>

        {/* التصنيف Neon */}
        <span className="absolute top-2 right-2 px-2 py-1 text-[10px] rounded bg-pink-500 text-white uppercase drop-shadow-neon animate-pulse-slow">
          {video.category}
        </span>
      </div>

      {/* المعلومات */}
      <div className="p-3">
        <h3 className="text-sm font-bold text-white line-clamp-2 mb-1 group-hover:text-cyan-400 drop-shadow-neon transition-colors">
          {video.title}
        </h3>

        <p className="text-xs text-gray-400 line-clamp-2 mb-2 group-hover:text-white transition-colors">
          {video.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-gray-300" />
            {formatViews(video.views)}
          </span>
          <span>{video.uploadDate}</span>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
