import React, { useState } from 'react';
import Button from '../shared/Button';
import { isValidEmail, isValidPhone } from '../../utils/helpers';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (form.phone && !isValidPhone(form.phone)) errors.phone = 'Enter valid 10-digit mobile';
  if (form.email && !isValidEmail(form.email)) errors.email = 'Enter a valid email address';
  if (!form.message.trim()) errors.message = 'Please share your query';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
    });
    if (Object.keys(errors).length > 0) return;
    setSubmitted(true);
    // No backend: this is just a UI form. You can hook it to email/API later.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-neutral-800">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
              touched.name && errors.name ? 'border-red-400' : 'border-neutral-200'
            }`}
            placeholder="Enter your name"
          />
          {touched.name && errors.name && (
            <p className="text-[11px] text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-neutral-800">
            Mobile number
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
              touched.phone && errors.phone ? 'border-red-400' : 'border-neutral-200'
            }`}
            placeholder="Optional, for quicker response"
          />
          {touched.phone && errors.phone && (
            <p className="text-[11px] text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-neutral-800">
          Email address
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-lg border px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
            touched.email && errors.email ? 'border-red-400' : 'border-neutral-200'
          }`}
          placeholder="Optional, for email reply"
        />
        {touched.email && errors.email && (
          <p className="text-[11px] text-red-500">{errors.email}</p>
        )}
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-neutral-800">
          Your message / query <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-lg border px-3 py-2 text-xs md:text-sm outline-none resize-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
            touched.message && errors.message ? 'border-red-400' : 'border-neutral-200'
          }`}
          placeholder="Share brief details about your question or requirement"
        />
        {touched.message && errors.message && (
          <p className="text-[11px] text-red-500">{errors.message}</p>
        )}
      </div>
      <div className="pt-1 flex items-center justify-between">
        <p className="text-[11px] text-neutral-500 max-w-xs">
          This form is for general queries only. For emergencies, please call
          the emergency number directly.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={submitted}
        >
          {submitted ? 'Message received' : 'Send message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
