import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';

const FacilityCard = ({ facility, index }) => {
  // Define gradient colors based on index for variety
  const gradients = [
    'from-primary-500 to-primary-600',
    'from-secondary-500 to-secondary-600',
    'from-accent-500 to-accent-600',
    'from-purple-500 to-purple-600',
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-full"
    >
      <Card
        padding="none"
        className="h-full overflow-hidden bg-white hover:shadow-2xl transition-all border border-neutral-100 group"
      >
        {/* Icon header with gradient background */}
        <div className={`relative bg-gradient-to-br ${gradient} p-6 md:p-8 overflow-hidden`}>
          {/* Animated background effect */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 h-20 w-20 md:h-24 md:w-24 mx-auto rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl md:text-6xl shadow-2xl group-hover:scale-110 transition-transform"
          >
            {facility.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 text-center group-hover:text-primary-600 transition-colors">
            {facility.name}
          </h3>
          
          <p className="text-sm text-neutral-600 text-center mb-5 leading-relaxed">
            {facility.description}
          </p>

          {/* Features list */}
          {facility.highlights && facility.highlights.length > 0 && (
            <div className="space-y-2.5">
              {facility.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-2.5 bg-neutral-50 rounded-lg px-3 py-2.5 border border-neutral-100"
                >
                  <span className={`text-base flex-shrink-0 bg-gradient-to-br ${gradient} text-transparent bg-clip-text font-bold mt-0.5`}>
                    ✓
                  </span>
                  <span className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom badge */}
          {facility.available24x7 && (
            <div className="mt-5 pt-4 border-t border-neutral-100">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-600">Available 24x7</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default FacilityCard;
