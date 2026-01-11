import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../../utils/animations';

const Card = ({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl transition-all duration-300';

  const variants = {
    default: 'shadow-soft hover:shadow-medium',
    elevated: 'shadow-medium hover:shadow-hard',
    outlined: 'border-2 border-neutral-200 hover:border-primary-300',
    flat: 'shadow-none',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const cardClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${paddings[padding]}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const CardComponent = hover ? motion.div : 'div';

  const motionProps = hover
    ? {
        initial: 'rest',
        whileHover: 'hover',
        variants: cardHoverVariants,
      }
    : {};

  return (
    <CardComponent
      className={cardClasses}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

// Card Sub-components
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-neutral-200 ${className}`}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '', height = 'auto' }) => (
  <div className={`-m-6 mb-4 overflow-hidden rounded-t-xl ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full object-cover"
      style={{ height }}
      loading="lazy"
    />
  </div>
);

export default Card;
