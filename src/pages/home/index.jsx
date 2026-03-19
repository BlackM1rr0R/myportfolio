import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: { projects: "Projects", skills: "Skills", about: "About Me", contacts: "Contacts" },
    hero: {
      available: "Available for work",
      greeting: "Hello, I'm",
      name: "Elchin Abdullayev",
      role: "Web Developer & DevOps Engineer",
      overview: "DevOps Engineer with hands-on experience in Backend development (Java/Spring Boot, microservices), Frontend (React, Next.js), and cloud-native infrastructure — Docker, Kubernetes, Terraform, Jenkins, and CI/CD pipelines.",
      contact: "Contact Me",
      viewpdf: "View CV",
      stats: { projects: "Projects", exp: "Years Exp.", tech: "Technologies" },
    },
    sections: {
      projects: "Projects", skills: "Skills", about: "About Me",
      contacts: "Contacts", languages: "Languages",
    },
    projects: {
      heading: "Featured",
      subheading: "Work",
      all: "All Projects",
      live: "Live Demo",
    },
    skills: {
      heading: "Tech",
      subheading: "Stack",
      technologies: "technologies",
    },
    languages: {
      heading: "Human",
      subheading: "Languages",
    },
    about: {
      heading: "Crafting",
      subheading: "Digital",
      subheading2: "Experiences",
      body: "DevOps Engineer & Full-Stack Developer with experience in microservices (Spring Boot), React/Next.js frontends, and cloud infrastructure. Proficient in Docker, Kubernetes, Helm, Terraform, Jenkins, and Ansible. Passionate about CI/CD automation, scalable architecture, and system optimization.",
      readmore: "LinkedIn Profile",
    },
    contact: {
      heading: "Let's",
      subheading: "Work Together",
      overview: "Feel free to reach out! I'd love to discuss new projects, creative ideas, or opportunities to collaborate.",
      message: "Message me here",
    },
    footer: {
      copy: "© 2023 · Web Developer & DevOps Engineer · Baku, AZ",
    },
  },

  aze: {
    nav: { projects: "Layihələr", skills: "Bacarıqlar", about: "Haqqımda", contacts: "Əlaqə" },
    hero: {
      available: "İşə hazıram",
      greeting: "Salam, mən",
      name: "Elçin Abdullayev",
      role: "Veb İnkişafçı & DevOps Mühəndisi",
      overview: "Java/Spring Boot, mikroservis arxitekturası, React/Next.js frontend və Docker, Kubernetes, Terraform, Jenkins kimi bulud infrastrukturunda təcrübəsi olan DevOps Mühəndisi.",
      contact: "Əlaqə saxla",
      viewpdf: "CV-yə bax",
      stats: { projects: "Layihə", exp: "İl Təcrübə", tech: "Texnologiya" },
    },
    sections: {
      projects: "Layihələr", skills: "Bacarıqlar", about: "Haqqımda",
      contacts: "Əlaqə", languages: "Dillər",
    },
    projects: {
      heading: "Seçilmiş",
      subheading: "İşlər",
      all: "Bütün layihələr",
      live: "Canlı Demo",
    },
    skills: {
      heading: "Texnologiya",
      subheading: "Dəsti",
      technologies: "texnologiya",
    },
    languages: {
      heading: "İnsan",
      subheading: "Dilləri",
    },
    about: {
      heading: "Rəqəmsal",
      subheading: "Təcrübələr",
      subheading2: "Yaradıram",
      body: "Müasir, miqyaslana bilən veb tətbiqlər yaratmağa güclü həvəsim var. Spring Boot mikroservislərindən tutmuş React/Next.js frontend-lərə, Docker, Kubernetes, Helm, Terraform, Jenkins və Ansible ilə bulud infrastrukturuna qədər geniş təcrübəm var.",
      readmore: "LinkedIn Profili",
    },
    contact: {
      heading: "Birlikdə",
      subheading: "Çalışaq",
      overview: "Mənimlə əlaqə saxlayın! Yeni layihələr, yaradıcı ideyalar və ya əməkdaşlıq imkanlarını müzakirə etməkdən məmnun olaram.",
      message: "Buradan yazın",
    },
    footer: {
      copy: "© 2025 · Veb İnkişafçı & DevOps Mühəndisi · Bakı, AZ",
    },
  },

  de: {
    nav: { projects: "Projekte", skills: "Fähigkeiten", about: "Über mich", contacts: "Kontakte" },
    hero: {
      available: "Verfügbar für Projekte",
      greeting: "Hallo, ich bin",
      name: "Elchin Abdullayev",
      role: "Web-Entwickler & DevOps Engineer",
      overview: "DevOps Engineer mit Erfahrung in Backend-Entwicklung (Java/Spring Boot, Microservices), Frontend (React, Next.js) und Cloud-nativer Infrastruktur — Docker, Kubernetes, Terraform, Jenkins und CI/CD-Pipelines.",
      contact: "Kontakt aufnehmen",
      viewpdf: "Lebenslauf ansehen",
      stats: { projects: "Projekte", exp: "Jahre Erfahrung", tech: "Technologien" },
    },
    sections: {
      projects: "Projekte", skills: "Fähigkeiten", about: "Über mich",
      contacts: "Kontakte", languages: "Sprachen",
    },
    projects: {
      heading: "Ausgewählte",
      subheading: "Arbeiten",
      all: "Alle Projekte",
      live: "Live Demo",
    },
    skills: {
      heading: "Tech",
      subheading: "Stack",
      technologies: "Technologien",
    },
    languages: {
      heading: "Menschliche",
      subheading: "Sprachen",
    },
    about: {
      heading: "Digitale",
      subheading: "Erlebnisse",
      subheading2: "gestalten",
      body: "Full-Stack-Entwickler & DevOps Engineer mit Erfahrung in Microservices (Spring Boot), React/Next.js-Frontends und Cloud-Infrastruktur. Kenntnisse in Docker, Kubernetes, Helm, Terraform, Jenkins und Ansible. Leidenschaft für CI/CD-Automatisierung und skalierbare Architektur.",
      readmore: "LinkedIn Profil",
    },
    contact: {
      heading: "Lass uns",
      subheading: "zusammenarbeiten",
      overview: "Kontaktieren Sie mich gerne! Ich freue mich auf neue Projekte, kreative Ideen oder Kooperationsmöglichkeiten.",
      message: "Schreiben Sie mir hier",
    },
    footer: {
      copy: "© 2025 · Web-Entwickler & DevOps Engineer · Baku, AZ",
    },
  },

  ru: {
    nav: { projects: "Проекты", skills: "Навыки", about: "Обо мне", contacts: "Контакты" },
    hero: {
      available: "Открыт к предложениям",
      greeting: "Привет, я",
      name: "Эльчин Абдуллаев",
      role: "Веб-разработчик & DevOps инженер",
      overview: "DevOps инженер с опытом в Backend-разработке (Java/Spring Boot, микросервисы), Frontend (React, Next.js) и облачной инфраструктуре — Docker, Kubernetes, Terraform, Jenkins и CI/CD пайплайны.",
      contact: "Связаться",
      viewpdf: "Смотреть CV",
      stats: { projects: "Проекта", exp: "Года опыта", tech: "Технологий" },
    },
    sections: {
      projects: "Проекты", skills: "Навыки", about: "Обо мне",
      contacts: "Контакты", languages: "Языки",
    },
    projects: {
      heading: "Избранные",
      subheading: "Работы",
      all: "Все проекты",
      live: "Демо",
    },
    skills: {
      heading: "Технический",
      subheading: "Стек",
      technologies: "технологий",
    },
    languages: {
      heading: "Человеческие",
      subheading: "Языки",
    },
    about: {
      heading: "Создаю",
      subheading: "Цифровые",
      subheading2: "Решения",
      body: "Full-Stack разработчик & DevOps инженер с опытом в микросервисах (Spring Boot), React/Next.js фронтендах и облачной инфраструктуре. Владею Docker, Kubernetes, Helm, Terraform, Jenkins и Ansible. Увлечён CI/CD автоматизацией и масштабируемой архитектурой.",
      readmore: "Профиль LinkedIn",
    },
    contact: {
      heading: "Давайте",
      subheading: "работать вместе",
      overview: "Свяжитесь со мной! Готов обсудить новые проекты, творческие идеи или возможности для сотрудничества.",
      message: "Напишите мне здесь",
    },
    footer: {
      copy: "© 2025 · Веб-разработчик & DevOps инженер · Баку, AZ",
    },
  },
};

