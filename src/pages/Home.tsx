import { Suspense } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Shuffle from "@/components/Shuffle";
import RotatingText from "@/components/RotatingText";
import Dock from "@/components/Dock";
import { siteConfig } from "@/config/site";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name} - Portfolio</title>
        <meta name="description" content={siteConfig.bio} />
        <link rel="canonical" href={`${siteConfig.baseUrl}/`} />
      </Helmet>
      <main className="container mx-auto min-h-[calc(100svh-88px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - 3D Card */}
        <div className="hidden lg:block w-full h-full min-h-[500px] relative flex items-center justify-center">
          <model-viewer
            src="/card.glb"
            camera-controls
            tone-mapping="neutral"
            shadow-intensity="1"
            auto-rotate
            disable-tap
            interaction-prompt="none"
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
          ></model-viewer>
        </div>

        {/* Right Column - Content */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-first lg:order-last"
        >
          <div className="flex flex-col items-center lg:items-start mb-4">
            <Shuffle
              text="Hello, I’m"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              tag="h2"
              className="text-xl md:text-2xl text-muted-foreground mb-4 leading-normal"
              textAlign="left"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
            />
            <Shuffle
              text={siteConfig.name}
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              tag="h1"
              className="text-2xl md:text-4xl tracking-tight leading-normal"
              textAlign="left"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
            />
          </div>
          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            <span className="inline-flex items-center flex-wrap gap-2 text-justify justify-center lg:justify-start">
              <span>turning coffee, Code, and Curiosity into cool</span>
              <RotatingText
                texts={['creations', 'creativity']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white shadow-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-10 text-justify lg:text-left">
            {siteConfig.bio}
          </p>
          <Dock
            items={[
              {
                id: 'resume',
                label: 'Resume',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                href: '/resume.pdf',
                external: true,
              },
              {
                id: 'blog',
                label: 'Blog',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                ),
                href: '/blogs',
              },
              {
                id: 'journey',
                label: 'My Journey',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                href: '/journey',
              },
            ]}
          />

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
