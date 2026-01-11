import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../utils/constants';
import { countUpVariants, staggerContainer, staggerItem } from '../../utils/animations';
import { formatNumber } from '../../utils/helpers';

const statsList = [
  {
    id: 1,
    label: 'Patients cared for',
    value: STATS.patientsServed,
    suffix: '+',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    label: 'Years of service',
    value: STATS.yearsOfService,
    suffix: '+',
    icon: '📅',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    id: 3,
    label: 'Specialist doctors',
    value: STATS.specialists,
    suffix: '+',
    icon: '🩺',
    color: 'from-accent-500 to-accent-600',
  },
  {
    id: 4,
    label: 'Success rate',
    value: STATS.successRate,
    suffix: '%',
    icon: '✅',
    color: 'from-success to-secondary-600',
  },
];

const QuickStats = () => {
  return (
    <section className="bg-gradient-to-b from-white to-neutral-50 py-12 md:py-16 border-y border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {statsList.map((stat) => (
            <motion.div
              key={stat.id}
              className="group relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              {/* Content */}
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-2xl bg-white px-4 py-5 md:px-5 md:py-6 shadow-soft hover:shadow-medium transition-all border border-neutral-100">
                <div className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-soft flex-shrink-0`}>
                  <span className="text-2xl md:text-3xl">{stat.icon}</span>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <motion.span
                    className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
                    variants={countUpVariants}
                  >
                    {formatNumber(stat.value)}
                    {stat.suffix}
                  </motion.span>
                  <span className="text-xs md:text-sm text-neutral-600 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStats;
