import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({
  size = 'md',
  color = 'primary',
  fullScreen = false,
  text = '',
}) => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const colors = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-500',
    accent: 'border-accent-500',
    white: 'border-white',
  };

  const spinnerClasses = `
    ${sizes[size]}
    border-4
    ${colors[color]}
    border-t-transparent
    rounded-full
    animate-spin
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={spinnerClasses}></div>
      {text && (
        <motion.p
          className="text-neutral-600 text-sm md:text-base font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
};

// Skeleton Loader Component
export const SkeletonLoader = ({ className = '', variant = 'text' }) => {
  const variants = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    circle: 'h-12 w-12 rounded-full',
    rectangle: 'h-32 w-full',
    card: 'h-64 w-full',
  };

  return (
    <div
      className={`${variants[variant]} bg-neutral-200 animate-pulse rounded ${className}`}
    ></div>
  );
};

// Dots Loader
export const DotsLoader = ({ color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  };

  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 rounded-full ${colors[color]}`}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

// Pulse Loader
export const PulseLoader = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} ${colors[color]} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
