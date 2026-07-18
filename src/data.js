export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    period: "Jul 2024 - July2026",
    active: true,
    role: "Software Development Engineer - I",
    company: "GetVantage • Mumbai",
    points: [
      "Developed and maintained scalable enterprise applications using Angular (v19/20), NgRx, Angular Signals, Tailwind CSS, and Angular Material.",
      "Designed and developed RESTful APIs and microservices using Node.js and Express, enabling seamless communication between frontend, backend, and distributed services while supporting a scalable loan management platform.",
      "Independently built a complete frontend application from scratch using Angular 20, implementing routing, authentication flows, and report generation features.",
      "Built and enhanced a CRM-based lead management module within a loan processing system, improving lead creation, tracking, and operational efficiency.",
      "Designed and implemented Maker-Checker approval workflows that reduced manual validation errors and improved compliance within loan operations.",
      "Integrated third-party REST APIs to securely push customer documents from the loan management system to partner NBFC platforms, automating the document submission process.",
      "Optimized complex MongoDB aggregation pipelines, reducing report generation time by approximately 45% for high-volume operational datasets.",
      "Built reusable Angular components, custom directives, and pipes, reducing code duplication and improving maintainability across multiple application modules.",
      "Implemented cloud-based document storage using Amazon S3 and Google Cloud Storage, enabling secure, scalable file management across multiple business modules.",
      "Collaborated with cross-functional teams in an Agile environment and used Git for version control and code management.",
    ],
  },
  {
    period: "Jun 2019 - Jun 2021",
    active: false,
    role: "Fullstack Developer",
    company: "Tata Consultancy Services • Reserve Bank of India CAS Team",
    points: [
      "Developed and maintained enterprise web applications for the Reserve Bank of India's CAS platform using Angular and Spring Boot.",
      "Built responsive Angular modules using Angular Material and Reactive Forms for complex financial workflows.",
      "Designed and integrated RESTful APIs using Java Spring Boot to enable seamless communication between frontend and backend services.",
      "Implemented advanced filtering, sorting, and data navigation for large financial datasets, improving operational efficiency.",
      "Integrated NgRx for scalable state management and implemented lazy loading to improve application performance.",
      "Utilized Hibernate/JPA and optimized SQL queries to support efficient backend processing and database interactions.",
      "Developed reusable Angular services, dependency injection patterns, and modular components for improved maintainability.",
      "Collaborated with UI/UX designers, backend developers, and QA teams in an Agile environment to deliver enterprise banking features.",
    ],
  },
];

export const skills = [
  {
    icon: "layers",
    iconColor: "text-primary",
    title: "Frontend",
    tags: [
      "Angular 19/20",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Angular Material",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: "database",
    iconColor: "text-secondary",
    title: "Backend",
    tags: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    icon: "cloud",
    iconColor: "text-on-primary-fixed-variant",
    title: "Cloud & Database",
    tags: ["AWS S3", "Google Cloud Storage", "MongoDB", "MySQL"],
  },
  {
    icon: "handyman",
    iconColor: "text-tertiary",
    title: "Tools",
    tags: ["Git", "Jira", "Postman", "VS Code", "Agile", "NgRx"],
  },
];

export const projects = [
  // {
  //   title: "Loan Management System",
  //   description:
  //     "Enterprise fintech platform for loan processing, CRM lead management, document workflows, Maker-Checker approvals, reporting, and secure integrations with partner NBFCs.",
  //   tags: [
  //     { label: "Angular 20", color: "primary" },
  //     { label: "Node.js", color: "secondary" },
  //     { label: "MongoDB", color: "primary" },
  //     { label: "AWS", color: "secondary" },
  //   ],
  //   image: "/images/lms-project.png",
  //   alt: "Loan Management System Dashboard",
  // },
  // {
  //   title: "Reserve Bank of India CAS Platform",
  //   description:
  //     "Enterprise banking application supporting internal RBI operations with Angular, Spring Boot, SQL, NgRx, and advanced financial data management.",
  //   tags: [
  //     { label: "Angular", color: "primary" },
  //     { label: "Spring Boot", color: "secondary" },
  //     { label: "Java", color: "primary" },
  //     { label: "MySQL", color: "secondary" },
  //   ],
  //   image: "/images/rbi-project.png",
  //   alt: "Enterprise Banking Dashboard",
  // },
  {
    title: "Book Sharing Website",
    description:
      "Full-stack React application with Google Books API integration, Context API, Tailwind, React Router, and responsive design for discovering and sharing books.",
    tags: [
      { label: "React", color: "primary" },
      { label: "Node.js", color: "secondary" },
      { label: "MongoDB", color: "primary" },
      { label: "Tailwind CSS", color: "primary" },
    ],
    image: "/images/lumiere.png",
    alt: "Book Sharing Website",
  },
];

export const achievements = [
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "2",
    label: "Enterprise Companies",
  },
  {
    value: "30+",
    label: "Enterprise Features Delivered",
  },
  {
    value: "45%",
    label: "Reporting Performance Improvement",
  },
];
