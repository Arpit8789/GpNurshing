import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import FacilityCard from './FacilityCard';
import AnimatedSection from '../shared/AnimatedSection';
import { facilities } from '../../data/facilities';

const FacilitiesSection = () => {
  return (
    <section
      id="facilities"
      className="relative bg-gradient-to-br from-white via-secondary-50/20 to-accent-50/20 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-secondary-200/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 h-72 w-72 rounded-full bg-accent-200/25 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Floating facility icons */}
        <motion.div
          className="absolute top-20 left-1/4 text-6xl opacity-5"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🏥
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 text-5xl opacity-5"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        >
          🔬
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="World-Class Infrastructure"
          title="Modern facilities for better healthcare."
          description="Our hospital is equipped with state-of-the-art medical technology and comfortable spaces designed to support healing and recovery at every stage of your treatment."
          centered
          accentColor="secondary"
        />

        <AnimatedSection animation="fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <FacilityCard facility={facility} index={index} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-10 shadow-2xl">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl md:text-5xl flex-shrink-0"
                >
                  🏆
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                    NABH-Accredited Standards
                  </h3>
                  <p className="text-sm md:text-base text-white/90">
                    Following national quality protocols for patient safety and care excellence
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
                  <p className="text-xs text-white/80 mb-1">Clean Environment</p>
                  <p className="text-xl md:text-2xl font-bold text-white">100%</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
                  <p className="text-xs text-white/80 mb-1">Safety Standards</p>
                  <p className="text-xl md:text-2xl font-bold text-white">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
