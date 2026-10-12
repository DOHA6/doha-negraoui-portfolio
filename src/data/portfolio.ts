// Edit this file to personalise the portfolio. Every section of the site reads from here.
// `shared` holds language-independent info; `content.en` / `content.fr` hold the translated text.

export type Lang = "en" | "fr";

export const shared = {
  name: "Doha Negraoui",
  email: "📧  negraouidoha@gmail.com",
  phone: " 📞 +212 6 80 40 55 28",
  github: "https://github.com/DOHA6",
  linkedin: "https://www.linkedin.com/in/dohanegraoui",
  // Put your photo in /public (e.g. /public/profile.jpg) and set this to "/profile.jpg". Leave empty to show initials.
  photo: "/brown.png",
  logo: "/brown.png",
  heroBadges: ["Java", "Spring Boot", "React", "Docker"],
};

export type Project = {
  title: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export type TimelineItem = {
  title: string;
  organisation: string;
  period: string;
  points: string[];
  tools?: string[];
};

export type SkillGroup = { title: string; skills: string[] };

export type Content = {
  resumeUrl: string;
  location: string;
  role: string;
  tagline: string;
  roles: string[];
  headline: string;
  summary: string;
  about: string[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  education: TimelineItem[];
  certifications: string[];
  activities: string[];
  ui: {
    nav: { about: string; skills: string; projects: string; experience: string; contact: string };
    resume: string;
    switchLabel: string;
    greeting: string;
    iAm: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollDown: string;
    about: { eyebrow: string; title: string };
    stats: { projects: string; technologies: string; internships: string };
    skills: { eyebrow: string; title: string };
    projects: { eyebrow: string; title: string; others: string; code: string; live: string };
    journey: { eyebrow: string; title: string; experience: string; education: string; certifications: string; activities: string };
    contact: { eyebrow: string; title: string; heading: string; body: string; email: string; cv: string };
    footer: string;
  };
};

const tools = {
  tealhub: ["Java", "Spring Boot", "Spring Security", "React.js", "TypeScript", "Recharts", "PostgreSQL", "Redis", "Resilience4j", "Docker", "Groq / Spring AI", "Flyway", "Tailwind"],
  atos: ["UML", "React.js", "Spring Boot", "PostgreSQL", "Tailwind", "Ollama / Mistral", "Docker", "Jenkins", "Ansible", "Terraform", "Azure", "Prometheus", "Grafana"],
  ram: ["Merise", "React.js", "CSS", "MySQL", "Node.js", "Express.js", "Chart.js", "JavaScript"],
  nova: ["UML", "React.js", "Tailwind", "PostgreSQL", "Spring Boot", "Framer Motion", "Docker Compose", "GitHub Actions", "Ansible", "Prometheus", "Grafana"],
  urbanflow: ["Spring Boot", "React.js", "Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "PostgreSQL", "RabbitMQ", "Prometheus", "Grafana"],
};

// Replace these with each project's real repository and deployed URL. "#" means "not available yet".
const projectLinks = {
  tealhub: { github: "https://github.com/DOHA6", live: "#" },
  newsletter: { github: "https://github.com/DOHA6", live: "#" },
  nova: { github: "https://github.com/DOHA6", live: "#" },
  urbanflow: { github: "https://github.com/DOHA6", live: "#" },
};

const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "Python", "C", "PHP", "HTML", "CSS"],
  backend: ["Spring Boot", "Spring Security", "Spring AI", "Node.js", "Express.js", "REST APIs", "Microservices"],
  frontend: ["React.js", "Tailwind", "Chart.js", "Recharts", "Framer Motion"],
  databases: ["PostgreSQL", "MySQL", "Oracle Database", "Redis"],
  devops: ["Docker", "Kubernetes", "AWS", "Azure Cloud", "Oracle Cloud", "Git", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana", "Linux"],
  methods: ["UML", "Merise", "Agile (Scrum)", "GitLab", "SCA", "SAST", "DAST"],
};

const en: Content = {
  resumeUrl: "/resume.pdf",
  location: " 📍 Casablanca, Morocco",
  role: "Software Engineer — Full Stack Java Developer",
  tagline: "Java · Spring Boot · React · Microservices",
  roles: ["Software Engineer", "Full Stack Developer", "Java & Spring Boot Developer", "React Developer"],
  headline: "Software Engineering graduate from ENSIAS",
  summary:
    "I build end-to-end web applications — from secure Spring Boot microservices to modern React and TypeScript interfaces — with hands-on experience in DevOps, cloud and AI integration.",
  about: [
    "I'm a software engineer who recently graduated from ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes), specialising in Software Engineering. I enjoy working across the whole stack: designing secure Spring Boot microservices and REST APIs on the backend, and building clean, responsive interfaces with React and TypeScript on the frontend.",
    "Through three full stack internships at Teal Technology Services, Atos and Royal Air Maroc, I've built real platforms end-to-end — from a microservices-based IT project management platform with an integrated AI assistant, to an AI-powered newsletter backed by a fully automated DevOps pipeline on Azure.",
    "I care about solid architecture, automation and observability — Docker, CI/CD, Terraform, Prometheus and Grafana are part of my everyday toolkit. I'm now looking for a full-time position where I can keep growing and deliver real impact.",
  ],
  skillGroups: [
    { title: "Languages", skills: skills.languages },
    { title: "Backend", skills: skills.backend },
    { title: "Frontend", skills: skills.frontend },
    { title: "Databases", skills: skills.databases },
    { title: "DevOps & Cloud", skills: skills.devops },
    { title: "Design, Methods & DevSecOps", skills: skills.methods },
  ],
  projects: [
    {
      title: "TealHub — IT Project Management Platform",
      context: "Final-year internship (PFE) · Teal Technology Services",
      description:
        "A microservices-based platform for managing IT projects, with secure authentication and an integrated AI assistant for anomaly detection and decision support.",
      highlights: [
        "Microservices architecture: API Gateway, Auth, User, Project and Assistant services",
        "JWT authentication signed with RS256 and exposed through JWKS, secured with Spring Security",
        "AI assistant powered by Groq and Spring AI to detect anomalies and support decision-making",
        "Fault tolerance with Resilience4j, Redis caching, Flyway migrations and Recharts dashboards",
      ],
      stack: ["Java", "Spring Boot", "Spring AI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      featured: true,
      ...projectLinks.tealhub,
    },
    {
      title: "AI-Powered Interactive Newsletter",
      context: "Internship · Atos",
      description:
        "An interactive newsletter platform that uses AI to recommend personalised news, backed by a fully automated DevOps infrastructure.",
      highlights: [
        "Personalised news recommendations using a local LLM (Mistral via Ollama)",
        "Spring Boot and PostgreSQL backend with a React + Tailwind frontend, designed with UML",
        "CI/CD with Jenkins and infrastructure as code with Terraform and Ansible on Microsoft Azure",
        "Monitoring and dashboards with Prometheus and Grafana",
      ],
      stack: ["Spring Boot", "React", "PostgreSQL", "Ollama", "Jenkins", "Terraform", "Azure", "Grafana"],
      featured: true,
      ...projectLinks.newsletter,
    },
    {
      title: "Nova-Pioneers — Educational Platform",
      context: "Academic project · 2025",
      description:
        "An educational web platform that helps children explore space, built on a microservices architecture and integrating NASA APIs.",
      highlights: [
        "Spring Boot microservices with PostgreSQL, integrating NASA's public APIs",
        "Playful, animated React interface built with Tailwind and Framer Motion",
        "Containerised with Docker Compose, CI/CD with GitHub Actions and deployment automated with Ansible",
        "Monitoring with Prometheus and Grafana",
      ],
      stack: ["Spring Boot", "React", "Framer Motion", "PostgreSQL", "Docker", "GitHub Actions", "Ansible"],
      featured: true,
      ...projectLinks.nova,
    },
    {
      title: "UrbanFlow — Urban Transport Management",
      context: "Academic project · 2025",
      description:
        "An urban transport management application built on a microservices architecture and deployed to the cloud.",
      highlights: [
        "Spring Boot microservices communicating asynchronously through RabbitMQ",
        "Orchestrated with Kubernetes on AWS, with infrastructure provisioned by Terraform",
        "CI/CD pipelines with GitHub Actions and observability with Prometheus and Grafana",
      ],
      stack: ["Spring Boot", "React", "RabbitMQ", "Kubernetes", "AWS", "Terraform", "PostgreSQL"],
      featured: true,
      ...projectLinks.urbanflow,
    },
    {
      title: "Aircraft Airworthiness Tracking Platform",
      context: "Internship · Royal Air Maroc",
      description: "A web platform for tracking the airworthiness of aircraft.",
      highlights: [
        "Data model designed with the Merise method on MySQL",
        "REST API built with Node.js and Express.js",
        "React interface with Chart.js dashboards to visualise airworthiness data",
      ],
      stack: ["React", "Node.js", "Express.js", "MySQL", "Chart.js"],
    },
  ],
  experience: [
    {
      title: "Full Stack Developer Intern (Final-Year Project)",
      organisation: "Teal Technology Services — Casablanca",
      period: "Mar 2026 — Sep 2026",
      points: [
        "Designed and developed TealHub, an IT project management platform based on a microservices architecture (API Gateway, Auth, User, Project, Assistant).",
        "Implemented JWT RS256/JWKS authentication and an integrated AI assistant (Groq / Spring AI) for anomaly detection and decision support.",
      ],
      tools: tools.tealhub,
    },
    {
      title: "Full Stack Developer Intern",
      organisation: "Atos — Casablanca",
      period: "Jul 2025 — Aug 2025",
      points: [
        "Designed and developed an interactive newsletter platform that uses AI to recommend personalised news.",
        "Built an automated DevOps infrastructure with Jenkins, Azure, Terraform and Prometheus.",
      ],
      tools: tools.atos,
    },
    {
      title: "Full Stack Developer Intern",
      organisation: "Royal Air Maroc — Casablanca",
      period: "Jul 2024 — Aug 2024",
      points: ["Designed and developed a platform for tracking aircraft airworthiness."],
      tools: tools.ram,
    },
  ],
  education: [
    {
      title: "Engineering Degree in Software Engineering",
      organisation: "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      period: "2023 — 2026",
      points: ["State engineering programme specialised in Software Engineering."],
    },
    {
      title: "Preparatory Classes for Engineering Schools (CPGE)",
      organisation: "Lycée Technique Mohammedia",
      period: "2021 — 2023",
      points: ["Industrial Technologies and Sciences track (TSI) — intensive programme in mathematics, physics and engineering sciences."],
    },
  ],
  certifications: [
    "Responsive Web Design — freeCodeCamp",
    "SQL (Intermediate) — HackerRank",
    "Artificial Intelligence Analyst — IBM",
    "Java SE 17 Developer — Oracle University (in progress)",
  ],
  activities: ["Head of Relations & Communications — CINDH club (Club d'Initiative Nationale pour le Développement Humain)"],
  ui: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
    resume: "Resume",
    switchLabel: "Voir en français",
    greeting: "Hi, my name is",
    iAm: "I am a",
    ctaPrimary: "Let's Get Started!",
    ctaSecondary: "Contact Me",
    scrollDown: "Scroll down",
    about: { eyebrow: "Get to know me", title: "About Me" },
    stats: { projects: "Projects", technologies: "Technologies", internships: "Internships" },
    skills: { eyebrow: "What I work with", title: "My Skills" },
    projects: { eyebrow: "Things I've built", title: "My Projects", others: "Other Projects", code: "Code", live: "Live" },
    journey: {
      eyebrow: "My journey",
      title: "Experience & Education",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      activities: "Activities",
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Contact Me",
      heading: "Let's build something great together",
      body: "I'm currently looking for a full-time position. Whether you have an opportunity, a question, or just want to say hi, my inbox is always open.",
      email: "Contact Me",
      cv: "Download CV",
    },
    footer: "Designed & built by",
  },
};

const fr: Content = {
  resumeUrl: "/resume.pdf",
  location: "Casablanca, Maroc",
  role: "Ingénieure Logiciel — Développeuse Full-Stack Java",
  tagline: "Java · Spring Boot · React · Microservices",
  roles: ["Ingénieure Logiciel", "Développeuse Full-Stack", "Développeuse Java & Spring Boot", "Développeuse React"],
  headline: "Ingénieure en Génie Logiciel diplômée de l'ENSIAS",
  summary:
    "Je conçois des applications web de bout en bout — des microservices Spring Boot sécurisés aux interfaces modernes en React et TypeScript — avec une solide expérience en DevOps, cloud et intégration de l'IA.",
  about: [
    "Je suis ingénieure en Génie Logiciel, récemment diplômée de l'ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes). J'aime intervenir sur l'ensemble de la stack : concevoir des microservices Spring Boot et des API REST sécurisées côté backend, et développer des interfaces modernes et responsives avec React et TypeScript côté frontend.",
    "À travers trois stages en développement Full-Stack chez Teal Technology Services, Atos et Royal Air Maroc, j'ai conçu et livré de vraies plateformes de bout en bout — d'une plateforme de gestion de projets IT en microservices dotée d'un assistant IA, à une newsletter intelligente propulsée par l'IA et une chaîne DevOps entièrement automatisée sur Azure.",
    "J'accorde une grande importance à la qualité de l'architecture, à l'automatisation et à l'observabilité — Docker, CI/CD, Terraform, Prometheus et Grafana font partie de mon quotidien. Je suis aujourd'hui à la recherche d'un CDI pour continuer à évoluer et apporter une réelle valeur ajoutée.",
  ],
  skillGroups: [
    { title: "Langages", skills: skills.languages },
    { title: "Backend", skills: skills.backend },
    { title: "Frontend", skills: skills.frontend },
    { title: "Bases de données", skills: skills.databases },
    { title: "DevOps & Cloud", skills: skills.devops },
    { title: "Conception, Méthodes & DevSecOps", skills: skills.methods },
  ],
  projects: [
    {
      title: "TealHub — Plateforme de gestion de projets IT",
      context: "Stage de fin d'études (PFE) · Teal Technology Services",
      description:
        "Une plateforme de gestion de projets IT basée sur une architecture microservices, avec une authentification sécurisée et un assistant IA intégré pour la détection d'anomalies et l'aide à la décision.",
      highlights: [
        "Architecture microservices : API Gateway, Auth, User, Project et Assistant",
        "Authentification JWT signée en RS256 et exposée via JWKS, sécurisée avec Spring Security",
        "Assistant IA basé sur Groq et Spring AI pour détecter les anomalies et aider à la décision",
        "Tolérance aux pannes avec Resilience4j, cache Redis, migrations Flyway et tableaux de bord Recharts",
      ],
      stack: ["Java", "Spring Boot", "Spring AI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      featured: true,
      ...projectLinks.tealhub,
    },
    {
      title: "Newsletter interactive propulsée par l'IA",
      context: "Stage · Atos",
      description:
        "Une plateforme de newsletter interactive qui utilise l'IA pour recommander des actualités personnalisées, avec une infrastructure DevOps entièrement automatisée.",
      highlights: [
        "Recommandations d'actualités personnalisées grâce à un LLM local (Mistral via Ollama)",
        "Backend Spring Boot et PostgreSQL, frontend React + Tailwind, conception UML",
        "CI/CD avec Jenkins et infrastructure as code avec Terraform et Ansible sur Microsoft Azure",
        "Supervision et tableaux de bord avec Prometheus et Grafana",
      ],
      stack: ["Spring Boot", "React", "PostgreSQL", "Ollama", "Jenkins", "Terraform", "Azure", "Grafana"],
      featured: true,
      ...projectLinks.newsletter,
    },
    {
      title: "Nova-Pioneers — Plateforme éducative",
      context: "Projet académique · 2025",
      description:
        "Une plateforme web éducative pour faire découvrir l'exploration spatiale aux enfants, basée sur une architecture microservices et intégrant les APIs de la NASA.",
      highlights: [
        "Microservices Spring Boot avec PostgreSQL, intégration des APIs publiques de la NASA",
        "Interface React ludique et animée avec Tailwind et Framer Motion",
        "Conteneurisation avec Docker Compose, CI/CD avec GitHub Actions et déploiement automatisé avec Ansible",
        "Supervision avec Prometheus et Grafana",
      ],
      stack: ["Spring Boot", "React", "Framer Motion", "PostgreSQL", "Docker", "GitHub Actions", "Ansible"],
      featured: true,
      ...projectLinks.nova,
    },
    {
      title: "UrbanFlow — Gestion du transport urbain",
      context: "Projet académique · 2025",
      description:
        "Une application de gestion du transport urbain basée sur une architecture microservices et déployée dans le cloud.",
      highlights: [
        "Microservices Spring Boot communiquant de manière asynchrone via RabbitMQ",
        "Orchestration avec Kubernetes sur AWS, infrastructure provisionnée avec Terraform",
        "Pipelines CI/CD avec GitHub Actions et observabilité avec Prometheus et Grafana",
      ],
      stack: ["Spring Boot", "React", "RabbitMQ", "Kubernetes", "AWS", "Terraform", "PostgreSQL"],
      featured: true,
      ...projectLinks.urbanflow,
    },
    {
      title: "Plateforme de suivi de la navigabilité des avions",
      context: "Stage · Royal Air Maroc",
      description: "Une plateforme web de suivi de la navigabilité des avions.",
      highlights: [
        "Modèle de données conçu avec la méthode Merise sur MySQL",
        "API REST développée avec Node.js et Express.js",
        "Interface React avec tableaux de bord Chart.js pour visualiser les données de navigabilité",
      ],
      stack: ["React", "Node.js", "Express.js", "MySQL", "Chart.js"],
    },
  ],
  experience: [
    {
      title: "Stagiaire en développement Full-Stack (Stage PFE)",
      organisation: "Teal Technology Services — Casablanca",
      period: "Mars 2026 — Sept. 2026",
      points: [
        "Conception et développement de TealHub, une plateforme de gestion de projets IT basée sur une architecture microservices (API Gateway, Auth, User, Project, Assistant).",
        "Mise en place d'une authentification JWT RS256/JWKS et d'un assistant IA intégré (Groq / Spring AI) pour la détection d'anomalies et l'aide à la décision.",
      ],
      tools: tools.tealhub,
    },
    {
      title: "Stagiaire en développement Full-Stack",
      organisation: "Atos — Casablanca",
      period: "Juil. 2025 — Août 2025",
      points: [
        "Conception et développement d'une plateforme de newsletter interactive avec IA pour recommander des actualités personnalisées.",
        "Mise en place d'une infrastructure DevOps automatisée avec Jenkins, Azure, Terraform et Prometheus.",
      ],
      tools: tools.atos,
    },
    {
      title: "Stagiaire en développement Full-Stack",
      organisation: "Royal Air Maroc — Casablanca",
      period: "Juil. 2024 — Août 2024",
      points: ["Conception et développement d'une plateforme de suivi de la navigabilité des avions."],
      tools: tools.ram,
    },
  ],
  education: [
    {
      title: "Cycle d'ingénieur en Génie Logiciel",
      organisation: "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      period: "2023 — 2026",
      points: ["Diplôme d'ingénieur d'État, spécialité Génie Logiciel."],
    },
    {
      title: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      organisation: "Lycée Technique Mohammedia",
      period: "2021 — 2023",
      points: ["Filière Technologies et Sciences Industrielles (TSI) — formation intensive en mathématiques, physique et sciences de l'ingénieur."],
    },
  ],
  certifications: [
    "Responsive Web Design — freeCodeCamp",
    "SQL (Intermédiaire) — HackerRank",
    "Artificial Intelligence Analyst — IBM",
    "Java SE 17 Developer — Oracle University (en cours)",
  ],
  activities: ["Responsable relations et communications — Club CINDH (Club d'Initiative Nationale pour le Développement Humain)"],
  ui: {
    nav: { about: "À propos", skills: "Compétences", projects: "Projets", experience: "Parcours", contact: "Contact" },
    resume: "CV",
    switchLabel: "View in English",
    greeting: "Bonjour, je m'appelle",
    iAm: "Je suis",
    ctaPrimary: "Découvrir mon travail",
    ctaSecondary: "Me contacter",
    scrollDown: "Défiler vers le bas",
    about: { eyebrow: "Qui suis-je", title: "À propos de moi" },
    stats: { projects: "Projets", technologies: "Technologies", internships: "Stages" },
    skills: { eyebrow: "Mes outils", title: "Mes compétences" },
    projects: { eyebrow: "Mes réalisations", title: "Mes projets", others: "Autres projets", code: "Code", live: "Démo" },
    journey: {
      eyebrow: "Mon parcours",
      title: "Expérience & Formation",
      experience: "Expérience professionnelle",
      education: "Formation",
      certifications: "Certifications",
      activities: "Activités parascolaires",
    },
    contact: {
      eyebrow: "Discutons",
      title: "Me contacter",
      heading: "Construisons quelque chose de grand ensemble",
      body: "Je suis actuellement à la recherche d'un CDI. Que vous ayez une opportunité, une question ou simplement envie d'échanger, n'hésitez pas à me contacter.",
      email: "M'envoyer un e-mail",
      cv: "Télécharger le CV",
    },
    footer: "Conçu et développé par",
  },
};

export const content: Record<Lang, Content> = { en, fr };

export const langPaths: Record<Lang, string> = { en: "/", fr: "/fr" };
