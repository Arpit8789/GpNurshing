// Contact information and location data

import { SITE_CONFIG, CONTACT_HOURS } from '../utils/constants';

export const contactInfo = {
  hospital: {
    name: SITE_CONFIG.name,
    tagline: SITE_CONFIG.tagline,
    establishedYear: SITE_CONFIG.establishedYear,
  },
  address: {
    street: 'Main Road, Near Railway Station',
    area: 'Gandhi Maidan',
    city: 'Patna',
    state: 'Bihar',
    pincode: '800001',
    country: 'India',
    fullAddress: 'Main Road, Near Railway Station, Gandhi Maidan, Patna, Bihar - 800001',
  },
  phone: {
    primary: '+91-7779831325',
    emergency: '+91-7779831325',
    appointment: '+91-7779831325',
    landline: '0612-2234567',
  },
  email: {
    general: 'info@gphospitals.in',
    appointment: 'appointments@gphospitals.in',
    careers: 'careers@gphospitals.in',
    feedback: 'feedback@gphospitals.in',
  },
  timing: {
    emergency: CONTACT_HOURS.emergency,
    opd: CONTACT_HOURS.opd,
    sunday: CONTACT_HOURS.sunday,
    pharmacy: '24 Hours',
    laboratory: '7:00 AM - 10:00 PM',
  },
  social: {
    facebook: 'https://facebook.com/gphospital',
    instagram: 'https://instagram.com/gphospital',
    twitter: 'https://twitter.com/gphospital',
    linkedin: 'https://linkedin.com/company/gphospital',
    youtube: 'https://youtube.com/@gphospital',
  },
  location: {
    latitude: 25.5941,
    longitude: 85.1376,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Patna,Bihar,India',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.34509092762!2d85.03737!3d25.59408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890',
  },
  departments: [
    { name: 'Cardiology', extension: '101' },
    { name: 'Orthopedics', extension: '102' },
    { name: 'Pediatrics', extension: '103' },
    { name: 'Neurology', extension: '104' },
    { name: 'Gynecology', extension: '105' },
    { name: 'Emergency', extension: '108' },
    { name: 'Reception', extension: '100' },
  ],
  quickServices: [
    {
      name: 'Ambulance',
      phone: '+91-7779831325',
      available: '24/7',
      icon: '🚑',
    },
    {
      name: 'Emergency',
      phone: '+91-7779831325',
      available: '24/7',
      icon: '🚨',
    },
    {
      name: 'Appointment',
      phone: '+91-7779831325',
      available: 'Mon-Sat: 9 AM - 8 PM',
      icon: '📅',
    },
    {
      name: 'Pharmacy',
      phone: '+91-7779831325',
      available: '24/7',
      icon: '💊',
    },
  ],
};

// Get formatted address
export const getFormattedAddress = () => {
  const { street, area, city, state, pincode } = contactInfo.address;
  return `${street}, ${area}, ${city}, ${state} - ${pincode}`;
};

// Get department phone number
export const getDepartmentPhone = (departmentName) => {
  const dept = contactInfo.departments.find(
    d => d.name.toLowerCase() === departmentName.toLowerCase()
  );
  return dept ? `${contactInfo.phone.landline} Ext: ${dept.extension}` : contactInfo.phone.primary;
};
