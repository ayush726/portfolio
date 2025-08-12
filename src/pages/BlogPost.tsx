import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";
import SpotifyBanner from "@/components/SpotifyBanner";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = siteConfig.blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <main className="container mx-auto py-16">
        <h1 className="text-2xl text-foreground">Post not found</h1>
      </main>
    );
  }

  const url = `${siteConfig.baseUrl}/blogs/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} — ${siteConfig.name}`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main className="container mx-auto py-12">
        <div className="mb-8 flex justify-center">
          <div className="w-full md:max-w-3xl">
            <SpotifyBanner title="deja vu — Olivia Rodrigo" />
          </div>
        </div>
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="prose prose-invert max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">{new Date(post.date).toDateString()}</p>
          <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {post.content}
          </div>
          {/* Attachments example: Uncomment attachments in siteConfig.blogs to enable */}
          {post.attachments && post.attachments.length > 0 && (
            <Collapsible>
              <div className="mt-6 flex justify-end">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="group h-8 px-2 text-xs">
                    Attachments
                    <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {post.attachments.map((img, i) => (
                    <a key={`${post.slug}-${i}`} href={img.src} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={img.src}
                        alt={img.alt ?? `attachment ${i + 1}`}
                        className="w-full h-28 object-cover rounded-md border border-border"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </motion.article>
      </main>
    </>
  );
};

export default BlogPost;
