import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import SpotifyBanner from "@/components/SpotifyBanner";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>{`Blogs — ${siteConfig.name}`}</title>
        <meta name="description" content={`Blog posts by ${siteConfig.name}`} />
        <link rel="canonical" href={`${siteConfig.baseUrl}/blogs`} />
      </Helmet>
      <main className="container mx-auto py-12 relative z-10">
        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Blogs</h1>
        </div>
        <div className="mb-8 flex justify-center">
          <div className="w-full md:max-w-3xl">
            <SpotifyBanner title="deja vu — Olivia Rodrigo" />
          </div>
        </div>
        <div style={{ perspective: 1000 }}>
          <motion.ul
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {siteConfig.blogs.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block rounded-lg border border-border p-5 hover:bg-secondary transition-colors"
                >
                  <h2 className="text-xl text-foreground mb-1">{post.title}</h2>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </Link>
              </li>
            ))}

          </motion.ul>
        </div>
      </main>
    </>
  );
};

export default Blogs;
