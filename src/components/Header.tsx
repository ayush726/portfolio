import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/config/site";

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
            <Linkedin size={20} />
          </a>
          <a
            href={siteConfig.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
