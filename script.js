// const spotlight = document.querySelector(".spotlight");

// document.addEventListener("mousemove", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     spotlight.style.background = `
//         radial-gradient(
//             50px circle at ${x}px ${y}px,
//             rgba(255, 255, 255, 0.08),
//             transparent 100%
//         )
//     `;
// });

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const typingElement = document.getElementById("typing-text");

const textos = [
    "Desenvolvimento Web",
    "Desenvolvimento Mobile",
    "Computação em Nuvem",
    "Banco de Dados",
];

// let textos = [...translations.pt.typing];

let i = 0; // índice da frase
let j = 0; // índice da letra
let apagando = false;

function type() {
    let atual = textos[i];

    if (!apagando) {
        typingElement.textContent = atual.slice(0, j++);
        if (j > atual.length) {
            apagando = true;
            setTimeout(type, 1500); // pausa antes de apagar
            return;
        }
    } else {
        typingElement.textContent = atual.slice(0, j--);
        if (j < 0) {
            apagando = false;
            i = (i + 1) % textos.length; // próxima palavra
            j = 0; // *** conserta o bug da última palavra sumindo estranho ***
        }
    }

    setTimeout(type, apagando ? 50 : 100); // velocidade de apagar/digitar
}

type();


const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // remove ao sair
            }
        });
    },
    {
        threshold: 0., // 30% visível para ativar
    }
);

sections.forEach(section => observer.observe(section));

