import { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  durationMs?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]<>?/";

const ScrambleText = ({ text, className, durationMs }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);
  const startTime = useRef<number>(0);
  const duration = durationMs ?? 1200; // ms

  const handleMouseEnter = () => {
    cancelAnim();
    startTime.current = performance.now();
    animate(startTime.current);
  };

  const cancelAnim = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  };

  const animate = (t0: number) => {
    const step = (now: number) => {
      const progress = Math.min(1, (now - t0) / duration);
      const out = text
        .split("")
        .map((ch, i) => {
          const pct = Math.min(1, Math.max(0, progress * 1.5 - i / text.length));
          if (pct < 1 && ch.trim()) {
            const idx = Math.floor(Math.random() * CHARS.length);
            return CHARS[idx];
          }
          return ch;
        })
        .join("");
      setDisplay(out);
      if (progress < 1) {
        frame.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
        cancelAnim();
      }
    };
    frame.current = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelAnim(), []);

  useEffect(() => setDisplay(text), [text]);

  return (
    <span onMouseEnter={handleMouseEnter} className={className}>
      {display}
    </span>
  );
};

export default ScrambleText;
