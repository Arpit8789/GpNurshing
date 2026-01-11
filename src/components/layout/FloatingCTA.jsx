import React from 'react';
import { motion } from 'framer-motion';
import { sendEmergencyMessage } from '../../utils/whatsapp';

const FloatingCTA = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[350] flex flex-col items-end gap-2 sm:gap-3">
      {/* Emergency WhatsApp */}
      <motion.button
        onClick={sendEmergencyMessage}
        className="group inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg hover:shadow-xl border border-red-100 hover:border-red-300 transition-all"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-500 text-white text-xl sm:text-2xl shadow-md">
          🚑
        </span>
        <div className="hidden sm:flex flex-col items-start pr-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
            Emergency
          </span>
          <span className="text-xs font-medium text-neutral-700">
            WhatsApp 24x7
          </span>
        </div>
      </motion.button>

      {/* Book Appointment main CTA */}
      <motion.button
        onClick={onOpenAppointment}
        className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-4 py-2.5 sm:px-5 sm:py-3 shadow-glow hover:shadow-xl transition-all text-white"
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/20 backdrop-blur-sm">
          <span className="text-xl sm:text-2xl">📅</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold">
            Book Now
          </span>
          <span className="text-xs sm:text-sm font-semibold leading-tight">
            Quick Appointment
          </span>
        </div>
        <span className="hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary-600 text-sm font-bold shadow-md">
          →
        </span>
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
