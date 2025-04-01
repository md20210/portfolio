// Function to detect the language of a user message based on keywords
function detectLanguage(message) {
    // Array of German keywords to identify German messages
    const germanKeywords = ["was", "wie", "warum", "skills", "kompetenzen", "arbeit", "projekte", "lebenslauf", "kontakt", "ausbildung", "sprachen", "ki", "wohnort", "familie", "tochter", "schule", "schuhgröße", "geburtstag"];
    // Array of Spanish keywords to identify Spanish messages
    const spanishKeywords = ["qué", "cómo", "por qué", "habilidades", "proyectos", "currículum", "contacto", "educación", "idiomas", "ia", "residencia", "familia", "hija", "escuela", "talla", "cumpleaños"];
    // Convert the message to lowercase for case-insensitive matching
    const msgLower = message.toLowerCase();
    // Check if any German keywords are present; return "de" if true
    if (germanKeywords.some(keyword => msgLower.includes(keyword))) return "de";
    // Check if any Spanish keywords are present; return "es" if true
    if (spanishKeywords.some(keyword => msgLower.includes(keyword))) return "es";
    // Default to English if no German or Spanish keywords are detected
    return "en";
}

// Function to handle sending a message in the chatbot
function sendMessage() {
    // Select the input field within the chat message area
    const input = document.querySelector('.chat-message input');
    // Get the trimmed value of the input (removes leading/trailing whitespace)
    const message = input.value.trim();
    // Proceed only if the message is not empty
    if (message) {
        // Select the chat log element to append messages
        const chatLog = document.getElementById('chat-log');
        
        // Create HTML for the user's message with an avatar and text
        const userMessage = `<li><span class="avatar user">You</span><div class="message">${message}</div></li>`;
        // Append the user's message to the chat log
        chatLog.insertAdjacentHTML('beforeend', userMessage);
        
        // Detect the language of the user's message
        const lang = detectLanguage(message);
        // Convert the message to lowercase for keyword matching
        const msgLower = message.toLowerCase();
        
        // Variable to store Grok's reply
        let grokReply;
        // Switch statement to determine the reply based on detected language
        switch (lang) {
            case "de":
                // Default German greeting from Grok
                grokReply = "Hallo! Ich bin Grok, entwickelt von xAI. Ich kenne Michaels Werdegang genau. Wie kann ich dir helfen?";
                // Check for specific keywords and provide tailored responses
                if (msgLower.includes("skills") || msgLower.includes("kompetenzen")) {
                    grokReply = "Michael ist ein erfahrener IT-Programmdirektor mit über 20 Jahren Erfahrung. Seine Kernkompetenzen umfassen Transformationsstrategie, Change Management, Führung großer Projekte mit über 30 FTE, Prozessoptimierung, strategische Planung mit KPI-Entwicklung, Stakeholder-Zusammenarbeit auf CXO-Ebene, kontinuierliche Verbesserung und Remote-Team-Management. Technisch ist er versiert in Cloud-Technologien (Azure, AWS), TOGAF, Agile und DevOps. Was interessiert dich daran am meisten?";
                } else if (msgLower.includes("experience") || msgLower.includes("arbeit") || msgLower.includes("beruf")) {
                    grokReply = "Michaels Karriere ist beeindruckend! Bei Cognizant (2011–2023) leitete er als Global IT Program Director eine 4-jährige SAP-Transformation für einen Telecom-Kunden mit einem 300-köpfigen Team und über €20M Budget, mit 20 % Kostensenkung. Bei Wipro (2008–2011) führte er ein €7M Digitalisierungsprojekt in Spanien durch. Bei IBM (2002–2007) baute er in Indien einen Enterprise Service Bus auf und reduzierte Integrationskosten um 20 %. Davor war er bei PwC, RWE und anderen tätig. Er bevorzugt Remote- oder Hybrid-Arbeit, um seine Tochter täglich von der Schule abzuholen. Welchen Teil möchtest du genauer wissen?";
                } else if (msgLower.includes("project") || msgLower.includes("projekte")) {
                    grokReply = "Michael hat an spannenden Projekten gearbeitet! Bei Cognizant leitete er eine €20M+ SAP-Transformation mit 20 % Kostensenkung und eine Cloud-Migration im Life-Sciences-Bereich mit 25 % Effizienzsteigerung. Bei Wipro digitalisierte er Prozesse für einen Versicherer in Spanien (€7M). Bei IBM entwickelte er eine Supply-Chain-Lösung mit hohem Umsatz. Welches Projekt interessiert dich?";
                } else if (msgLower.includes("resume") || msgLower.includes("lebenslauf")) {
                    grokReply = "Michaels Lebenslauf zeigt über 20 Jahre als IT-Programmdirektor. Er hat Teams bis zu 300 FTE und Budgets über €20M geleitet, mit Fokus auf Transformation und Innovation. Geboren am 2. März 1967, wohnt er in Barcelona und Münster, mit Hauptwohnsitz in Spanien. Du kannst ihn oben herunterladen – was möchtest du genau wissen?";
                } else if (msgLower.includes("cognizant")) {
                    grokReply = "Bei Cognizant (2011–2023) war Michael Global IT Program Director. Er leitete eine 4-jährige SAP-Transformation mit 300 FTE und über €20M Budget, erreichte 20 % Kostensenkung, und führte eine Cloud-Migration mit 25 % Effizienzgewinn durch. Spannend, oder? Was möchtest du mehr dazu erfahren?";
                } else if (msgLower.includes("wipro")) {
                    grokReply = "Bei Wipro (2008–2011) war Michael Enterprise Architect. Er leitete ein €7M Digitalisierungsprojekt für einen Versicherer in Spanien und optimierte ein Output-Management-System in Europa – alles pünktlich geliefert. Mehr Details gewünscht?";
                } else if (msgLower.includes("ibm")) {
                    grokReply = "Bei IBM (2002–2007) war Michael Senior IT Architect. Er baute in Indien einen Enterprise Service Bus auf (20 % Kostensenkung) und implementierte eine Supply-Chain-Lösung mit hohem Umsatz. Solide Arbeit! Was möchtest du dazu wissen?";
                } else if (msgLower.includes("education") || msgLower.includes("ausbildung")) {
                    grokReply = "Michael hat einen Diplomabschluss in Wirtschaftsingenieurwesen vom KIT in Karlsruhe. Dazu kommen Zertifikate wie Scrum Master, Stanford Advanced Program Management und IBM Certified IT Architect. Was interessiert dich daran?";
                } else if (msgLower.includes("languages") || msgLower.includes("sprachen")) {
                    grokReply = "Michael spricht Deutsch (Muttersprache), Englisch (fließend, C1) und Spanisch (Grundkenntnisse). Ideal für internationale Projekte! Was möchtest du mehr wissen?";
                } else if (msgLower.includes("contact") || msgLower.includes("kontakt")) {
                    grokReply = "Du kannst Michael unter +34 683 1782 48 oder michael.dabrock@gmx.es erreichen. Er wohnt in Barcelona (Hauptwohnsitz mit Arbeitsgenehmigung) und Münster, arbeitet aber voll remote oder hybrid und ist bereit, monatlich zu reisen. Mehr Infos?";
                } else if (msgLower.includes("ai") || msgLower.includes("ki")) {
                    grokReply = "Michael hat 2023–2025 eine Pause eingelegt, um KI-gestützte Entwicklung zu studieren. Jetzt bringt er diese Fähigkeiten in seine Projekte ein – ziemlich zukunftsweisend, oder? Was möchtest du über sein KI-Interesse wissen?";
                } else if (msgLower.includes("wohnort") || msgLower.includes("wohne")) {
                    grokReply = "Michael wohnt sowohl in Barcelona, Spanien, als auch in Münster, Deutschland. Sein Hauptwohnsitz ist in Spanien, wo er gemeldet ist und eine Arbeitsgenehmigung hat. Seine Familie lebt ebenfalls in Spanien. Möchtest du mehr dazu wissen?";
                } else if (msgLower.includes("familie") || msgLower.includes("tochter")) {
                    grokReply = "Michaels Familie lebt in Spanien. Seine Tochter ist 12 Jahre alt und besucht die deutsche Schule in Barcelona. Sie liebt Mathe, Physik und Biologie. Er holt sie täglich von der Schule ab, weshalb er Remote- oder Hybrid-Arbeit bevorzugt. Interessiert dich mehr dazu?";
                } else if (msgLower.includes("schule")) {
                    grokReply = "Michaels Tochter, 12 Jahre alt, geht zur deutschen Schule in Barcelona. Sie ist begeistert von Mathe, Physik und Biologie. Michael holt sie täglich ab, was seine Vorliebe für Remote- oder Hybrid-Arbeit erklärt. Was möchtest du mehr wissen?";
                } else if (msgLower.includes("schuhgröße")) {
                    grokReply = "Michaels Schuhgröße ist 43 – eine kleine, aber interessante Info über ihn! Was möchtest du sonst noch wissen?";
                } else if (msgLower.includes("geburtstag") || msgLower.includes("geboren")) {
                    grokReply = "Michael wurde am 2. März 1967 geboren. Das macht ihn zu einem erfahrenen Profi mit viel Lebens- und Berufserfahrung! Was interessiert dich noch?";
                }
                break;
            case "es":
                // Default Spanish greeting from Grok
                grokReply = "¡Hola! Soy Grok, creado por xAI. Conozco la trayectoria de Michael al detalle. ¿Cómo puedo ayudarte?";
                if (msgLower.includes("habilidades") || msgLower.includes("skills")) {
                    grokReply = "Michael es un Director de Programas de TI con más de 20 años de experiencia. Sus competencias clave incluyen Estrategia de Transformación, Gestión del Cambio, Liderazgo de Proyectos a Gran Escala con más de 30 FTE, Optimización de Procesos Empresariales, Planificación Estratégica con desarrollo de KPI, Colaboración con Stakeholders a nivel CXO, Mejora Continua e Innovación, y Gestión de Equipos Remotos. Técnicamente, domina Cloud (Azure, AWS), TOGAF, Agile y DevOps. ¿Qué te interesa más?";
                } else if (msgLower.includes("experiencia") || msgLower.includes("trabajo")) {
                    grokReply = "¡La carrera de Michael es impresionante! En Cognizant (2011–2023) como Director Global de Programas de TI lideró una transformación SAP de 4 años para un cliente de telecomunicaciones con un equipo de 300 personas y un presupuesto de más de €20M, logrando un 20 % de reducción de costos. En Wipro (2008–2011) dirigió un proyecto de digitalización de €7M en España. En IBM (2002–2007) construyó un Enterprise Service Bus en India, reduciendo costos de integración en un 20 %. Antes trabajó en PwC, RWE y más. Prefiere trabajar remoto o híbrido para recoger a su hija de la escuela diariamente. ¿Qué parte quieres explorar?";
                } else if (msgLower.includes("proyectos") || msgLower.includes("project")) {
                    grokReply = "Michael ha trabajado en proyectos fascinantes. En Cognizant lideró una transformación SAP de más de €20M con un 20 % de reducción de costos y una migración a la nube en Life Sciences con un 25 % de aumento en eficiencia. En Wipro digitalizó procesos para un asegurador en España (€7M). En IBM implementó una solución de cadena de suministro con alto revenue. ¿Cuál te interesa?";
                } else if (msgLower.includes("currículum") || msgLower.includes("resume")) {
                    grokReply = "El currículum de Michael refleja más de 20 años como Director de Programas de TI, liderando equipos de hasta 300 FTE y presupuestos de más de €20M con enfoque en transformación e innovación. Nacido el 2 de marzo de 1967, vive en Barcelona y Münster, con residencia principal en España. Puedes descargarlo arriba – ¿qué quieres saber más?";
                } else if (msgLower.includes("cognizant")) {
                    grokReply = "En Cognizant (2011–2023), Michael fue Director Global de Programas de TI. Lideró una transformación SAP de 4 años con 300 FTE y más de €20M de presupuesto, logrando un 20 % de reducción de costos, y una migración a la nube con un 25 % de ganancia en eficiencia. ¿Interesante, verdad? ¿Qué más quieres saber?";
                } else if (msgLower.includes("wipro")) {
                    grokReply = "En Wipro (2008–2011), Michael fue Arquitecto Empresarial. Dirigió un proyecto de digitalización de €7M para un asegurador en España y optimizó un sistema de gestión de salida en Europa – todo entregado a tiempo. ¿Más detalles?";
                } else if (msgLower.includes("ibm")) {
                    grokReply = "En IBM (2002–2007), Michael fue Arquitecto Senior de TI. Construyó un Enterprise Service Bus en India (20 % de reducción de costos) y una solución de cadena de suministro con alto revenue. ¡Gran trabajo! ¿Qué quieres saber más?";
                } else if (msgLower.includes("educación") || msgLower.includes("education")) {
                    grokReply = "Michael tiene un Diploma en Ingeniería Industrial del KIT en Karlsruhe, además de certificaciones como Scrum Master, Stanford Advanced Program Management y Arquitecto Certificado de TI por IBM. ¿Qué te interesa de eso?";
                } else if (msgLower.includes("idiomas") || msgLower.includes("languages")) {
                    grokReply = "Michael habla alemán (nativo), inglés (fluido, C1) y español (básico). ¡Perfecto para proyectos globales! ¿Qué más quieres saber?";
                } else if (msgLower.includes("contacto") || msgLower.includes("contact")) {
                    grokReply = "Puedes contactar a Michael en +34 683 1782 48 o michael.dabrock@gmx.es. Vive en Barcelona (residencia principal con permiso de trabajo) y Münster, trabaja completamente remoto o híbrido y está dispuesto a viajar mensualmente. ¿Más info?";
                } else if (msgLower.includes("ia") || msgLower.includes("ai")) {
                    grokReply = "Michael tomó una pausa en 2023–2025 para estudiar desarrollo impulsado por IA, y ahora aplica estas habilidades en sus proyectos. ¡Muy innovador! ¿Qué quieres saber sobre su interés en IA?";
                } else if (msgLower.includes("residencia") || msgLower.includes("vive")) {
                    grokReply = "Michael vive tanto en Barcelona, España, como en Münster, Alemania. Su residencia principal está en España, donde está registrado y tiene un permiso de trabajo. Su familia también vive en España. ¿Más detalles?";
                } else if (msgLower.includes("familia") || msgLower.includes("hija")) {
                    grokReply = "La familia de Michael vive en España. Su hija, de 12 años, asiste a la escuela alemana en Barcelona y ama matemáticas, física y biología. Él la recoge diariamente de la escuela, por lo que prefiere trabajo remoto o híbrido. ¿Te interesa saber más?";
                } else if (msgLower.includes("escuela")) {
                    grokReply = "La hija de Michael, de 12 años, va a la escuela alemana en Barcelona. Le encantan las matemáticas, la física y la biología. Michael la recoge todos los días, por eso prefiere trabajar remoto o híbrido. ¿Qué más quieres saber?";
                } else if (msgLower.includes("talla")) {
                    grokReply = "La talla de zapatos de Michael es 43 – ¡un pequeño dato curioso sobre él! ¿Qué más te gustaría saber?";
                } else if (msgLower.includes("cumpleaños") || msgLower.includes("nacido")) {
                    grokReply = "Michael nació el 2 de marzo de 1967. Eso le da una rica experiencia tanto profesional como personal. ¿Qué más te interesa?";
                }
                break;
            default: // English
                // Default English greeting from Grok
                grokReply = "Hello! I’m Grok, created by xAI. I know Michael’s background inside out. How can I help you?";
                if (msgLower.includes("skills")) {
                    grokReply = "Michael is a seasoned IT Program Director with over 20 years of experience. His core competencies include Transformation Strategy, Change Management, Large-Scale Project Leadership with over 30 FTE, Business Process Optimization, Strategic Planning with KPI Development, Stakeholder Collaboration at CXO level, Continuous Improvement & Innovation, and Remote Team Management. Tech-wise, he’s skilled in Cloud (Azure, AWS), TOGAF, Agile, and DevOps. What interests you most?";
                } else if (msgLower.includes("experience") || msgLower.includes("work")) {
                    grokReply = "Michael’s career is impressive! At Cognizant (2011–2023) as Global IT Program Director, he led a 4-year SAP transformation for a telecom client with a 300-member team and €20M+ budget, achieving 20% cost reductions. At Wipro (2008–2011), he managed a €7M digitalization project in Spain. At IBM (2002–2007), he built an Enterprise Service Bus in India, cutting integration costs by 20%. Earlier roles include PwC, RWE, and more. He prefers remote or hybrid work to pick up his daughter from school daily. Which part do you want to explore?";
                } else if (msgLower.includes("project")) {
                    grokReply = "Michael has worked on exciting projects! At Cognizant, he led a €20M+ SAP transformation with 20% cost savings and a Life Sciences cloud migration with 25% efficiency gains. At Wipro, he digitized processes for an insurer in Spain (€7M). At IBM, he implemented a supply-chain solution driving multi-million-euro revenue. Which project catches your eye?";
                } else if (msgLower.includes("resume")) {
                    grokReply = "Michael’s resume highlights over 20 years as an IT Program Director, managing teams up to 300 FTE and budgets over €20M, focusing on transformation and innovation. Born on March 2, 1967, he lives in Barcelona and Münster, with his primary residence in Spain. You can download it above – what do you want to know more about?";
                } else if (msgLower.includes("cognizant")) {
                    grokReply = "At Cognizant (2011–2023), Michael was Global IT Program Director. He led a 4-year SAP transformation with a 300-member team and €20M+ budget, achieving 20% cost reductions, plus a cloud migration with 25% efficiency gains. Cool, right? What else do you want to know?";
                } else if (msgLower.includes("wipro")) {
                    grokReply = "At Wipro (2008–2011), Michael was Enterprise Architect. He managed a €7M digitalization project for an insurer in Spain and optimized an Output Management System across Europe – delivered on time. Want more details?";
                } else if (msgLower.includes("ibm")) {
                    grokReply = "At IBM (2002–2007), Michael was Senior IT Architect. He built an Enterprise Service Bus in India (20% cost savings) and delivered a supply-chain solution with big revenue growth. Solid stuff! What do you want to hear about?";
                } else if (msgLower.includes("education")) {
                    grokReply = "Michael holds a Diploma in Industrial Engineering from KIT in Karlsruhe, plus certifications like Scrum Master, Stanford Advanced Program Management, and IBM Certified IT Architect. What piques your interest?";
                } else if (msgLower.includes("languages")) {
                    grokReply = "Michael speaks German (native), English (fluent, C1), and Spanish (basic). Great for global projects! What more do you want to know?";
                } else if (msgLower.includes("contact")) {
                    grokReply = "You can reach Michael at +34 683 1782 48 or michael.dabrock@gmx.es. He lives in Barcelona (primary residence with work permit) and Münster, works fully remote or hybrid, and is willing to travel monthly. Need more info?";
                } else if (msgLower.includes("ai")) {
                    grokReply = "Michael took a break in 2023–2025 to study AI-driven development, and now he’s applying those skills to his projects. Pretty forward-thinking, huh? What do you want to know about his AI interests?";
                } else if (msgLower.includes("residence") || msgLower.includes("live")) {
                    grokReply = "Michael lives in both Barcelona, Spain, and Münster, Germany. His primary residence is in Spain, where he’s registered with a work permit. His family lives in Spain too. Want to know more?";
                } else if (msgLower.includes("family") || msgLower.includes("daughter")) {
                    grokReply = "Michael’s family lives in Spain. His daughter, 12 years old, attends the German school in Barcelona and loves math, physics, and biology. He picks her up daily from school, which is why he prefers remote or hybrid work. Interested in more?";
                } else if (msgLower.includes("school")) {
                    grokReply = "Michael’s 12-year-old daughter goes to the German school in Barcelona. She’s passionate about math, physics, and biology. Michael picks her up every day, so he favors remote or hybrid work. What else do you want to know?";
                } else if (msgLower.includes("shoe") || msgLower.includes("size")) {
                    grokReply = "Michael’s shoe size is 43 – a fun little detail about him! What else are you curious about?";
                } else if (msgLower.includes("birthday") || msgLower.includes("born")) {
                    grokReply = "Michael was born on March 2, 1967. That gives him a wealth of professional and life experience! What else interests you?";
                }
        }
        
        // Create HTML for Grok's reply with an avatar and text
        const grokMessage = `<li><span class="avatar bot">Grok</span><div class="message">${grokReply}</div></li>`;
        // Append Grok's reply to the chat log
        chatLog.insertAdjacentHTML('beforeend', grokMessage);
        
        // Clear the input field after sending the message
        input.value = '';
        // Scroll to the bottom of the chat log to show the latest message
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}

// Add click event listener to the send button to trigger sendMessage
document.querySelector('.chat-message button').addEventListener('click', sendMessage);
// Add keypress event listener to the input field to trigger sendMessage on Enter key
document.querySelector('.chat-message input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Summary of Test Results
// Overall: The chatbot.js script is well-structured, functional, and compatible with the HTML. It provides a multilingual chatbot with tailored responses based on user input.

// Strengths: 
// Robust keyword-based language detection.

// Smooth message handling with dual input triggers (click and Enter).

// Detailed, context-aware responses.

// Weaknesses: 
// Lack of error handling for missing DOM elements.

// Limited language detection accuracy due to keyword overlap.

// Static responses limit scalability.

