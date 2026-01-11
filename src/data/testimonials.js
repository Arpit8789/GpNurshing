// Patient testimonials data (10+ testimonials for auto-rotation)

export const testimonials = [
  {
    id: 1,
    name: 'Sunita Devi',
    age: 32,
    location: 'Gaya, Bihar',
    image: '/images/testimonials/patient-1.jpg',
    rating: 5,
    treatment: 'Maternity Care & Delivery',
    date: 'December 2025',
    testimonial: 'Dr. Anjali and her team made my high-risk pregnancy journey so safe and comfortable. The care I received was exceptional. My baby and I are both healthy thanks to GP Hospital!',
    isVerified: true,
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    age: 58,
    location: 'Patna, Bihar',
    image: '/images/testimonials/patient-2.jpg',
    rating: 5,
    treatment: 'Cardiac Care',
    date: 'November 2025',
    testimonial: 'Dr. Gyan Prakash saved my life with timely angioplasty. His expertise and the advanced cardiac facilities at GP Hospital are excellent. Forever grateful to the entire cardiology team!',
    isVerified: true,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    age: 6,
    location: 'Muzaffarpur, Bihar',
    image: '/images/testimonials/patient-3.jpg',
    rating: 5,
    treatment: 'Pediatric Care',
    date: 'October 2025',
    testimonial: 'Dr. Shilpi is wonderful with children! She treated my daughter with so much care and patience. The pediatric department is clean and child-friendly. Highly recommend!',
    isVerified: true,
    parentName: 'Mrs. Rekha Sharma',
  },
  {
    id: 4,
    name: 'Manoj Tiwari',
    age: 45,
    location: 'Darbhanga, Bihar',
    image: '/images/testimonials/patient-1.jpg',
    rating: 5,
    treatment: 'Diabetes Management',
    date: 'September 2025',
    testimonial: 'Dr. Soni Kumari helped me manage my diabetes effectively. Her treatment plan and lifestyle guidance have completely changed my life. Excellent doctor and hospital!',
    isVerified: true,
  },
  {
    id: 5,
    name: 'Ajay Singh',
    age: 38,
    location: 'Bhagalpur, Bihar',
    image: '/images/testimonials/patient-2.jpg',
    rating: 5,
    treatment: 'General Surgery',
    date: 'August 2025',
    testimonial: 'I underwent laparoscopic hernia surgery by Dr. Alok Ranjan. The surgery was smooth, minimal pain, and quick recovery. Very satisfied with the surgical team at GP Hospital!',
    isVerified: true,
  },
  {
    id: 6,
    name: 'Kavita Kumari',
    age: 29,
    location: 'Patna, Bihar',
    image: '/images/testimonials/patient-3.jpg',
    rating: 5,
    treatment: 'Gynecological Treatment',
    date: 'July 2025',
    testimonial: 'Dr. Anjali is not just a skilled surgeon but also very compassionate. She performed my laparoscopic surgery with precision. I felt safe and well-cared for throughout.',
    isVerified: true,
  },
  {
    id: 7,
    name: 'Rakesh Pandey',
    age: 52,
    location: 'Hajipur, Bihar',
    image: '/images/testimonials/patient-1.jpg',
    rating: 5,
    treatment: 'General Medicine',
    date: 'June 2025',
    testimonial: 'Dr. Rajeev Kumar diagnosed my respiratory condition accurately. His treatment approach is scientific and caring. The hospital staff is also very supportive. Great experience!',
    isVerified: true,
  },
  {
    id: 8,
    name: 'Neelam Gupta',
    age: 42,
    location: 'Begusarai, Bihar',
    image: '/images/testimonials/patient-2.jpg',
    rating: 5,
    treatment: 'ENT Treatment',
    date: 'May 2025',
    testimonial: 'Dr. Avanish Purushottam treated my chronic sinus problem. After surgery, I can breathe normally again! The ENT department has excellent facilities. Thank you, GP Hospital!',
    isVerified: true,
  },
  {
    id: 9,
    name: 'Vikram Singh',
    age: 48,
    location: 'Samastipur, Bihar',
    image: '/images/testimonials/patient-3.jpg',
    rating: 5,
    treatment: 'Critical Care & ICU',
    date: 'April 2025',
    testimonial: 'I was admitted to ICU after a major accident. Dr. Raju Kumar and the critical care team worked tirelessly. Their dedication saved my life. GP Hospital is truly life-saving!',
    isVerified: true,
  },
  {
    id: 10,
    name: 'Anita Jha',
    age: 35,
    location: 'Patna, Bihar',
    image: '/images/testimonials/patient-1.jpg',
    rating: 5,
    treatment: 'Emergency Care',
    date: 'March 2025',
    testimonial: 'Late-night medical emergency and GP Hospital 24/7 emergency team responded immediately. The doctors, nurses, and support staff were professional and caring. Lives are safe here!',
    isVerified: true,
  },
  {
    id: 11,
    name: 'Sanjay Kumar',
    age: 55,
    location: 'Muzaffarpur, Bihar',
    image: '/images/testimonials/patient-2.jpg',
    rating: 5,
    treatment: 'Surgical Anaesthesia',
    date: 'February 2025',
    testimonial: 'Dr. Raju Kumar expertise in anaesthesia made my surgery experience painless and smooth. The post-operative pain management was excellent. Highly skilled anaesthesia team!',
    isVerified: true,
  },
  {
    id: 12,
    name: 'Pooja Singh',
    age: 27,
    location: 'Gaya, Bihar',
    image: '/images/testimonials/patient-3.jpg',
    rating: 5,
    treatment: 'Vaccination & Child Care',
    date: 'January 2025',
    testimonial: 'Dr. Shilpi handles my baby with so much love and care. She explains everything clearly and the vaccination process is painless. Best pediatrician in Patna!',
    isVerified: true,
    parentName: 'Mrs. Pooja Singh',
  },
];

// Get average rating
export const getAverageRating = () => {
  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return (totalRating / testimonials.length).toFixed(1);
};

// Get total testimonials count
export const getTotalTestimonials = () => testimonials.length;

// Get recent testimonials
export const getRecentTestimonials = (count = 6) => {
  return testimonials.slice(0, count);
};

// Get testimonials by rating
export const getTestimonialsByRating = (rating) => {
  return testimonials.filter(t => t.rating === rating);
};
