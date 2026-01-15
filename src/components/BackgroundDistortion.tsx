/**
 * BackgroundDistortion Component
 * 
 * Creates a dynamic, theme-aware background with grid distortion effects.
 * Generates gradients using HTML5 Canvas API and applies distortion effects
 * that respond to mouse movement.
 * 
 * @component
 * @example
 * ```tsx
 * <BackgroundDistortion />
 * ```
 * 
 * Features:
 * - Theme-aware gradients (dark blue for dark mode, grey for light mode)
 * - Canvas-based gradient generation for performance
 * - Mouse-responsive distortion effects
 * - Automatically updates when theme changes
 */

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import GridDistortion from './GridDistortion';

const BackgroundDistortion = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [gradientUrl, setGradientUrl] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const isDark = currentTheme === 'dark';

    // Generate gradient based on theme
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      let gradient: CanvasGradient;

      if (isDark) {
        // Dark blue gradient
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'hsl(220, 60%, 15%)');
        gradient.addColorStop(0.5, 'hsl(220, 55%, 20%)');
        gradient.addColorStop(1, 'hsl(215, 50%, 25%)');
      } else {
        // Darker grey for better visibility in light mode
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'hsl(0, 0%, 80%)');
        gradient.addColorStop(0.5, 'hsl(0, 0%, 75%)');
        gradient.addColorStop(1, 'hsl(0, 0%, 70%)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      setGradientUrl(canvas.toDataURL('image/png'));
    }
  }, [theme, resolvedTheme, mounted]);

  if (!mounted || !gradientUrl) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <GridDistortion
        imageSrc={gradientUrl}
        grid={10}
        mouse={0.1}
        strength={0.4}
        relaxation={0.9}
        className="w-full h-full"
      />
    </div>
  );
};

export default BackgroundDistortion;
