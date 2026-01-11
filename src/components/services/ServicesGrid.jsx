import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import ServiceCard from './ServiceCard';
import AnimatedSection from '../shared/AnimatedSection';
import { services } from '../../data/services';

const ServicesGrid = ({ onServiceSelect }) => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/30 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary-200/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-secondary-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Floating medical icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-5xl opacity-5"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🏥
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-5xl opacity-5"
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
        >
          ⚕️
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Medical Services"
          title="Comprehensive care for every health need."
          description="From preventive check-ups to specialized treatments, our multi-specialty hospital offers advanced medical care delivered by experienced doctors using modern technology."
          centered
          accentColor="primary"
        />

        <AnimatedSection animation="fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <ServiceCard
                  service={service}
                  onSelect={() => onServiceSelect(service)}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-xl border border-neutral-200">
            <div className="flex items-center gap-3">
              <span className="text-4xl">💡</span>
              <div className="text-left">
                <p className="text-sm font-bold text-neutral-900">Not sure which service you need?</p>
                <p className="text-xs text-neutral-600">Talk to our medical team for guidance</p>
              </div>
            </div>
            <a
              href="tel:+91-8789658518"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
