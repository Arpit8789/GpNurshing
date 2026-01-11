// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: 'GP Nursing Hospital',
  tagline: 'Compassionate Care, Advanced Medicine',
  location: 'Patna, Bihar, India',
  phone: '+91-7779831325',
  email: 'info@gphospitals.in',
  address: 'Main Road, Patna, Bihar - 800001',
  whatsappNumber: '917779831325', // Without + or spaces for WhatsApp API
  establishedYear: 2010,
  googleMapsUrl: 'https://maps.google.com/?q=Patna,Bihar,India',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/gphospital',
  instagram: 'https://instagram.com/gphospital',
  twitter: 'https://twitter.com/gphospital',
  linkedin: 'https://linkedin.com/company/gphospital',
  youtube: 'https://youtube.com/@gphospital',
};

export const CONTACT_HOURS = {
  emergency: '24/7 Available',
  opd: 'Mon-Sat: 9:00 AM - 8:00 PM',
  sunday: 'Sun: 10:00 AM - 2:00 PM',
};

export const STATS = {
  patientsServed: 50000,
  yearsOfService: new Date().getFullYear() - SITE_CONFIG.establishedYear,
  specialists: 25,
  departments: 12,
  bedCapacity: 100,
  successRate: 98,
};

export const COLORS = {
  primary: {
    main: '#0066CC',
    light: '#3399FF',
    dark: '#003D7A',
  },
  secondary: {
    main: '#00A896',
    light: '#33BFAF',
    dark: '#00655A',
  },
  accent: {
    main: '#FFB84D',
    light: '#FFA733',
    dark: '#996E2E',
  },
  neutral: {
    white: '#FFFFFF',
    light: '#F8FAFC',
    gray: '#64748B',
    dark: '#1E293B',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Doctors', href: '#doctors', id: 'doctors' },
  { name: 'Facilities', href: '#facilities', id: 'facilities' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const QUICK_LINKS = [
  { name: 'Emergency Care', href: '#emergency' },
  { name: 'Book Appointment', href: '#appointment' },
  { name: 'Health Packages', href: '#packages' },
  { name: 'Career Opportunities', href: '#careers' },
];

export const IMAGE_PLACEHOLDERS = {
  doctor: '/images/doctors/placeholder-doctor.svg',
  patient: '/images/testimonials/placeholder-avatar.svg',
  facility: '/images/facilities/placeholder.jpg',
  department: '/images/departments/placeholder.jpg',
};

export const SEO_KEYWORDS = [
  'GP Hospital Patna',
  'Best Hospital in Bihar',
  'Emergency Care Patna',
  'Top Doctors Patna',
  'Healthcare Services Bihar',
  'Multi-specialty Hospital',
  'Advanced Medical Treatment',
];

export const EMERGENCY_MESSAGE = {
  title: '24/7 Emergency Services',
  subtitle: 'Immediate medical attention when you need it most',
  features: ['Ambulance Service', 'Trauma Care', 'Critical Care Unit', 'Emergency Surgery'],
};
