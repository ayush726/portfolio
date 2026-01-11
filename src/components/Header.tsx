import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SocialsMenu from "./SocialsMenu";
import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 relative">
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
          <SocialsMenu
            links={[
              { label: 'LinkedIn', href: siteConfig.socials.linkedin },
              { label: 'X (Twitter)', href: siteConfig.socials.twitter },
              { label: 'Instagram', href: siteConfig.socials.instagram },
              { label: 'Facebook', href: siteConfig.socials.facebook },
              { label: 'GitHub', href: siteConfig.socials.github },
              { label: 'Bluesky', href: siteConfig.socials.bluesky },
              { label: 'Behance', href: siteConfig.socials.behance },
            ]}
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
