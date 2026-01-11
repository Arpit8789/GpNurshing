// Hospital facilities and infrastructure data

export const facilities = [
  {
    id: 1,
    name: 'Modern ICU',
    icon: '🏥',
    shortDescription: 'Advanced Intensive Care Unit with 24/7 monitoring',
    fullDescription: 'State-of-the-art ICU equipped with advanced life support systems, continuous patient monitoring, and dedicated critical care specialists available round the clock.',
    image: '/images/facilities/facility-1.jpg',
    features: [
      '24/7 Critical Care Specialists',
      'Advanced Ventilator Support',
      'Continuous Patient Monitoring',
      'Infection Control Protocols',
      'Family Consultation Rooms',
      'Emergency Response Team'
    ],
    capacity: '20 Beds',
    category: 'Critical Care',
  },
  {
    id: 2,
    name: 'Operation Theatres',
    icon: '⚕️',
    shortDescription: 'Modular OTs with advanced surgical equipment',
    fullDescription: 'Fully equipped modular operation theatres with laminar air flow, advanced anesthesia systems, and cutting-edge surgical technology.',
    image: '/images/facilities/facility-2.jpg',
    features: [
      'Modular OT Design',
      'Laminar Air Flow System',
      'Advanced Anesthesia Workstations',
      'High-Definition Surgical Displays',
      'Sterilization Facility',
      'Emergency OT Available'
    ],
    capacity: '4 Major OTs',
    category: 'Surgical',
  },
  {
    id: 3,
    name: 'Diagnostic Center',
    icon: '🔬',
    shortDescription: 'Comprehensive diagnostic services with latest technology',
    fullDescription: 'Fully equipped diagnostic center offering X-ray, CT scan, MRI, ultrasound, and complete laboratory services with quick turnaround time.',
    image: '/images/facilities/facility-3.jpg',
    features: [
      'Digital X-Ray',
      '64 Slice CT Scanner',
      '1.5 Tesla MRI',
      '4D Ultrasound',
      'Automated Laboratory',
      'Same-Day Reports'
    ],
    capacity: 'Full Diagnostic Suite',
    category: 'Diagnostics',
  },
  {
    id: 4,
    name: 'Emergency Department',
    icon: '🚨',
    shortDescription: '24/7 emergency services with trauma care',
    fullDescription: 'Round-the-clock emergency department with dedicated trauma bay, ambulance services, and immediate medical attention for all emergencies.',
    image: '/images/facilities/facility-4.jpg',
    features: [
      '24/7 Emergency Doctors',
      'Trauma Bay',
      'Ambulance Fleet',
      'Emergency Lab & Imaging',
      'Critical Care Backup',
      'Fast-Track Treatment'
    ],
    capacity: '15 Emergency Beds',
    category: 'Emergency',
  },
  {
    id: 5,
    name: 'Pharmacy',
    icon: '💊',
    shortDescription: 'In-house pharmacy with comprehensive stock',
    fullDescription: '24/7 in-house pharmacy stocked with all essential medicines, surgical supplies, and medical equipment at competitive prices.',
    image: '/images/facilities/facility-1.jpg',
    features: [
      '24/7 Service',
      'Wide Medicine Range',
      'Quality Assured Products',
      'Competitive Pricing',
      'Home Delivery',
      'Expert Consultation'
    ],
    capacity: 'Full Stock',
    category: 'Support Services',
  },
  {
    id: 6,
    name: 'Patient Rooms',
    icon: '🛏️',
    shortDescription: 'Comfortable and hygienic patient accommodation',
    fullDescription: 'Well-maintained patient rooms with modern amenities including private, semi-private, and general wards with 24/7 nursing care.',
    image: '/images/facilities/facility-2.jpg',
    features: [
      'AC & Non-AC Rooms',
      'Private Deluxe Rooms',
      'Attached Bathrooms',
      '24/7 Nursing Care',
      'TV & WiFi',
      'Visitor Lounge'
    ],
    capacity: '100 Beds',
    category: 'Accommodation',
  },
  {
    id: 7,
    name: 'Blood Bank',
    icon: '🩸',
    shortDescription: 'Well-equipped blood bank with all blood groups',
    fullDescription: '24/7 blood bank facility with proper storage, testing, and availability of all blood groups for emergency and planned procedures.',
    image: '/images/facilities/facility-3.jpg',
    features: [
      'All Blood Groups Available',
      'Component Separation',
      'Safe Blood Testing',
      'Emergency Blood Supply',
      'Blood Donation Camp',
      'Proper Storage Facility'
    ],
    capacity: '24/7 Service',
    category: 'Support Services',
  },
  {
    id: 8,
    name: 'Cafeteria',
    icon: '🍽️',
    shortDescription: 'Clean and hygienic cafeteria with healthy food',
    fullDescription: 'Spacious cafeteria serving nutritious meals, snacks, and beverages in a clean and comfortable environment for patients and visitors.',
    image: '/images/facilities/facility-4.jpg',
    features: [
      'Nutritious Meals',
      'Special Diet Options',
      'Clean & Hygienic',
      'Affordable Pricing',
      'Comfortable Seating',
      'Extended Hours'
    ],
    capacity: '50 Seating',
    category: 'Amenities',
  },
];

// Get facilities by category
export const getFacilitiesByCategory = (category) => {
  return facilities.filter(facility => facility.category === category);
};

// Featured facilities
export const featuredFacilities = facilities.slice(0, 4);

// Facility categories
export const facilityCategories = [
  'Critical Care',
  'Surgical',
  'Diagnostics',
  'Emergency',
  'Support Services',
  'Accommodation',
  'Amenities'
];