const getProjects = (t) => [
  { name: "FormDom", tech: "React · Spring Boot · REST API", desc: { en: "Anonymous discussion platform where users share thoughts freely.", aze: "İstifadəçilərin fikirləri anonim paylaşdığı müzakirə platforması.", de: "Anonyme Diskussionsplattform für freien Gedankenaustausch.", ru: "Анонимная платформа для свободного обмена мнениями." }, link: "https://formdom.pro/", color: "#FF6B6B", emoji: "📝" },
  { name: "German Course Platform", tech: "React · Redux · Spring Boot", desc: { en: "Full-featured German language learning academy platform.", aze: "Tam funksional Alman dili öyrənmə akademiyası platforması.", de: "Vollständige Plattform für eine Deutschkurs-Akademie.", ru: "Полнофункциональная платформа академии немецкого языка." }, link: "https://deutscheakademiebaku.az/", color: "#4ECDC4", emoji: "🎓" },
  { name: "Hospital Blog", tech: "React · Spring Boot · REST API", desc: { en: "Home care and treatment blog for Sakarya city hospital.", aze: "Sakarya şəhər xəstəxanası üçün ev qulluğu bloqu.", de: "Hausbetreuungs- und Behandlungsblog für ein Krankenhaus.", ru: "Блог домашнего ухода для городской больницы Сакарья." }, link: "https://eternalsaglik.com/", color: "#45B7D1", emoji: "🏥" },
  { name: "Perfume Website", tech: "React · Spring Boot · Router", desc: { en: "Curated luxury fragrance e-commerce platform.", aze: "Seçilmiş lüks ətir e-ticarət platforması.", de: "Kuratierte Luxus-Parfümerie E-Commerce-Plattform.", ru: "Подборка элитной парфюмерии для интернет-магазина." }, link: "https://ambrette.istanbul/", color: "#96CEB4", emoji: "🌸" },
  { name: "UI/UX Blog", tech: "React · Redux · Backend", desc: { en: "Portfolio site for a UI/UX designer showcasing digital experiences.", aze: "Rəqəmsal təcrübələri nümayiş etdirən UI/UX dizayner portfoliosu.", de: "Portfolio-Seite für einen UI/UX-Designer.", ru: "Портфолио UI/UX дизайнера с цифровыми проектами." }, link: "https://fatimastudioweb.vercel.app/", color: "#DDA0DD", emoji: "🎨" },
  { name: "Booking Reservation", tech: "React · Router", desc: { en: "Doctor appointment booking and reservation system.", aze: "Həkim görüşü rezervasiya sistemi.", de: "Arztterminbuchungs- und Reservierungssystem.", ru: "Система записи к врачу и бронирования." }, link: "https://doctor-baku.vercel.app/", color: "#F0A500", emoji: "📅" },
  { name: "Maglos Finance", tech: "React · JavaScript · APIs", desc: { en: "Financial management platform for money and asset tracking.", aze: "Pul və aktiv izləmə üçün maliyyə idarəetmə platforması.", de: "Finanzmanagement-Plattform für Geld- und Vermögensverwaltung.", ru: "Финансовая платформа для управления деньгами и активами." }, link: "https://maglos.vercel.app/", color: "#98D8C8", emoji: "💰" },
];

