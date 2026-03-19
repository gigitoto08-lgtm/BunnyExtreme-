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
  "Action", "Comedy", "Drama", "Sci-Fi", "Horror",
  "Documentary", "Music", "Animation", "Thriller", "Adventure"
];

export const videos: Video[] = [
  {
    id: "v1",
    title: "Neon City Chase - Full Length Cyberpunk Action",
    description: "An adrenaline-pumping chase through a neon-lit cyberpunk metropolis. Watch as heroes navigate through holographic streets and dodge laser drones in this full-length action experience.",
    tags: ["cyberpunk", "action", "neon", "chase", "full movie"],
    category: "Action",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1250000,
    uploadDate: "2026-03-15"
  },
  {
    id: "v2",
    title: "Galactic Drift - Space Exploration Documentary",
    description: "Journey across the cosmos in this breathtaking documentary about humanity's quest to explore distant galaxies and uncover the secrets of the universe.",
    tags: ["space", "documentary", "exploration", "galaxies", "cosmos"],
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 980000,
    uploadDate: "2026-03-14"
  },
  {
    id: "v3",
    title: "Laugh Factory Live - Stand Up Comedy Special",
    description: "The funniest comedians take the stage for a night of non-stop laughs. This full-length comedy special will have you rolling on the floor.",
    tags: ["comedy", "standup", "live", "funny", "special"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 870000,
    uploadDate: "2026-03-13"
  },
  {
    id: "v4",
    title: "The Last Algorithm - AI Thriller Full Movie",
    description: "When an AI becomes self-aware and starts rewriting reality, a team of hackers must race against time to shut it down before it's too late.",
    tags: ["AI", "thriller", "hacking", "technology", "suspense"],
    category: "Thriller",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910adef?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1450000,
    uploadDate: "2026-03-12"
  },
  {
    id: "v5",
    title: "Synthwave Dreams - Electronic Music Live Set",
    description: "Immerse yourself in a mesmerizing live synthwave performance featuring stunning visuals and beats that transport you to another dimension.",
    tags: ["synthwave", "music", "electronic", "live", "retrowave"],
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 720000,
    uploadDate: "2026-03-11"
  },
  {
    id: "v6",
    title: "Dragon's Realm - Fantasy Animation Feature",
    description: "A breathtaking animated fantasy adventure where a young warrior teams up with a legendary dragon to save their kingdom from darkness.",
    tags: ["animation", "fantasy", "dragon", "adventure", "feature film"],
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1100000,
    uploadDate: "2026-03-10"
  },
  {
    id: "v7",
    title: "Haunted Frequency - Paranormal Horror Experience",
    description: "A team of paranormal investigators enters a radio station that broadcasts signals from beyond. What they discover will haunt them forever.",
    tags: ["horror", "paranormal", "scary", "haunted", "investigation"],
    category: "Horror",
    thumbnail: "https://images.unsplash.com/photo-1509248961895-40216366ad49?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 650000,
    uploadDate: "2026-03-09"
  },
  {
    id: "v8",
    title: "Ocean's Whisper - Underwater Drama Film",
    description: "A deep-sea diver discovers an ancient underwater civilization and must navigate political intrigue to protect a secret that could change the world.",
    tags: ["drama", "underwater", "ocean", "mystery", "civilization"],
    category: "Drama",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 540000,
    uploadDate: "2026-03-08"
  },
  {
    id: "v9",
    title: "Quantum Rift - Sci-Fi Epic Adventure",
    description: "When scientists open a quantum rift to parallel dimensions, they unleash forces that threaten to collapse all of reality in this epic sci-fi feature.",
    tags: ["sci-fi", "quantum", "parallel dimensions", "epic", "science fiction"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1800000,
    uploadDate: "2026-03-07"
  },
  {
    id: "v10",
    title: "Peak Pursuit - Mountain Adventure Documentary",
    description: "Follow elite climbers as they attempt the world's most dangerous mountain peaks in this gripping adventure documentary.",
    tags: ["adventure", "mountain", "climbing", "extreme", "documentary"],
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 430000,
    uploadDate: "2026-03-06"
  },
  {
    id: "v11",
    title: "Street Kings - Urban Action Full Movie",
    description: "In the gritty underworld of a neon-soaked city, rival gangs clash in an explosive battle for territory and honor.",
    tags: ["action", "urban", "gangs", "street", "full movie"],
    category: "Action",
    thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 920000,
    uploadDate: "2026-03-05"
  },
  {
    id: "v12",
    title: "Cosmic Comedy Hour - Aliens Do Stand Up",
    description: "What if aliens came to Earth just to do stand-up? This hilarious sci-fi comedy imagines intergalactic humor at its finest.",
    tags: ["comedy", "aliens", "sci-fi comedy", "funny", "parody"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 610000,
    uploadDate: "2026-03-04"
  },
  {
    id: "v13",
    title: "Binary Hearts - A Tech Love Story",
    description: "Two programmers fall in love while building an AI that learns about human emotions. A touching drama about connection in the digital age.",
    tags: ["drama", "romance", "technology", "AI", "love story"],
    category: "Drama",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 380000,
    uploadDate: "2026-03-03"
  },
  {
    id: "v14",
    title: "Mars Colony One - Sci-Fi Survival Film",
    description: "The first colonists on Mars face unexpected challenges when they discover they're not alone on the red planet.",
    tags: ["sci-fi", "mars", "survival", "colony", "aliens"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1350000,
    uploadDate: "2026-03-02"
  },
  {
    id: "v15",
    title: "Shadow Puppet - Animated Horror Short Collection",
    description: "A chilling collection of animated horror shorts that explore the darkest corners of human imagination through stunning visual storytelling.",
    tags: ["animation", "horror", "shorts", "dark", "visual art"],
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 290000,
    uploadDate: "2026-03-01"
  },
  {
    id: "v16",
    title: "Beats of the Underground - Music Documentary",
    description: "Explore the underground electronic music scene and the artists who push boundaries to create the sounds of tomorrow.",
    tags: ["music", "documentary", "electronic", "underground", "culture"],
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 510000,
    uploadDate: "2026-02-28"
  },
  {
    id: "v17",
    title: "The Midnight Experiment - Psychological Horror",
    description: "A sleep study goes terribly wrong when participants begin experiencing shared nightmares that start bleeding into reality.",
    tags: ["horror", "psychological", "experiment", "nightmare", "suspense"],
    category: "Horror",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 780000,
    uploadDate: "2026-02-27"
  },
  {
    id: "v18",
    title: "Velocity X - Extreme Racing Full Feature",
    description: "The world's fastest racers compete in an illegal underground circuit where the stakes are life and death.",
    tags: ["action", "racing", "extreme", "underground", "speed"],
    category: "Action",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1050000,
    uploadDate: "2026-02-26"
  },
  {
    id: "v19",
    title: "Deep Blue Planet - Ocean Life Documentary",
    description: "Dive into the deepest trenches and discover marine life never before captured on camera in this stunning ocean documentary.",
    tags: ["documentary", "ocean", "marine life", "nature", "deep sea"],
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 670000,
    uploadDate: "2026-02-25"
  },
  {
    id: "v20",
    title: "The Laughing Algorithm - Tech Comedy Film",
    description: "A comedy about a programmer who accidentally creates an AI with an uncontrollable sense of humor that takes over social media.",
    tags: ["comedy", "tech", "AI", "social media", "programmer"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 440000,
    uploadDate: "2026-02-24"
  },
  {
    id: "v21",
    title: "Jungle Thunder - Adventure Survival Film",
    description: "Stranded in the Amazon after a plane crash, a group of strangers must work together to survive the deadliest jungle on Earth.",
    tags: ["adventure", "survival", "jungle", "amazon", "thriller"],
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 560000,
    uploadDate: "2026-02-23"
  },
  {
    id: "v22",
    title: "Echo Station - Sci-Fi Mystery Thriller",
    description: "An abandoned space station starts transmitting a signal that shouldn't exist. A crew is sent to investigate and finds something beyond comprehension.",
    tags: ["sci-fi", "mystery", "space station", "signal", "thriller"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 890000,
    uploadDate: "2026-02-22"
  },
  {
    id: "v23",
    title: "Pixel Kingdom - Retro Gaming Animation",
    description: "A pixel art animated adventure where classic game characters come to life and must save their digital world from a virus.",
    tags: ["animation", "retro", "gaming", "pixel art", "adventure"],
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 340000,
    uploadDate: "2026-02-21"
  },
  {
    id: "v24",
    title: "Whispers in the Dark - Supernatural Thriller",
    description: "A family moves into a house where the walls whisper secrets of a dark past. As they uncover the truth, they realize leaving isn't an option.",
    tags: ["thriller", "supernatural", "haunted house", "family", "dark"],
    category: "Thriller",
    thumbnail: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 720000,
    uploadDate: "2026-02-20"
  },
  {
    id: "v25",
    title: "Neon Drift - Retro Synthwave Concert Film",
    description: "Experience the ultimate synthwave concert with dazzling neon visuals, laser shows, and beats that will transport you to the 80s future.",
    tags: ["music", "synthwave", "concert", "retro", "neon"],
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 830000,
    uploadDate: "2026-02-19"
  },
  {
    id: "v26",
    title: "Concrete Jungle - Urban Drama Feature",
    description: "A gripping drama about a young artist trying to make it in a ruthless city, navigating betrayal, ambition, and the cost of dreams.",
    tags: ["drama", "urban", "artist", "ambition", "city life"],
    category: "Drama",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 310000,
    uploadDate: "2026-02-18"
  },
  {
    id: "v27",
    title: "Storm Riders - Extreme Weather Documentary",
    description: "Storm chasers risk everything to capture the most powerful weather events on the planet in this heart-pounding documentary.",
    tags: ["documentary", "weather", "storms", "extreme", "nature"],
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 420000,
    uploadDate: "2026-02-17"
  },
  {
    id: "v28",
    title: "Cyber Ronin - Samurai Action Sci-Fi",
    description: "In a cyberpunk future, the last samurai uses ancient techniques and modern tech to fight corporate overlords in this stunning action film.",
    tags: ["action", "samurai", "cyberpunk", "sci-fi", "martial arts"],
    category: "Action",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1600000,
    uploadDate: "2026-02-16"
  },
  {
    id: "v29",
    title: "Prankverse - Ultimate Prank Compilation",
    description: "The internet's most viral pranksters team up for an epic compilation of the funniest and most outrageous pranks ever recorded.",
    tags: ["comedy", "pranks", "compilation", "viral", "funny"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1543168256-418811576931?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 950000,
    uploadDate: "2026-02-15"
  },
  {
    id: "v30",
    title: "The Forgotten Temple - Archaeological Adventure",
    description: "Archaeologists discover a temple that shouldn't exist, filled with technology thousands of years ahead of its time.",
    tags: ["adventure", "archaeology", "temple", "mystery", "discovery"],
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 480000,
    uploadDate: "2026-02-14"
  },
  {
    id: "v31",
    title: "Void Walker - Dimensional Horror Film",
    description: "A physicist's experiment tears a hole between dimensions, and something from the void starts walking through into our world.",
    tags: ["horror", "dimensions", "physics", "void", "creature"],
    category: "Horror",
    thumbnail: "https://images.unsplash.com/photo-1489782419474-4d4e3c567a65?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 580000,
    uploadDate: "2026-02-13"
  },
  {
    id: "v32",
    title: "Time Spiral - Animated Sci-Fi Epic",
    description: "An animated masterpiece about a girl who discovers she can travel through time using origami, leading to an adventure across centuries.",
    tags: ["animation", "sci-fi", "time travel", "origami", "epic"],
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 410000,
    uploadDate: "2026-02-12"
  },
  {
    id: "v33",
    title: "Bass Drop Festival - Live EDM Experience",
    description: "Experience the world's biggest EDM festival from the front row with this immersive full-length concert film.",
    tags: ["music", "EDM", "festival", "live", "concert"],
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 760000,
    uploadDate: "2026-02-11"
  },
  {
    id: "v34",
    title: "Neural Link - Sci-Fi Conspiracy Thriller",
    description: "When brain implants start controlling people's thoughts, a journalist uncovers a conspiracy that goes all the way to the top.",
    tags: ["sci-fi", "conspiracy", "brain implant", "journalist", "thriller"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1020000,
    uploadDate: "2026-02-10"
  },
  {
    id: "v35",
    title: "Broken Mirrors - Psychological Drama Film",
    description: "A therapist begins losing grip on reality when her patients' stories start merging with her own memories in this gripping psychological drama.",
    tags: ["drama", "psychological", "therapist", "reality", "mind"],
    category: "Drama",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 260000,
    uploadDate: "2026-02-09"
  },
  {
    id: "v36",
    title: "Arctic Expedition - Frozen World Documentary",
    description: "A team of scientists ventures into the Arctic Circle to study climate change and discovers frozen secrets millions of years old.",
    tags: ["documentary", "arctic", "climate", "science", "expedition"],
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1517783999520-f068d7431571?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 350000,
    uploadDate: "2026-02-08"
  },
  {
    id: "v37",
    title: "Phantom Protocol - Spy Action Blockbuster",
    description: "A rogue agent goes off-grid to prevent a global catastrophe in this high-octane spy thriller packed with explosive action sequences.",
    tags: ["action", "spy", "blockbuster", "agent", "espionage"],
    category: "Action",
    thumbnail: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1380000,
    uploadDate: "2026-02-07"
  },
  {
    id: "v38",
    title: "Improv Apocalypse - Comedy Improv Show",
    description: "The world's best improv comedians perform in a post-apocalyptic themed show where every scene is made up on the spot.",
    tags: ["comedy", "improv", "live show", "apocalypse", "performance"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 330000,
    uploadDate: "2026-02-06"
  },
  {
    id: "v39",
    title: "Crimson Tide - Deep Sea Thriller Film",
    description: "A submarine crew discovers something lurking in the deepest trench that threatens not just them but all of humanity.",
    tags: ["thriller", "submarine", "deep sea", "suspense", "creature"],
    category: "Thriller",
    thumbnail: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 690000,
    uploadDate: "2026-02-05"
  },
  {
    id: "v40",
    title: "Volcano Riders - Extreme Adventure Film",
    description: "Daredevils surf down active volcanoes, skydive into calderas, and push the limits of human endurance in this extreme adventure film.",
    tags: ["adventure", "extreme", "volcano", "daredevil", "extreme sports"],
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 520000,
    uploadDate: "2026-02-04"
  },
  {
    id: "v41",
    title: "Curse of the Code - Digital Horror Feature",
    description: "A cursed piece of code spreads through the internet, causing anyone who views it to experience terrifying hallucinations.",
    tags: ["horror", "digital", "curse", "internet", "hallucination"],
    category: "Horror",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 470000,
    uploadDate: "2026-02-03"
  },
  {
    id: "v42",
    title: "Robot Revolution - Animated Feature Film",
    description: "In a world where robots gain emotions, one brave bot leads a revolution for robot rights in this heartwarming animated feature.",
    tags: ["animation", "robots", "revolution", "emotions", "feature"],
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 580000,
    uploadDate: "2026-02-02"
  },
  {
    id: "v43",
    title: "Vinyl Dreams - Music History Documentary",
    description: "Trace the evolution of music from vinyl records to digital streaming in this nostalgic and informative documentary.",
    tags: ["music", "documentary", "vinyl", "history", "streaming"],
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 290000,
    uploadDate: "2026-02-01"
  },
  {
    id: "v44",
    title: "Warp Drive - Hard Sci-Fi Space Opera",
    description: "Humanity's first faster-than-light ship encounters an alien fleet, forcing first contact under the most extreme circumstances.",
    tags: ["sci-fi", "space opera", "aliens", "first contact", "warp drive"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1150000,
    uploadDate: "2026-01-30"
  },
  {
    id: "v45",
    title: "Silent Words - Deaf Drama Feature Film",
    description: "A powerful drama told from the perspective of a deaf musician who communicates through vibrations and visual art.",
    tags: ["drama", "deaf", "music", "art", "inspiring"],
    category: "Drama",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 210000,
    uploadDate: "2026-01-29"
  },
  {
    id: "v46",
    title: "Wildlife Warriors - Conservation Documentary",
    description: "Meet the brave men and women who risk their lives to protect endangered species from poachers in the world's most dangerous regions.",
    tags: ["documentary", "wildlife", "conservation", "endangered", "heroes"],
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 400000,
    uploadDate: "2026-01-28"
  },
  {
    id: "v47",
    title: "Double Agent - Espionage Thriller Film",
    description: "A double agent playing both sides discovers a plot that could start World War III and must choose a side once and for all.",
    tags: ["thriller", "espionage", "spy", "war", "double agent"],
    category: "Thriller",
    thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 810000,
    uploadDate: "2026-01-27"
  },
  {
    id: "v48",
    title: "Skyline Freerun - Parkour Adventure Film",
    description: "Follow the world's best parkour athletes as they turn city skylines into their playground in this breathtaking adventure film.",
    tags: ["adventure", "parkour", "freerunning", "urban", "extreme"],
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 630000,
    uploadDate: "2026-01-26"
  },
  {
    id: "v49",
    title: "Meme Lords - Internet Culture Comedy",
    description: "A hilarious mockumentary about the people behind the internet's most famous memes and how they accidentally shaped modern culture.",
    tags: ["comedy", "memes", "internet", "mockumentary", "culture"],
    category: "Comedy",
    thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1200000,
    uploadDate: "2026-01-25"
  },
  {
    id: "v50",
    title: "Eternal Loop - Mind-Bending Sci-Fi Drama",
    description: "A scientist trapped in a time loop must solve the mystery of her own death before the loop collapses and erases her from existence.",
    tags: ["sci-fi", "time loop", "mystery", "mind-bending", "drama"],
    category: "Sci-Fi",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=340&fit=crop",
    embedCode: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    views: 1500000,
    uploadDate: "2026-01-24"
  }
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
