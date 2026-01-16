import React from 'react';

/**
 * FuzzyOverlay Component
 * 
 * Renders a subtle, animated noise texture across the screen.
 * This gives the UI a more "premium" and physical feel.
 */
const FuzzyOverlay = () => {
    return (
        <div
            className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                filter: 'contrast(150%) brightness(100%)',
            }}
        >
            <div className="absolute inset-0 bg-transparent animate-pulse opacity-20" />
        </div>
    );
};

export default FuzzyOverlay;
