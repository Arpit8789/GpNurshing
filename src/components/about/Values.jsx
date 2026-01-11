import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Card from '../shared/Card';
import AnimatedSection from '../shared/AnimatedSection';

const values = [
  {
    id: 1,
    title: 'Ethical treatment',
    icon: '🤝',
    description: 'Clear explanations, second opinions when needed, and transparent pricing for all procedures.',
  },
  {
    id: 2,
    title: 'Patient dignity',
    icon: '🕊️',
    description: 'Respectful care for every patient, with privacy and comfort priorities at every step.',
  },
  {
    id: 3,
    title: 'Continuous improvement',
    icon: '📈',
    description: 'Regular training, protocol updates, and quality checks to keep care standards high.',
  },
  {
    id: 4,
    title: 'Family involvement',
    icon: '👨‍👩‍👧‍👦',
    description: 'Involving family members in discussions so everyone understands the treatment plan clearly.',
  },
];

const Values = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="What guides our care"
          title="Values that shape every decision."
          description="Beyond medicines and machines, the values we follow decide how you feel during your treatment. These principles guide every team member at GP Nursing Hospital."
          centered
          accentColor="secondary"
        />

        <AnimatedSection animation="fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((value) => (
              <Card
                key={value.id}
                padding="lg"
                className="bg-neutral-50 hover:bg-white"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-secondary-100 text-secondary-700 flex items-center justify-center text-lg">
                      {value.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-600">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Values;
