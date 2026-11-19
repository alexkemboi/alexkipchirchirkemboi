import type { StaticImageData } from "next/image";

import ikonexShot from "@/images/projects/ikonex.jpg";
import abraShot from "@/images/projects/abra.jpg";
import dssShot from "@/images/projects/dss.jpg";
import saipeiShot from "@/images/projects/saipei.jpg";
import beesmartShot from "@/images/projects/beesmart.jpg";
import baronShot from "@/images/projects/baron.jpg";
import electionsShot from "@/images/projects/elections.jpg";
import chess254Shot from "@/images/projects/chess254.jpg";

/*
 * Single source of truth for portfolio content.
 * Sourced from Alex's 2026 CV (src/cv), the earlier CV and About document
 * (src/docs), the PLP certificate and existing project screenshots.
 * Keep it factual: update the CV first, then this file.
 */

export const profile = {
  name: "Alex Kemboi",
  fullName: "Alex Kipchirchir Kemboi",
  title: "Senior Software Developer",
  location: "Nairobi, Kenya",
  email: "kemboialexkipchirchir@gmail.com",
  phone: "+254 726 837 210",
  phoneHref: "tel:+254726837210",
  cv: "/alex-kemboi-cv.pdf",
};

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alex-kemboi-49b5a5276/" },
  { name: "GitHub", href: "https://github.com/alexkemboi" },
  { name: "Facebook", href: "https://www.facebook.com/alexkemboi97" },
  { name: "X / Twitter", href: "https://twitter.com/alexkemboi97" },
] as const;

export const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Work", href: "/#portfolio" },
  { name: "Writing", href: "/#articles" },
];

export const stack = [
  "C# / .NET",
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "Flutter",
  "SQL Server",
  "PostgreSQL",
  "Oracle",
  "REST APIs",
  "Temenos T24",
  "Oracle FLEXCUBE",
  "Docker",
  "Azure DevOps",
  "GitHub Actions",
];

export const industries = [
  "Banking",
  "Fintech",
  "Healthtech",
  "Edtech",
  "Agritech",
  "Enterprise Technology",
  "Property Technology",
];

export const facts = [
  { value: "7+", label: "Years of experience" },
  { value: "20+", label: "Digital solutions delivered", highlight: true },
  { value: "6+", label: "Industries supported" },
  { value: "5+", label: "Countries reached" },
  { value: "50+", label: "Clients & organisations served" },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
  /** Headline metric shown large on the timeline card. */
  highlight: { value: string; label: string };
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    period: "2026 — Present",
    role: "Senior Software Developer",
    company: "Softnet Business Systems",
    location: "Nairobi",
    current: true,
    highlight: { value: "15", label: "Engineers led" },
    stack: ["C# / .NET", "Node.js", "TypeScript", "React", "SQL Server", "Flutter", "Power BI"],
    points: [
      "Lead a team of 15 developers building enterprise solutions with .NET/C#, Node.js, TypeScript, React and SQL Server.",
      "Set and enforce technical standards, coding practices and architecture, raising code quality, security, testing and Git discipline across the team.",
      "Build ERP integrations, REST APIs, automated workflows, payroll systems and Flutter mobile apps, plus a BI reporting application integrated with Power BI.",
      "Serve as the technical escalation point for integration, performance and production issues.",
    ],
  },
  {
    period: "2023 — 2026",
    role: "Software Developer",
    company: "Fintech Group",
    location: "Kenya",
    highlight: { value: "4", label: "Banks · 3 countries" },
    stack: ["Temenos T24", "Oracle FLEXCUBE", "Intellect", "Profits", "SQL"],
    points: [
      "Built and implemented loan, leasing and insurance premium management systems for banks in Kenya, Malawi and Uganda.",
      "Integrated the platforms with core banking systems: Temenos T24, Oracle FLEXCUBE, Intellect and Profits.",
      "Delivered enhancements from client CRs and BRDs, and took them through UAT to production deployment.",
      "Supported users through Close of Business and end-of-day operations; wrote specifications and support guides.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Data Engineer / Systems Support",
    company: "KWFT Bank",
    location: "Nairobi",
    highlight: { value: "T24", label: "Core banking platform" },
    stack: ["Temenos T24", "APIs", "Data pipelines", "Qlik", "Power BI"],
    points: [
      "Maintained backend APIs and data pipelines critical to reporting and system integration.",
      "Developed BI reporting applications with Qlik and Power BI.",
      "Customised Temenos T24 templates and modules; ran data-centre operations and COB routines to keep core banking available.",
    ],
  },
  {
    period: "2020 — 2021",
    role: "Software Developer",
    company: "AMPATH",
    location: "Eldoret",
    highlight: { value: "OpenMRS", label: "Health systems" },
    stack: ["React", "Angular", "SQL", "Git"],
    points: [
      "Developed OpenMRS and POC applications with React, Angular, SQL and Git.",
      "Analysed and troubleshot multiple modules with users to resolve functional issues and ship enhancements.",
      "Carried out risk analysis, performance monitoring, reliability reviews and QA for deployments.",
    ],
  },
  {
    period: "2017 — 2019",
    role: "Software Developer Intern",
    company: "Moi Teaching & Referral Hospital",
    location: "Eldoret",
    highlight: { value: "ERP", label: "Fansoft" },
    stack: ["Fansoft ERP", "Web interfaces", "Full stack support", "User training"],
    points: [
      "Worked on the Fansoft ERP system.",
      "Built and supported responsive web interfaces for business clients.",
      "Resolved issues across full-stack environments to keep deployments stable.",
      "Trained users and provided ongoing technical support.",
    ],
  },
];

