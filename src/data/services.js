// Medical services and departments data

export const services = [
  {
    id: 1,
    name: 'Gynaecology & Obstetrics',
    icon: '👩‍⚕️',
    shortDescription: 'Complete women healthcare, maternity, and gynaec oncology services',
    fullDescription: 'Comprehensive women healthcare including prenatal care, delivery services, gynaecological oncology, and treatment of all women-related conditions with modern facilities.',
    image: '/images/departments/gynecology.jpg',
    features: [
      'Gynaecological Oncology',
      'High-Risk Pregnancy Management',
      'Normal & C-Section Delivery',
      'Laparoscopic Surgery',
      'Infertility Treatment',
      'Family Planning Services'
    ],
    available247: true,
    doctor: 'Dr. Anjali',
  },
  {
    id: 2,
    name: 'Anaesthesia & Critical Care',
    icon: '🏥',
    shortDescription: 'Advanced critical care, pain management, and ICU services',
    fullDescription: 'Expert critical care management with state-of-the-art ICU, pain relief services, and anaesthesia for all surgical procedures with 24/7 availability.',
    image: '/images/departments/critical-care.jpg',
    features: [
      'ICU Management',
      'Critical Care Support',
      'Pain Relief Services',
      'Surgical Anaesthesia',
      'Emergency Anaesthesia',
      '24/7 Critical Care Team'
    ],
    available247: true,
    isHighlighted: true,
    doctor: 'Dr. Raju Kumar',
  },
  {
    id: 3,
    name: 'Pediatrics',
    icon: '👶',
    shortDescription: 'Complete child healthcare from newborn to adolescence',
    fullDescription: 'Dedicated pediatric department by gold medalist pediatrician providing comprehensive care for children including vaccination, growth monitoring, and treatment of childhood diseases.',
    image: '/images/departments/pediatrics.jpg',
    features: [
      'Newborn Care',
      'Child Vaccination',
      'Growth & Development Monitoring',
      'Treatment of Childhood Diseases',
      'Nutritional Counseling',
      'Pediatric Emergency Care'
    ],
    available247: true,
    doctor: 'Dr. Shilpi',
  },
  {
    id: 4,
    name: 'Cardiology',
    icon: '❤️',
    shortDescription: 'Advanced heart care with interventional cardiology services',
    fullDescription: 'Comprehensive cardiology department by gold medalist cardiologist offering state-of-the-art facilities for diagnosis and treatment of all heart-related conditions.',
    image: '/images/departments/cardiology.jpg',
    features: [
      'Interventional Cardiology',
      'Angioplasty',
      'ECG & Echocardiography',
      'Heart Failure Management',
      'Preventive Cardiology',
      '24/7 Emergency Cardiac Care'
    ],
    available247: true,
    doctor: 'Dr. Gyan Prakash',
  },
  {
    id: 5,
    name: 'ENT (Ear, Nose & Throat)',
    icon: '👂',
    shortDescription: 'Complete ENT care with advanced diagnostic and surgical facilities',
    fullDescription: 'Expert ENT services including treatment of ear infections, sinus disorders, throat problems, and advanced ENT surgeries.',
    image: '/images/departments/ent.jpg',
    features: [
      'Sinus Surgery',
      'Ear Infection Treatment',
      'Throat Disorders',
      'Hearing Problems',
      'Tonsillectomy',
      'ENT Endoscopy'
    ],
    available247: false,
    doctor: 'Dr. Avanish Purushottam',
  },
  {
    id: 6,
    name: 'General Medicine & Diabetology',
    icon: '🩺',
    shortDescription: 'Expert care for diabetes, lifestyle diseases, and general health',
    fullDescription: 'Comprehensive general medicine and specialized diabetes management services for prevention and treatment of lifestyle diseases.',
    image: '/images/departments/general-medicine.jpg',
    features: [
      'Diabetes Management',
      'Hypertension Treatment',
      'Lifestyle Disease Care',
      'Preventive Healthcare',
      'Health Checkups',
      'Chronic Disease Management'
    ],
    available247: true,
    doctor: 'Dr. Soni Kumari',
  },
  {
    id: 7,
    name: 'General Medicine',
    icon: '⚕️',
    shortDescription: 'Complete medical care for acute and chronic illnesses',
    fullDescription: 'Senior general medicine specialist with 12 years of experience providing expert care for fever, infections, respiratory disorders, and complex medical conditions.',
    image: '/images/departments/internal-medicine.jpg',
    features: [
      'Fever & Infection Treatment',
      'Respiratory Disorders',
      'Gastroenterology',
      'Acute Illness Management',
      'Chronic Disease Care',
      'Health Consultations'
    ],
    available247: true,
    doctor: 'Dr. Rajeev Kumar',
  },
  {
    id: 8,
    name: 'General Surgery',
    icon: '🔬',
    shortDescription: 'Advanced surgical procedures with laparoscopic techniques',
    fullDescription: 'State-of-the-art surgical facilities for various procedures including laparoscopic surgeries and emergency surgical care by experienced surgical team.',
    image: '/images/departments/surgery.jpg',
    features: [
      'Laparoscopic Surgery',
      'Hernia Repair',
      'Appendectomy',
      'Emergency Surgery',
      'Gallbladder Surgery',
      'Minimally Invasive Surgery'
    ],
    available247: true,
    doctor: 'Dr. Alok Ranjan',
  },
  {
    id: 9,
    name: 'Emergency Services',
    icon: '🚑',
    shortDescription: '24/7 emergency medical care with rapid response team',
    fullDescription: 'Round-the-clock emergency services with dedicated ambulance facility, trauma care, and critical care unit for immediate medical attention.',
    image: '/images/departments/emergency.jpg',
    features: [
      '24/7 Emergency Department',
      'Ambulance Services',
      'Trauma Care Unit',
      'Emergency Surgery',
      'Critical Care ICU',
      'Life Support Systems'
    ],
    available247: true,
    isHighlighted: true,
  },
  {
    id: 10,
    name: 'Laboratory Services',
    icon: '🔬',
    shortDescription: 'Advanced diagnostic laboratory with accurate and quick results',
    fullDescription: 'Fully equipped diagnostic laboratory providing comprehensive testing services with accurate results and quick turnaround time.',
    image: '/images/departments/laboratory.jpg',
    features: [
      'Blood Tests',
      'Urine Analysis',
      'Pathology Services',
      'Microbiology',
      'Biochemistry',
      'Home Sample Collection'
    ],
    available247: true,
  },
  {
    id: 11,
    name: 'Radiology & Imaging',
    icon: '📷',
    shortDescription: 'Advanced imaging services for accurate diagnosis',
    fullDescription: 'Modern radiology department with latest imaging equipment for precise diagnosis of various medical conditions.',
    image: '/images/departments/radiology.jpg',
    features: [
      'X-Ray',
      'Ultrasound',
      'CT Scan',
      'Digital Imaging',
      'Doppler Studies',
      'Diagnostic Imaging'
    ],
    available247: true,
  },
  {
    id: 12,
    name: 'Pharmacy',
    icon: '💊',
    shortDescription: '24/7 in-house pharmacy with all essential medicines',
    fullDescription: 'Fully stocked pharmacy providing all prescribed medications and over-the-counter medicines at reasonable prices with expert consultation.',
    image: '/images/departments/pharmacy.jpg',
    features: [
      'Wide Range of Medicines',
      'Generic Alternatives Available',
      'Quality Assurance',
      'Competitive Pricing',
      'Expert Pharmacist Available',
      '24/7 Service'
    ],
    available247: true,
  },
];

// Featured services for homepage
export const featuredServices = services.filter(service => 
  [1, 2, 3, 4, 6, 9].includes(service.id)
);

// Emergency services
export const emergencyServices = services.filter(service => 
  service.available247 && service.isHighlighted
);

// Get service by ID
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};
