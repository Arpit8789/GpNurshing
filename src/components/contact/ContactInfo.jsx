import React from 'react';
import { contactInfo, getFormattedAddress } from '../../data/contact';
import Card from '../shared/Card';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <Card padding="lg" className="bg-white border border-neutral-100">
        <h3 className="text-sm font-semibold text-neutral-900 mb-2">
          Main hospital
        </h3>
        <p className="text-xs text-neutral-600 mb-2">
          {getFormattedAddress()}
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-800 mb-0.5">Phone</p>
            <a
              href={`tel:${contactInfo.phone.primary}`}
              className="block hover:text-primary-600"
            >
              {contactInfo.phone.primary}
            </a>
            <a
              href={`tel:${contactInfo.phone.landline}`}
              className="block hover:text-primary-600"
            >
              {contactInfo.phone.landline}
            </a>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 mb-0.5">Email</p>
            <a
              href={`mailto:${contactInfo.email.general}`}
              className="block hover:text-primary-600"
            >
              {contactInfo.email.general}
            </a>
            <a
              href={`mailto:${contactInfo.email.appointment}`}
              className="block hover:text-primary-600"
            >
              {contactInfo.email.appointment}
            </a>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <Card padding="md" className="bg-neutral-50">
          <p className="text-[11px] text-neutral-500 mb-0.5">
            OPD hours
          </p>
          <p className="text-xs font-semibold text-neutral-800">
            {contactInfo.timing.opd}
          </p>
          <p className="text-[11px] text-neutral-500 mt-0.5">
            Sunday: {contactInfo.timing.sunday}
          </p>
        </Card>
        <Card padding="md" className="bg-neutral-50">
          <p className="text-[11px] text-neutral-500 mb-0.5">
            24x7 services
          </p>
          <p className="text-xs font-semibold text-neutral-800">
            Emergency & ICU · Pharmacy
          </p>
          <p className="text-[11px] text-neutral-500 mt-0.5">
            {contactInfo.timing.emergency}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
