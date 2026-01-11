import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  stagger = false,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  const animations = {
    fadeInUp,
    staggerContainer,
  };

  const selectedAnimation = animations[animation] || fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={stagger ? staggerContainer : selectedAnimation}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
