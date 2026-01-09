import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/config/site";

// Custom SVG icons for X, Bluesky and Behance
const XIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const BlueskyIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
    {/* Left upper wing */}
    <ellipse cx="6" cy="8" rx="4" ry="5" opacity="0.9"/>
    {/* Left lower wing */}
    <ellipse cx="6" cy="14" rx="4" ry="4" opacity="0.9"/>
    {/* Right upper wing */}
    <ellipse cx="18" cy="8" rx="4" ry="5" opacity="0.9"/>
    {/* Right lower wing */}
    <ellipse cx="18" cy="14" rx="4" ry="4" opacity="0.9"/>
    {/* Body */}
    <ellipse cx="12" cy="12" rx="1" ry="7"/>
    {/* Antennae */}
    <circle cx="11" cy="4" r="0.5"/>
    <circle cx="13" cy="4" r="0.5"/>
    <path d="M11 4 L10 6 M13 4 L14 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const BehanceIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zM15.97 11.18h4.934c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.391.77-2.457 2.219zm-9.923 1.546h-2.87V8.373h2.87c1.511 0 2.304.756 2.304 1.91 0 1.09-.704 1.443-1.304 1.443zm.025-4.026h-2.84V3.91h2.84c1.381 0 2.055.642 2.055 1.851 0 1.119-.674 1.939-2.055 1.939z"/>
  </svg>
);

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-40">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-semibold text-foreground tracking-tight hover:opacity-90 transition-opacity">
            {siteConfig.name}
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `lowercase transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`
              }
              end
            >
              home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `lowercase transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`
              }
            >
              blogs
            </NavLink>
            <NavLink
              to="/journey"
              className={({ isActive }) =>
                `lowercase transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`
              }
            >
              journey
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={siteConfig.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <XIcon size={24} />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={siteConfig.socials.bluesky}
            target="_blank"
            rel="noreferrer"
            aria-label="Bluesky"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <BlueskyIcon size={24} />
          </a>
          <a
            href={siteConfig.socials.behance}
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <BehanceIcon size={24} />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
