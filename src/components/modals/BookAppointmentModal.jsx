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

      // Reset form
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
    <ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-5 max-h-[90vh] md:max-h-[85vh] overflow-hidden">
        {/* Left panel - info (hidden on small mobile, visible on tablet+) */}
        <div className="hidden sm:block md:col-span-2 relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white px-6 py-8 md:px-7 md:py-10 overflow-y-auto">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_50%),_radial-gradient(circle_at_bottom,_#00A896_0,_transparent_55%)]" />
          
          <div className="relative z-10 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-100 font-bold">
              Book Appointment
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Your health is our first priority.
            </h3>
            <p className="text-sm text-primary-100/90 leading-relaxed">
              Share your details and {SITE_CONFIG.name} team will connect with you
              on WhatsApp to confirm your appointment.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base flex-shrink-0">
                  🕒
                </span>
                <span className="text-sm">Fast response within 10–15 minutes (during OPD hours)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base flex-shrink-0">
                  🔒
                </span>
                <span className="text-sm">Your details are kept private and secure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base flex-shrink-0">
                  📍
                </span>
                <span className="text-sm">GP Nursing Hospital, Patna, Bihar</span>
              </div>
            </div>

            {preselectedDoctor && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-xl bg-white/15 backdrop-blur-sm p-4 border border-white/20"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-100/90 mb-2">
                  Preferred Doctor
                </p>
                <p className="text-base font-bold">
                  {preselectedDoctor.name}
                </p>
                <p className="text-xs text-primary-100/80">
                  {preselectedDoctor.specialty}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right panel - form (scrollable) */}
        <div className="col-span-1 md:col-span-3 px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-9 overflow-y-auto max-h-[90vh] md:max-h-[85vh]">
          {/* Mobile header - only visible on mobile */}
          <div className="sm:hidden mb-6 pb-4 border-b border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Book Appointment
                </h3>
                <p className="text-xs text-neutral-500">
                  Fill details below
                </p>
              </div>
            </div>
            
            {preselectedDoctor && (
              <div className="bg-primary-50 rounded-lg p-3 border border-primary-100">
                <p className="text-xs font-semibold text-primary-600 mb-1">
                  Preferred Doctor
                </p>
                <p className="text-sm font-bold text-neutral-900">
                  {preselectedDoctor.name}
                </p>
                <p className="text-xs text-neutral-600">
                  {preselectedDoctor.specialty}
                </p>
              </div>
            )}
          </div>

          {/* Desktop header */}
          <div className="hidden sm:block mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
              Request an Appointment
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Fill in the details below. A WhatsApp chat will open with your
              appointment request pre-filled.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-neutral-800">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-500 ${
                  touched.name && errors.name
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-500 bg-red-50/30'
                    : 'border-neutral-200 bg-white'
                }`}
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <span>⚠️</span> {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-neutral-800">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-semibold text-neutral-700">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-500 ${
                    touched.phone && errors.phone
                      ? 'border-red-400 focus:ring-red-100 focus:border-red-500 bg-red-50/30'
                      : 'border-neutral-200 bg-white'
                  }`}
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <span>⚠️</span> {errors.phone}
                </p>
              )}
            </div>

            {/* Issue */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-neutral-800">
                Health Issue / Problem <span className="text-red-500">*</span>
              </label>
              <textarea
                name="issue"
                placeholder="Briefly describe the problem or reason for visit"
                value={formData.issue}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={3}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition resize-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 ${
                  touched.issue && errors.issue
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-500 bg-red-50/30'
                    : 'border-neutral-200 bg-white'
                }`}
              />
              {touched.issue && errors.issue && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <span>⚠️</span> {errors.issue}
                </p>
              )}
            </div>

            {/* Date & Time (optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-neutral-800">
                  Preferred Date <span className="text-xs text-neutral-500 font-normal">(optional)</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-neutral-800">
                  Preferred Time <span className="text-xs text-neutral-500 font-normal">(optional)</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Info note */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 sm:p-4">
              <div className="flex items-start gap-2">
                <span className="text-base flex-shrink-0">ℹ️</span>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  On submit, WhatsApp will open with your details pre-filled and sent to{' '}
                  <span className="font-bold text-neutral-900">
                    GP Nursing Hospital&apos;s official WhatsApp.
                  </span> No payment required.
                </p>
              </div>
            </div>

            {/* Error */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700 flex items-center gap-2">
                <span>⚠️</span>
                {submitError}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
              <Button
                variant="outline"
                size="md"
                type="button"
                onClick={onClose}
                disabled={submitting}
                fullWidth
                className="sm:flex-1"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                type="submit"
                loading={submitting}
                disabled={!isFormValid || submitting}
                fullWidth
                className="sm:flex-1"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg leading-none">🟢</span>
                  Send on WhatsApp
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default BookAppointmentModal;
