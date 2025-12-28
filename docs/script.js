const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

if (localStorage.theme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.onclick = () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  themeToggle.textContent = light ? "☀️" : "🌙";
  localStorage.theme = light ? "light" : "dark";
};

const translations = {
  en: {
    menu: { about: "About", focus: "Focus", work: "Work", demo: "Live Demo", framework: "Framework", academic: "Academic" },
    headline: "Engineering AI systems with responsibility, automation and clarity.",
    about: { title: "About Me", text: "I design and build software systems focused on automation, AI-assisted workflows and responsible engineering practices." },
    focus: { title: "Technical Focus", i1: "Responsible AI & governance", i2: "Automation & AI-assisted workflows", i3: "System-level engineering", i4: "Engineering clarity and reliability" },
    work: { title: "Selected Work", project: { title: "AI Ethics & Responsibility Toolkit", desc: "A case study on operationalizing ethical AI principles through software engineering practices." }, repo: "View repository", demo: "Open live demo" },
    framework: { title: "Conceptual Framework",
	"diag-step-design": "Design & Data", 
	"diag-step-risk": "Risk Analysis", 
	"diag-step-mit": "Mitigation", 
	"diag-step-deploy": "Deployment", 
	"diag-step-monitor": "Monitoring" },
	academic: { title: "Professional & Academic Context", text: "My work is grounded in software engineering principles and informed by academic discussions on AI ethics and governance." },
	footer: { text: "© 2025 Augusto Mate — Academic & Professional Portfolio" }
  },
  pt: {
    menu: { about: "Sobre", focus: "Foco Técnico", work: "Trabalho", demo: "Demo", framework: "Framework", academic: "Acadêmico" },
    headline: "Engenharia de sistemas de IA com responsabilidade, automação e clareza.",
    about: { title: "Sobre Mim", text: "Projeto e desenvolvo sistemas de software com foco em automação, fluxos assistidos por IA e práticas responsáveis de engenharia." },
    focus: { title: "Foco Técnico", i1: "IA responsável e governança", i2: "Automação e fluxos assistidos por IA", i3: "Engenharia de sistemas", i4: "Clareza e confiabilidade técnica" },
    work: { title: "Trabalho Selecionado", project: { title: "Toolkit de Ética e Responsabilidade em IA", desc: "Estudo de caso sobre a operacionalização de princípios éticos em IA através da engenharia de software." }, repo: "Ver repositório", demo: "Abrir demo" },
    framework: { title: "Diagrama Conceitual",
	"diag-step-design": "Design e Dados", 
	"diag-step-risk": "Análise de Risco", 
	"diag-step-mit": "Mitigação", 
	"diag-step-deploy": "Implantação", 
	"diag-step-monitor": "Monitoramento" },
    academic: { title: "Contexto Profissional e Acadêmico", text: "Meu trabalho é fundamentado em princípios de engenharia de software e debates acadêmicos sobre ética e governança em IA." },
	footer: { text: "© 2025 Augusto Mate — Portfólio Acadêmico e Profissional" }
  }
};

let lang = localStorage.lang || "en";

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.dataset.i18n.split(".");
    let value = translations[lang];
    path.forEach(p => value = value[p]);
    el.textContent = value;
  });
  langToggle.textContent = lang === "en" ? "PT" : "EN";
}

applyLang();

langToggle.onclick = () => {
  lang = lang === "en" ? "pt" : "en";
  localStorage.lang = lang;
  applyLang();
};
