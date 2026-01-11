import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { SITE_CONFIG, STATS } from '../../utils/constants';

const Hero = ({ onOpenAppointment }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 pt-20"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 md:h-96 md:w-96 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 h-64 w-64 md:h-80 md:w-80 rounded-full bg-secondary-400/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 h-56 w-56 md:h-64 md:w-64 rounded-full bg-accent-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Floating medical icons - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute top-20 left-10 text-5xl lg:text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ⚕️
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-4xl lg:text-5xl"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          💊
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-3xl lg:text-4xl"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          🩺
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2 md:px-4 md:py-2 mb-6"
            >
              <span className="text-xl md:text-2xl">⭐</span>
              <span className="text-xs md:text-sm font-semibold">
                Trusted Multi-Specialty Care in Patna
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 md:mb-6"
            >
              Compassionate care.{' '}
              <span className="text-accent-300">Advanced medicine.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed"
            >
              {SITE_CONFIG.name} brings together experienced doctors, modern
              infrastructure, and 24/7 emergency care so you and your family feel
              safe at every step.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 justify-center lg:justify-start"
            >
              <Button
                variant="white"
                size="lg"
                onClick={onOpenAppointment}
                className="group shadow-2xl hover:shadow-accent-500/50"
              >
                <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                  📅 Book Appointment
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 transition-all text-sm md:text-base"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Quick stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-white/90"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/10">
                <span className="text-2xl md:text-3xl">👨‍⚕️</span>
                <div>
                  <p className="text-xl md:text-2xl font-bold">{STATS.specialists}+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Specialists</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/10">
                <span className="text-2xl md:text-3xl">❤️</span>
                <div>
                  <p className="text-xl md:text-2xl font-bold">{STATS.patientsServed.toLocaleString()}+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Patients Treated</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/10">
                <span className="text-2xl md:text-3xl">🏥</span>
                <div>
                  <p className="text-xl md:text-2xl font-bold">{STATS.yearsOfService}+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Years of Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Glassmorphic card with emergency highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-lg mx-auto lg:max-w-none"
          >
            {/* Main glasscard */}
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-6 md:p-8 lg:p-10">
              {/* Emergency badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 20px rgba(239, 68, 68, 0.4)',
                    '0 0 40px rgba(239, 68, 68, 0.7)',
                    '0 0 20px rgba(239, 68, 68, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-error text-white rounded-xl md:rounded-2xl px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-bold shadow-lg"
              >
                🚨 24x7 Emergency
              </motion.div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 pr-8">
                Immediate Care When Every Second Matters
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                Dedicated emergency team, ambulance services, and critical care
                support available round the clock.
              </p>

              {/* Emergency phone */}
              <div className="flex items-center gap-3 md:gap-4 bg-white/10 rounded-xl p-3 md:p-4 backdrop-blur-xl border border-white/10 mb-5 md:mb-6 hover:bg-white/15 transition-all">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-error/20 text-error text-2xl md:text-3xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/60 mb-1">
                    Emergency Helpline
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-lg md:text-xl lg:text-2xl font-bold text-white hover:text-accent-300 transition"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Bed capacity highlight */}
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 md:p-4 backdrop-blur-xl border border-white/10">
                <span className="text-2xl md:text-3xl flex-shrink-0">🏥</span>
                <div>
                  <p className="text-xs md:text-sm text-white/70">In-patient bed capacity</p>
                  <p className="text-sm md:text-base font-semibold text-white">
                    {STATS.bedCapacity}+ beds with ICU & NICU
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-secondary-500 text-white rounded-xl md:rounded-2xl px-4 py-2 md:px-5 md:py-3 shadow-2xl"
            >
              <p className="text-[10px] md:text-xs uppercase tracking-wider mb-0.5">Patient Rating</p>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold">4.8</span>
                <span className="text-yellow-300 text-base md:text-lg">★★★★★</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer hover:text-white/80 transition"
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
