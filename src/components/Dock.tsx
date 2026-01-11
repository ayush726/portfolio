import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DockItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
    external?: boolean;
}

interface DockProps {
    items: DockItem[];
}

const Dock: React.FC<DockProps> = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const mouseX = useRef<number>(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.current = e.clientX;
    };

    const getScale = (index: number) => {
        if (hoveredIndex === null) return 1;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 1.5;
        if (distance === 1) return 1.25;
        if (distance === 2) return 1.1;
        return 1;
    };

    return (
        <div className="flex items-end justify-start gap-2 p-2">
            <motion.div
                className="flex items-end gap-4 bg-background/80 backdrop-blur-xl border border-border rounded-2xl px-3 py-2 shadow-2xl"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {items.map((item, index) => {
                    const scale = getScale(index);
                    const content = (
                        <motion.div
                            key={item.id}
                            className="relative flex flex-col items-center cursor-pointer group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            animate={{
                                scale,
                                y: hoveredIndex === index ? -8 : 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 25,
                            }}
                        >
                            {/* Icon container */}
                            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors">
                                {item.icon}
                            </div>

                            {/* Label tooltip */}
                            <motion.div
                                className="absolute -top-10 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    y: hoveredIndex === index ? 0 : 5,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                            </motion.div>
                        </motion.div>
                    );

                    if (item.href) {
                        if (item.external) {
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline"
                                >
                                    {content}
                                </a>
                            );
                        }
                        return (
                            <Link key={item.id} to={item.href} className="no-underline">
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <div key={item.id} onClick={item.onClick}>
                            {content}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Dock;
