import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../shared/Card';
import AnimatedSection from '../shared/AnimatedSection';

const tourStops = [
  {
    id: 1,
    name: 'Reception & Waiting Area',
    icon: '🏢',
    image: '/images/tour/reception.webp',
    description: 'Spacious, air-conditioned waiting area with comfortable seating and patient information desk.',
  },
  {
    id: 2,
    name: 'Operation Theaters',
    icon: '⚕️',
    image: '/images/tour/operation-theater.jpg',
    description: 'State-of-the-art modular OTs equipped with advanced surgical technology and sterile environment.',
  },
  {
    id: 3,
    name: 'ICU & Critical Care',
    icon: '🏥',
    image: '/images/tour/icu.jpg',
    description: 'Fully-equipped ICU with 24x7 monitoring, ventilators, and dedicated critical care specialists.',
  },
  {
    id: 4,
    name: 'Patient Rooms',
    icon: '🛏️',
    image: '/images/tour/patient-room.jpg',
    description: 'Clean, comfortable private and semi-private rooms with attached bathrooms and attendant facilities.',
  },
  {
    id: 5,
    name: 'Diagnostic Lab',
    icon: '🔬',
    image: '/images/tour/lab.jpg',
    description: 'Modern pathology and radiology lab with digital X-ray, ultrasound, and quick report generation.',
  },
  {
    id: 6,
    name: 'Pharmacy',
    icon: '💊',
    image: '/images/tour/pharmacy.jpg',
    description: '24x7 in-house pharmacy stocked with all essential medicines and surgical supplies.',
  },
];

const VirtualTour = () => {
  const [activeStop, setActiveStop] = useState(tourStops[0]);

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 right-20 h-64 w-64 rounded-full bg-accent-200 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-primary-200 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-500 mb-3"
            >
              Virtual Hospital Tour
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4"
            >
              Explore our hospital facilities.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Take a virtual walk through our modern infrastructure and see how we create a healing environment for our patients.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Left: Tour navigation */}
            <div className="lg:col-span-1 space-y-3">
              {tourStops.map((stop, index) => (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Card
                    padding="md"
                    className={`cursor-pointer transition-all ${
                      activeStop.id === stop.id
                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-2xl scale-105 border-2 border-accent-400'
                        : 'bg-white hover:bg-neutral-50 border border-neutral-200 hover:shadow-lg'
                    }`}
                    onClick={() => setActiveStop(stop)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 ${
                          activeStop.id === stop.id
                            ? 'bg-white/20 backdrop-blur-sm'
                            : 'bg-neutral-100'
                        }`}
                      >
                        {stop.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-sm md:text-base font-bold mb-0.5 truncate ${
                            activeStop.id === stop.id ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {stop.name}
                        </h4>
                        <p
                          className={`text-xs ${
                            activeStop.id === stop.id ? 'text-white/80' : 'text-neutral-500'
                          }`}
                        >
                          Click to view
                        </p>
                      </div>
                      <motion.span
                        animate={activeStop.id === stop.id ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`text-xl ${
                          activeStop.id === stop.id ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        →
                      </motion.span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right: Active tour stop display */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStop.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card padding="none" className="overflow-hidden shadow-2xl border-2 border-neutral-200">
                    {/* Image placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="text-9xl opacity-20"
                        >
                          {activeStop.icon}
                        </motion.div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        360° View
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-4xl md:text-5xl shadow-xl flex-shrink-0">
                          {activeStop.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                            {activeStop.name}
                          </h3>
                          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                            {activeStop.description}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:shadow-xl transition-all hover:scale-105">
                          🎥 Watch Video Tour
                        </button>
                        <button className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-neutral-200 text-neutral-700 px-5 py-3 rounded-xl font-semibold text-sm hover:bg-neutral-50 hover:shadow-md transition-all">
                          📸 View Gallery
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VirtualTour;
