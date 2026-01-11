import React, { useEffect } from 'react';
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
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-start sm:items-center justify-center overflow-y-auto"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeOnBackdrop ? onClose : undefined}
          />

          {/* Modal Content - Scrollable container */}
          <div className="relative w-full min-h-screen sm:min-h-0 flex items-start sm:items-center justify-center p-4 sm:p-6">
            <motion.div
              className={`relative bg-white rounded-2xl shadow-2xl w-full ${maxWidth} mx-auto my-4 sm:my-0 overflow-hidden`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-600 shadow-lg hover:bg-neutral-100 hover:text-neutral-900 transition-all hover:scale-110"
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
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOverlay;