const translations = {
    pt: {
        inicio: "Início",
        sobre: "Sobre",
        habilidades: "Habilidades",
        certificacoes: "Certificações",
        projetos: "Projetos",
        contato: "Contato",
        typing: [
            "Desenvolvimento Web",
            "Desenvolvimento Mobile",
            "Computação em Nuvem",
            "Banco de Dados"
        ],
        slogan_fixo: "Atuação em",
        baixar: "Baixar currículo",
        p_inicio: "Estudante de Análise e Desenvolvimento de Sistemas pelo SENAI, com formação técnica em Desenvolvimento de Sistemas. Desenvolvo aplicações web e mobile com foco em boas práticas, organização de código e construção de soluções eficientes.",
        texto_sobre: `Minha trajetória na tecnologia começou durante o curso técnico em Desenvolvimento de Sistemas no SENAI, concluído em 2025. Foi nesse período que consolidei minha base em programação e participei de diversos projetos práticos envolvendo desenvolvimento web, mobile, integração com APIs e uso de bancos de dados.
        
        Durante essa fase, fui finalista por duas edições do Dev Experience, hackathon de programação promovido pelo SENAI, experiência que ampliou minha visão sobre trabalho em equipe, estruturação de soluções e desenvolvimento orientado a resultados.
        
        Atualmente curso Análise e Desenvolvimento de Sistemas pelo SENAI, aprofundando meus conhecimentos em engenharia de software, desenvolvimento web e modelagem de banco de dados, com foco na construção de aplicações funcionais e escaláveis.
        
        Além da formação acadêmica, busco constante evolução por meio de cursos da Cisco, Amazon AWS, Alura e Hashtag Treinamentos. Tenho interesse especial em desenvolvimento de software e na construção de sistemas bem estruturados, que aliem eficiência, clareza e escalabilidade.`,
        titulo_jornada: "Minha Jornada",
        ver_projetos: "Ver projetos",
        desc_jornada: "Um pouco da minha história, meus interesses e o que venho construindo ultimamente.",
        sobre_mim: "Sobre mim",
        habilidades_h1: "Minhas Habilidades",
        desc_habilidades: "Tecnologias e ferramentas que explorei durante minha formação e que sigo buscando evolução contínua.",
        desc_certificacoes: "Algumas das conquitas e certificados que obtive ao longo da minha trajetória acadêmica.",
        power_bi: "Introdução à Análise de Dados - Microsoft Power BI",
        jornada_python: "Jornada Python da Hashtag",
        vulnerabilidades: "Mitigando Vulnerabilidades em PHP e JavaScript",
        packet_tracer: "Começando com o Cisco Packet Tracer",
        projetos_h1: "Projetos Realizados",
        desc_projetos: "Trabalhos que desenvolvi durante a formação, sempre aplicando qualidade, fundamentos e boas práticas.",
        desc_contato: "Entre em contato comigo através das minhas redes ou por e-mail.",
        info_contato: "Informações de Contato",
        direitos_reservados: "© 2026 Todos os direitos reservados",
        ver_projeto: "Ver projeto",
        ver_repositorio: "Ver repositório",
        tecnologias: "Tecnologias utilizadas:",
        projeto1: "Site oficial do SENAI Dev Experience, competição de programação criada pelo SENAI Taubaté em 2024. Oferece todas as informações do evento e permite a inscrição dos alunos, além de um sistema administrativo completo para os professores.",
        projeto2: "Site de monitoramento industrial em conjunto com um chat-bot, visando melhorar a eficiência energética e a manutenção inteligente das máquinas industriais.",
        projeto3: "Aplicativo de monitoramento industrial em conjunto com um chat-bot, visando melhorar a eficiência energética e a manutenção inteligente das máquinas industriais.",
        projeto4: "Aplicativo inspirado em redes sociais como o Instagram, com uma dinâmica voltada para postagens visuais e conversas diretas.",
        projeto5: "Plataforma web de uma rede social. Permite o cadastro e login de usuários, a publicação de novas postagens e possui um chat interativo entre os usuários.",
        projeto6: "Plataforma destinada a ajudar estudantes a aprimorar seus conhecimentos em História, oferecendo conteúdos e recursos educativos para facilitar a preparação para vestibulares.",
        projeto7: "Ferramenta prática para simplificar o controle financeiro, ajudando na organização das despesas e promovendo o bem-estar financeiro do usuário.",
        projeto8: "Primeiro projeto semestral desenvolvido durante o curso técnico. Site simples que conta sobre a empresa fictícia 'TDA' e promove a venda de um produto.",
        projeto9: "Um dos primeiros projetos do curso técnico em Desenvolvimento de Sistemas no SENAI. Replicação leal do front-end da página inicial e de login do Spotify.",
        titulo_projeto1: "SMI (Sistema de Monitoramento Industrial) - Web",
        titulo_projeto2: "SMI (Sistema de Monitoramento Industrial) - App",
        titulo_projeto3: "História em Foco",
        titulo_projeto4: "Matemática Financeira",
        titulo_projeto5: "TDA (Tecnologia, Desenvolvimento e Análise)",
        titulo_projeto6: "Recriação de telas do Spotify",
    },
    en: {
        inicio: "Home",
        sobre: "About",
        habilidades: "Skills",
        certificacoes: "Certifications",
        projetos: "Projects",
        contato: "Contact",
        typing: [
            "Web Development",
            "Mobile Development",
            "Cloud Computing",
            "Database Management"
        ],
        slogan_fixo: "Working in:",
        baixar: "Download resume",
        p_inicio: "Systems Analysis and Development student at SENAI, with a technical background in Systems Development. I develop web and mobile applications focusing on best practices, clean code, and building efficient solutions.",
        texto_sobre: `My journey in technology began during my Technical degree in Systems Development at SENAI, completed in 2025. During this period, I consolidated my programming foundation and participated in several practical projects involving web and mobile development, API integration, and database management.

During this stage, I was a finalist in two editions of Dev Experience, a programming hackathon promoted by SENAI—an experience that broadened my vision of teamwork, solution structuring, and results-oriented development.

I am currently pursuing a degree in Systems Analysis and Development at SENAI, deepening my knowledge in software architecture, development best practices, and the construction of more organized and scalable applications.

Beyond my formal education, I seek constant evolution through courses from Cisco, Amazon AWS, Alura, and Hashtag Treinamentos. I have a special interest in software development and building well-structured systems that combine efficiency, clarity, and scalability.`,
        titulo_jornada: "My Journey",
        ver_projetos: "View projects",
        desc_jornada: "A bit about my journey, my interests, and what I’ve been building lately.",
        sobre_mim: "About me",
        habilidades_h1: "My Skills",
        desc_habilidades: "Technologies and tools I’ve explored during my training and continue to evolve in.",
        desc_certificacoes: "Some of the achievements and certificates I’ve earned throughout my academic path.",
        power_bi: "Introduction to Data Analysis - Microsoft Power BI",
        jornada_python: "Hashtag Python Journey",
        vulnerabilidades: "Mitigating Vulnerabilities in PHP and JavaScript",
        packet_tracer: "Getting Started with Cisco Packet Tracer",
        projetos_h1: "Completed Projects",
        desc_projetos: "Projects I developed during my studies, always applying quality, fundamentals, and best practices.",
        desc_contato: "Get in touch with me through my social networks or via email.",
        info_contato: "Contact Information",
        direitos_reservados: "© 2026 All rights reserved.",
        ver_projeto: "View project",
        ver_repositorio: "View repository",
        tecnologias: "Built with:",
        projeto1: "Official website for SENAI Dev Experience, a programming competition created by SENAI Taubaté in 2024. It provides all event information, student registration, and a complete administrative system for instructors.",
        projeto2: "Industrial monitoring website integrated with a chatbot, aimed at improving energy efficiency and smart maintenance for industrial machinery.",
        projeto3: "Industrial monitoring app integrated with a chatbot, aimed at improving energy efficiency and smart maintenance for industrial machinery.",
        projeto4: "App inspired by social media like Instagram, featuring a dynamic focused on visual posts and direct messaging.",
        projeto5: "Social media web platform. Allows user registration and login, publishing new posts, and features an interactive chat between users.",
        projeto6: "Platform designed to help students improve their History knowledge, offering educational content and resources to facilitate college entrance exam preparation.",
        projeto7: "Practical tool to simplify financial control, helping with expense organization and promoting the user's financial well-being.",
        projeto8: "First semester project developed during the technical course. A simple website about the fictional company 'TDA' to promote and sell a product.",
        projeto9: "One of the first projects from the Systems Development technical course at SENAI. A pixel-perfect front-end clone of Spotify's home and login pages.",
        titulo_projeto1: "SMI (Industrial Monitoring System) - Web",
        titulo_projeto2: "SMI (Industrial Monitoring System) - App",
        titulo_projeto3: "History in Focus",
        titulo_projeto4: "Financial Mathematics",
        titulo_projeto5: "TDA (Technology, Development, and Analysis)",
        titulo_projeto6: "Spotify UI Clone",
    },
    es: {
        inicio: "Inicio",
        sobre: "Sobre mí",
        habilidades: "Habilidades",
        certificacoes: "Certificaciones",
        projetos: "Proyectos",
        contato: "Contacto",
        typing: [
            "Desarrollo Web",
            "Desarrollo Móvil",
            "Computación en la Nube",
            "Bases de Datos"
        ],
        slogan_fixo: "Experiencia en:",
        baixar: "Descargar Currículum",
        p_inicio: "Estudiante de Análisis y Desarrollo de Sistemas en el SENAI, con formación técnica en Desarrollo de Sistemas. Desarrollo aplicaciones web y móviles con enfoque en buenas prácticas, organización de código y construcción de soluciones eficientes.",
        texto_sobre: `Mi trayectoria en la tecnología comenzó durante el curso técnico en Desarrollo de Sistemas en el SENAI, finalizado en 2025. Fue en ese periodo que consolidé mi base en programación y participé en diversos proyectos prácticos que involucraron desarrollo web, móvil, integración con APIs y uso de bases de datos.

Durante esta etapa, fui finalista en dos ediciones del Dev Experience, un hackathon de programación promovido por el SENAI, experiencia que amplió mi visión sobre el trabajo en equipo, la estructuración de soluciones y el desarrollo orientado a resultados.

Actualmente curso Análisis y Desarrollo de Sistemas en el SENAI, profundizando mis conocimientos en arquitectura de software, buenas prácticas de desarrollo y construcción de aplicaciones más organizadas y escalables.

Además de la formación académica, busco una evolución constante a través de cursos de Cisco, Amazon AWS, Alura y Hashtag Treinamentos. Tengo un interés especial en el desarrollo de software y en la construcción de sistemas bien estructurados que combinen eficiencia, claridad y escalabilidad.`,
        titulo_jornada: "Mi Trayectoria",
        ver_projetos: "Ver proyectos",
        desc_jornada: "Un poco de mi historia, mis intereses y lo que he estado construyendo últimamente.",
        sobre_mim: "Sobre mí",
        habilidades_h1: "Mis Habilidades",
        desc_habilidades: "Tecnologías y herramientas que exploré durante mi formación y en las que busco evolucionar continuamente.",
        desc_certificacoes: "Algunos de los logros y certificados que he obtenido a lo largo de mi trayectoria académica.",
        power_bi: "Introducción al Análisis de Datos - Microsoft Power BI",
        jornada_python: "Jornada Python de Hashtag",
        vulnerabilidades: "Mitigación de Vulnerabilidades en PHP y JavaScript",
        packet_tracer: "Primeros Pasos con Cisco Packet Tracer",
        projetos_h1: "Proyectos Realizados",
        desc_projetos: "Trabajos que desarrollé durante mi formación, aplicando siempre calidad, fundamentos y buenas prácticas.",
        desc_contato: "Ponte en contacto conmigo a través de mis redes o por correo electrónico.",
        info_contato: "Información de Contacto",
        direitos_reservados: "© 2026 Todos los derechos reservados.",
        ver_projeto: "Ver proyecto",
        ver_repositorio: "Ver repositorio",
        tecnologias: "Desarrollado con:",
        projeto1: "Sitio web oficial de SENAI Dev Experience, competencia de programación creada por SENAI Taubaté en 2024. Ofrece toda la información del evento, permite la inscripción de alumnos y cuenta con un sistema administrativo completo para profesores.",
        projeto2: "Sitio web de monitoreo industrial en conjunto con un chatbot, con el objetivo de mejorar la eficiencia energética y el mantenimiento inteligente de maquinaria industrial.",
        projeto3: "Aplicación de monitoreo industrial en conjunto con un chatbot, con el objetivo de mejorar la eficiencia energética y el mantenimiento inteligente de maquinaria industrial.",
        projeto4: "Aplicación inspirada en redes sociales como Instagram, con una dinámica centrada en publicaciones visuales y mensajes directos.",
        projeto5: "Plataforma web de una red social. Permite el registro e inicio de sesión de usuarios, la publicación de nuevos contenidos y posee un chat interactivo entre usuarios.",
        projeto6: "Plataforma destinada a ayudar a estudiantes a mejorar sus conocimientos en Historia, ofreciendo contenidos y recursos educativos para facilitar la preparación para exámenes de ingreso a la universidad.",
        projeto7: "Herramienta práctica para simplificar el control financiero, ayudando en la organización de gastos y promoviendo el bienestar financiero del usuario.",
        projeto8: "Primer proyecto semestral desarrollado durante el curso técnico. Sitio web sencillo sobre la empresa ficticia 'TDA' para promocionar la venta de un producto.",
        projeto9: "Uno de los primeros proyectos del curso técnico en Desarrollo de Sistemas en el SENAI. Replicación fiel del front-end de la página de inicio y de inicio de sesión de Spotify.",
        titulo_projeto1: "SMI (Sistema de Monitoreo Industrial) - Web",
        titulo_projeto2: "SMI (Sistema de Monitoreo Industrial) - App",
        titulo_projeto3: "Historia en Foco",
        titulo_projeto4: "Matemáticas Financieras",
        titulo_projeto5: "TDA (Tecnología, Desarrollo y Análisis)",
        titulo_projeto6: "Recreación de interfaces de Spotify",
    }
};

