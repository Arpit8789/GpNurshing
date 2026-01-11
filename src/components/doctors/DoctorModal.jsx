import React from 'react';
import { motion } from 'framer-motion';
import ModalOverlay from '../modals/ModalOverlay';
import { Avatar } from '../shared/ImagePlaceholder';
import Button from '../shared/Button';
import { modalVariants } from '../../utils/animations';

const DoctorModal = ({ doctor, isOpen, onClose, onBook }) => {
  if (!doctor) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Left: doctor info */}
        <div className="md:col-span-1 bg-neutral-50 border-r border-neutral-100 px-5 py-6 flex flex-col items-center text-center gap-3">
          {/* 🩺 DOCTOR IMAGE SPACE (LARGE) */}
          <Avatar
            src={doctor.image}          // put /images/doctors/doctor-X.jpg here
            alt={doctor.name}
            name={doctor.name}
            size="2xl"
            className="shadow-medium border border-white"
          />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-semibold text-neutral-900">
              {doctor.name}
            </h3>
            <p className="text-sm text-primary-600 font-medium">
              {doctor.specialty}
            </p>
            <p className="text-xs text-neutral-500">
              {doctor.qualification}
            </p>
          </div>
          <div className="mt-2 text-xs text-neutral-500">
            <p>{doctor.experience} of clinical experience</p>
            {doctor.languages && (
              <p>
                Speaks: {doctor.languages.join(', ')}
              </p>
            )}
          </div>
        </div>

        {/* Right: details */}
        <div className="md:col-span-2 px-5 py-6 md:px-6 md:py-7 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-1">
              About doctor
            </h4>
            <p className="text-xs md:text-sm text-neutral-600">
              {doctor.description}
            </p>
          </div>

          {doctor.specializations && (
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                Key areas of expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.specializations.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {doctor.awards && doctor.awards.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-1.5">
                Recognitions
              </h4>
              <ul className="space-y-1.5">
                {doctor.awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-1.5 text-xs text-neutral-600"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent-400" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="rounded-xl bg-neutral-50 border border-neutral-100 px-3 py-2.5">
              <p className="text-[11px] text-neutral-500 mb-0.5">
                OPD Timings
              </p>
              <p className="text-xs font-semibold text-neutral-800">
                {doctor.availability}
              </p>
            </div>
            <div className="rounded-xl bg-neutral-50 border border-neutral-100 px-3 py-2.5">
              <p className="text-[11px] text-neutral-500 mb-0.5">
                Consultation fees
              </p>
              <p className="text-xs font-semibold text-neutral-800">
                ₹{doctor.consultationFee} per visit
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[11px] text-neutral-500">
              You can request an appointment with{' '}
              <span className="font-semibold text-neutral-800">
                {doctor.name}
              </span>{' '}
              via WhatsApp. Our team will confirm the date and time.
            </p>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onBook && onBook(doctor)}
              >
                Book with this doctor
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};

export default DoctorModal;
