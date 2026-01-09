import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ScrambleText from "@/components/ScrambleText";
import { siteConfig } from "@/config/site";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{`${siteConfig.name} — Portfolio`}</title>
        <meta
          name="description"
          content={`${siteConfig.name} personal portfolio. ${siteConfig.bio.slice(0, 120)}`}
        />
        <link rel="canonical" href={`${siteConfig.baseUrl}/`} />
      </Helmet>
      <main className="container mx-auto min-h-[calc(100svh-88px)] flex items-center justify-center">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
            <ScrambleText text="Hello,I’m " className="inline-block mr-2" durationMs={1000} />
            <ScrambleText text={siteConfig.name} className="inline-block" durationMs={1000} />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            <ScrambleText text="turning Coffee ☕, Code 💻, and Curiosity 🔍 into cool creations with creativity." className="inline-block" durationMs={1200} />
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 text-justify">
            {siteConfig.bio}
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              resume
            </a>
            <Link
              to="/blogs"
              className="px-5 py-2 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              blog
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Link
              to="/journey"
              className="px-5 py-2 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              my journey
            </Link>
          </div>
          <div className="fixed bottom-4 right-4 text-xs text-muted-foreground text-right">
            <span className="block">Feeling too hot or too cold ?</span>
            <a
              href="https://ayush726.github.io/project_22053413/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              check out the weather of your city here
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
