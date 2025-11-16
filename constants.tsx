import React from 'react';
import type { NavLink, Award, Testimonial, Facility, FaqItem, TabbableListItem, AboutStat, HeroStat, Benefit, InfoCard, HowItWorksStep, ProcessStep, Service, Champion } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Hospitals', href: '#hospitals' },
  { name: 'Specialities', href: '#specialities' },
  { name: 'For Patients', href: '#patients' },
  { name: 'Knowledge Centre', href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
];

export const TABBED_SPECIALTIES: TabbableListItem[] = [
    { name: 'Cancer Care / Oncology', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/cancer care oncology.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/cancer care oncology.svg' },
    { name: 'Robotic Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/The Da Vinci Xi Robotic Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/The Da Vinci Xi Robotic Surgery.svg' },
    { name: 'Cardiac Sciences', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/cardia.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/cardia.svg' },
    { name: 'Liver Transplant', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Liver Transplant and bs.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Liver Transplant and bs.svg' },
    { name: 'Orthopaedics', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Orthopaedics.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Orthopaedics.svg' },
    { name: 'Neurosciences', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Neurosciences.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Neurosciences.svg' },
    { name: 'Gastroenterology', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Gastroenterology.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Gastroenterology.svg' },
    { name: 'Thoracic Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Thoracic Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Thoracic Surgery.svg' },
];

export const TABBED_PROCEDURES: TabbableListItem[] = [
    { name: 'CAR T-Cell Therapy', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/procedure-new.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/procedure-new.svg' },
    { name: 'Aortic Valve Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Valvular Heart Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Valvular Heart Surgery.svg' },
    { name: 'Knee Replacement', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Knee Replacement Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Knee Replacement Surgery.svg' },
    { name: 'Da Vinci Robotic Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/The Da Vinci Xi Robotic Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/The Da Vinci Xi Robotic Surgery.svg' },
    { name: 'Bone Marrow Transplant', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Bone Marrow Transplant .svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Bone Marrow Transplant .svg' },
    { name: 'Lung Transplant', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Lung Transplant.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Lung Transplant.svg' },
    { name: 'Thoracic Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/Thoracic Surgery.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/Thoracic Surgery.svg' },
    { name: 'LVAD Surgery', href: '#', iconBlueUrl: 'https://www.maxhealthcare.in/img/LVAD.svg', iconWhiteUrl: 'https://www.maxhealthcare.in/img/white/LVAD.svg' },
];


export const AWARDS: Award[] = [
    { image: 'https://via.placeholder.com/150x80.png?text=FICCI', title: 'FICCI Healthcare Excellence' },
    { image: 'https://via.placeholder.com/150x80.png?text=NABH', title: 'NABH Accreditation' },
    { image: 'https://via.placeholder.com/150x80.png?text=AHPI', title: 'AHPI Award' },
    { image: 'https://via.placeholder.com/150x80.png?text=Health-Plus', title: 'Healthcare Achievers' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "The care and professionalism at Max Healthcare were outstanding. The doctors and staff made me feel comfortable and well-cared-for throughout my treatment.",
        name: 'Rohan Sharma',
        location: 'New Delhi'
    },
    {
        quote: "I am incredibly grateful for the world-class treatment I received. The facilities are top-notch, and the medical team is truly dedicated to patient well-being.",
        name: 'Priya Patel',
        location: 'Mumbai'
    },
     {
        quote: "Booking an appointment and consulting with a specialist was seamless. The entire process was efficient and patient-friendly. Highly recommended!",
        name: 'Amit Kumar',
        location: 'Gurgaon'
    }
];

export const ABOUT_STATS: AboutStat[] = [
    { value: '500+', label: 'Serving patients weekly' },
    { value: '95%', label: 'Patient satisfaction rate' },
    { value: '10+', label: 'Years serving the community' },
    { value: '24/7', label: 'Urgent care available' },
];

export const FACILITIES: Facility[] = [
    {
        icon: <i className="fas fa-procedures text-3xl text-blue-500"></i>,
        name: 'Advanced Operation Theatres',
    },
    {
        icon: <i className="fas fa-bed text-3xl text-blue-500"></i>,
        name: 'Intensive Care Units (ICU)',
    },
    {
        icon: <i className="fas fa-tint text-3xl text-blue-500"></i>,
        name: '24/7 Blood Bank',
    },
    {
        icon: <i className="fas fa-baby-carriage text-3xl text-blue-500"></i>,
        name: 'Maternity & Neonatal Care',
    },
    {
        icon: <i className="fas fa-prescription-bottle-alt text-3xl text-blue-500"></i>,
        name: 'In-house Pharmacy',
    },
    {
        icon: <i className="fas fa-utensils text-3xl text-blue-500"></i>,
        name: 'Cafeteria & Dining',
    },
    {
        icon: <i className="fas fa-wheelchair text-3xl text-blue-500"></i>,
        name: 'Ambulance Services',
    },
    {
        icon: <i className="fas fa-wifi text-3xl text-blue-500"></i>,
        name: 'Wi-Fi & Lounges',
    }
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'How do I book an appointment?',
        answer: 'You can book an appointment through our website by clicking the "Book an Appointment" button, or by calling our helpline. We also have a mobile app for easy booking.'
    },
    {
        question: 'What are the visiting hours?',
        answer: 'Visiting hours are generally from 4:00 PM to 6:00 PM for general wards. For specific wards like ICU, please check with the front desk for detailed information.'
    },
    {
        question: 'Do you accept health insurance?',
        answer: 'Yes, we accept a wide range of health insurance plans. Please contact our insurance desk with your policy details to confirm coverage for your treatment.'
    },
    {
        question: 'What documents do I need to bring for my first visit?',
        answer: 'Please bring a valid photo ID, your insurance card, any referral letters from your primary care doctor, and a list of any current medications you are taking.'
    }
];

export const HERO_STATS: HeroStat[] = [
    { value: '250+', label: 'Specialized Doctors' },
    { value: '24/7', label: 'Emergency Service' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '5', label: 'Hospital Locations' },
];

export const BENEFITS: Benefit[] = [
    {
        icon: <i className="fas fa-heart-pulse text-4xl"></i>,
        title: 'Compassionate Care',
        description: 'Our team prioritizes compassionate and personalized care, ensuring that every patient feels valued and heard.',
        href: '#',
    },
    {
        icon: <i className="fas fa-user-md text-4xl"></i>,
        title: 'Experienced Professionals',
        description: 'With years of experience and expertise, our medical professionals are dedicated to delivering the highest standard of care.',
        href: '#',
    },
    {
        icon: <i className="fas fa-users text-4xl"></i>,
        title: 'Patient-Centered Approach',
        description: 'Your health and well-being are our top priorities, and we are to partnering with you on your healthcare journey.',
        href: '#',
    },
    {
        icon: <i className="fas fa-robot text-4xl"></i>,
        title: 'Advanced Technology',
        description: 'We utilize cutting-edge technology and medical advancements to provide accurate diagnoses and effective treatments.',
        href: '#',
    }
];

export const INFO_CARDS: InfoCard[] = [
    {
        icon: <i className="fas fa-user-doctor text-sky-500 text-2xl"></i>,
        title: 'Explore Departments',
        bgColor: 'bg-sky-500',
        textColor: 'text-white',
    },
    {
        icon: <i className="fas fa-briefcase-medical text-blue-600 text-2xl"></i>,
        title: 'Emergency Care',
        description: 'Fast, reliable treatment when you need it most.',
        bgColor: 'bg-blue-600',
        textColor: 'text-white',
    },
    {
        icon: <i className="fas fa-history text-blue-600 text-2xl"></i>,
        title: '24/7 Full Support',
        description: 'Always here for appointments and emergencies.',
        bgColor: 'bg-slate-100',
        textColor: 'text-gray-800',
    }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        step: 1,
        title: 'Schedule An Appointment',
        description: 'Begin your journey to better health by scheduling a consultation with Max Healthcare. You can easily book your appointment by calling our friendly reception team or using our convenient online booking system. We offer flexible appointment times to accommodate your schedule, including evening and appointments for your convenience.',
        image: 'https://plus.unsplash.com/premium_photo-1661757234479-de71577a840e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 2,
        title: 'Consultation',
        description: 'During your consultation, you will meet with one of our experienced healthcare professionals who will take the time to listen to your concerns, review your medical history, and conduct a thorough examination to understand your health needs.',
        image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 3,
        title: 'Personalized Treatment',
        description: 'Based on your consultation and any necessary diagnostic tests, we will develop a personalized treatment plan tailored to your specific needs and goals. We believe in collaborative care and will involve you in every decision.',
        image: 'https://images.unsplash.com/photo-1530497610242-b8aab8d16f3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        step: 4,
        title: 'Ongoing Care',
        description: 'Our commitment to your health doesn’t end after your initial treatment. We provide ongoing care and support to help you maintain your well-being and prevent future health issues, ensuring a long and healthy life.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Clinical Intake & Health History',
    description: 'We begin with a thorough review of your medical history and current health concerns to create a complete picture of your needs.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    number: '02',
    title: 'Multidisciplinary Patient Review',
    description: 'Our team of specialists collaborates to review your case, ensuring you receive a comprehensive and well-rounded diagnosis.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    number: '03',
    title: 'Personalised Treatment',
    description: 'Based on the review, we design a personalized treatment plan tailored to your unique health goals and circumstances.',
    image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    number: '04',
    title: 'Outcome Evaluation & Preventive',
    description: 'We continuously monitor your progress and provide guidance on preventive care to ensure your long-term health and well-being.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const SERVICES: Service[] = [
  {
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'X-Ray',
    title: 'Digital X-Ray',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Dental',
    title: 'Dental Fixing',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Surgery',
    title: 'Human Brain Surgery',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Vaccine',
    title: 'Pediatric Dentistry',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Cardiology',
    title: 'Heart Monitoring',
    href: '#',
  },
  {
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Diagnostics',
    title: 'Advanced Lab Tests',
    href: '#',
  }
];

export const CHAMPIONS_DATA: Champion[][] = [
  [
    { name: 'MAYUKH CHOUDHURY', rank: 161, college: 'IIT Kanpur', course: 'Online Classroom Course', image: 'https://i.ibb.co/F8z0zZt/student1.png' },
    { name: 'AVIK DAS', rank: 69, college: 'IISc Banglore', course: 'Online Classroom Course', image: 'https://i.ibb.co/bF4B1Z5/student2.png' },
    { name: 'GARV CHAUDHA', rank: 163, college: 'IIT Delhi', course: 'Online Classroom Course', image: 'https://i.ibb.co/wJMyC6y/student3.png' },
  ],
  [
    { name: 'Rohan Sharma', rank: 170, college: 'IIT Bombay', course: 'Online Classroom Course', image: 'https://i.ibb.co/F8z0zZt/student1.png' },
    { name: 'Priya Patel', rank: 88, college: 'IIT Madras', course: 'Online Classroom Course', image: 'https://i.ibb.co/bF4B1Z5/student2.png' },
    { name: 'Amit Kumar', rank: 192, college: 'IIT Roorkee', course: 'Online Classroom Course', image: 'https://i.ibb.co/wJMyC6y/student3.png' },
  ]
];