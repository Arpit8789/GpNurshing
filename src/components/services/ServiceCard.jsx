import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';

const ServiceCard = ({ service, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        padding="none"
        className="h-full overflow-hidden bg-white hover:shadow-2xl transition-all border border-neutral-100 group cursor-pointer"
        onClick={onSelect}
      >
        {/* Icon header with gradient */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-6 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="h-16 w-16 md:h-18 md:w-18 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl md:text-5xl shadow-lg group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            
            {service.featured && (
              <span className="inline-flex items-center gap-1 bg-accent-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                ⭐ Popular
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {service.name}
          </h3>
          
          <p className="text-sm text-neutral-600 mb-4 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Key features */}
          {service.keyFeatures && service.keyFeatures.length > 0 && (
            <div className="space-y-2 mb-4">
              {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                  <span className="text-primary-500 mt-0.5">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Learn More
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary-600 text-lg font-bold"
            >
              →
            </motion.span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
