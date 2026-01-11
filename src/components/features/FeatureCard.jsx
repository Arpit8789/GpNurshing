import React from 'react';
import Card from '../shared/Card';

const FeatureCard = ({
  icon,
  title,
  description,
  accent = 'primary',
  className = '',
}) => {
  const accentClasses = {
    primary: 'bg-primary-50 text-primary-600',
    secondary: 'bg-secondary-50 text-secondary-600',
    accent: 'bg-accent-50 text-accent-600',
  };

  return (
    <Card
      padding="lg"
      className={`bg-white/90 backdrop-blur border border-neutral-100 hover:border-primary-200 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`h-9 w-9 rounded-xl flex items-center justify-center text-lg shadow-soft ${accentClasses[accent]}`}
          >
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-neutral-900">
            {title}
          </h3>
        </div>
        <p className="text-xs md:text-sm text-neutral-600">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
