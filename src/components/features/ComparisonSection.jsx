import React from 'react';
import AnimatedSection from '../shared/AnimatedSection';
import Card from '../shared/Card';

/**
 * Simple visual comparison-style section:
 * Left = typical hospital experience
 * Right = experience aimed for at GP Nursing Hospital
 */
const ComparisonSection = () => {
  const rows = [
    {
      label: 'Communication',
      generic: 'Rushed explanations, medical terms without clarity.',
      gp: 'Calm, step-by-step explanation with time for questions.',
    },
    {
      label: 'Waiting experience',
      generic: 'Long queues and confusion about next steps.',
      gp: 'Token-based flow with clear guidance from staff.',
    },
    {
      label: 'Family updates',
      generic: 'Uncertain about patient status during procedures.',
      gp: 'Regular updates and clear points of contact for families.',
    },
    {
      label: 'Environment',
      generic: 'Crowded, noisy, and difficult to find departments.',
      gp: 'Well-marked, cleaner pathways with dedicated help desk.',
    },
    {
      label: 'After-discharge support',
      generic: 'Limited guidance once patient leaves hospital.',
      gp: 'Clear follow-up plan and contact details for queries.',
    },
  ];

  return (
    <section className="bg-white py-14 md:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="mb-6 md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
              Care that feels different
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
              See how your experience is designed to be smoother.
            </h3>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
              Many patients are used to accepting stress as a part of
              hospital visits. The goal at GP Nursing Hospital is to reduce
              that stress as much as possible through better systems and support.
            </p>
          </div>

          <Card padding="lg" className="bg-neutral-50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 rounded-xl overflow-hidden">
              {/* Header row */}
              <div className="hidden md:block bg-neutral-900 text-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
                Aspect
              </div>
              <div className="bg-neutral-900 text-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
                Typical hospital
              </div>
              <div className="bg-primary-600 text-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
                At GP Nursing Hospital
              </div>

              {/* Rows */}
              {rows.map((row, index) => (
                <React.Fragment key={row.label}>
                  <div className="hidden md:flex flex-col justify-center border-t border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-800">
                    {row.label}
                  </div>
                  <div className="border-t border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-600">
                    <span className="md:hidden block font-semibold text-neutral-800 mb-1">
                      {row.label}
                    </span>
                    {row.generic}
                  </div>
                  <div className="border-t border-neutral-200 bg-primary-50 px-4 py-3 text-xs text-neutral-700">
                    <span className="md:hidden block font-semibold text-neutral-900 mb-1">
                      At GP Nursing Hospital
                    </span>
                    {row.gp}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ComparisonSection;
