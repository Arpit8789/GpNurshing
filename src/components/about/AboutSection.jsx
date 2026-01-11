import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import Card from '../shared/Card';
import AnimatedSection from '../shared/AnimatedSection';

// 🖼️ ACHIEVEMENT & SURGERY IMAGES DATA
const carouselImages = [
  {
    id: 1,
    // 📷 IMAGE 1: Surgery team in operation theater with green scrubs
    src: '/images/about/IMG1.png',
    title: 'Expert Surgical Team',
    description: 'Advanced laparoscopic and minimally invasive procedures',
  },
  {
    id: 2,
    // 📷 IMAGE 2: Close-up surgical procedure with multiple doctors
    src: '/images/about/IMG2.png',
    title: 'State-of-the-Art Operations',
    description: 'Modern operation theaters with latest equipment',
  },
  {
    id: 3,
    // 📷 IMAGE 3: Dr. Anjali at RGCON 2025 conference
    src: '/images/about/IMG3.png',
    title: 'National Recognition',
    description: 'Our doctors presenting at national medical conferences',
  },
  {
    id: 4,
    // 📷 IMAGE 4: Awards ceremony with medical professionals
    src: '/images/about/IMG4.png',
    title: 'Excellence in Healthcare',
    description: 'Recognized for outstanding medical care and patient outcomes',
  },
  {
    id: 5,
    // 📷 IMAGE 5: Surgical hands during procedure
    src: '/images/about/IMG5.png',
    title: 'Precision & Care',
    description: 'Committed to the highest standards of surgical excellence',
  },
  {
    id: 6,
    // 📷 IMAGE 6: Laparoscopic surgery with monitors
    src: '/images/about/IMG6.png',
    title: 'Modern Technology',
    description: 'Advanced laparoscopic equipment for faster recovery',
  },
  {
    id: 7,
    // 📷 IMAGE 7: Award presentation on stage RGCON
    src: '/images/about/IMG7.png',
    title: 'Continuous Learning',
    description: 'Our team stays updated with latest medical advancements',
  },
];

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-primary-200/20 blur-3xl"
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
          className="absolute bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary-200/20 blur-3xl"
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
        
        {/* Floating medical icons */}
        <motion.div
          className="absolute top-1/4 right-10 text-4xl opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🏥
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-10 text-4xl opacity-10"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          ⚕️
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="About GP Nursing Hospital"
          title="Modern medical care with a human touch."
          description="Founded in Patna, GP Nursing Hospital is built around one simple idea: every patient deserves time, clarity, and compassionate care along with advanced treatment options."
          centered={false}
        />

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Story + highlights */}
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                From everyday health concerns to complex medical conditions, GP
                Nursing Hospital brings together experienced doctors, modern
                diagnostic facilities, and dedicated nursing teams under one
                roof so that you do not have to run between different places for
                your treatment.
              </p>

              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                The hospital is designed keeping patients and families in mind:
                easy access, clear communication, clean rooms, and a support
                team to guide you through admission, insurance, and discharge
                without confusion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6">
                <Card padding="lg" className="bg-white/80 backdrop-blur-sm border border-primary-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🎯</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-1">
                        Our Mission
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        To make quality multi-specialty healthcare accessible, transparent,
                        and comforting for every family in and around Patna.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card padding="lg" className="bg-white/80 backdrop-blur-sm border border-secondary-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-600 mb-1">
                        Our Promise
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Clear explanations, ethical treatment plans, and genuine
                        advice just like you expect from a doctor in your own family.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-primary-700 border border-primary-200">
                  ✔ Multi-specialty experts
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary-100 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-secondary-700 border border-secondary-200">
                  ✔ Patient-friendly processes
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-neutral-700 border border-neutral-200">
                  ✔ Clean, safe environment
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Auto-rotating carousel */}
          <AnimatedSection animation="fadeInUp">
            <div className="relative">
              {/* Carousel container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={carouselImages[currentSlide].src}
                        alt={carouselImages[currentSlide].title}
                        className="h-full w-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">
                          {carouselImages[currentSlide].title}
                        </h4>
                        <p className="text-xs md:text-sm text-white/90">
                          {carouselImages[currentSlide].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-9 w-9 md:h-11 md:w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-neutral-800 hover:bg-white hover:scale-110 transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-9 w-9 md:h-11 md:w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-neutral-800 hover:bg-white hover:scale-110 transition-all z-10"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'w-6 md:w-8 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Achievement badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl border-4 border-white"
              >
                <p className="text-xs uppercase tracking-wider mb-0.5 font-bold">Trusted Care</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl font-bold">16+</span>
                  <span className="text-xs md:text-sm">Years Excellence</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