// const flags = document.querySelectorAll(".flag");

// let currentLang = "pt";

// // Configuração inicial (site começa em português)
// flags.forEach(flag => {
//     if (flag.dataset.lang === "pt") {
//         flag.classList.add("hidden");
//     }
// });

// flags.forEach(flag => {
//     flag.addEventListener("click", () => {
//         const selectedLang = flag.dataset.lang;
//         changeLanguage(selectedLang);
//     });
// });

// function changeLanguage(lang) {
//     currentLang = lang;

//     // Atualiza textos
//     document.querySelectorAll("[data-key]").forEach(element => {
//         const key = element.dataset.key;
//         element.textContent = translations[lang][key];
//     });

//     // Atualiza typing animation
//     textos.length = 0;
//     translations[lang].typing.forEach(word => textos.push(word));

//     // Atualiza bandeiras (esconde ativa)
//     flags.forEach(flag => {
//         flag.classList.remove("hidden");
//         if (flag.dataset.lang === lang) {
//             flag.classList.add("hidden");
//         }
//     });
// }





// const languageSelect = document.getElementById("language-select");

// let currentLang = "pt";

// // Evento de troca
// languageSelect.addEventListener("change", () => {
//     const selectedLang = languageSelect.value;
//     changeLanguage(selectedLang);
// });

