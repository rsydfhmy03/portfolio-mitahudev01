import { Certification } from '../types/content.types';

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'award_bangkit',
    name: 'Graduated With Distinction At Bangkit Academy',
    issuer: 'Bangkit Academy (Google, GoTo, Traveloka)',
    date: 'Jul 2024',
    image: 'https://images.unsplash.com/photo-1596496050844-361ea01904be?q=80&w=1000&auto=format&fit=crop', // Placeholder for Bangkit
    orientation: 'landscape',
    association: 'Associated with Bangkit Academy',
    description: 'Chosen as one of 4,650 students from 327 universities across Indonesia, selected from more than 57,000 registrants. Successfully graduated with distinction, achieving recognition as one of the top 10% of graduates in the Cloud Computing Learning path.',
    media: [
        { type: 'pdf', title: 'Bangkit 2024 Certificate', url: '#' }
    ]
  },
  {
    id: 'award_tif',
    name: '1st Place - Best Application Category',
    issuer: 'KEMATIF (TIF Exhibition)',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop', // Placeholder
    orientation: 'landscape',
    association: 'Associated with Politeknik Negeri Jember',
    description: 'Received the Best Application Category award for Intelligent and Embedded Systems during the TIF Exhibition 2023 event.',
    media: [
        { type: 'image', title: 'Certificate TIF Exhibition', url: '#' }
    ]
  },
  {
    id: 'award_nec',
    name: '1st Place - National Essay Competition',
    issuer: 'UIN Syarif Hidayatullah Jakarta',
    date: 'Sep 2023',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop', // Placeholder
    orientation: 'landscape',
    description: 'Participated in the National Essay Competition by proposing innovations for the design of smart pots for onion plants, leveraging IoT technology.',
    media: [
        { type: 'pdf', title: 'Certificate NEC', url: '#' }
    ]
  },
  {
    id: 'cert_aws',
    name: 'AWS Back-End Academy',
    issuer: 'Amazon Web Services',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop',
    orientation: 'portrait',
    description: 'Comprehensive training on building scalable backend architectures on AWS.',
  },
  {
    id: 'cert_dicoding',
    name: 'Front-End Web Developer Expert',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    orientation: 'landscape',
    description: 'Expert level course covering PWA, Testing, and Performance Optimization.',
  }
];