const skillGroups = [
  { title: "Front-End", icon: "⚡", color: "#FF6B6B", bg: "rgba(255,107,107,0.08)", skills: ["HTML", "CSS", "SCSS", "Bootstrap 5", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Context API", "Material UI", "React Native"] },
  { title: "Back-End", icon: "☕", color: "#4ECDC4", bg: "rgba(78,205,196,0.08)", skills: ["Java Core", "Spring Boot", "Spring Security", "Spring Cloud", "REST APIs", "Apache Kafka", "RabbitMQ", "Keycloak", "JWT", "Swagger", "JUnit", "Eureka", "Elasticsearch"] },
  { title: "DevOps & Cloud", icon: "🚀", color: "#45B7D1", bg: "rgba(69,183,209,0.08)", skills: ["Docker", "Kubernetes", "Helm Chart", "Terraform", "Jenkins", "Ansible", "AWS", "Azure", "Linode", "GitHub Actions", "GitLab CI/CD", "Grafana", "Prometheus"] },
  { title: "Databases", icon: "🗄️", color: "#96CEB4", bg: "rgba(150,206,180,0.08)", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "MSSQL"] },
  { title: "Network & Security", icon: "🔐", color: "#DDA0DD", bg: "rgba(221,160,221,0.08)", skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "Firewalls", "FTP", "SMTP", "PAM360", "Nginx", "JWT Auth", "Role-Based Access"] },
  { title: "Tools & Other", icon: "🛠️", color: "#F0A500", bg: "rgba(240,165,0,0.08)", skills: ["Figma", "Git", "GitHub", "GitLab", "Linux", "Debian", "Jira", "Postman", "Slack", "Canva", "MS Office", "IT Essentials"] },
];

const langData = [
  { name: { en: "Azerbaijani", aze: "Azərbaycan", de: "Aserbaidschanisch", ru: "Азербайджанский" }, level: { en: "Native", aze: "Ana dili", de: "Muttersprache", ru: "Родной" }, flag: "🇦🇿", pct: 100 },
  { name: { en: "Turkish", aze: "Türk", de: "Türkisch", ru: "Турецкий" }, level: { en: "C1 — Fluent", aze: "C1 — Axıcı", de: "C1 — Fließend", ru: "C1 — Свободный" }, flag: "🇹🇷", pct: 92 },
  { name: { en: "Russian", aze: "Rus", de: "Russisch", ru: "Русский" }, level: { en: "B2 — Upper Inter.", aze: "B2 — Yuxarı Orta", de: "B2 — Obere Mittelstufe", ru: "B2 — Выше среднего" }, flag: "🇷🇺", pct: 75 },
  { name: { en: "German", aze: "Alman", de: "Deutsch", ru: "Немецкий" }, level: { en: "B2 — Upper Inter.", aze: "B2 — Yuxarı Orta", de: "B2 — Obere Mittelstufe", ru: "B2 — Выше среднего" }, flag: "🇩🇪", pct: 72 },
  { name: { en: "English", aze: "İngilis", de: "Englisch", ru: "Английский" }, level: { en: "B1 — Intermediate", aze: "B1 — Orta", de: "B1 — Mittelstufe", ru: "B1 — Средний" }, flag: "🇬🇧", pct: 60 },
];

