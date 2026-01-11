// 🩺 DOCTORS DATA WITH IMAGE SPACE MARKERS

export const doctors = [
  {
    id: 1,
    name: 'Dr. Anjali',
    specialty: 'Gynaecologist, Obstetrician & Gynaec Oncologist',
    qualification: 'MBBS, DNB, MCH',
    experience: '9 Years',
    image: '/images/doctors/dr-anjali.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Expert in high-risk pregnancy, gynaecological oncology, and minimally invasive surgeries with extensive training from leading hospitals.',
    availability: 'Mon-Sat: 10 AM - 5 PM',
    languages: ['Hindi', 'English'],
    specializations: [
      'Gynaecological Oncology',
      'High-Risk Pregnancy',
      'Laparoscopic Surgery',
      'Infertility Treatment'
    ],
    awards: [
      'Ex-SR – BSA Hospital Delhi',
      'Ex Consultant – Apollo Delhi',
      'Ex ADMO (UPSC–CMS)'
    ],
  },
  {
    id: 2,
    name: 'Dr. Raju Kumar',
    specialty: 'Anaesthesia & Critical Care',
    qualification: 'MBBS, DNB',
    experience: '8 Years',
    image: '/images/doctors/dr-raju-kumar.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Specialized in critical care management, pain relief, and anaesthesia for complex surgical procedures with proven track record.',
    availability: 'Mon-Sun: 24x7 Emergency Available',
    languages: ['Hindi', 'English'],
    specializations: [
      'Critical Care Management',
      'Pain Relief',
      'Surgical Anaesthesia',
      'ICU Management'
    ],
    awards: [
      'Ex-Resident – SNMC Jodhpur',
      'Ex-Resident – SGMH Delhi'
    ],
  },
  {
    id: 3,
    name: 'Dr. Shilpi',
    specialty: 'Paediatrician',
    qualification: 'MBBS (Gold Medalist), MD',
    experience: '4 Years',
    image: '/images/doctors/dr-shilpi.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Gold medalist pediatrician specializing in child healthcare, vaccination, and developmental disorders with compassionate approach.',
    availability: 'Mon-Sat: 9 AM - 6 PM',
    languages: ['Hindi', 'English', 'Bhojpuri'],
    specializations: [
      'Newborn Care',
      'Child Vaccination',
      'Growth Monitoring',
      'Childhood Infections'
    ],
    awards: [
      'MBBS (Hons) Gold Medalist',
      'Ex-Consultant – Mediversal & Ruban Hospital'
    ],
  },
  {
    id: 4,
    name: 'Dr. Gyan Prakash',
    specialty: 'Cardiologist',
    qualification: 'MBBS (Gold Medalist), MD, DM',
    experience: '5 Years',
    image: '/images/doctors/dr-gyan-prakash.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Gold medalist cardiologist expert in interventional cardiology and heart disease management with advanced training.',
    availability: 'Mon-Fri: 10 AM - 4 PM',
    languages: ['Hindi', 'English'],
    specializations: [
      'Interventional Cardiology',
      'Angioplasty',
      'Heart Failure Management',
      'Preventive Cardiology'
    ],
    awards: [
      'MBBS (Hons) Gold Medalist',
      'Ex Consultant – Big Apollo Patna',
      'Assistant Professor – HMCH'
    ],
  },
  {
    id: 5,
    name: 'Dr. Avanish Purushottam',
    specialty: 'ENT Specialist',
    qualification: 'MBBS, DNB (ENT)',
    experience: '4 Years',
    image: '/images/doctors/dr-avanish.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'ENT specialist with expertise in ear, nose, and throat disorders including sinus surgery and hearing problems.',
    availability: 'Tue-Sun: 11 AM - 5 PM',
    languages: ['Hindi', 'English'],
    specializations: [
      'Sinus Surgery',
      'Ear Infections',
      'Throat Disorders',
      'Hearing Problems'
    ],
    awards: [
      'Ex-Resident – TATA Main Hospital Jamshedpur'
    ],
  },
  {
    id: 6,
    name: 'Dr. Soni Kumari',
    specialty: 'General Physician & Diabetologist',
    qualification: 'MBBS, MD',
    experience: '6 Years',
    image: '/images/doctors/dr-soni-kumari.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Expert in diabetes management, lifestyle diseases, and general medicine with patient-centered approach.',
    availability: 'Mon-Sat: 9 AM - 6 PM',
    languages: ['Hindi', 'English'],
    specializations: [
      'Diabetes Management',
      'Hypertension',
      'Lifestyle Diseases',
      'Preventive Healthcare'
    ],
    awards: [
      'Ex-Resident – Safdarjung Hospital'
    ],
  },
  {
    id: 7,
    name: 'Dr. Rajeev Kumar',
    specialty: 'General Medicine',
    qualification: 'MBBS, MD',
    experience: '12 Years',
    image: '/images/doctors/dr-rajeev-kumar.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Senior general medicine specialist and Assistant Professor with extensive clinical experience in managing complex medical conditions.',
    availability: 'Mon-Fri: 2 PM - 7 PM',
    languages: ['Hindi', 'English', 'Maithili'],
    specializations: [
      'Fever & Infections',
      'Respiratory Disorders',
      'Gastroenterology',
      'Acute & Chronic Illnesses'
    ],
    awards: [
      'Assistant Professor – NMCH Patna'
    ],
  },
  {
    id: 8,
    name: 'Dr. Alok Ranjan',
    specialty: 'General Surgery',
    qualification: 'MBBS, MS',
    experience: '6 Years',
    image: '/images/doctors/dr-alok-ranjan.jpg', // 🩺 ADD DOCTOR IMAGE HERE
    description: 'Senior resident general surgeon with expertise in laparoscopic and emergency surgical procedures.',
    availability: 'Mon-Sun: Emergency Available',
    languages: ['Hindi', 'English'],
    specializations: [
      'Laparoscopic Surgery',
      'Hernia Repair',
      'Appendectomy',
      'Emergency Surgery'
    ],
    awards: [
      'Senior Resident General Surgery – NMCH Patna'
    ],
  },
];

// Featured doctors for homepage
export const featuredDoctors = doctors.slice(0, 4);

// Get doctor by ID
export const getDoctorById = (id) => {
  return doctors.find(doctor => doctor.id === id);
};

// Get doctors by specialty
export const getDoctorsBySpecialty = (specialty) => {
  return doctors.filter(doctor => 
    doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
  );
};

// Doctor specialties list
export const specialties = [
  'Gynaecology & Obstetrics',
  'Anaesthesia & Critical Care',
  'Paediatrics',
  'Cardiology',
  'ENT',
  'General Medicine',
  'Diabetology',
  'General Surgery',
];
