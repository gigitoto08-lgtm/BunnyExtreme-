import { useState } from "react";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    embedCode?: string;
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={`/video/${video.id}`}
      className={`block bg-gray-900 rounded-lg overflow-hidden relative transform transition-all duration-300 ${
        hover ? "scale-105 shadow-neon" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover"
        loading="lazy"
      />

      {/* Overlay for hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Title */}
      <p className="text-sm p-2 line-clamp-2 text-white font-medium">{video.title}</p>

      {/* Category badge */}
      <span className="absolute top-2 left-2 bg-primary text-black text-xs px-2 py-0.5 rounded">
        {video.category}
      </span>
    </a>
  );
};

export default VideoCard;
