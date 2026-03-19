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

export const categories = [
  "Swallowed",
  "POV",
  "Anal",
  "Deepthroat",
  "Cumshots",
  "Facial",
  "Lesbian",
  "Threesome",
  "Hardcore",
  "Blowjob",
  "Ebony",
  "Asian",
  "Latina",
  "MILF",
  "Teen",
  "Big Tits",
  "Small Tits",
  "Fetish",
  "BDSM",
  "Toys"
];

export const videos: Video[] = [
  {
    id: "v1",
    title: "Sample Video 1",
    description: "وضع وصف للفيديو هنا",
    tags: ["sample", "demo"],
    category: "Swallowed",
    thumbnail: "https://via.placeholder.com/600x340.png?text=Thumbnail+1",
    embedCode: '<iframe width="100%" height="100%" src="YOUR_EMBED_CODE_HERE" frameborder="0" allowfullscreen></iframe>',
    views: 1250,
    uploadDate: "2026-03-15"
  },
  {
    id: "v2",
    title: "Sample Video 2",
    description: "وضع وصف للفيديو هنا",
    tags: ["sample", "demo"],
    category: "POV",
    thumbnail: "https://via.placeholder.com/600x340.png?text=Thumbnail+2",
    embedCode: '<iframe width="100%" height="100%" src="YOUR_EMBED_CODE_HERE" frameborder="0" allowfullscreen></iframe>',
    views: 980,
    uploadDate: "2026-03-14"
  },
  // أضف باقي الفيديوهات بنفس الصيغة لاحقًا
];

export const getTrendingVideos = (count = 8) =>
  [...videos].sort((a, b) => b.views - a.views).slice(0, count);

export const getLatestVideos = (count = 8) =>
  [...videos].sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()).slice(0, count);

export const getVideosByCategory = (category: string) =>
  videos.filter((v) => v.category === category);

export const searchVideos = (query: string) => {
  const q = query.toLowerCase();
  return videos.filter(
    (v) =>
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.tags.some((t) => t.toLowerCase().includes(q)) ||
      v.category.toLowerCase().includes(q)
  );
};

export const formatViews = (views: number) => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(0)}K`;
  return views.toString();
};
