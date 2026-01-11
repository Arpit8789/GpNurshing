import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import FeatureCard from './FeatureCard';
import { contactInfo } from '../../data/contact';

const whyPoints = [
  {
    id: 1,
    icon: '🩺',
    title: 'Senior specialist team',
    description:
      'Experienced consultants across key departments ensure that complex cases are reviewed by the right experts.',
  },
  {
    id: 2,
    icon: '🛏️',
    title: 'Modern critical care',
    description:
      'ICU, NICU, and emergency units equipped with advanced monitoring and life-support systems.',
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Ethical, clear communication',
    description:
      'Transparent discussion of diagnosis, treatment options, and costs so you can decide with confidence.',
  },
  {
    id: 4,
    icon: '🧼',
    title: 'Clean & safe environment',
    description:
      'Regular infection control protocols, sanitised spaces, and separate zones for different patient needs.',
  },
  {
    id: 5,
    icon: '📄',
    title: 'Insurance & cashless support',
    description:
      'Guidance for insurance approvals and paperwork to reduce stress for families during admission.',
  },
  {
    id: 6,
    icon: '📍',
    title: 'Easy-to-reach location',
    description:
      `${contactInfo.address.area}, ${contactInfo.address.city} with nearby public transport and parking support.`,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-50 py-14 md:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why choose GP Nursing Hospital"
          title="A hospital designed around what patients actually need."
          description="From the moment you enter, every process—from registration to discharge—is built to be simple, transparent, and reassuring for patients and their families."
          centered
        />

        <AnimatedSection animation="fadeInUp">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
            {/* Left: summary block */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl bg-white shadow-medium border border-neutral-100 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                  What patients notice most
                </p>
                <p className="text-sm md:text-base text-neutral-700 mb-3">
                  Most feedback we receive is not only about treatment results,
                  but also about how clearly things were explained and how
                  respectfully families were supported during difficult times.
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-xs text-neutral-600">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    Doctors who take time to answer questions patiently.
                  </li>
                  <li className="flex items-start gap-2 text-xs text-neutral-600">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    Nursing staff that checks on patients regularly without reminders.
                  </li>
                  <li className="flex items-start gap-2 text-xs text-neutral-600">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    Clear billing, discharge summaries, and follow-up instructions.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {whyPoints.map((item, index) => (
                <FeatureCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  accent={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;
