import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import MapEmbed from './MapEmbed';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-neutral-50 py-14 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Contact & location"
          title="Easy to reach when you need us."
          description="Use the details below to plan your visit, call for queries, or locate the hospital on the map. For emergencies, always use the emergency numbers shared above."
          centered
        />

        <AnimatedSection animation="fadeInUp">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <ContactInfo />
              <ContactForm />
            </div>
            <MapEmbed />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
