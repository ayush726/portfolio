/// <reference types="vite/client" />

declare module '*.glb';
declare module '*.png';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                'camera-controls'?: boolean;
                'tone-mapping'?: string;
                'shadow-intensity'?: string;
                'auto-rotate'?: boolean;
                'disable-tap'?: boolean;
                'interaction-prompt'?: string;
            };
        }
    }
}
