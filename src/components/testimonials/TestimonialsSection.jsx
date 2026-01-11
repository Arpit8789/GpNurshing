import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import TestimonialSlider from './TestimonialSlider';
import { getAverageRating, getTotalTestimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  const avgRating = getAverageRating();
  const total = getTotalTestimonials();

  return (
    <section
      id="testimonials"
      className="bg-neutral-50 py-14 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Patient stories"
          title="Real experiences from families we have cared for."
          description="Nothing explains a hospital better than the people who have actually been treated there. These patient experiences reflect the care and attention our teams aim to provide every day."
          centered
        />

        {/* Rating summary */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-400 text-xl shadow-soft">
                ★
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-neutral-900">
                  {avgRating} / 5.0
                </span>
                <span className="text-xs text-neutral-500">
                  Based on {total}+ patient testimonials and feedback.
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md">
              Stories from cardiac care, maternity, orthopedics, neurology, emergency,
              and more—showing how different teams work together at GP Nursing Hospital.
            </p>
          </div>
        </AnimatedSection>

        {/* Slider */}
        <AnimatedSection animation="fadeInUp">
          <TestimonialSlider />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