const openCV = () => {
  const win = window.open("", "_blank");
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Elchin Abdullayev — CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&display=swap" rel="stylesheet"/>
  <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Outfit',sans-serif;background:#F8F9FF;color:#0D0D1A}.top-bar{background:linear-gradient(135deg,#FF6B6B,#FF8E53,#4ECDC4);padding:48px 60px 40px;color:white}.top-bar h1{font-size:3.5rem;font-weight:900;letter-spacing:-.04em;line-height:1}.top-bar p{font-size:1.1rem;font-weight:500;opacity:.9;margin-top:8px}.contacts-row{display:flex;gap:20px;margin-top:16px;flex-wrap:wrap}.contacts-row a,.contacts-row span{color:white;text-decoration:none;font-size:.85rem;font-weight:600;opacity:.85}.body{max-width:900px;margin:0 auto;padding:48px 60px}.section{margin-bottom:40px}.section-title{font-size:.7rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#FF6B6B;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #FF6B6B22}.exp-item{margin-bottom:24px}.exp-header{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}.exp-title{font-weight:800;font-size:1rem}.exp-company{font-weight:600;color:#4ECDC4;font-size:.9rem;margin-top:2px}.exp-date{font-size:.78rem;font-weight:600;color:#8888AA;white-space:nowrap}.exp-list{margin-top:10px;padding-left:18px}.exp-list li{font-size:.88rem;line-height:1.7;color:#4A4A6A}.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.skill-card{background:white;border:1px solid #E8EAFF;border-radius:12px;padding:16px}.skill-card h4{font-size:.78rem;font-weight:800;color:#FF6B6B;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px}.skill-tags{display:flex;flex-wrap:wrap;gap:6px}.tag{background:#F2F4FF;color:#4A4A6A;font-size:.72rem;font-weight:600;padding:3px 9px;border-radius:20px}.lang-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.lang-card{background:white;border:1px solid #E8EAFF;border-radius:12px;padding:14px 12px;text-align:center}.lang-card .flag{font-size:1.8rem}.lang-card .name{font-weight:700;font-size:.82rem;margin-top:6px}.lang-card .level{font-size:.7rem;color:#8888AA;font-weight:600;margin-top:2px}.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.edu-card{background:white;border:1px solid #E8EAFF;border-radius:12px;padding:16px}.edu-card .degree{font-weight:700;font-size:.9rem}.edu-card .school{font-size:.8rem;color:#4ECDC4;font-weight:600;margin-top:4px}.edu-card .year{font-size:.75rem;color:#8888AA;margin-top:4px}@media print{body{background:white}.top-bar{-webkit-print-color-adjust:exact;print-color-adjust:exact}}@media(max-width:600px){.skills-grid,.edu-grid{grid-template-columns:1fr}.lang-grid{grid-template-columns:repeat(2,1fr)}.body{padding:24px}.top-bar{padding:32px 24px}}</style></head>
  <body><div class="top-bar"><h1>Elchin</h1><p>Web Developer & DevOps Engineer</p><div class="contacts-row"><a href="mailto:abdllyevv@gmail.com">✉️ abdllyevv@gmail.com</a><a href="https://wa.me/+994507487048">💬 +994 50 748 70 48</a><a href="https://github.com/BlackM1rr0R">🐙 GitHub</a><a href="https://www.linkedin.com/in/elcin-abdullayev-583861229/">💼 LinkedIn</a><span>📍 Baku, Azerbaijan</span></div></div>
  <div class="body">
  <div class="section"><div class="section-title">Summary</div><p style="font-size:.9rem;line-height:1.75;color:#4A4A6A">DevOps Engineer with hands-on experience in Backend development using Java (Spring Boot) and microservices architecture, as well as Frontend development with React and Next.js. Proficient in Docker, Kubernetes, Helm Charts, Terraform, Jenkins, and Ansible. Strong background in CI/CD pipelines, REST APIs, and cloud-native systems.</p></div>
  <div class="section"><div class="section-title">Experience</div>
  <div class="exp-item"><div class="exp-header"><div><div class="exp-title">Backend Developer & DevOps Engineer</div><div class="exp-company">Qrolling</div></div><div class="exp-date">Sep 2025 – Mar 2026</div></div><ul class="exp-list"><li>Provisioned production servers with Nginx reverse proxy</li><li>Set up CI/CD pipelines using Jenkins, GitLab, and GitHub Actions</li><li>Containerized services with Docker, orchestrated with Kubernetes</li><li>Implemented JWT auth, role-based permissions, and security hardening</li></ul></div>
  <div class="exp-item"><div class="exp-header"><div><div class="exp-title">Full-Stack Developer</div><div class="exp-company">Deutsche Akademie Baku</div></div><div class="exp-date">Sep 2024 – Aug 2025</div></div><ul class="exp-list"><li>Built language course platform with React.js and Context API</li><li>Developed backend with Spring Boot, Spring Security, JPA, MySQL, JWT</li><li>Containerized and deployed with Docker; managed via Git</li><li>Documented and tested APIs with Postman and Swagger</li></ul></div>
  <div class="exp-item"><div class="exp-header"><div><div class="exp-title">Backend Developer</div><div class="exp-company">Qafqaznet LLC</div></div><div class="exp-date">May 2024 – Jan 2025</div></div><ul class="exp-list"><li>Developed server-side applications with Spring Boot and REST APIs</li><li>Configured Nginx as reverse proxy, streamlined deployment with Docker & Git</li></ul></div>
  <div class="exp-item"><div class="exp-header"><div><div class="exp-title">Front-End Developer</div><div class="exp-company">Eternal Clinic</div></div><div class="exp-date">Jun 2022 – Jan 2024</div></div><ul class="exp-list"><li>Built responsive medical website with React.js, Axios, and React Router</li><li>Managed state with Context API and hooks; integrated RESTful APIs</li></ul></div></div>
  <div class="section"><div class="section-title">Skills</div><div class="skills-grid">
  <div class="skill-card"><h4>Front-End</h4><div class="skill-tags">${["HTML","CSS","SCSS","JS","TypeScript","React","Next.js","Redux","Material UI","React Native"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>
  <div class="skill-card"><h4>Back-End</h4><div class="skill-tags">${["Spring Boot","Spring Security","Kafka","RabbitMQ","JWT","Keycloak","Eureka","Elasticsearch","JUnit","Swagger"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>
  <div class="skill-card"><h4>DevOps & Cloud</h4><div class="skill-tags">${["Docker","Kubernetes","Helm","Terraform","Jenkins","Ansible","AWS","Azure","GitLab CI","GitHub Actions","Grafana","Prometheus"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>
  <div class="skill-card"><h4>Databases</h4><div class="skill-tags">${["PostgreSQL","MySQL","MongoDB","Redis","Cassandra","MSSQL"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>
  <div class="skill-card"><h4>Network & Security</h4><div class="skill-tags">${["TCP/IP","DNS","HTTP","Nginx","Firewalls","SMTP","PAM360","JWT Auth"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div>
  <div class="skill-card"><h4>Tools</h4><div class="skill-tags">${["Git","GitHub","GitLab","Figma","Linux","Jira","Postman","Slack","Debian"].map(s=>`<span class="tag">${s}</span>`).join("")}</div></div></div></div>
  <div class="section"><div class="section-title">Languages</div><div class="lang-grid">${[{flag:"🇦🇿",name:"Azerbaijani",level:"Native"},{flag:"🇹🇷",name:"Turkish",level:"C1"},{flag:"🇷🇺",name:"Russian",level:"B2"},{flag:"🇩🇪",name:"German",level:"B2"},{flag:"🇬🇧",name:"English",level:"B1"}].map(l=>`<div class="lang-card"><div class="flag">${l.flag}</div><div class="name">${l.name}</div><div class="level">${l.level}</div></div>`).join("")}</div></div>
  <div class="section"><div class="section-title">Education</div><div class="edu-grid">${[{degree:"Backend Development Diploma",school:"MIT Academy",year:"2024"},{degree:"Frontend Developer Diploma",school:"IT-Baku Academy",year:"2021–2022"},{degree:"Bachelor's in IT",school:"Azerbaijan State Oil and Industry University",year:"2017–2021"}].map(e=>`<div class="edu-card"><div class="degree">${e.degree}</div><div class="school">${e.school}</div><div class="year">${e.year}</div></div>`).join("")}</div></div>
  </div></body></html>`;
  win.document.write(html);
  win.document.close();
};

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});

  const t = translations[lang] || translations.en;
  const projects = getProjects(t);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.2 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cardObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setVisibleCards((p) => ({ ...p, [e.target.dataset.id]: true }));
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll("[data-id]").forEach((el) => cardObs.observe(el));
    return () => cardObs.disconnect();
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const bg = dark ? "#0A0A0F" : "#F8F9FF";
  const surface = dark ? "#13131A" : "#FFFFFF";
  const surfaceAlt = dark ? "#1A1A25" : "#F2F4FF";
  const text = dark ? "#F0F0FF" : "#0D0D1A";
  const textMuted = dark ? "#8888AA" : "#6B6B8D";
  const border = dark ? "rgba(255,255,255,0.07)" : "rgba(13,13,26,0.08)";

  return (
    <div style={{ fontFamily: "'Outfit','DM Sans',sans-serif", background: bg, color: text, minHeight: "100vh", transition: "all .4s ease", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(180deg,#FF6B6B,#4ECDC4); border-radius:10px; }
        .nav-link { position:relative; cursor:pointer; font-weight:500; font-size:.9rem; transition:color .25s; padding:6px 0; text-decoration:none; }
        .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:linear-gradient(90deg,#FF6B6B,#4ECDC4); border-radius:10px; transition:width .3s cubic-bezier(.4,0,.2,1); }
        .nav-link:hover::after, .nav-link.active::after { width:100%; }
        .btn-primary { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#FF6B6B,#FF8E53); color:white; border:none; padding:13px 28px; border-radius:50px; font-family:'Outfit',sans-serif; font-size:.9rem; font-weight:600; cursor:pointer; transition:all .3s; letter-spacing:.02em; box-shadow:0 4px 20px rgba(255,107,107,.35); text-decoration:none; white-space:nowrap; }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(255,107,107,.5); }
        .btn-outline { display:inline-flex; align-items:center; gap:8px; background:transparent; padding:12px 24px; border-radius:50px; font-family:'Outfit',sans-serif; font-size:.85rem; font-weight:600; cursor:pointer; transition:all .3s; text-decoration:none; white-space:nowrap; }
        .btn-outline:hover { background:rgba(255,107,107,.06); }
        .card-hover { transition:all .35s cubic-bezier(.4,0,.2,1); }
        .card-hover:hover { transform:translateY(-6px); }
        .fade-up { opacity:0; transform:translateY(30px); transition:all .7s cubic-bezier(.4,0,.2,1); }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .skill-tag { display:inline-block; padding:5px 12px; border-radius:20px; font-size:.78rem; font-weight:500; transition:transform .2s; cursor:default; }
        .skill-tag:hover { transform:scale(1.05); }
        .lang-bar { height:6px; border-radius:10px; transition:width 1.5s cubic-bezier(.4,0,.2,1); }
        .gradient-text { background:linear-gradient(135deg,#FF6B6B 0%,#FF8E53 40%,#4ECDC4 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .glow-dot { width:8px; height:8px; flex-shrink:0; border-radius:50%; background:#4ECDC4; box-shadow:0 0 10px #4ECDC4,0 0 20px rgba(78,205,196,.5); animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
        .float-chip { position:absolute; border-radius:16px; padding:10px 16px; box-shadow:0 8px 30px rgba(0,0,0,.12); font-weight:600; font-size:.82rem; display:flex; align-items:center; gap:8px; animation:float 4s ease-in-out infinite; white-space:nowrap; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .section-tag { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,rgba(255,107,107,.12),rgba(78,205,196,.12)); border:1px solid rgba(255,107,107,.2); color:#FF6B6B; padding:6px 16px; border-radius:50px; font-size:.78rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; margin-bottom:16px; }
        .project-card-inner { position:relative; overflow:hidden; border-radius:20px; transition:all .4s cubic-bezier(.4,0,.2,1); }
        .project-card-inner:hover .project-overlay { opacity:1; }
        .project-overlay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); backdrop-filter:blur(4px); opacity:0; transition:opacity .3s; border-radius:20px; }
        @keyframes heroFloat { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(15px,-10px) rotate(2deg)} 66%{transform:translate(-10px,8px) rotate(-1deg)} }
        .hero-blob { animation:heroFloat 8s ease-in-out infinite; }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        .animate-slide-down { animation:slideDown .2s ease; }
        .sec { padding:100px max(20px,calc(50vw - 600px)); }
        .sec-alt { padding:100px max(20px,calc(50vw - 600px)); }
        .hero-wrap { max-width:1200px; width:100%; display:grid; grid-template-columns:1fr 340px; gap:60px; align-items:center; }
        .about-wrap { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .tech-wrap { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .projects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:24px; }
        .skills-grid  { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:24px; }
        .lang-grid    { display:grid; grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:20px; }
        .hero-btns { display:flex; flex-wrap:wrap; gap:12px; }
        .hero-stats { display:flex; gap:16px; margin-top:48px; flex-wrap:wrap; }
        .desktop-nav { display:flex; align-items:center; gap:32px; }
        .hamburger { display:none; background:none; border:none; cursor:pointer; font-size:1.5rem; color:inherit; }
        @media (max-width:960px) {
          .hero-wrap { grid-template-columns:1fr; justify-items:center; gap:40px; text-align:center; }
          .hero-btns { justify-content:center; }
          .hero-stats { justify-content:center; }
          .about-wrap { grid-template-columns:1fr; gap:40px; }
          .tech-wrap { grid-template-columns:repeat(4,1fr); }
          .float-chip { display:none !important; }
        }
        @media (max-width:768px) {
          .desktop-nav { display:none !important; }
          .hamburger { display:block; }
          .sec, .sec-alt { padding:70px 20px; }
          .tech-wrap { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:480px) {
          .hero-stats { gap:10px; }
          .stat-card { padding:12px 16px !important; }
          .projects-grid { grid-template-columns:1fr; }
          .lang-grid { grid-template-columns:repeat(2,1fr); }
          .btn-primary, .btn-outline { padding:11px 18px; font-size:.82rem; }
          .sec, .sec-alt { padding:60px 16px; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:dark?"rgba(10,10,15,0.88)":"rgba(248,249,255,0.88)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderBottom:`1px solid ${border}`, padding:"0 max(20px,calc(50vw - 600px))", display:"flex", alignItems:"center", justifyContent:"space-between", height:68, transition:"all .4s ease" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:12, background:"linear-gradient(135deg,#FF6B6B,#4ECDC4)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:900, fontSize:"1rem", flexShrink:0 }}>E</div>
          <span style={{ fontWeight:800, fontSize:"1.05rem", letterSpacing:"-.02em" }}>Elchin<span style={{ color:"#FF6B6B" }}>.</span></span>
        </div>
        <div className="desktop-nav">
          {Object.entries(t.nav).map(([key, label]) => (
            <span key={key} className={`nav-link ${activeSection===key?"active":""}`} style={{ color:activeSection===key?"#FF6B6B":textMuted }} onClick={() => scrollTo(key)}>{label}</span>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ background:surfaceAlt, border:`1px solid ${border}`, color:text, padding:"6px 10px", borderRadius:10, fontSize:".82rem", cursor:"pointer", fontFamily:"inherit", outline:"none" }}>
            <option value="en">EN</option><option value="aze">AZ</option><option value="de">DE</option><option value="ru">RU</option>
          </select>
          <button onClick={() => setDark(!dark)} style={{ background:surfaceAlt, border:`1px solid ${border}`, color:text, padding:"7px 12px", borderRadius:10, fontSize:".82rem", cursor:"pointer", fontFamily:"inherit", fontWeight:600, transition:"all .2s" }}>
            {dark?"☀️":"🌙"}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen?"✕":"☰"}</button>
        </div>
      </nav>

      {menuOpen && (
        <div className="animate-slide-down" style={{ position:"fixed", top:68, left:0, right:0, zIndex:999, background:dark?"rgba(10,10,15,0.97)":"rgba(248,249,255,0.97)", backdropFilter:"blur(20px)", padding:"12px 24px", borderBottom:`1px solid ${border}`, display:"flex", flexDirection:"column" }}>
          {Object.entries(t.nav).map(([key, label]) => (
            <button key={key} onClick={() => scrollTo(key)} style={{ background:"none", border:"none", borderBottom:`1px solid ${border}`, color:text, textAlign:"left", padding:"14px 0", fontSize:"1rem", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" className="sec" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div className="hero-blob" style={{ position:"absolute", top:"10%", right:"5%", width:"min(500px,55vw)", height:"min(500px,55vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(255,107,107,.15) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"15%", left:"8%", width:"min(400px,45vw)", height:"min(400px,45vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(78,205,196,.12) 0%,transparent 70%)", pointerEvents:"none", animation:"heroFloat 10s ease-in-out infinite reverse" }} />

        <div className="hero-wrap">
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
              <div className="glow-dot" />
              <span style={{ fontSize:".82rem", fontWeight:600, color:"#4ECDC4", letterSpacing:".1em", textTransform:"uppercase" }}>{t.hero.available}</span>
            </div>
            <p style={{ fontSize:"1.1rem", color:textMuted, fontWeight:400, marginBottom:8 }}>{t.hero.greeting}</p>
            <h1 style={{ fontSize:"clamp(2.2rem,5.5vw,5rem)", fontWeight:900, lineHeight:1.05, letterSpacing:"-.03em", marginBottom:12 }}>
              <span className="gradient-text">{t.hero.name}</span>
            </h1>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:22 }}>
              <div style={{ height:3, width:48, background:"linear-gradient(90deg,#FF6B6B,#4ECDC4)", borderRadius:10, flexShrink:0 }} />
              <h2 style={{ fontSize:"clamp(.95rem,2.2vw,1.4rem)", fontWeight:600, color:textMuted }}>{t.hero.role}</h2>
            </div>
            <p style={{ fontSize:"clamp(.88rem,1.4vw,1.05rem)", lineHeight:1.75, color:textMuted, maxWidth:520, marginBottom:34 }}>{t.hero.overview}</p>
            <div className="hero-btns">
              <a href="https://wa.me/+994507487048" target="_blank" rel="noopener noreferrer" className="btn-primary"><span>💬</span>{t.hero.contact}</a>
              <button className="btn-outline" onClick={openCV} style={{ border:`2px solid ${border}`, color:text }}>📄 {t.hero.viewpdf}</button>
            </div>
            <div className="hero-stats">
              {[{label:"7+",sub:t.hero.stats.projects},{label:"3+",sub:t.hero.stats.exp},{label:"40+",sub:t.hero.stats.tech}].map(({label,sub}) => (
                <div key={sub} className="stat-card" style={{ textAlign:"center", padding:"16px 22px", background:surfaceAlt, borderRadius:16, border:`1px solid ${border}` }}>
                  <div style={{ fontSize:"1.7rem", fontWeight:900, background:"linear-gradient(135deg,#FF6B6B,#4ECDC4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{label}</div>
                  <div style={{ fontSize:".72rem", color:textMuted, fontWeight:500, marginTop:2 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ width:"min(300px,70vw)", height:"min(360px,84vw)", borderRadius:32, background:`linear-gradient(135deg,${dark?"#1A1A25":"#EEF0FF"},${dark?"#13131A":"#F8F0FF"})`, border:`2px solid ${border}`, position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 60% 30%,rgba(255,107,107,.2),transparent 60%),radial-gradient(circle at 20% 80%,rgba(78,205,196,.15),transparent 60%)" }} />
              <div style={{ fontSize:"clamp(5rem,14vw,7rem)", userSelect:"none" }}>👨‍💻</div>
              <div className="float-chip" style={{ top:24, left:-20, background:dark?"#1A1A25":"white", color:text, border:`1px solid ${border}`, animationDelay:"0s" }}><span>⚛️</span>React</div>
              <div className="float-chip" style={{ bottom:60, left:-30, background:dark?"#1A1A25":"white", color:text, border:`1px solid ${border}`, animationDelay:"1.5s" }}><span>☕</span>Spring Boot</div>
              <div className="float-chip" style={{ top:80, right:-24, background:dark?"#1A1A25":"white", color:text, border:`1px solid ${border}`, animationDelay:".8s" }}><span>🐳</span>Docker</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="sec">
        <div style={{ marginBottom:48 }}>
          <div className="section-tag"><span>#</span>{t.sections.projects}</div>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:900, letterSpacing:"-.03em", lineHeight:1.1 }}>
              {t.projects.heading}<br /><span className="gradient-text">{t.projects.subheading}</span>
            </h2>
            <a href="https://vercel.com/7u4bgrs-projects" target="_blank" rel="noopener noreferrer" style={{ color:"#FF6B6B", fontWeight:700, fontSize:".9rem", textDecoration:"none" }}>{t.projects.all} →</a>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} data-id={`proj-${i}`} className={`fade-up card-hover ${visibleCards[`proj-${i}`]?"visible":""}`} style={{ transitionDelay:`${i*70}ms` }}>
              <div className="project-card-inner" style={{ background:surface, border:`1px solid ${border}`, height:"100%" }}>
                <div style={{ height:130, background:`linear-gradient(135deg,${p.color}22,${p.color}44)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <div style={{ width:70, height:70, borderRadius:"50%", background:p.color+"33", border:`3px solid ${p.color}66`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.8rem" }}>{p.emoji}</div>
                  <div className="project-overlay">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize:".82rem", padding:"10px 20px" }}>{t.projects.live} ↗</a>
                  </div>
                </div>
                <div style={{ padding:"18px 20px 20px" }}>
                  <div style={{ fontSize:".7rem", fontWeight:700, color:p.color, letterSpacing:".06em", textTransform:"uppercase", marginBottom:6 }}>{p.tech}</div>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, marginBottom:8, letterSpacing:"-.02em" }}>{p.name}</h3>
                  <p style={{ fontSize:".86rem", color:textMuted, lineHeight:1.6, marginBottom:14 }}>{p.desc[lang] || p.desc.en}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, color:p.color, fontWeight:700, fontSize:".82rem", textDecoration:"none" }}>{t.projects.live} ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="sec-alt" style={{ background:dark?"#0D0D14":"#F2F4FF" }}>
        <div style={{ marginBottom:48 }}>
          <div className="section-tag"><span>#</span>{t.sections.skills}</div>
          <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:900, letterSpacing:"-.03em" }}>
            {t.skills.heading} <span className="gradient-text">{t.skills.subheading}</span>
          </h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={gi} data-id={`skill-${gi}`} className={`fade-up card-hover ${visibleCards[`skill-${gi}`]?"visible":""}`} style={{ transitionDelay:`${gi*90}ms` }}>
              <div style={{ background:surface, border:`1px solid ${border}`, borderRadius:20, padding:"22px 20px", height:"100%" }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:group.bg, border:`1px solid ${group.color}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>{group.icon}</div>
                  <div>
                    <h3 style={{ fontWeight:800, fontSize:"1rem" }}>{group.title}</h3>
                    <p style={{ fontSize:".72rem", color:group.color, fontWeight:600, marginTop:2 }}>{group.skills.length} {t.skills.technologies}</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {group.skills.map((s, si) => (
                    <span key={si} className="skill-tag" style={{ background:group.bg, color:group.color, border:`1px solid ${group.color}25` }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section id="languages" className="sec">
        <div style={{ marginBottom:48 }}>
          <div className="section-tag"><span>#</span>{t.sections.languages}</div>
          <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:900, letterSpacing:"-.03em" }}>
            {t.languages.heading} <span className="gradient-text">{t.languages.subheading}</span>
          </h2>
        </div>
        <div className="lang-grid">
          {langData.map((l, i) => (
            <div key={i} data-id={`lang-${i}`} className={`fade-up card-hover ${visibleCards[`lang-${i}`]?"visible":""}`} style={{ transitionDelay:`${i*90}ms` }}>
              <div style={{ background:surface, border:`1px solid ${border}`, borderRadius:20, padding:"20px 16px", textAlign:"center" }}>
                <div style={{ fontSize:"2.4rem", marginBottom:8 }}>{l.flag}</div>
                <h3 style={{ fontWeight:800, fontSize:".95rem", marginBottom:4 }}>{l.name[lang] || l.name.en}</h3>
                <p style={{ fontSize:".72rem", color:textMuted, fontWeight:600, marginBottom:12 }}>{l.level[lang] || l.level.en}</p>
                <div style={{ background:dark?"#1A1A25":"#F0F2FF", borderRadius:10, height:6, overflow:"hidden" }}>
                  <div className="lang-bar" style={{ width:visibleCards[`lang-${i}`]?`${l.pct}%`:"0%", background:"linear-gradient(90deg,#FF6B6B,#4ECDC4)" }} />
                </div>
                <p style={{ fontSize:".68rem", color:"#FF6B6B", fontWeight:700, marginTop:6 }}>{l.pct}%</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="sec-alt" style={{ background:dark?"#0D0D14":"#F2F4FF" }}>
        <div className="about-wrap">
          <div>
            <div className="section-tag"><span>01.</span>{t.sections.about}</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:900, letterSpacing:"-.03em", lineHeight:1.1, marginBottom:20 }}>
              {t.about.heading} <span className="gradient-text">{t.about.subheading}</span><br />{t.about.subheading2}
            </h2>
            <p style={{ fontSize:"clamp(.88rem,1.4vw,1.05rem)", lineHeight:1.8, color:textMuted, marginBottom:32 }}>{t.about.body}</p>
            <a href="https://www.linkedin.com/in/elcin-abdullayev-583861229/" target="_blank" rel="noopener noreferrer" className="btn-primary"><span>💼</span>{t.about.readmore}</a>
          </div>
          <div className="tech-wrap">
            {[{icon:"⚛️",label:"React.js",color:"#61DAFB"},{icon:"☕",label:"Spring Boot",color:"#6DB33F"},{icon:"🐳",label:"Docker",color:"#2496ED"},{icon:"☸️",label:"Kubernetes",color:"#326CE5"},{icon:"🌍",label:"Terraform",color:"#7B42BC"},{icon:"⚙️",label:"Jenkins",color:"#D33833"},{icon:"🔴",label:"Redis",color:"#DC382D"},{icon:"📦",label:"Kafka",color:"#4ECDC4"}].map(({icon,label,color},i) => (
              <div key={i} data-id={`tech-${i}`} className={`fade-up card-hover ${visibleCards[`tech-${i}`]?"visible":""}`} style={{ transitionDelay:`${i*55}ms` }}>
                <div style={{ background:surface, border:`1px solid ${border}`, borderRadius:14, padding:"16px 12px", textAlign:"center" }}>
                  <div style={{ fontSize:"1.6rem", marginBottom:5 }}>{icon}</div>
                  <div style={{ fontSize:".72rem", fontWeight:700, color }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="sec">
        <div style={{ maxWidth:660, margin:"0 auto", textAlign:"center" }}>
          <div className="section-tag" style={{ justifyContent:"center", display:"inline-flex" }}><span>#</span>{t.sections.contacts}</div>
          <h2 style={{ fontSize:"clamp(1.8rem,4vw,3.2rem)", fontWeight:900, letterSpacing:"-.03em", lineHeight:1.1, marginBottom:14 }}>
            {t.contact.heading} <span className="gradient-text">{t.contact.subheading}</span>
          </h2>
          <p style={{ fontSize:"clamp(.88rem,1.4vw,1.05rem)", color:textMuted, lineHeight:1.75, marginBottom:36 }}>{t.contact.overview}</p>
          <a href="mailto:abdllyevv@gmail.com" className="card-hover"
            style={{ display:"flex", alignItems:"center", gap:16, background:surface, border:`1px solid ${border}`, borderRadius:20, padding:"18px 24px", maxWidth:420, margin:"0 auto 32px", textDecoration:"none", color:text }}>
            <div style={{ width:46, height:46, borderRadius:13, background:"rgba(255,107,107,.12)", border:"1px solid rgba(255,107,107,.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>✉️</div>
            <div style={{ textAlign:"left", minWidth:0 }}>
              <div style={{ fontSize:".72rem", color:"#FF6B6B", fontWeight:700, textTransform:"uppercase", letterSpacing:".06em", marginBottom:2 }}>{t.contact.message}</div>
              <div style={{ fontSize:".92rem", fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>abdllyevv@gmail.com</div>
            </div>
          </a>
          <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
            {[{icon:"💬",label:"WhatsApp",href:"https://wa.me/+994507487048"},{icon:"💼",label:"LinkedIn",href:"https://www.linkedin.com/in/elcin-abdullayev-583861229/"},{icon:"🐙",label:"GitHub",href:"https://github.com/BlackM1rr0R?tab=repositories"}].map(({icon,label,href}) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card-hover"
                style={{ display:"flex", alignItems:"center", gap:10, background:surface, border:`1px solid ${border}`, borderRadius:50, padding:"11px 20px", textDecoration:"none", color:text, fontWeight:600, fontSize:".88rem" }}>
                <span style={{ fontSize:"1.05rem" }}>{icon}</span><span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding:"32px max(20px,calc(50vw - 600px))", background:dark?"#0A0A0F":"#F2F4FF", borderTop:`1px solid ${border}`, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:30, height:30, borderRadius:9, background:"linear-gradient(135deg,#FF6B6B,#4ECDC4)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:900, fontSize:".85rem" }}>E</div>
          <span style={{ fontWeight:800, fontSize:".95rem", letterSpacing:"-.01em" }}>{t.hero.name}</span>
        </div>
        <p style={{ fontSize:".78rem", color:textMuted, textAlign:"center" }}>{t.footer.copy}</p>
        <div style={{ display:"flex", gap:10 }}>
          {[{href:"https://github.com/BlackM1rr0R",icon:"🐙"},{href:"https://wa.me/+994507487048",icon:"💬"},{href:"https://www.linkedin.com/in/elcin-abdullayev-583861229/",icon:"💼"}].map(({href,icon}) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="card-hover"
              style={{ width:34, height:34, borderRadius:9, background:surfaceAlt, border:`1px solid ${border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", textDecoration:"none" }}>{icon}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}