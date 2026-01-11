import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';
import { Avatar } from '../shared/ImagePlaceholder';
import Button from '../shared/Button';
import { truncateText } from '../../utils/helpers';

const DoctorCard = ({ doctor, onViewProfile, onBook }) => {
  if (!doctor) return null;

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card
        padding="lg"
        className="h-full bg-white/90 backdrop-blur border border-neutral-100 hover:border-primary-200"
      >
        <div className="flex flex-col gap-4 h-full">
          {/* Top: Avatar + name */}
          <div className="flex items-center gap-3">
            {/* 🩺 DOCTOR IMAGE SPACE */}
            <div className="relative">
              <Avatar
                src={doctor.image}        // put /images/doctors/doctor-X.jpg here
                alt={doctor.name}
                name={doctor.name}
                size="lg"
                className="shadow-soft border border-neutral-100"
              />
              <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white">
                ●
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                {doctor.name}
              </h3>
              <p className="text-xs text-primary-600 font-medium">
                {doctor.specialty}
              </p>
              <p className="text-[11px] text-neutral-500">
                {doctor.qualification}
              </p>
            </div>
          </div>

          {/* Middle: description */}
          <p className="text-xs md:text-sm text-neutral-600 flex-1">
            {truncateText(doctor.description, 140)}
          </p>

          {/* Bottom: meta + actions */}
          <div className="flex items-center justify-between gap-2 mt-1">
            <div className="flex flex-col">
              <span className="text-[11px] text-neutral-500">
                Experience
              </span>
              <span className="text-xs font-semibold text-neutral-800">
                {doctor.experience}
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[11px] text-neutral-500">
                Consultation
              </span>
              <span className="text-xs font-semibold text-neutral-800">
                ₹{doctor.consultationFee}
              </span>
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onViewProfile && onViewProfile(doctor)}
            >
              View Profile
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => onBook && onBook(doctor)}
            >
              Book with {doctor.name.split(' ')[1] || 'Doctor'}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
