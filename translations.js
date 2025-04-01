// translations.js
// Define a global variable to track the current language, defaulting to English
let currentLang = "en";

// Function to update the language (placeholder for translation logic)
function updateLanguage() {
    // This function would typically update text content using translations.js data
    // For now, it just triggers the resume link update
    updateResumeLink();
}

// Function to update resume links based on the current language
function updateResumeLink() {
    // Select the resume link in the hero section
    const resumeLink = document.getElementById("resume-link");
    // Select the resume link in the chatbot section
    const chatbotResumeLink = document.getElementById("chatbot-resume-link");
    // Determine the correct resume file based on the current language
    const href = currentLang === "de" ? "./Resume Deu.pdf" : "./Resume Eng.pdf";
    // Update the href attribute if the element exists
    if (resumeLink) resumeLink.href = href;
    if (chatbotResumeLink) chatbotResumeLink.href = href;
}

// Function to handle language switching when a button is clicked
function handleLanguageSwitch() {
    // Find all language switcher buttons
    document.querySelectorAll(".language-switcher button").forEach(button => {
        // Add a click event listener to each button
        button.addEventListener("click", () => {
            // Update currentLang to the clicked button's data-lang attribute
            currentLang = button.getAttribute("data-lang");
            // Call updateLanguage to refresh the page content
            updateLanguage();
            // Optional: Dispatch a custom event for other scripts to react
            document.dispatchEvent(new Event("languageChanged"));
        });
    });
}

// Initialize the language switcher when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set the initial resume links based on the default language
    updateResumeLink();
    // Set up the language switcher buttons
    handleLanguageSwitch();
});

// Optional: Listen for external language change events (e.g., from other scripts)
document.addEventListener("languageChanged", updateResumeLink);

