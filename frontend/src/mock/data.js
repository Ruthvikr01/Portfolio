// Mock data for portfolio - sourced from Ruthvik Reddy Mekala's resume
export const profile = {
  name: "Ruthvik Reddy Mekala",
  firstName: "Ruthvik",
  lastName: "Reddy",
  title: "Software Engineer",
  tagline: "Building high-performance, scalable systems.",
  bigStatement: [
    "Backend engineer.",
    "Algorithms enthusiast.",
    "Performance obsessed.",
  ],
  location: "Chicago, IL",
  email: "ruthvikreddy9789@gmail.com",
  phone: "+1 (312) 399-6535",
  summary:
    "Computer Science graduate student focused on building high-performance, scalable software systems and algorithmic solutions. Experienced in backend engineering, data-intensive applications, and performance-oriented programming using C++, Java, Python, and SQL — with strong foundations in data structures, system design, and computational problem solving.",
  passions:
    "Passionate about low-latency systems, optimization, and learning new technologies in collaborative engineering environments.",
  socials: {
    github: "https://github.com/Ruthvikr01",
    linkedin: "https://www.linkedin.com/in/ruthvik01/",
    leetcode: "https://leetcode.com/u/Ruthvik010/",
    codechef: "https://www.codechef.com/users/ruthvikreddy97",
    email: "mailto:ruthvikreddy9789@gmail.com",
  },
};

export const experiences = [
  {
    company: "SmartInternz",
    role: "AI Intern",
    location: "Hyderabad, Telangana — Remote",
    period: "May 2023 — July 2023",
    certificate:
      "https://smartinternz.com/internships/google_developers/12819cffeae28741e228901f671e1edb",
    bullets: [
      "Planned and assembled an end-to-end deep learning pipeline for automated image caption generation using VGG16 and LSTM, improving prediction consistency by 18% during validation testing.",
      "Refined and organized a dataset of 10K+ images, reducing preprocessing time by 30% and improving model training stability.",
      "Used Python and TensorFlow to establish reusable ML workflows that shortened experimentation cycles by 25%.",
      "Partnered with distributed team members to review outputs and adjust model logic, reducing caption errors observed in test samples.",
    ],
    stack: ["Python", "TensorFlow", "VGG16", "LSTM", "NLP"],
  },
];

