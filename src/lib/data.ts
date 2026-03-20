export interface Video {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  thumbnail: string;
  embedCode: string;
  views: number;
  uploadDate: string;
}

export const categories = ["Demo", "Tutorial", "Entertainment"];

export const videos: Video[] = [
  {
    id: "yt1",
    title: "Demo Video from YouTube",
    description: "This is a test video from YouTube to check the site functionality.",
    tags: ["demo", "youtube", "test"],
    category: "Demo",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    embedCode: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`,
    views: 1200,
    uploadDate: "2026-03-20",
  },
  {
    id: "yt2",
    title: "Another YouTube Demo",
    description: "Second test video.",
    tags: ["demo", "youtube"],
    category: "Tutorial",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    embedCode: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" frameborder="0" allowfullscreen></iframe>`,
    views: 800,
    uploadDate: "2026-03-19",
  },
];

// Helpers
export const getTrendingVideos = (count = 8) =>
  [...videos].sort((a, b) => b.views - a.views).slice(0, count);

export const getLatestVideos = (count = 8) =>
  [...videos].sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()).slice(0, count);

export const getVideosByCategory = (category: string) =>
  videos.filter((v) => v.category === category);

export const formatViews = (views: number) => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(0)}K`;
  return views.toString();
};
