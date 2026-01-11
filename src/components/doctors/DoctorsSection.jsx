import React, { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import DoctorCard from './DoctorCard';
import DoctorModal from './DoctorModal';
import BookAppointmentModal from '../modals/BookAppointmentModal';
import { featuredDoctors, doctors } from '../../data/doctors';

const DoctorsSection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState(null);

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setProfileOpen(true);
  };

  const handleBookWithDoctor = (doctor) => {
    setBookingDoctor(doctor);
    setBookingOpen(true);
  };

  return (
    <section
      id="doctors"
      className="bg-neutral-50 py-14 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our medical team"
          title="Specialists who treat you like family."
          description="A team of experienced doctors from key specialties work together to create clear, personalised treatment plans for every patient at GP Nursing Hospital."
          centered
        />

        {/* Featured doctors row */}
        <AnimatedSection animation="fadeInUp">
          <div className="mb-8 md:mb-10">
            <h3 className="text-sm md:text-base font-semibold text-neutral-800 mb-3">
              Featured consultants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {featuredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onViewProfile={handleViewProfile}
                  onBook={handleBookWithDoctor}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All doctors */}
        <AnimatedSection animation="fadeInUp">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <h3 className="text-sm md:text-base font-semibold text-neutral-800">
              All specialists
            </h3>
            <p className="text-xs text-neutral-500">
              Browse the team across departments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onViewProfile={handleViewProfile}
                onBook={handleBookWithDoctor}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Doctor profile modal */}
      <DoctorModal
        doctor={selectedDoctor}
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onBook={handleBookWithDoctor}
      />

      {/* Book appointment modal with preselected doctor */}
      <BookAppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDoctor={bookingDoctor}
      />
    </section>
  );
};

export default DoctorsSection;
