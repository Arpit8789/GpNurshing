import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '../../utils/constants';
import Button from '../shared/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Navbar = ({ onOpenAppointment }) => {
  const { isScrolled } = useScrollAnimation(80);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[300] bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo + name */}
            <ScrollLink
              to="home"
              smooth
              duration={600}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            >
              <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-glow transition-all">
                <span className="text-base sm:text-xl font-extrabold tracking-tight text-white">
                  GP
                </span>
                <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white text-primary-500 text-[10px] sm:text-xs flex items-center justify-center shadow-md border border-primary-100">
                  🏥
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-500">
                  {SITE_CONFIG.location}
                </span>
              </div>
            </ScrollLink>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={600}
                  offset={-90}
                  spy={true}
                  className="cursor-pointer text-sm font-bold text-neutral-700 hover:text-primary-600 transition-colors relative group"
                  activeClass="!text-primary-600"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                </ScrollLink>
              ))}
            </nav>

            {/* Right actions - Desktop */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold">
                  24x7 Emergency
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm font-bold text-neutral-900 hover:text-primary-600 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <Button
                size="sm"
                variant="primary"
                onClick={onOpenAppointment}
                className="shadow-md hover:shadow-lg"
              >
                <span className="hidden lg:inline">Book Appointment</span>
                <span className="lg:hidden">Book Now</span>
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white h-10 w-10 shadow-md hover:shadow-lg active:scale-95 transition-all"
                aria-label="Book appointment"
              >
                <span className="text-xl font-bold">+</span>
              </button>
              <button
                onClick={handleToggleMenu}
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-300 bg-white h-10 w-10 shadow-sm hover:shadow-md hover:border-primary-400 transition-all active:scale-95"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-5 w-5 text-neutral-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-neutral-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseMenu}
              />
              
              {/* Menu panel */}
              <motion.div
                className="md:hidden border-t border-neutral-200 bg-white shadow-2xl"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 space-y-4">
                  <nav className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                      <ScrollLink
                        key={link.id}
                        to={link.id}
                        smooth
                        duration={600}
                        offset={-80}
                        spy={true}
                        className="cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all active:scale-98"
                        activeClass="bg-primary-50 text-primary-600"
                        onClick={handleCloseMenu}
                      >
                        {link.name}
                      </ScrollLink>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col gap-3 pt-3 border-t border-neutral-200">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center justify-between rounded-xl bg-red-50 border border-red-200 px-4 py-3 hover:bg-red-100 transition-all active:scale-98"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🚨</span>
                        <span className="text-sm font-medium text-neutral-800">Emergency 24x7</span>
                      </div>
                      <span className="font-bold text-sm text-red-600">
                        {SITE_CONFIG.phone}
                      </span>
                    </a>
                    
                    <Button
                      fullWidth
                      size="lg"
                      variant="primary"
                      onClick={() => {
                        onOpenAppointment();
                        handleCloseMenu();
                      }}
                      className="shadow-lg"
                    >
                      📅 Book Appointment
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
