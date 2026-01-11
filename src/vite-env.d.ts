/// <reference types="vite/client" />

declare module '*.glb';
declare module '*.png';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': any;
        }
    }
}
