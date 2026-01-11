import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const SectionHeader = ({
  subtitle = '',
  title,
  description = '',
  centered = false,
  accentColor = 'primary',
  className = '',
}) => {
  const alignmentClass = centered ? 'text-center mx-auto' : 'text-left';
  const maxWidthClass = centered ? 'max-w-3xl' : 'max-w-4xl';

  const accentColors = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    accent: 'text-accent-500',
  };

  return (
    <motion.div
      className={`mb-12 ${alignmentClass} ${maxWidthClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {subtitle && (
        <motion.p
          className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-3 ${accentColors[accentColor]}`}
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-base md:text-lg text-neutral-600 leading-relaxed"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative underline for centered headers */}
      {centered && (
        <motion.div
          className="flex justify-center mt-6"
          variants={fadeInUp}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
