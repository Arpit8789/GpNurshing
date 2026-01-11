// Custom hook for scroll-based animations

import { useEffect, useState } from 'react';
import { throttle } from '../utils/helpers';

/**
 * Hook to detect scroll direction and position
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {Object} Scroll state
 */
export const useScrollAnimation = (threshold = 100) => {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = throttle(() => {
      const currentScrollY = window.pageYOffset;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = currentScrollY > threshold;
      const isAtTop = currentScrollY < 50;
      const isAtBottom = 
        window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection,
        isScrolled,
        isAtTop,
        isAtBottom,
      });

      lastScrollY = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollState;
};

/**
 * Hook to detect if element is in viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isVisible]
 */
export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animation triggers once)
          observer.unobserve(ref);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

/**
 * Hook for parallax scroll effect
 * @param {number} speed - Parallax speed (0.1 to 1)
 * @returns {number} Transform value
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setOffset(window.pageYOffset * speed);
    }, 50);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return offset;
};

/**
 * Hook to detect scroll progress (0 to 100)
 * @returns {number} Scroll progress percentage
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

export default useScrollAnimation;