export const projects = [
  {
    id: "financeflow",
    title: "FinanceFlow",
    period: "Apr 2026",
    short: "Personal finance analyzer with live deployment.",
    description:
      "A full-stack personal finance analyzer built with Streamlit and PostgreSQL — secure bcrypt auth, registration with SMTP confirmation, dockerized deployment to Render, and a hardened CI pipeline with automated tests, linting, dependency scanning, and a /health endpoint for uptime monitoring.",
    highlights: [
      "Live on Render",
      "bcrypt auth + SMTP confirmation",
      "Dockerized + CI/CD on GitHub Actions",
      "Pytest unit + integration suite",
    ],
    stack: ["Python", "Streamlit", "PostgreSQL", "Docker", "Poetry", "Pytest"],
    repo: "https://github.com/Ruthvikr01/FinanceFlow",
    liveUrl: "https://financeflow-4-jgbk.onrender.com",
    isLive: true,
    theme: "dark",
    accent: "from-[#000000] via-[#0a0a0c] to-[#1d1d1f]",
    glowA: "rgba(0, 113, 227, 0.18)",
    glowB: "rgba(255, 255, 255, 0.05)",
    size: "large",
  },
  {
    id: "infobridgepro",
    title: "InfoBridgePro",
    period: "Jan 2025",
    short: "Containerized enterprise data platform.",
    description:
      "A containerized enterprise web platform managing employee, department, and project records across multiple users. Optimized PostgreSQL/MySQL schemas reduced retrieval latency by 35%, while KNIME workflows lowered manual ingestion effort by 40%.",
    highlights: [
      "35% lower retrieval latency",
      "Service-oriented backend",
      "Dockerized deployment",
    ],
    stack: ["PHP", "Docker", "PostgreSQL", "MySQL", "KNIME"],
    repo:
      "https://github.com/Ruthvikr01/InfoBridgePro--Database-Management-System",
    theme: "light",
    accent: "from-[#fbfbfd] via-[#f5f5f7] to-[#ededef]",
    size: "medium",
  },
  {
    id: "route-navigator",
    title: "Route Navigator",
    period: "Dec 2025",
    short: "Real-time graph-based route optimizer.",
    description:
      "Route optimization with Dijkstra's, Bellman-Ford, and MST algorithms — up to 22% shorter simulated routes. Interactive D3.js scenarios with weather + connectivity modeling.",
    highlights: [
      "22% shorter simulated routes",
      "D3.js comparison view",
      "Weather-aware modeling",
    ],
    stack: ["Python", "JavaScript", "D3.js", "Graph Algorithms"],
    repo: "https://github.com/Ruthvikr01/Route-Navigator",
    theme: "light",
    accent: "from-[#ffffff] via-[#fafafa] to-[#efeff1]",
    size: "medium",
  },
  {
    id: "nsfw-moderation",
    title: "NSFW Real-Time Moderation API",
    period: "May 2024",
    short: "Streaming chat content classifier.",
    description:
      "A Flask-based REST API for real-time toxic content detection with ~85% classification accuracy. NLP pipelines process high-volume streaming chat data, integrate with external chat systems, and reduce manual moderation workload by 50%.",
    highlights: [
      "~85% classification accuracy",
      "50% less manual moderation",
      "Streaming integration ready",
      "Production-grade REST API",
    ],
    stack: ["Python", "Flask", "NLP", "REST API"],
    repo: "https://github.com/Ruthvikr01/NSFW-Monitoring-Application",
    theme: "dark",
    accent: "from-[#1d1d1f] via-[#161617] to-[#0b0b0c]",
    glowA: "rgba(0, 113, 227, 0.12)",
    glowB: "rgba(255, 255, 255, 0.05)",
    size: "wide",
  },
  {
    id: "malware-detection",
    title: "Malware Detection (ML)",
    period: "2023 — 2024",
    short: "Random Forest threat classifier with GUI.",
    description:
      "A Random Forest classifier achieving >90% detection accuracy, paired with a PyQt5 monitoring GUI that accelerated file inspection by 40% and improved real-time threat visibility.",
    highlights: [
      ">90% detection accuracy",
      "40% faster inspection",
      "Real-time threat dashboard",
    ],
    stack: ["Python", "Scikit-learn", "PyQt5"],
    repo: "https://github.com/Ruthvikr01/Malware-Detection",
    theme: "light",
    accent: "from-[#fbfbfd] via-[#f5f5f7] to-[#e8e8ec]",
    size: "wide",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C++", "Python", "SQL", "JavaScript", "R"],
  },
  {
    title: "Web & APIs",
    items: [
      "REST APIs",
      "JSON",
      "HTTP",
      "Flask",
      "Client-Server",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker"],
  },
  {
    title: "AI & Data",
    items: [
      "TensorFlow",
      "Machine Learning",
      "NLP",
      "Model Evaluation",
      "KNIME",
      "Power BI",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "IntelliJ",
      "Selenium",
      "Agile",
      "Figma",
    ],
  },
];

export const education = [
  {
    school: "Purdue University Northwest",
    location: "Hammond, Indiana",
    degree: "M.Sc. in Computer Science and Engineering",
    period: "Aug 2024 — May 2026",
    grade: "GPA 3.97 / 4.00",
  },
  {
    school: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sep 2020 — May 2024",
    grade: "GPA 8.72 / 10",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://drive.google.com/file/d/1hy13rakWF5KkS0bhjykfZlJRA9wAZmHH/view?usp=sharing",
  },
  {
    name: "Data Structures in Java",
    issuer: "Completion Certificate",
    link: "https://drive.google.com/file/d/1IlgfO4MM2xu7gommda-xE2g2v0-V9YNV/view?usp=sharing",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    link: "https://drive.google.com/file/d/13O8HpR9Hdg0QRckRpLxy9fcTHOzONIdD/view?usp=sharing",
  },
  {
    name: "Google Project Management",
    issuer: "Google",
    link: "https://drive.google.com/file/d/1m5hDrgkI1zGPUefJTOjWlCqx4P1dTMm3/view?usp=sharing",
  },
  {
    name: "Figma UI/UX Design Essentials",
    issuer: "Figma",
    link: "https://drive.google.com/file/d/1iIw57v6-4srVyCitDCH9CIZFXdYWh1nE/view?usp=sharing",
  },
];

export const stats = [
  { value: "3.97", label: "Grad GPA" },
  { value: "10K+", label: "Images processed" },
  { value: "22%", label: "Route distance reduced" },
  { value: "5", label: "Certifications" },
];