export type Capability = {
  title: string;
  summary: string;
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Development",
    summary:
      "Fast, accessible interfaces for web and mobile, from component systems to complete product UIs.",
    tools: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend Engineering",
    summary:
      "Secure, maintainable services and APIs for business-critical workloads in the .NET, JVM and Node ecosystems.",
    tools: ["C#", ".NET", "ASP.NET", "Java", "Spring Boot", "Node.js", "Express"],
  },
  {
    title: "Data Analysis & Visualisation",
    summary:
      "Data pipelines, GL reconciliation and dashboards that turn operational and banking data into decisions.",
    tools: ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "Power BI", "Qlik"],
  },
  {
    title: "Systems Integration",
    summary:
      "Connecting lending, leasing and ERP platforms to core banking systems through well-defined APIs.",
    tools: ["REST / JSON", "Temenos T24", "Oracle FLEXCUBE", "Intellect", "Profits", "ERP"],
  },
  {
    title: "Cloud & DevOps",
    summary:
      "CI/CD pipelines, containerised builds and reproducible deployments from UAT to production.",
    tools: ["Docker", "Linux", "Nginx", "Git", "Azure DevOps", "GitHub Actions"],
  },
  {
    title: "AI Product Development",
    summary:
      "Building AI-powered features into business products, backed by AI-assisted engineering and MSc research at JKUAT.",
    tools: ["AI features", "AI-assisted dev", "Software Engineering", "MSc research"],
  },
];

export type Solution = {
  abbr: string;
  name: string;
  summary: string;
  covers: string[];
  proof: string;
};

/** Business applications Alex designs and builds end to end. */
export const solutions: Solution[] = [
  {
    abbr: "ERP",
    name: "Enterprise Resource Planning",
    summary:
      "ERP systems and integrations that connect finance, payroll, inventory and operations into one workflow.",
    covers: ["ERP integrations and REST APIs", "Automated business workflows", "Payroll systems", "Flutter mobile companions"],
    proof: "Softnet Business Systems",
  },
  {
    abbr: "CRM",
    name: "Customer Relationship Management",
    summary:
      "Customer platforms that track every relationship, from first enquiry through billing, lending and support.",
    covers: ["Customer records and history", "Enquiry and lead tracking", "Billing and subscriptions", "Customer loan tracking"],
    proof: "Shylock Lending · Internet Billing · Property Management",
  },
  {
    abbr: "POS",
    name: "Point of Sale",
    summary:
      "Configurable retail systems for sales, inventory and multi-branch reporting, at the till and in the back office.",
    covers: ["Sales and inventory", "Barcode scanning", "Multi-branch support", "Customer purchase tracking"],
    proof: "Saipei Foods Limited",
  },
  {
    abbr: "BI",
    name: "Business Intelligence",
    summary:
      "Reporting apps and dashboards that turn operational and banking data into decisions for management.",
    covers: ["Power BI dashboards", "Qlik and NPrinting reports", "Data pipelines", "Management reporting"],
    proof: "Softnet Business Systems · KWFT Bank",
  },
];

