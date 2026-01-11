import React from 'react';
import { SITE_CONFIG } from '../../utils/constants';
import { contactInfo } from '../../data/contact';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-200 pt-12 md:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-neutral-800">
          {/* Brand - Full width on mobile */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-glow">
                <span className="text-xl font-extrabold text-white">GP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs text-neutral-400">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              GP Nursing Hospital in Patna offers multi-specialty healthcare with
              advanced technology, experienced doctors, and a patient-first
              approach for your complete well-being.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-green-500/50 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-300">
                ✓ 24x7 Emergency
              </span>
              <span className="inline-flex items-center rounded-full border border-primary-500/50 bg-primary-500/10 px-3 py-1.5 text-xs font-semibold text-primary-300">
                ✓ Quality Standards
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 text-xs font-semibold text-neutral-300">
                ✓ Cashless Insurance
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                { to: 'services', label: 'Our Services' },
                { to: 'doctors', label: 'Meet Our Doctors' },
                { to: 'facilities', label: 'Hospital Facilities' },
                { to: 'testimonials', label: 'Patient Stories' },
                { to: 'contact', label: 'Contact & Location' },
              ].map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-90}
                    className="cursor-pointer hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em]">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">📍</span>
                <p className="leading-relaxed">
                  {contactInfo.address.fullAddress}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <div>
                  <a
                    href={`tel:${contactInfo.phone.primary}`}
                    className="hover:text-primary-400 transition-colors font-medium"
                  >
                    {contactInfo.phone.primary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🚨</span>
                <div>
                  <span className="text-red-400 font-semibold">Emergency: </span>
                  <a
                    href={`tel:${contactInfo.phone.emergency}`}
                    className="hover:text-red-300 transition-colors font-medium"
                  >
                    {contactInfo.phone.emergency}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <a
                  href={`mailto:${contactInfo.email.general}`}
                  className="hover:text-primary-400 transition-colors break-all"
                >
                  {contactInfo.email.general}
                </a>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-2 pt-2">
              {Object.entries(contactInfo.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
                  aria-label={key}
                >
                  <span className="text-sm font-bold capitalize">{key[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p className="text-center sm:text-left">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed for high-trust healthcare experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
