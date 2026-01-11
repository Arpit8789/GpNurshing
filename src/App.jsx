import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';

import Hero from './components/home/Hero';
import TrustBadges from './components/home/TrustBadges';
import QuickStats from './components/home/QuickStats';
import ScrollIndicator from './components/home/ScrollIndicator';

import AboutSection from './components/about/AboutSection';
//import Timeline from './components/about/Timeline';
import Values from './components/about/Values';

import ServicesGrid from './components/services/ServicesGrid';
import DepartmentHighlight from './components/services/DepartmentHighlight';

import DoctorsSection from './components/doctors/DoctorsSection';

import WhyChooseUs from './components/features/WhyChooseUs';
import ComparisonSection from './components/features/ComparisonSection';

import TestimonialsSection from './components/testimonials/TestimonialsSection';

import FacilitiesSection from './components/facilities/FacilitiesSection';
import VirtualTour from './components/facilities/VirtualTour';

import EmergencyBanner from './components/emergency/EmergencyBanner';
import EmergencyContact from './components/emergency/EmergencyContact';

import ContactSection from './components/contact/ContactSection';

import BookAppointmentModal from './components/modals/BookAppointmentModal';
import { useModalWithData } from './hooks/useModal';

const App = () => {
  const {
    isOpen: isAppointmentOpen,
    open: openAppointment,
    close: closeAppointment,
    data: appointmentData,
  } = useModalWithData();

  const handleOpenAppointment = (preselectedDoctor = null) => {
    openAppointment(preselectedDoctor);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment(null)} />

      {/* Main */}
      <main>
        <Hero onOpenAppointment={() => handleOpenAppointment(null)} />
        <ScrollIndicator />
        <TrustBadges />
        <QuickStats />

        <AboutSection />
        
        <Values />

        <ServicesGrid onServiceSelect={() => handleOpenAppointment(null)} />
        <DepartmentHighlight onOpenAppointment={() => handleOpenAppointment(null)} />

        <DoctorsSection />

        <WhyChooseUs />
        <ComparisonSection />

        <TestimonialsSection />

        <FacilitiesSection />
        <VirtualTour />

        <EmergencyBanner />
        <EmergencyContact />

        <ContactSection />
      </main>

      {/* Global floating CTA */}
      <FloatingCTA onOpenAppointment={() => handleOpenAppointment(null)} />

      {/* Footer */}
      <Footer />

      {/* Global appointment modal */}
      <BookAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={closeAppointment}
        preselectedDoctor={appointmentData || null}
      />
    </div>
  );
};

export default App;
