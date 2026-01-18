import { Experience } from '../types/content.types';

export const EXPERIENCE_DATA: Experience[] = [
  // ==========================================
  // WORK EXPERIENCE (Grade 1 Missions)
  // ==========================================
  {
    id: 'WORK-001',
    category: 'work',
    role: 'Back-end Developer',
    company: 'Profile Image Studio',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFkC6p8p8p8pA/company-logo_200_200/company-logo_200_200/0/1630560000000?e=1746662400&v=beta&t=placeholder', // Placeholder/Generic if unavailable
    period: 'Oct 2024 - Present',
    location: 'Malang Regency, East Java, Indonesia (On-site)',
    status: 'ACTIVE',
    description: 'Working full-time as a Backend Developer, focusing on maintaining and optimizing high-performance server-side applications.',
    achievements: [
      'Architecting scalable backend solutions using AdonisJS and Laravel.',
      'Implementing OAuth protocols and Redis caching mechanisms.',
      'Managing Dockerized deployment pipelines.'
    ],
    techStack: ['Laravel', 'AdonisJs', 'Docker', 'PostgreSQL', 'OAuth', 'Redis'],
    media: [] 
  },
  {
    id: 'WORK-002',
    category: 'work',
    role: 'Web Developer (Internship)',
    company: 'Profile Image Studio',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFkC6p8p8p8pA/company-logo_200_200/company-logo_200_200/0/1630560000000?e=1746662400&v=beta&t=placeholder',
    period: 'Sep 2024 - Jan 2025',
    location: 'Malang, East Java, Indonesia (On-site)',
    status: 'COMPLETED',
    description: 'Part of the core engineering team responsible for developing, maintaining, and optimizing the company\'s web presence. Involved in writing clean, efficient code and collaborating on key architectural decisions.',
    achievements: [
      'Developed full-stack web applications for PIS Japan Career portal and Malang Mbois City Tour (MMCT).',
      'Integrated Midtrans payment gateway for MMCT to automate business processes.',
      'Redesigned admin package creation system for MMCT to improve operational efficiency.',
      'Collaborated in a team setting for API integration and final delivery.'
    ],
    techStack: ['AdonisJs', 'WebSocket', 'AngularJS', 'TypeScript', 'Node.js'],
    media: [
      { type: 'image', title: 'Internship Activity', url: '#', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400' },
      { type: 'image', title: 'Sharing Session', url: '#', thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400' }
    ]
  },
  {
    id: 'WORK-003',
    category: 'work',
    role: 'Back End Developer (Internship)',
    company: 'Social Economic Accelerator Lab (SEAL)',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQG0Q0Q0Q0Q/company-logo_200_200/company-logo_200_200/0/1700000000000?e=1746662400&v=beta&t=placeholder',
    period: 'Aug 2024 - Jan 2025',
    location: 'Malang, East Java, Indonesia (On-site)',
    status: 'COMPLETED',
    description: 'Collaboration with Profile Image Studio to build PIS Japan Career and Malang Mbois City Tour as part of MSIB Batch 7.',
    achievements: [
      'Collaborated on backend architecture for PIS Japan Career.',
      'Built robust APIs for MMCT platform.'
    ],
    techStack: ['AdonisJs', 'TypeScript', 'Node.js', 'PostgreSQL'],
    media: [
      { type: 'pdf', title: 'Certificate MSIB SEAL', url: '#', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg' },
      { type: 'pdf', title: 'LoA Magang SEAL', url: '#', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg' }
    ]
  },

  // ==========================================
  // EDUCATION / TRAINING (Training Arcs)
  // ==========================================
  {
    id: 'EDU-000',
    category: 'education',
    role: 'Bachelor of Applied Science - BASc, Informatics',
    company: 'Politeknik Negeri Jember',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Logo_Politeknik_Negeri_Jember.png/800px-Logo_Politeknik_Negeri_Jember.png', // Fallback or remote URL
    period: 'Aug 2021 - Jun 2025',
    location: 'Jember, East Java',
    status: 'ACTIVE',
    description: 'Grade: 3.87/4.00. Focused on Informatics Engineering with strong emphasis on software development and intelligent systems.',
    achievements: [
      'Active researcher in Deep Learning and Computer Vision topics.',
      'Developed "GansDoctor" deepfake detection system as undergraduate thesis.'
    ],
    techStack: ['Computer Science', 'Informatics', 'Research'],
    media: [
        { type: 'image', title: 'Campus Environment', url: '#', thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400' },
        { type: 'image', title: 'Graduation (Preview)', url: '#', thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400' }
    ]
  },
  {
    id: 'EDU-001',
    category: 'education',
    role: 'Front-End Web Developer Expert',
    company: 'DBS Bank (Coding Camp)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DBS_Bank_logo.svg/1200px-DBS_Bank_logo.svg.png',
    period: 'Sep 2024 - Dec 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Built Final Project: Restaurant Catalogue PWA. Developed a modern restaurant catalogue application prioritizing mobile-first design, responsiveness, accessibility, and high performance.',
    achievements: [
      'Implemented Mobile-First Design using CSS Grid and Off-Screen Canvas.',
      'Ensured Web Accessibility (a11y) with semantic HTML and ARIA.',
      'Built a PWA with offline capabilities (Service Workers).',
      'Optimized performance (Lighthouse) and implemented CI/CD on Netlify.',
      'Practiced Clean Code and Automation Testing (Unit, Integration, E2E).'
    ],
    techStack: ['PWA', 'Web Performance', 'Node.js', 'Automation Testing', 'CI/CD'],
    media: [
        { type: 'link', title: 'Restaurant PWA Demo', url: 'https://mitahudevresto.netlify.app' }
    ]
  },
  {
    id: 'EDU-002',
    category: 'education',
    role: 'Front-End Web Developer Intermediate',
    company: 'DBS Bank (Coding Camp)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DBS_Bank_logo.svg/1200px-DBS_Bank_logo.svg.png',
    period: 'Jul 2024 - Sep 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Deepened frontend skills by building complex web applications.',
    achievements: [
      'Developed a Simple Notes web application.',
      'Implemented real-time form validation and responsive layouts.',
      'Built reusable Web Components.',
      'Integrated asynchronous data fetching with AJAX.'
    ],
    techStack: ['Web Components', 'AJAX', 'JavaScript Bundling']
  },
  {
    id: 'EDU-003',
    category: 'education',
    role: 'Front-End Web Developer Beginner',
    company: 'DBS Bank (Coding Camp)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DBS_Bank_logo.svg/1200px-DBS_Bank_logo.svg.png',
    period: 'Jan 2024 - Jul 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Foundational training in web development concepts.',
    achievements: [
      'Built "Hostingcuyy" responsive landing page.',
      'Developed "Bookshelf App" using DOM manipulation and LocalStorage.'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'DOM']
  },
  {
    id: 'EDU-004',
    category: 'education',
    role: 'Cloud Computing Distinction Graduate',
    company: 'Bangkit Academy',
    logo: 'https://lh3.googleusercontent.com/proxy/J0Z3z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5', // Generic Google/Bangkit placeholder or local asset
    period: 'Feb 2024 - Jul 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Graduated with Distinction (Top 10%). Led a capstone project as Project Manager with 100% completion ahead of schedule.',
    achievements: [
      'Specialized in Google Cloud Platform (GCP).',
      'Completed courses on System Admin, OS, and Security.',
      'Deployed scalable apps using App Engine and Cloud Run.'
    ],
    techStack: ['GCP', 'Project Management', 'Cloud Computing', 'Node.js'],
    media: [
        { type: 'pdf', title: 'Distinction Certificate', url: '#' },
        { type: 'pdf', title: 'Graduation Letter', url: '#' }
    ]
  },
  {
    id: 'EDU-005',
    category: 'education',
    role: 'Google Cloud Arcade Facilitator',
    company: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
    period: 'May 2024 - Jul 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Coding scholarship program with gamification to improve cloud computing and AI skills.',
    achievements: [
      'Completed Cloud Track: Security, BigQuery, Networking, Deploy.',
      'Completed AI Track: GenAIus Registries, Travels, and Travel Guides.'
    ],
    techStack: ['GCP', 'BigQuery', 'Generative AI']
  },
  {
    id: 'EDU-006',
    category: 'education',
    role: 'Junior Network Administrator',
    company: 'Digital Talent Scholarship (VSGA)',
    logo: 'https://digitalent.kominfo.go.id/assets/images/logo_dts.png',
    period: 'Jul 2024',
    location: 'Indonesia',
    status: 'COMPLETED',
    description: 'Vocational School Graduate Academy program focusing on Network Administration.',
    achievements: [
      'Learned Network Administration based on SKKNI standards.',
      'Configured network devices and security protocols.'
    ],
    techStack: ['Networking', 'Cisco', 'Security'],
    media: [
        { type: 'pdf', title: 'VSGA Certificate', url: '#' }
    ]
  },
  {
    id: 'EDU-007',
    category: 'education',
    role: 'AWS Back-End Academy',
    company: 'Amazon Web Services (AWS)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    period: 'Mar 2024 - Jul 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Scholarship program to improve Back-End development competence.',
    achievements: [
      'Completed Javascript Basic.',
      'Completed BackEnd Beginner.',
      'Completed Cloud AWS basics.'
    ],
    techStack: ['AWS', 'Back-End', 'JavaScript']
  },
  {
    id: 'EDU-008',
    category: 'education',
    role: 'Machine Learning Developer',
    company: 'Indosat Ooredoo Hutchison (IDCamp)',
    logo: 'https://idcamp.indosatooredoo.com/assets/img/logo-idcamp.png',
    period: 'Sep 2023 - Feb 2024',
    location: 'Remote',
    status: 'COMPLETED',
    description: 'Scholarship program aiming to produce ready-to-compete young Indonesian developers.',
    achievements: [
      'Learned Machine Learning fundamentals.',
      'Studied Computer Vision concepts.'
    ],
    techStack: ['Machine Learning', 'Computer Vision']
  },
  {
    id: 'EDU-009',
    category: 'education',
    role: 'Junior Web Developer',
    company: 'Digital Talent Scholarship (VSGA)',
    logo: 'https://digitalent.kominfo.go.id/assets/images/logo_dts.png',
    period: 'Jun 2023 - Jul 2023',
    location: 'Indonesia',
    status: 'COMPLETED',
    description: 'Vocational School Graduate Academy program based on SKKNI.',
    achievements: [
      'Web Development Fundamentals.',
      'Node.js Basics.'
    ],
    techStack: ['Web Development', 'Node.js']
  },

  // ==========================================
  // ORGANIZATIONS (Clans / Alliances)
  // ==========================================
  {
    id: 'ORG-001',
    category: 'organization',
    role: 'Member, Medinfo Division',
    company: 'UKM SKIM (Studi Karya Ilmiah Mahasiswa)',
    logo: 'https://placehold.co/200x200/000/fff?text=SKIM', // Placeholder
    period: 'Feb 2024 - Dec 2024',
    location: 'Politeknik Negeri Jember',
    status: 'COMPLETED',
    description: 'Responsible for enhancing organizational visibility and communication by designing promotional materials, editing videos, and documenting activities. Also managed social media accounts and blogs.',
    achievements: [
      'Served as Chief Officer of Publication, Decoration, and Documentation (PDD) division for 9th Safe SIP National LKTIN.',
      'Designed posters, Instagram feeds, pamphlets, and banners for events.',
      'Managed content publication to engage and inform the audience.'
    ],
    techStack: ['Graphic Design', 'Social Media Management', 'Video Editing', 'Content Creation'],
    media: []
  }
];