// function changeLanguage(lang) {
//     currentLang = lang;

//     // Atualiza textos
//     document.querySelectorAll("[data-key]").forEach(element => {
//         const key = element.dataset.key;
//         element.textContent = translations[lang][key];
//     });

//     // Atualiza typing animation
//     textos.length = 0;
//     translations[lang].typing.forEach(word => textos.push(word));
// }











// const langSelected = document.getElementById("lang-selected");
// const langOptions = document.getElementById("lang-options");
// const langOptionItems = document.querySelectorAll(".lang-option");

// let currentLang = "pt";

// langSelected.addEventListener("click", () => {
//     langOptions.classList.toggle("active");
// });

// langOptionItems.forEach(option => {
//     option.addEventListener("click", () => {
//         const selectedLang = option.dataset.lang;

//         changeLanguage(selectedLang);

//         // Atualiza visual do selecionado
//         const img = option.querySelector("img").src;
//         const text = option.querySelector("span").textContent;

//         langSelected.querySelector("img").src = img;
//         langSelected.querySelector("span").textContent = text;

//         langOptions.classList.remove("active");
//     });
// });

// function changeLanguage(lang) {
//     currentLang = lang;

//     document.querySelectorAll("[data-key]").forEach(element => {
//         const key = element.dataset.key;
//         element.textContent = translations[lang][key];
//     });

