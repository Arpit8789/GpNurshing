import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModalOverlay from './ModalOverlay';
import Button from '../shared/Button';
import { sendWhatsAppMessage } from '../../utils/whatsapp';
import { SITE_CONFIG } from '../../utils/constants';
import { isValidPhone } from '../../utils/helpers';

const BookAppointmentModal = ({ isOpen, onClose, preselectedDoctor = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    date: '',
    time: '',
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only digits for phone
    if (name === 'phone') {
      const numeric = value.replace(/\D/g, '');
      if (numeric.length > 10) return;
      setFormData((prev) => ({ ...prev, [name]: numeric }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Please enter patient name';
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter mobile number';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Enter valid 10-digit Indian mobile number';
    }
    if (!formData.issue.trim()) errors.issue = 'Please describe the health issue';

    return errors;
  };

  const errors = validate();
  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      issue: true,
      date: true,
      time: true,
    });

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      // Build appointment payload
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        issue: preselectedDoctor
          ? `${formData.issue.trim()} (Preferred Doctor: ${preselectedDoctor.name}, ${preselectedDoctor.specialty})`
          : formData.issue.trim(),
        date: formData.date || '',
        time: formData.time || '',
      };

      // WhatsApp redirect
      sendWhatsAppMessage(payload);

      // Optional: reset form
      setFormData({
        name: '',
        phone: '',
        issue: '',
        date: '',
        time: '',
      });

      // Close modal after short delay for UX
      setTimeout(() => {
        setSubmitting(false);
        onClose();
      }, 300);
    } catch (error) {
      console.error(error);
      setSubmitError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left panel - info */}
        <div className="relative col-span-2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white px-6 py-8 md:px-7 md:py-10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_50%),_radial-gradient(circle_at_bottom,_#00A896_0,_transparent_55%)]" />
          
          <div className="relative z-10 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-100">
              Book Appointment
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Your health is our first priority.
            </h3>
            <p className="text-sm text-primary-100/90">
              Share your details and {SITE_CONFIG.name} team will connect with you
              on WhatsApp to confirm your appointment.
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs">
                  🕒
                </span>
                <span>Fast response within 10–15 minutes (during OPD hours)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs">
                  🔒
                </span>
                <span>Your details are kept private and secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs">
                  📍
                </span>
                <span>GP Nursing Hospital, Patna, Bihar</span>
              </div>
            </div>

            {preselectedDoctor && (
              <div className="mt-5 rounded-xl bg-white/10 p-3 border border-white/15">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-100/80 mb-2">
                  Preferred Doctor
                </p>
                <p className="text-sm font-semibold">
                  {preselectedDoctor.name}
                </p>
                <p className="text-xs text-primary-100/80">
                  {preselectedDoctor.specialty}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right panel - form */}
        <div className="col-span-3 px-6 py-7 md:px-8 md:py-9">
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
              Request an Appointment
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Fill in the details below. A WhatsApp chat will open with your
              appointment request pre-filled.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-neutral-800">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                  touched.name && errors.name
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-400'
                    : 'border-neutral-200'
                }`}
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-neutral-800">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-600">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`flex-1 rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                    touched.phone && errors.phone
                      ? 'border-red-400 focus:ring-red-100 focus:border-red-400'
                      : 'border-neutral-200'
                  }`}
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Issue */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-neutral-800">
                Health Issue / Problem <span className="text-red-500">*</span>
              </label>
              <textarea
                name="issue"
                placeholder="Briefly describe the problem or reason for visit"
                value={formData.issue}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={3}
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition resize-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                  touched.issue && errors.issue
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-400'
                    : 'border-neutral-200'
                }`}
              />
              {touched.issue && errors.issue && (
                <p className="text-xs text-red-500">{errors.issue}</p>
              )}
            </div>

            {/* Date & Time (optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-neutral-800">
                  Preferred Date <span className="text-xs text-neutral-400">(optional)</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-neutral-800">
                  Preferred Time <span className="text-xs text-neutral-400">(optional)</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-400"
                />
              </div>
            </div>

            {/* Info note */}
            <p className="mt-1 text-xs text-neutral-500">
              On submit, WhatsApp will open with your details pre-filled and sent to{' '}
              <span className="font-semibold text-neutral-700">
                GP Nursing Hospital&apos;s official WhatsApp number.
              </span>
            </p>

            {/* Error */}
            {submitError && (
              <p className="text-xs text-red-500 mt-1">{submitError}</p>
            )}

            {/* Actions */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 text-primary-500 text-[10px]">
                  i
                </span>
                <span>No payment required to submit request.</span>
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  loading={submitting}
                  disabled={!isFormValid || submitting}
                  icon={
                    <span className="text-lg leading-none">
                      🟢
                    </span>
                  }
                  iconPosition="left"
                >
                  Send on WhatsApp
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default BookAppointmentModal;
