import React from "react";

type SpotifyBannerProps = {
  src?: string;
  title?: string;
};

const DEFAULT_SRC =
  "https://open.spotify.com/embed/track/6HU7h9RYOaPRFeh0R3UeAr?utm_source=generator&theme=0"; // deja vu — Olivia Rodrigo

const SpotifyBanner: React.FC<SpotifyBannerProps> = ({ src = DEFAULT_SRC, title = "Spotify embed" }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] sm:w-[70%] md:w-[60%] rounded-xl overflow-hidden border border-border bg-sky-50/10 backdrop-blur-sm shadow-sm">
        <iframe
          title={title}
          style={{ borderRadius: 12 }}
          src={src}
          width="100%"
          height="152"
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SpotifyBanner;


