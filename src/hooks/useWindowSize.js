// Custom hook for responsive window size detection

import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';
import { BREAKPOINTS } from '../utils/constants';

/**
 * Hook to get current window dimensions
 * @returns {Object} { width, height }
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 150);

    window.addEventListener('resize', handleResize);

    // Initial call
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

/**
 * Hook to detect current breakpoint
 * @returns {string} Current breakpoint name
 */
export const useBreakpoint = () => {
  const { width } = useWindowSize();

  const getBreakpoint = (width) => {
    if (width < BREAKPOINTS.mobile) return 'xs';
    if (width < BREAKPOINTS.tablet) return 'sm';
    if (width < BREAKPOINTS.laptop) return 'md';
    if (width < BREAKPOINTS.desktop) return 'lg';
    return 'xl';
  };

  return getBreakpoint(width);
};

/**
 * Hook to check if screen is mobile
 * @returns {boolean} Is mobile
 */
export const useIsMobile = () => {
  const { width } = useWindowSize();
  return width < BREAKPOINTS.tablet;
};

/**
 * Hook to check if screen is tablet
 * @returns {boolean} Is tablet
 */
export const useIsTablet = () => {
  const { width } = useWindowSize();
  return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.laptop;
};

/**
 * Hook to check if screen is desktop
 * @returns {boolean} Is desktop
 */
export const useIsDesktop = () => {
  const { width } = useWindowSize();
  return width >= BREAKPOINTS.laptop;
};

/**
 * Hook for media query matching
 * @param {string} query - Media query string
 * @returns {boolean} Does match
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    
    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } 
    // Older browsers
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

/**
 * Hook to detect orientation
 * @returns {string} 'portrait' or 'landscape'
 */
export const useOrientation = () => {
  const { width, height } = useWindowSize();
  return width > height ? 'landscape' : 'portrait';
};

/**
 * Hook to get viewport info
 * @returns {Object} Comprehensive viewport information
 */
export const useViewport = () => {
  const { width, height } = useWindowSize();
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const orientation = useOrientation();

  return {
    width,
    height,
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    orientation,
  };
};

export default useWindowSize;
