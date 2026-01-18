import { Project } from '../types/content.types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj_gansdoctor',
    title: 'GansDoctor App',
    categories: ['Mobile', 'AI/ML', 'Backend', 'Cloud'],
    association: 'Politeknik Negeri Jember (Undergraduate Thesis)',
    date: 'Aug 2024 - Jun 2025',
    shortDesc: 'AI-Generated Face Detection System to combat deepfakes.',
    fullDesc: `This project was an end-to-end development of a system to combat the spread of misinformation by detecting AI-generated facial images (deepfakes) on social media content. I designed, trained, and deployed a deep learning model, then built a full-stack application around it, culminating in a publicly available Android app on the Google Play Store.

Key Achievements:
• Model Development: Developed a CNN using VGG-16 for transfer learning, achieving 99.52% accuracy in distinguishing real vs. AI faces.
• Comparative Analysis: Proved non-LBP approach superiority (99.52%) over LBP-processed images (98%).
• Dataset: Expanded dataset from 2,358 to 8,300 images via augmentation.
• Backend & DevOps: Engineered scalable RESTful API with Python/FastAPI. Implemented CI/CD via GitHub Actions to GCP Cloud Run.
• Mobile App: Built a Flutter Android app for real-time analysis.`,
    techStack: ['Python', 'FastAPI', 'TensorFlow', 'VGG-16', 'Flutter', 'Dart', 'GCP', 'Docker', 'GitHub Actions'],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop', caption: 'GansDoctor UI' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', caption: 'AI Model Architecture' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop', caption: 'GCP Architecture' }
    ],
    githubLink: 'https://github.com/mitahudev03/gansdoctor',
    demoLink: 'https://play.google.com/store/apps/details?id=com.gansdoctor.app', // Playstore link
  },
  {
    id: 'proj_mmct',
    title: 'Malang Mbois City Tour (MMCT)',
    categories: ['Web', 'Frontend'],
    association: 'Profile Image Studio',
    date: 'Nov 2024 - Jan 2025',
    shortDesc: 'Feature Development & UX Enhancement for City Tourism Platform.',
    fullDesc: `Developed and enhanced key features for the Malang Mbois City Tour (MMCT) web application. Primary focus was on frontend development to improve User Experience (UX) and integrate automated payment systems.

Key Contributions:
• Streamlined Admin Workflow: Transformed complex multi-step package creation into a single dynamic form.
• New Pricing Model: Implemented "per package" pricing logic (fixed price for groups) alongside "per person".
• Dynamic Landing Page: Real-time updates of tour facilities and routes based on user selection.
• Payment Integration: Integrated Midtrans gateway and implemented WebSockets for real-time success notifications, replacing manual chat-based bookings.`,
    techStack: ['AngularJS', 'Midtrans API', 'WebSockets', 'TypeScript', 'Node.js'],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1000&auto=format&fit=crop', caption: 'MMCT Landing Page' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop', caption: 'Admin Dashboard' }
    ],
    isConfidential: true,
    demoLink: 'https://mmct.mcf.or.id/', 
  },
  {
    id: 'proj_soothemate',
    title: 'SootheMate',
    categories: ['Backend', 'Cloud', 'AI/ML'],
    association: 'Bangkit Academy (Google, GoTo, Traveloka)',
    date: 'May 2024 - Jun 2024',
    shortDesc: 'Stress management application with mood tracking.',
    fullDesc: `SootheMate assists individuals in managing stress levels by providing tools to track stress over time. The app aims to encourage healthier lifestyles by understanding stress patterns.

As a Cloud Computing & Backend Cohort member:
• Deployed backend services to Google Cloud Platform.
• Managed Project Management & API development using Node.js.
• Integrated Machine Learning models for stress prediction.`,
    techStack: ['Node.js', 'Google Cloud Platform', 'Express.js', 'Cloud Run', 'TensorFlow'],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop', caption: 'SootheMate App' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop', caption: 'Team Mentoring' }
    ],
    demoLink: '#', // Add documentation link if available
    githubLink: 'https://github.com/SootheMate',
  },
  {
    id: 'proj_doorbell',
    title: 'Intelligent Doorbells',
    categories: ['IoT', 'AI/ML'],
    association: 'Politeknik Negeri Jember',
    date: 'Oct 2023 - Dec 2023',
    shortDesc: 'Smart doorbell with facial recognition and Telegram notifications.',
    fullDesc: `Developed an intelligent doorbell that detects strangers and sends notifications to the homeowner via Telegram.
    
Technical Details:
• Algorithms: Used Support Vector Machine (SVM) for classification and Local Binary Pattern Histogram (LBPH) for feature extraction.
• Integration: Connected to Telegram API for instant alerts with captured images.
• Recognition: Distinguishes between family members and strangers.`,
    techStack: ['Python', 'OpenCV', 'SVM', 'IoT', 'Telegram API'],
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Project Demo Video' }, // Replace with actual ID if available
      { type: 'image', url: 'https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=1000&auto=format&fit=crop', caption: 'IoT Setup' }
    ],
    githubLink: 'https://github.com/mitahudev03',
  },
  {
    id: 'proj_smektuber',
    title: 'Smektuber',
    categories: ['Mobile', 'Backend'],
    association: 'Politeknik Negeri Jember',
    date: 'Feb 2023 - Jun 2023',
    shortDesc: 'Information system app for SMKN 7 Jember.',
    fullDesc: `The Smektuber application is used by students and alumni to find information related to SMKN 7 Jember. Features include detailed info on PPDB (New Student Admission), Job Vacancies, and school announcements.`,
    techStack: ['Laravel', 'Android (Java/Kotlin)', 'MySQL', 'REST API'],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop', caption: 'Mobile UI' }
    ],
    demoLink: 'https://play.google.com/store/apps/details?id=com.smektuber',
  },
  {
    id: 'proj_epasys',
    title: 'Epasys (Electronic Parking System)',
    categories: ['Web', 'Backend'],
    association: 'Politeknik Negeri Jember',
    date: 'Sep 2022 - Jan 2023',
    shortDesc: 'QR Code based vehicle parking system.',
    fullDesc: `Epasys is a vehicle parking application for students based on QR codes. Created to replace the manual process of writing license plate numbers on parking cards, making the process efficient and simple.`,
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'QR Code'],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop', caption: 'Epasys Dashboard' }
    ],
    githubLink: 'https://github.com/mitahudev03',
  }
];