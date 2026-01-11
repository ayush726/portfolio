import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

type TimelineItem = {
  year: string;
  items: string[];
};

const timeline: TimelineItem[] = [
  {
    year: "September 2022",
    items: [
      "Joined B.Tech in Computer Science and Engineering at KIIT University, Bhubaneswar, Odisha",
      "applied to a different college for higher studies, but my goal remained the same — to pursue a career in tech. As an enthusiastic observer of our fast-changing, revolutionary world, I felt that if I didn’t learn technology, I’d struggle to keep pace with it. Sure, I could have simply watched tech news to stay updated, but I wanted to go beyond the headlines — to get inside it, understand it deeply, and explore it right down to its roots.",
      
    ]
  },
  {
    year: "2022",
    items: [
      "Graduated (Senior-Secondary School)",
      "yeah from the same St. Karen's Secoundary School, Patna, Bihar",
      "Education: CBSE",
      "Percentage: 67%",
      "When COVID struck, I decided not to switch schools and continued in the same one. The first two semesters were entirely online — I attended every class, but often from under my blanket, half-asleep :p. This was also the time I got my first smartphone :D Maths was boring, but I managed to cope with it well — something I’m still proud of. Physics quickly became my favorite subject, while chemistry was my least favorite. My elective was economics… and to this day, I’m not sure why I chose it.Then came another COVID wave, which unfortunately caught up with me, making me a bit sick and slightly affecting my exams :( .",
      "Still, I made some amazing friends, shared great moments, and we even managed to organize a farewell to properly say goodbye to all our teachers.Those two years were tough and challenging, but they turned out to be a meaningful learning journey one I’ll carry with me for the rest of my life."
    ]
  },
  {
    year: "2020",
    items: [
      "Graduated (Secondary School)",
      "From St. Karen's Secoundary School, Patna, Bihar",
      "Education: CBSE",
      "Percentage: 81%",
      "was an enthusiastic yet introverted kid not a topper, but an average scorer in studies with a passion for indulging in every sport, be it badminton, cricket, volleyball, long jump, high jump, relay races, carrom, and more. I was my mom’s favorite, often volunteering for tasks and events. While I enjoyed most activities, I always had a strong dislike for history and Sanskrit."
    ]
  },
];

const Journey = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} Journey Timeline`,
    itemListElement: timeline.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.year,
      item: `${siteConfig.baseUrl}/journey#${t.year}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{`${siteConfig.name} — my Journey`}</title>
        <meta
          name="description"
          content={`Explore ${siteConfig.name}'s journey timeline by year.`}
        />
        <link rel="canonical" href={`${siteConfig.baseUrl}/journey`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main className="container mx-auto min-h-[calc(100svh-88px)] py-12 relative z-10">
        <motion.section
          initial={{ opacity: 0, rotateX: 8, y: 12 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              My Journey
            </h1>
            <p className="mt-3 text-muted-foreground">
              A timeline of my milestones.
            </p>
          </header>

          <section aria-label="Timeline" className="space-y-8">
            {timeline.map((t) => (
              <article key={t.year} id={t.year} className="">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-foreground">{t.year}</h2>
                </div>

                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                  {t.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </motion.section>
      </main>
    </>
  );
};

export default Journey;