console.log("translations.js geladen");
const translations = {
    en: {
        "title": "Portfolio PMO",
        "logo-text": "Technical Projects",
        "nav-home": "Home",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-chatbot": "Chatbot", 
        "nav-contact": "Contact Me",
        "hero-hi": "Hi I'm",
        "hero-intro": "Project Manager and IT Architect in Spain and I'm interested in AI topics since a longer time.",
        "hero-ai": "So I also add things like ChatGPT into my projects these days.",
        "hero-resume": "View Resume",
        "hero-contact": "Contact Me",
        "skills-about": "About Me",
        "skills-title": "Skills",
        "skills-management": "Management",
        "skills-pmo": "PMO",
        "skills-portfolio": "Project Portfolio Management",
        "skills-project": "Project Management",
        "skills-leadership": "Team Leadership",
        "skills-architecture": "Enterprise Architecture",
        "skills-transformation": "Digital Transformation",
        "skills-cloud": "Cloud Migrations",
        "skills-agile": "Agile Methodologies",
        "skills-risk": "Risk and Stakeholder Management",
        "skills-certifications": "Certifications",
        "skills-about-me": "A bit about me",
        "skills-bio": "Hi I'm Michael Dabrock, and I'm interested in AI topics which is why I also add things like ChatGPT and Grok into my projects these days!",
        "skills-current": "I'm currently working on a project that uses Azure AI to create a chatbot that can help answer questions about me.",
        "work-recent": "Recent",
        "work-title": "Work Experience",
        "work-cognizant-caption": "Cognizant Program Manager",
        "work-cognizant-title": "Program Manager",
        "work-cognizant-desc": "Managing different programs for different international customers in the telecommunication, manufacturing, and pharma industry.",
        "work-wipro-caption": "Wipro Enterprise Architect",
        "work-wipro-title": "Enterprise Architect",
        "work-wipro-desc": "Managing different programs for different international customers in Spain and South Africa.",
        "work-ibm-caption": "IBM Senior Architect",
        "work-ibm-title": "Senior Architect",
        "work-ibm-desc": "Managing different programs for different international customers in Switzerland and India.",
        "projects-previous": "Previous",
        "projects-title": "Projects",
        "project-1": "Setup an Integration Team in India",
        "project-2": "Developing IT Application for supplying 10k Stores of a Postal Service Provider",
        "project-3": "Creating a SOA Architecture for a Telecommunication Company",
        "project-4": "Setup and leading a global Team of a Cloud Migration for a Pharma Company",
        "project-5": "Development of a Rolling Control System for a Tube Manufacturer",
        "project-6": "Setup and leading a large-scale Team of an ERP Rollout for a Telecommunication Company",
        "chatbot-talk": "Talk to me",
        "chatbot-title": "Chatbot",
        "chatbot-header": "Grok AI Chatbot",
        "chatbot-info": "I've integrated Grok from xAI here. It knows my skills, experience, and resume. Ask it anything, and it’ll give you maximally helpful answers!",
        "chatbot-opportunity": "You can also download my resume. I’m currently looking for new opportunities – if you have a project I’d fit, let me know!",
        "chatbot-resume": "Download Resume",
        "chatbot-welcome": "Hello! I’m Grok, created by xAI. I know Michael’s portfolio inside out. How can I help you?",
        "chatbot-placeholder": "Hey Grok, what are Michael’s best skills?",
        "chatbot-send": "Send"
    },
    de: {
        "title": "Portfolio PMO",
        "logo-text": "Technische Projekte",
        "nav-home": "Startseite",
        "nav-skills": "Fähigkeiten",
        "nav-projects": "Projekte",
        "nav-chatbot": "Chatbot", 
        "nav-contact": "Kontaktiere mich",
        "hero-hi": "Hallo, ich bin",
        "hero-intro": "Projektmanager und IT-Architekt in Spanien und interessiere mich seit langer Zeit für KI-Themen.",
        "hero-ai": "Deshalb integriere ich heutzutage auch Dinge wie ChatGPT in meine Projekte.",
        "hero-resume": "Lebenslauf ansehen",
        "hero-contact": "Kontaktiere mich",
        "skills-about": "Über mich",
        "skills-title": "Fähigkeiten",
        "skills-management": "Management",
        "skills-pmo": "PMO",
        "skills-portfolio": "Projektportfoliomanagement",
        "skills-project": "Projektmanagement",
        "skills-leadership": "Teamführung",
        "skills-architecture": "Unternehmensarchitektur",
        "skills-transformation": "Digitale Transformation",
        "skills-cloud": "Cloud-Migrationen",
        "skills-agile": "Agile Methodologien",
        "skills-risk": "Risiko- und Stakeholder-Management",
        "skills-certifications": "Zertifikate",
        "skills-about-me": "Ein wenig über mich",
        "skills-bio": "Hallo, ich bin Michael Dabrock, und ich interessiere mich für KI-Themen, weshalb ich heutzutage Dinge wie ChatGPT und Grok in meine Projekte einbaue!",
        "skills-current": "Ich arbeite derzeit an einem Projekt, das Azure AI nutzt, um einen Chatbot zu erstellen, der Fragen über mich beantworten kann.",
        "work-recent": "Jüngste",
        "work-title": "Berufserfahrung",
        "work-cognizant-caption": "Cognizant Programm-Manager",
        "work-cognizant-title": "Programm-Manager",
        "work-cognizant-desc": "Leitung verschiedener Programme für internationale Kunden in der Telekommunikations-, Fertigungs- und Pharma-Industrie.",
        "work-wipro-caption": "Wipro Unternehmensarchitekt",
        "work-wipro-title": "Unternehmensarchitekt",
        "work-wipro-desc": "Leitung verschiedener Programme für internationale Kunden in Spanien und Südafrika.",
        "work-ibm-caption": "IBM Senior Architekt",
        "work-ibm-title": "Senior Architekt",
        "work-ibm-desc": "Leitung verschiedener Programme für internationale Kunden in der Schweiz und Indien.",
        "projects-previous": "Frühere",
        "projects-title": "Projekte",
        "project-1": "Aufbau eines Integrationsteams in Indien",
        "project-2": "Entwicklung einer IT-Anwendung zur Versorgung von 10.000 Geschäften eines Postdienstleisters",
        "project-3": "Erstellung einer SOA-Architektur für ein Telekommunikationsunternehmen",
        "project-4": "Aufbau und Leitung eines globalen Teams für eine Cloud-Migration bei einem Pharmaunternehmen",
        "project-5": "Entwicklung eines Walzsteuerungssystems für einen Rohrhersteller",
        "project-6": "Aufbau und Leitung eines großflächigen Teams für einen ERP-Rollout bei einem Telekommunikationsunternehmen",
        "chatbot-talk": "Sprich mit mir",
        "chatbot-title": "Chatbot",
        "chatbot-header": "Grok KI-Chatbot",
        "chatbot-info": "Ich habe Grok von xAI hier integriert. Er kennt meine Fähigkeiten, Erfahrungen und meinen Lebenslauf. Frag ihn anything, und er wird dir maximal hilfreiche Antworten geben!",
        "chatbot-opportunity": "Du kannst auch meinen Lebenslauf herunterladen. Ich suche aktuell nach neuen Möglichkeiten – wenn du ein passendes Projekt hast, lass es mich wissen!",
        "chatbot-resume": "Lebenslauf herunterladen",
        "chatbot-welcome": "Hallo! Ich bin Grok, entwickelt von xAI. Ich kenne Michaels Portfolio in- und auswendig. Wie kann ich dir helfen?",
        "chatbot-placeholder": "Hey Grok, was sind Michaels beste Fähigkeiten?",
        "chatbot-send": "Senden"
    },
    es: {
        "title": "Portfolio PMO",
        "logo-text": "Proyectos Técnicos",
        "nav-home": "Inicio",
        "nav-skills": "Habilidades",
        "nav-projects": "Proyectos",
        "nav-chatbot": "Chatbot", 
        "nav-contact": "Contáctame",
        "hero-hi": "Hola, soy",
        "hero-intro": "Gerente de proyectos y arquitecto de TI en España y estoy interesado en temas de IA desde hace mucho tiempo.",
        "hero-ai": "Por eso también integro cosas como ChatGPT en mis proyectos hoy en día.",
        "hero-resume": "Ver currículum",
        "hero-contact": "Contáctame",
        "skills-about": "Sobre mí",
        "skills-title": "Habilidades",
        "skills-management": "Gestión",
        "skills-pmo": "PMO",
        "skills-portfolio": "Gestión de cartera de proyectos",
        "skills-project": "Gestión de proyectos",
        "skills-leadership": "Liderazgo de equipo",
        "skills-architecture": "Arquitectura empresarial",
        "skills-transformation": "Transformación digital",
        "skills-cloud": "Migraciones a la nube",
        "skills-agile": "Metodologías ágiles",
        "skills-risk": "Gestión de riesgos y partes interesadas",
        "skills-certifications": "Certificaciones",
        "skills-about-me": "Un poco sobre mí",
        "skills-bio": "¡Hola, soy Michael Dabrock, y estoy interesado en temas de IA, por eso también integro cosas como ChatGPT e Grok en mis proyectos hoy en día!",
        "skills-current": "Actualmente estoy trabajando en un proyecto que usa Azure AI para crear un chatbot que pueda responder preguntas sobre mí.",
        "work-recent": "Reciente",
        "work-title": "Experiencia Laboral",
        "work-cognizant-caption": "Gerente de Programa Cognizant",
        "work-cognizant-title": "Gerente de Programa",
        "work-cognizant-desc": "Gestión de diferentes programas para clientes internacionales en las industrias de telecomunicaciones, manufactura y farmacéutica.",
        "work-wipro-caption": "Arquitecto Empresarial Wipro",
        "work-wipro-title": "Arquitecto Empresarial",
        "work-wipro-desc": "Gestión de diferentes programas para clientes internacionales en España y Sudáfrica.",
        "work-ibm-caption": "Arquitecto Senior IBM",
        "work-ibm-title": "Arquitecto Senior",
        "work-ibm-desc": "Gestión de diferentes programas para clientes internacionales en Suiza e India.",
        "projects-previous": "Anteriores",
        "projects-title": "Proyectos",
        "project-1": "Creación de un equipo de integración en India",
        "project-2": "Desarrollo de una aplicación de TI para abastecer 10.000 tiendas de un proveedor de servicios postales",
        "project-3": "Creación de una arquitectura SOA para una empresa de telecomunicaciones",
        "project-4": "Creación y liderazgo de un equipo global para una migración a la nube en una empresa farmacéutica",
        "project-5": "Desarrollo de un sistema de control de laminación para un fabricante de tubos",
        "project-6": "Creación y liderazgo de un equipo a gran escala para un despliegue de ERP en una empresa de telecomunicaciones",
        "chatbot-talk": "Habla conmigo",
        "chatbot-title": "Chatbot",
        "chatbot-header": "Chatbot Grok AI",
        "chatbot-info": "He integrado Grok de xAI aquí. Conoce mis habilidades, experiencias y currículum. ¡Pregúntale lo que sea y te dará respuestas lo más útiles posible!",
        "chatbot-opportunity": "También puedes descargar mi currículum. Estoy buscando nuevas oportunidades – ¡si tienes un proyecto en el que encajo, házmelo saber!",
        "chatbot-resume": "Descargar currículum",
        "chatbot-welcome": "¡Hola! Soy Grok, creado por xAI. Conozco el portafolio de Michael al dedillo. ¿Cómo puedo ayudarte?",
        "chatbot-placeholder": "Hey Grok, ¿cuáles son las mejores habilidades de Michael?",
        "chatbot-send": "Enviar"
    }
};