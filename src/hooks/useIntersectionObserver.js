// Custom hook for Intersection Observer API

import { useEffect, useState, useRef } from 'react';

/**
 * Hook to observe element intersection with viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Object} { ref, isIntersecting, entry }
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.root, defaultOptions.rootMargin]);

  return { ref, isIntersecting, entry };
};

/**
 * Hook to observe multiple elements
 * @param {Object} options - Intersection Observer options
 * @returns {Object} { addRef, entries }
 */
export const useMultipleIntersectionObserver = (options = {}) => {
  const [entries, setEntries] = useState(new Map());
  const observerRef = useRef(null);
  const elementsRef = useRef(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver((observedEntries) => {
      setEntries((prev) => {
        const newEntries = new Map(prev);
        observedEntries.forEach((entry) => {
          newEntries.set(entry.target, entry);
        });
        return newEntries;
      });
    }, options);

    // Observe existing elements
    elementsRef.current.forEach((element) => {
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  const addRef = (key) => (element) => {
    if (element && !elementsRef.current.has(key)) {
      elementsRef.current.set(key, element);
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    }
  };

  return { addRef, entries };
};

/**
 * Hook for lazy loading images
 * @returns {Object} { ref, isVisible, hasLoaded }
 */
export const useLazyLoad = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasLoaded]);

  return { ref, isVisible, hasLoaded };
};

/**
 * Hook to trigger callback when element enters viewport
 * @param {Function} callback - Function to call when element is visible
 * @param {Object} options - Intersection Observer options
 * @returns {Object} ref
 */
export const useInViewport = (callback, options = {}) => {
  const ref = useRef(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callbackRef.current(entry);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return ref;
};

export default useIntersectionObserver;
