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
      "Independently built the frontend of a loan management platform from scratch using Angular (v19/20), NgRx, and Angular Signals, including authentication, routing, and report generation.",
      "Built RESTful APIs and microservices using Node.js and Express, and automated secure document submission to partner NBFC platforms.",
      "Optimized filtering performance using RxJS operators (e.g. debounceTime) on the frontend and Node-cache on the backend, reducing unnecessary API calls and improving response times.",
      "Designed Maker-Checker approval workflows and a CRM-based lead management module, reducing manual validation errors and streamlining lead tracking.",
      "Optimized MongoDB aggregation pipelines, cutting report generation time by 45%.",
      "Built reusable Angular components and implemented cloud-based document storage using Amazon S3 and Google Cloud Storage.",
    ],
  },
  {
    period: "Jun 2019 - Jun 2021",
    active: false,
    role: "Fullstack Developer",
    company: "Tata Consultancy Services • Reserve Bank of India CAS Team",
    points: [
      "Developed enterprise web applications for the Reserve Bank of India's CAS platform using Angular and Spring Boot.",
      "Built responsive Angular modules with Angular Material and Reactive Forms, implementing advanced filtering and navigation that improved usability for operational teams.",
      "Designed RESTful APIs using Java Spring Boot and Hibernate/JPA, and optimized SQL queries for efficient backend processing.",
      "Reduced initial load time by implementing lazy loading and code splitting with Angular Router.",
      "Integrated NgRx for scalable state management and built reusable Angular services to improve modularity."
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
