import React from 'react';
import { SITE_CONFIG } from '../../utils/constants';
import Button from '../shared/Button';
import { sendEmergencyMessage } from '../../utils/whatsapp';
import AnimatedSection from '../shared/AnimatedSection';

const EmergencyBanner = () => {
  return (
    <section
      id="emergency"
      className="bg-gradient-to-r from-red-600 via-primary-700 to-primary-900 text-white py-6 md:py-7"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-2xl">
                🚑
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-100">
                  24x7 emergency & ambulance
                </p>
                <h3 className="text-sm md:text-base font-semibold">
                  In an emergency, every second matters. Call our team immediately.
                </h3>
                <p className="text-[11px] md:text-xs text-white/80 mt-1 max-w-xl">
                  Dedicated emergency doctors, ICU backup, and on-call specialists
                  ready to respond to heart attack, stroke, accidents, and other
                  critical situations at any hour.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-red-100">
                  Emergency helpline
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-base md:text-lg font-semibold text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <Button
                variant="white"
                size="sm"
                onClick={sendEmergencyMessage}
              >
                WhatsApp emergency
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmergencyBanner;
