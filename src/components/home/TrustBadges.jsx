import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import Card from '../shared/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';

const badges = [
  {
    id: 1,
    label: 'Multi-Specialty Care',
    description: 'Complete family healthcare under one roof with coordinated care across departments.',
    icon: '🏥',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    label: 'Experienced Doctors',
    description: 'Senior consultants with years of experience in leading hospitals across India.',
    icon: '👨‍⚕️',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    id: 3,
    label: '24x7 Emergency',
    description: 'Round-the-clock emergency, ambulance, and critical care support when you need it most.',
    icon: '🚑',
    gradient: 'from-error to-red-600',
  },
  {
    id: 4,
    label: 'Patient-First Approach',
    description: 'Clear communication, ethical treatment, and compassionate care at every step of your journey.',
    icon: '❤️',
    gradient: 'from-accent-500 to-accent-600',
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why families trust us"
          title="Built on trust, driven by results."
          description="Every year, thousands of patients from Patna and nearby districts choose GP Nursing Hospital for dependable, ethical, and modern medical care."
          centered
          accentColor="primary"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {badges.map((badge) => (
            <motion.div 
              key={badge.id} 
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                variant="default" 
                padding="lg" 
                className="h-full bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-200 group"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon with gradient */}
                  <div className="flex items-center gap-3">
                    <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center text-2xl md:text-3xl shadow-soft transform group-hover:scale-110 transition-transform`}>
                      {badge.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {badge.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
