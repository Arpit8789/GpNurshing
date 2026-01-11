import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { slideVariants } from '../../utils/animations';

/**
 * Slider logic:
 * - Shows 1 card on mobile, 2 on tablet, 3 on desktop
 * - Auto-rotates every 6s
 * - Infinite looping feel (index wraps around)
 */
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesPerView(1);
      else if (width < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const length = testimonials.length;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return length - 1;
      if (next >= length) return 0;
      return next;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  });

  // Compute visible items
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < slidesPerView; i++) {
      items.push(testimonials[(index + i) % length]);
    }
    return items;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative">
      {/* Slider content */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${index}-${slidesPerView}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 200, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {visibleTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => paginate(-1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() => paginate(1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center gap-1.5">
          {testimonials.slice(0, 8).map((t, i) => {
            const active = (index % length) === i;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setDirection(1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  active
                    ? 'w-5 bg-primary-500'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
