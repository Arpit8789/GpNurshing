import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import Card from '../shared/Card';
import Button from '../shared/Button';
import AnimatedSection from '../shared/AnimatedSection';

const departments = [
  {
    id: 1,
    name: 'Gynecology & Obstetrics',
    icon: '👶',
    gradient: 'from-pink-500 to-pink-600',
    description: 'Comprehensive women\'s health services including prenatal care, delivery, and gynecological treatments.',
    features: [
      'Normal & C-section deliveries',
      'High-risk pregnancy care',
      'Gynecological surgeries',
      'Infertility consultation',
      'Antenatal & postnatal care',
    ],
    stats: { deliveries: '2000+', experience: '15+ years' },
  },
  {
    id: 2,
    name: 'General Surgery',
    icon: '🏥',
    gradient: 'from-blue-500 to-blue-600',
    description: 'Advanced surgical procedures using minimally invasive techniques for faster recovery.',
    features: [
      'Laparoscopic surgery',
      'Hernia repair',
      'Gallbladder surgery',
      'Appendectomy',
      'Cancer surgery',
    ],
    stats: { surgeries: '5000+', successRate: '98%' },
  },
  {
    id: 3,
    name: 'Orthopedics',
    icon: '🦴',
    gradient: 'from-purple-500 to-purple-600',
    description: 'Expert bone, joint, and spine care with modern treatment options.',
    features: [
      'Joint replacement surgery',
      'Fracture management',
      'Sports injury treatment',
      'Arthroscopy',
      'Spine surgery',
    ],
    stats: { patients: '3000+', recovery: '95%' },
  },
  {
    id: 4,
    name: 'Pediatrics',
    icon: '👶',
    gradient: 'from-green-500 to-green-600',
    description: 'Specialized child healthcare from newborns to adolescents.',
    features: [
      'Newborn care & NICU',
      'Vaccination programs',
      'Growth monitoring',
      'Pediatric surgery',
      'Child nutrition counseling',
    ],
    stats: { children: '10000+', satisfaction: '99%' },
  },
];

const DepartmentHighlight = ({ onOpenAppointment }) => {
  const [activeDept, setActiveDept] = useState(departments[0]);

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 right-10 h-56 w-56 rounded-full bg-primary-100 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-secondary-100 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Featured Departments"
          title="Specialized care by expert teams."
          description="Each department is equipped with modern facilities and staffed by experienced specialists dedicated to providing the best possible outcomes."
          centered
          accentColor="secondary"
        />

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Left: Department tabs */}
            <div className="space-y-3">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    padding="md"
                    className={`cursor-pointer transition-all ${
                      activeDept.id === dept.id
                        ? 'bg-gradient-to-r ' + dept.gradient + ' text-white shadow-2xl scale-105'
                        : 'bg-white hover:bg-neutral-50 border border-neutral-200'
                    }`}
                    onClick={() => setActiveDept(dept)}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl flex items-center justify-center text-3xl md:text-4xl flex-shrink-0 ${
                          activeDept.id === dept.id
                            ? 'bg-white/20 backdrop-blur-sm'
                            : 'bg-neutral-100'
                        }`}
                      >
                        {dept.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-base md:text-lg font-bold mb-1 ${
                            activeDept.id === dept.id ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {dept.name}
                        </h3>
                        <p
                          className={`text-xs md:text-sm ${
                            activeDept.id === dept.id ? 'text-white/80' : 'text-neutral-600'
                          }`}
                        >
                          {dept.description.substring(0, 60)}...
                        </p>
                      </div>
                      <motion.span
                        animate={activeDept.id === dept.id ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`text-xl font-bold ${
                          activeDept.id === dept.id ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        →
                      </motion.span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right: Active department details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card padding="lg" className="bg-white shadow-2xl border-2 border-neutral-100 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`h-16 w-16 md:h-20 md:w-20 rounded-3xl bg-gradient-to-br ${activeDept.gradient} flex items-center justify-center text-4xl md:text-5xl shadow-xl`}>
                      {activeDept.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                        {activeDept.name}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-600">
                        {activeDept.description}
                      </p>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-3">
                      Key Services
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeDept.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100"
                        >
                          <span className={`text-lg flex-shrink-0 bg-gradient-to-br ${activeDept.gradient} text-transparent bg-clip-text font-bold`}>
                            ✓
                          </span>
                          <span className="text-sm text-neutral-700 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {Object.entries(activeDept.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex-1 min-w-[120px] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl px-4 py-3 border border-neutral-200"
                      >
                        <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
                          {value}
                        </p>
                        <p className="text-xs text-neutral-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={onOpenAppointment}
                    className="shadow-xl hover:shadow-2xl"
                  >
                    📅 Book Appointment with Specialist
                  </Button>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DepartmentHighlight;