export type Integration = {
  name: string;
  detail: string;
  /** Path under /public. Omitted when no licensed logo is available: a wordmark is shown instead. */
  logo?: string;
  wordmark?: { text: string; color: string };
};

/** Third-party platforms Alex has integrated with in production. */
export const integrations: Integration[] = [
  { name: "Safaricom M-Pesa", detail: "Daraja payments API", logo: "/logos/mpesa.svg" },
  { name: "Africa's Talking", detail: "SMS notifications", logo: "/logos/africastalking.png" },
  { name: "KRA iTax", detail: "Tax APIs", wordmark: { text: "iTax", color: "#C8102E" } },
  { name: "PayPal", detail: "Online payments", logo: "/logos/paypal.svg" },
  { name: "Stanbic Bank", detail: "Banking API", wordmark: { text: "Stanbic", color: "#0033A1" } },
  { name: "Oracle FLEXCUBE", detail: "Core banking", logo: "/logos/oracle.svg" },
  { name: "MikroTik", detail: "RouterOS & billing", logo: "/logos/mikrotik.svg" },
  { name: "WhatsApp", detail: "Business messaging", logo: "/logos/whatsapp.svg" },
  { name: "Microsoft", detail: "Azure & Power BI", logo: "/logos/microsoft.svg" },
  { name: "Google", detail: "Google APIs", logo: "/logos/google.svg" },
  { name: "Apache Superset", detail: "BI dashboards", logo: "/logos/superset.svg" },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  client?: string;
  features: string[];
  url: string;
  image: StaticImageData;
};

/** Enterprise delivery: client systems shown without screenshots. */
export const flagship = {
  title: "Loan & Leasing Management Systems",
  category: "Core banking · Fintech Group",
  description:
    "Loan, insurance premium and leasing management systems I developed and implemented for four banks. I integrated them with Oracle FLEXCUBE and Temenos T24, reconciled GL accounts, ran COB and end-of-day routines, and did root cause analysis on recurring incidents.",
  clients: [
    { name: "NCBA", country: "Kenya" },
    { name: "National Bank of Malawi", country: "Malawi" },
    { name: "Centenary Bank", country: "Uganda" },
    { name: "Housing Finance Bank", country: "Uganda" },
  ],
  integrations: ["Temenos T24", "Oracle FLEXCUBE", "Intellect", "Profits"],
};

/** Live platforms built and deployed under IKONEX Systems (source: ikonexsystems.com/portfolio). */
export const projects: Project[] = [
  {
    title: "IKONEX Systems",
    category: "Business & Technology",
    description:
      "A corporate home for IKONEX services, solutions and technology capabilities.",
    features: ["Company and service discovery", "Direct client enquiries", "Responsive corporate experience"],
    url: "https://ikonexsystems.com",
    image: ikonexShot,
  },
  {
    title: "Property Management System",
    category: "Real Estate",
    client: "Abra Home Realty",
    description:
      "A property and real estate platform for listings, tenancy, rent collection and maintenance.",
    features: ["Tenant management", "Rent collection and billing", "Lease tracking", "Maintenance requests"],
    url: "https://www.abrahomereality.com",
    image: abraShot,
  },
  {
    title: "Shylock Lending System",
    category: "Payments & Finance",
    client: "DSS (Don't Stuck Solutions)",
    description:
      "Loan management workflows for processing applications and tracking repayments.",
    features: ["Loan processing", "Repayment scheduling", "Interest calculation"],
    url: "https://dss.ikonexsystems.com",
    image: dssShot,
  },
  {
    title: "Point Of Sale System",
    category: "Retail & Payments",
    client: "Saipei Foods Limited",
    description:
      "A configurable retail system for managing sales, inventory and business reporting.",
    features: ["Sales and inventory", "Barcode scanning", "Multi-branch support"],
    url: "https://saipeipos.ikonexsystems.com",
    image: saipeiShot,
  },
  {
    title: "Internet Billing System",
    category: "Payments & Finance",
    client: "BeeSmart / BEDAK",
    description:
      "A configurable billing platform for internet service providers and subscription businesses.",
    features: ["Automated customer billing", "Online payments", "Subscription management"],
    url: "https://beesmartbedak.com",
    image: beesmartShot,
  },
  {
    title: "Baron Auto Valuers",
    category: "Automotive",
    client: "Baron Auto Valuers",
    description:
      "A focused digital presence for professional motor vehicle valuation services.",
    features: ["Valuation service information", "Client enquiries"],
    url: "https://baron.ikonexsystems.com",
    image: baronShot,
  },
  {
    title: "Elections 2027",
    category: "Civic Technology",
    client: "Elections 2027 Campaign",
    description:
      "A digital platform for sharing election-related information and supporting organized participation.",
    features: ["Election information", "Digital engagement"],
    url: "https://elections2027.ikonexsystems.com",
    image: electionsShot,
  },
  {
    title: "Chess254",
    category: "Gaming & Community",
    client: "Chess254 Clubhouse",
    description:
      "An online chess platform for players to play, learn and connect with the chess community.",
    features: ["Play chess online", "Learning and practice", "Community access"],
    url: "https://chess254.ikonexsystems.com",
    image: chess254Shot,
  },
];

