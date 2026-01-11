export type Blog = {
  slug: string;
  title: string;
  date: string; // ISO string
  excerpt: string;
  content: string;
  attachments?: { src: string; alt?: string }[] | null;
};

// Dynamically load all blog JSON files from the content/blogs folder
const blogModules = import.meta.glob<Blog>('@/content/blogs/*.json', { eager: true });

// Convert the imported modules to an array of blogs
const loadBlogs = (): Blog[] => {
  return Object.values(blogModules)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date, newest first
};

export const siteConfig = {
  baseUrl: "",
  name: "Ayush  Keshri",
  bio:
    "an enthusiastic explorer who blends curiosity, creativity, and technology to turn ideas into reality. From diving deep into tech to experimenting with new skills, I enjoy building things, learning along the way, and collaborating with people who share the drive to create something meaningful.",
    
  socials: {
    linkedin: "https://www.linkedin.com/in/ayush-k-1599aa2b7/",
    twitter: "https://x.com/Ayush77852132",
    instagram: "https://www.instagram.com/_ayush_x0/",
    facebook: "https://www.facebook.com/profile.php?id=100023345181272",
    github: "https://github.com/ayush726",
    bluesky: "https://bsky.app/profile/ayush28.bsky.social",
    behance: "https://www.behance.net/astacidayush",
  },
  blogs: loadBlogs(),
};
