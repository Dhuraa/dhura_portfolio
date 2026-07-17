export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    period: "Jul 2024 - Present",
    active: true,
    role: "Software Development Engineer - I",
    company: "GetVantage • Mumbai",
    points: [
      "Developed scalable enterprise applications using Angular 19/20, NgRx, Angular Signals, Tailwind CSS, and Angular Material.",
      "Built RESTful APIs and microservices using Node.js and Express for a Loan Management System.",
      "Independently developed an Angular 20 application from scratch including authentication, routing, and reporting modules.",
      "Implemented Maker-Checker approval workflows and CRM lead management features.",
      "Optimized MongoDB aggregation pipelines, reducing report generation time by approximately 45%.",
      "Integrated Amazon S3 and Google Cloud Storage for secure document management.",
    ],
  },
  {
    period: "Jun 2019 - Jun 2021",
    active: false,
    role: "Fullstack Developer",
    company: "Tata Consultancy Services • Reserve Bank of India CAS Team",
    points: [
      "Developed enterprise banking applications using Angular and Spring Boot.",
      "Built responsive Angular applications with Angular Material and Reactive Forms.",
      "Developed and integrated REST APIs using Java Spring Boot.",
      "Implemented NgRx state management, lazy loading, and reusable Angular services.",
      "Optimized SQL queries and backend processing using Hibernate/JPA.",
      "Collaborated with cross-functional Agile teams to deliver production-ready banking solutions.",
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
    tags: [
      "AWS S3",
      "Google Cloud Storage",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    icon: "handyman",
    iconColor: "text-tertiary",
    title: "Tools",
    tags: [
      "Git",
      "Jira",
      "Postman",
      "VS Code",
      "Agile",
      "NgRx",
    ],
  },
];

export const projects = [
  {
    title: "Loan Management System",
    description:
      "Enterprise fintech platform for loan processing, CRM lead management, document workflows, Maker-Checker approvals, reporting, and secure integrations with partner NBFCs.",
    tags: [
      { label: "Angular 20", color: "primary" },
      { label: "Node.js", color: "secondary" },
      { label: "MongoDB", color: "primary" },
      { label: "AWS", color: "secondary" },
    ],
    image: "/images/lms-project.png",
    alt: "Loan Management System Dashboard",
  },
  {
    title: "Reserve Bank of India CAS Platform",
    description:
      "Enterprise banking application supporting internal RBI operations with Angular, Spring Boot, SQL, NgRx, and advanced financial data management.",
    tags: [
      { label: "Angular", color: "primary" },
      { label: "Spring Boot", color: "secondary" },
      { label: "Java", color: "primary" },
      { label: "MySQL", color: "secondary" },
    ],
    image: "/images/rbi-project.png",
    alt: "Enterprise Banking Dashboard",
  },
  {
    title: "Book Sharing Website",
    description:
      "Full-stack React application with Google Books API integration, Redux, Context API, Material UI, React Router, and responsive design for discovering and sharing books.",
    tags: [
      { label: "React", color: "primary" },
      { label: "Redux", color: "secondary" },
      { label: "Material UI", color: "primary" },
    ],
    image: "/images/book-sharing.png",
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