export const education = [
  {
    period: "2023 — Present",
    title: "MSc Software Engineering",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    detail: "Postgraduate study in software engineering, in progress.",
  },
  {
    period: "2014 — 2018",
    title: "BSc Software Engineering",
    institution: "Kisii University",
    detail:
      "C, Java, web and Android development. Final-year project: a room-reservation app for Eldoret town. Represented the faculty in the student union.",
  },
  {
    period: "2023",
    title: "Software Development Certification",
    institution: "Power Learn Project",
    detail:
      "16-week programme: Python, web development, Dart, database design and SQL, and entrepreneurship. Specialisation in Python.",
    href: "/alex-kemboi-plp-certificate.pdf",
  },
];

export type Article = {
  title: string;
  category: string;
  excerpt: string;
  date?: string;
  /** Set when the note has a full page at /articles/[slug]. */
  slug?: string;
};

export const articles: Article[] = [
  {
    title: "Servers in Production: Linux, Nginx and IIS",
    category: "Infrastructure",
    excerpt:
      "Provisioning, hardening and running the servers behind business-critical apps, from reverse proxies to uptime.",
  },
  {
    title: "Microservices Without the Hype",
    category: "Architecture",
    excerpt:
      "When to split a monolith, how to draw service boundaries, and the operational cost that comes with every new service.",
  },
  {
    title: "Scaling Systems That Handle Money",
    category: "Scaling",
    excerpt:
      "Caching, queues, database tuning and horizontal scaling for lending and banking workloads that cannot go down.",
  },
  {
    title: "Software Architecture for African Enterprises",
    category: "Architecture",
    excerpt:
      "Designing for unreliable networks, mobile-first users and core banking integrations, with patterns that hold up in production.",
  },
  {
    title: "Idempotency: Making Payment APIs Safe to Retry",
    category: "APIs",
    slug: "idempotency",
    excerpt:
      "Idempotency keys, safe retries and exactly-once effects for M-Pesa callbacks, loan disbursements and any operation that must never run twice.",
  },
  {
    title: "Introduction to Git Version Control",
    date: "January 10, 2023",
    category: "DevOps",
    excerpt:
      "Repository management, commits, branching and the collaboration workflows every team relies on.",
  },
  {
    title: "Demystifying DevOps: A Comprehensive Guide",
    date: "February 15, 2023",
    category: "DevOps",
    excerpt:
      "DevOps principles, culture, automation and CI/CD practices for modern software teams.",
  },
  {
    title: "Continuous Integration & Deployment Explained",
    date: "March 20, 2023",
    category: "Engineering",
    excerpt:
      "How CI/CD pipelines improve software quality, delivery speed and deployment confidence.",
  },
  {
    title: "Software Testing Strategies",
    date: "April 25, 2023",
    category: "Quality",
    excerpt:
      "Unit, integration and end-to-end testing, and how to choose the right mix.",
  },
];