//     textos.length = 0;
//     translations[lang].typing.forEach(word => textos.push(word));
// }











const langSelected = document.getElementById("lang-selected");
const langOptions = document.getElementById("lang-options");
const langOptionItems = document.querySelectorAll(".lang-option");

let currentLang = "pt";

// Abrir/fechar dropdown
langSelected.addEventListener("click", (e) => {
    e.stopPropagation();
    langOptions.classList.toggle("active");
    langSelected.classList.toggle("active");
});

// Fechar clicando fora
document.addEventListener("click", (e) => {
    if (!langSelected.contains(e.target) && !langOptions.contains(e.target)) {
        langOptions.classList.remove("active");
        langSelected.classList.remove("active");
    }
});

// Selecionar idioma
langOptionItems.forEach(option => {
    option.addEventListener("click", () => {
        const selectedLang = option.dataset.lang;

        changeLanguage(selectedLang);

        // Atualiza visual
        const img = option.querySelector("img").src;
        const text = option.querySelector("span").textContent;

        document.querySelector(".lang-current img").src = img;
        document.querySelector(".lang-current span").textContent = text;

        langOptions.classList.remove("active");
        langSelected.classList.remove("active");

        // Salva no storage
        localStorage.setItem("lang", selectedLang);
    });
});

function changeLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.dataset.key;
        element.textContent = translations[lang][key];
    });

    textos.length = 0;
    translations[lang].typing.forEach(word => textos.push(word));
    // textos = [...translations[lang].typing];
    // i = 0;
    // j = 0;
    // apagando = false;
}

//////////////////////////////////////////////////
// Carregar idioma salvo
//////////////////////////////////////////////////

const savedLang = localStorage.getItem("lang");

if (savedLang) {
    const savedOption = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);

    if (savedOption) {
        const img = savedOption.querySelector("img").src;
        const text = savedOption.querySelector("span").textContent;

        document.querySelector(".lang-current img").src = img;
        document.querySelector(".lang-current span").textContent = text;

        changeLanguage(savedLang);
    }
}












const themeToggle = document.getElementById("theme-toggle");
const themeOptions = document.querySelector(".theme-options");
const themeColors = document.querySelectorAll(".theme-color");

themeToggle.addEventListener("click", () => {
    themeOptions.classList.toggle("active");
});

themeColors.forEach(color => {
    color.addEventListener("click", () => {
        const theme = color.dataset.theme;

        if (theme === "green") {
            // Remove o tema azul e volta pro padrão (:root)
            document.documentElement.removeAttribute("data-theme");
        } else {
            // Ativa o tema selecionado (ex: blue)
            document.documentElement.setAttribute("data-theme", theme);
        }

        // Fecha o menu depois de selecionar
        themeOptions.classList.remove("active");
    });
});