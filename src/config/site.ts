export type Blog = {
  slug: string;
  title: string;
  date: string; // ISO string
  excerpt: string;
  content: string;
  attachments?: { src: string; alt?: string }[];
};

export const siteConfig = {
  baseUrl: "",
  name: "Ayush Keshri",
  bio:
    "an enthusiastic explorer who blends curiosity, creativity, and technology to turn ideas into reality. From diving deep into tech to experimenting with new skills, I enjoy building things, learning along the way, and collaborating with people who share the drive to create something meaningful.",
    
  socials: {
    linkedin: "https://www.linkedin.com/in/ayush-k-1599aa2b7/",
    twitter: "https://x.com/Ayush77852132",
    instagram: "https://www.instagram.com/_ayush_x0/",
    facebook: "https://www.facebook.com/profile.php?id=100023345181272",
    github: "https://github.com/ayush726",
  },
  blogs: [
    {
      slug: "the-intern",
      title: "First Internship",
      date: "2025-01-01",
      excerpt:
        "A small detail about my first internship experience",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      // attachments: [
      //   { src: "/icon.jpg", alt: "Sample attachment" },
      //   { src: "/journey/2025/photo-1.jpg", alt: "Talk at meetup" },
      // ],
    },
    {
      slug: "the-college",
      title: "Four years of college",
      date: "2025-01-01",
      excerpt:
        "A small detail about my first internship experience",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ] as Blog[],
};
