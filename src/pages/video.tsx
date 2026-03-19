import { useParams } from "react-router-dom";
import { videos } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VideoPage = () => {
  const { id } = useParams();

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Video not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* الفيديو */}
        <div
          className="w-full aspect-video mb-6"
          dangerouslySetInnerHTML={{ __html: video.embedCode }}
        />

        {/* العنوان */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
          {video.title}
        </h1>

        {/* الوصف */}
        <p className="text-muted-foreground mb-6">
          {video.description}
        </p>

        {/* معلومات */}
        <div className="text-sm text-muted-foreground flex gap-4">
          <span>Views: {video.views}</span>
          <span>Date: {video.uploadDate}</span>
          <span>Category: {video.category}</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
