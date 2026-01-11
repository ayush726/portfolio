import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialLink {
    label: string;
    href: string;
}

interface SocialsMenuProps {
    links: SocialLink[];
}

const SocialsMenu: React.FC<SocialsMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                aria-expanded={isOpen}
                aria-label="Social links menu"
            >
                Socials
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl overflow-hidden z-50"
                        >
                            <div className="py-2">
                                {links.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SocialsMenu;
