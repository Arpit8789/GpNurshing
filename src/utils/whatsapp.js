// WhatsApp integration utilities

import { SITE_CONFIG } from './constants';

/**
 * Format appointment data into WhatsApp message
 * @param {Object} appointmentData - User appointment details
 * @returns {string} Formatted message
 */
export const formatAppointmentMessage = (appointmentData) => {
  const { name, phone, issue, date, time } = appointmentData;
  
  let message = `🏥 *New Appointment Request*\n\n`;
  message += `👤 *Name:* ${name}\n`;
  message += `📱 *Phone:* ${phone}\n`;
  message += `🩺 *Issue/Concern:* ${issue}\n`;
  
  if (date) {
    message += `📅 *Preferred Date:* ${date}\n`;
  }
  
  if (time) {
    message += `🕐 *Preferred Time:* ${time}\n`;
  }
  
  message += `\n_Sent via ${SITE_CONFIG.name} Website_`;
  
  return encodeURIComponent(message);
};

/**
 * Open WhatsApp with pre-filled message
 * @param {Object} appointmentData - Appointment details
 */
export const sendWhatsAppMessage = (appointmentData) => {
  const message = formatAppointmentMessage(appointmentData);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Direct WhatsApp contact (no pre-filled message)
 */
export const openWhatsAppChat = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Format emergency WhatsApp message
 */
export const sendEmergencyMessage = () => {
  const message = encodeURIComponent(
    `🚨 *EMERGENCY REQUEST*\n\nI need immediate medical assistance.\n\nPlease contact me as soon as possible.`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Validate WhatsApp number format
 * @param {string} number - Phone number to validate
 * @returns {boolean} Is valid
 */
export const isValidWhatsAppNumber = (number) => {
  // Basic validation for Indian numbers
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(number.replace(/\D/g, ''));
};

/**
 * Format phone number for display
 * @param {string} number - Raw phone number
 * @returns {string} Formatted number
 */
export const formatPhoneNumber = (number) => {
  const cleaned = number.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return number;
};
