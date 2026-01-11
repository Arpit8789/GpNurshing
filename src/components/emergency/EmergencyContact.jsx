import React from 'react';
import Card from '../shared/Card';
import { contactInfo } from '../../data/contact';

const EmergencyContact = () => {
  return (
    <section className="bg-white py-10 md:py-12 border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card padding="lg" className="bg-neutral-50">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                Emergency department
              </h3>
              <p className="text-xs text-neutral-600">
                24x7 emergency, trauma, and critical care services with
                quick triage and specialist backup.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Emergency phone
              </h4>
              <a
                href={`tel:${contactInfo.phone.emergency}`}
                className="text-sm font-semibold text-neutral-900 hover:text-primary-600"
              >
                {contactInfo.phone.emergency}
              </a>
              <p className="text-[11px] text-neutral-500 mt-1">
                Available 24 hours · 7 days a week
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Ambulance
              </h4>
              <p className="text-sm font-semibold text-neutral-900">
                {contactInfo.quickServices[0].phone}
              </p>
              <p className="text-[11px] text-neutral-500 mt-1">
                Ambulance coordination and on-road stabilisation support.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyContact;
