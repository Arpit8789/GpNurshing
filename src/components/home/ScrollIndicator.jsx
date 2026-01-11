import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative flex justify-center -mt-6 md:-mt-8 mb-6 md:mb-0">
      <button
        onClick={scrollToNext}
        className="group inline-flex flex-col items-center gap-2 text-xs text-neutral-500 hover:text-neutral-700 transition"
        aria-label="Scroll to next section"
      >
        <span className="uppercase tracking-[0.2em] text-[10px] text-neutral-400">
          Scroll
        </span>
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-neutral-300 group-hover:border-primary-500 transition-colors flex items-start justify-center p-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-2 w-1 rounded-full bg-primary-500" />
        </motion.div>
      </button>
    </div>
  );
};

export default ScrollIndicator;
