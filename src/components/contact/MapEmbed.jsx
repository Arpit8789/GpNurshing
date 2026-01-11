import React from 'react';
import { contactInfo } from '../../data/contact';

const MapEmbed = () => {
  return (
    <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
      <iframe
        title="GP Nursing Hospital Location"
        src={contactInfo.location.googleMapsEmbed}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
};

export default MapEmbed;
