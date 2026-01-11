import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { overlayVariants } from '../../utils/animations';

const ModalOverlay = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  closeOnBackdrop = true,
  maxWidth = 'max-w-lg',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center px-4 py-6 sm:px-6 sm:py-10"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeOnBackdrop ? onClose : undefined}
          />

          {/* Modal Content */}
          <motion.div
            className={`relative bg-white rounded-2xl shadow-2xl w-full ${maxWidth} mx-auto overflow-hidden`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-500 shadow-md hover:bg-neutral-100 hover:text-neutral-800 transition"
                aria-label="Close modal"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOverlay;
