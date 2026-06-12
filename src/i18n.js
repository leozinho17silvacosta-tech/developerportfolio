import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      // Navbar & Header Links
      home: "Início",
      skills: "Habilidades",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",

      // Main Section
      welcome: "Olá, eu sou o",
      description:
        "Sou um desenvolvedor full-stack estudando na CICCC <1>Cornerstone International Community College of Canada</1>, localizada em Vancouver, Colúmbia Britânica. Meu foco é construir aplicações web modernas, fluidas e visualmente limpas. Combino uma lógica de back-end sólida com interfaces de front-end intuitivas para transformar ideias em experiências digitais eficazes.",
      viewProjects: "Ver Meus Projetos",
      downloadCv: "Baixar CV",
      devTitle: "Desenvolvedor FullStack",

      // About Section
      aboutTitle: "Sobre",
      aboutMe: ".Mim",
      aboutSubtitle:
        "Desenvolvedor Full-Stack focado em criar experiências digitais fluidas e bem estruturadas.",
      aboutBio1:
        "Meu nome é <1>Leonardo Costa</1>. Sou estudante de Desenvolvimento Web na CICCC <br /><3>Cornerstone International Community College of Canada</3>, em Vancouver, BC.",
      aboutBio2:
        "Meu objetivo é me tornar um Desenvolvedor FullStack, trabalhando desde a lógica de back-end até interfaces de usuário responsivas e experiências front-end interativas. Também gosto de usar o Figma e o Stitch para projetar minhas interfaces antes de dar vida a elas através do código.",
      aboutBio3:
        "Fora da programação, sou apaixonado por futebol e jogos competitivos. Passei incontáveis horas jogando jogos como Counter-Strike, Minecraft e Call of Duty, experiências que ajudaram a desenvolver minhas habilidades de resolução de problemas, trabalho em equipe, pensamento estratégico e criatividade, as quais busco incorporar nos meus aplicativos e interfaces de usuário.",
      aboutBio4:
        "Meu objetivo profissional é combinar minhas duas maiores paixões: futebol e tecnologia. Seja através de análise esportiva, plataformas de desempenho, soluções de engajamento de torcedores ou produtos digitais inovadores para a indústria do esporte, pretendo construir tecnologia que crie um impacto significativo no mundo do futebol.",
      labelLocation: "Localização",
      labelTechs: "Tecnologias Favoritas",
      labelDatabases: "Bancos de Dados",
      labelDesign: "Design",

      // About Section
      skillsMe: "Minhas",
      skillsTitle: ".Habilidades",

      // Projects Section
      projectsTitle: "Meus",
      projectsSubtitle: ".Projetos",
      project_1_desc:
        "Uma plataforma completa de busca e catálogo de filmes feita com React, que integra uma API externa e suporta busca dinâmica.",
      project_2_desc:
        "Um e-commerce especializado em chuteiras de alto desempenho. Possui opções de filtragem avançada, gerenciamento de dados e design responsivo.",
      project_3_desc:
        "Uma aplicação full-stack com banco de dados estruturado que permite escolher seus times favoritos e simular cada partida da Copa do Mundo da FIFA 2026 para prever o campeão.",

      // Contact Section
      contactTitle: "Meu",
      contactMe: ".Contato",
      contactSubtitle:
        "Você tem um projeto em mente ou gostaria de discutir sobre tecnologia ou futebol?",
      contactBio:
        "Estou sempre aberto a novas oportunidades, colaboração em projetos open-source ou apenas para conversar sobre desenvolvimento web, jogos e futebol. Sinta-se à vontade para me enviar uma mensagem!",
      labelFirstName: "Primeiro Nome",
      labelLastName: "Sobrenome",
      labelPhone: "Telefone",
      labelMessage: "Mensagem",
      placeholderFirstName: "Seu primeiro nome...",
      placeholderLastName: "Seu sobrenome...",
      placeholderMessage: "Como posso ajudar?",
      btnSendMessage: "Enviar Mensagem",
    },
  },
  en: {
    translation: {
      // Navbar & Header Links
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      about: "About",
      contact: "Contact",

      // Main Section
      welcome: "Hi, I am",
      description:
        "I'm a full-stack developer currently studying at CICCC <1>Cornerstone International Community College of Canada</1>, located in Vancouver, British Columbia. I focus on building modern, fluid, and visually clean web applications. I combine solid back-end logic with intuitive front-end interfaces to turn ideas into effective digital experiences.",
      viewProjects: "View My Projects",
      downloadCv: "Download CV",
      devTitle: "FullStack Developer",

      // About Section
      aboutTitle: "About",
      aboutMe: ".Me",
      aboutSubtitle:
        "Full-Stack Developer focused on creating fluid and well-structured digital experiences.",
      aboutBio1:
        "My name is <1>Leonardo Costa</1>. I'm a Web Development student at CICCC <br /><3>Cornerstone International Community College of Canada</3>, in Vancouver, BC.",
      aboutBio2:
        "My goal is to become a FullStack Developer, working on backend logic to responsive user interfaces and interactive front-end experiences. I also enjoy using Figma and Stitch to design my interfaces before bringing them to life through code.",
      aboutBio3:
        "Outside of programming, I am passionate about soccer and competitive gaming. I've spent countless hours playing games like Counter-Strike, Minecraft and Call of Duty, experiences that helped develop my problem-solving skills, teamwork, strategic thinking, and creativity, which I strive to incorporate into my apps and user interfaces.",
      aboutBio4:
        "My professional goal is to combine my two greatest passions: soccer and technology. Whether through sports analytics, performance platforms, fan engagement solutions, or innovative digital products for the sports industry, I aim to build technology that creates meaningful impact in the world of soccer.",
      labelLocation: "Location",
      labelTechs: "Favorite Technologies",
      labelDatabases: "Databases",
      labelDesign: "Design",

      // Skills Section
      skillsMe: "My",
      skillsTitle: ".Skills",

      // Projects Section
      projectsTitle: "My",
      projectsSubtitle: ".Projects",
      project_1_desc:
        "A comprehensive movie catalog and search platform built with React, which integrates an external API and supports dynamic search.",
      project_2_desc:
        "An e-commerce site specializing in high-performance soccer cleats. It features advanced filtering options, data management, and a responsive design.",
      project_3_desc:
        "A full-stack application with a structured database that lets you pick your favorite teams and simulate every match of the 2026 FIFA World Cup to predict the champion.",

      // Contact Section
      contactTitle: "Contact",
      contactMe: ".Me",
      contactSubtitle:
        "Do you have a project in mind or would you like to discuss technology or soccer?",
      contactBio:
        "I'm always open to new opportunities, collaborating on open-source projects, or just chatting about web development, games, and soccer. Feel free to send me a message!",
      labelFirstName: "First Name",
      labelLastName: "Last Name",
      labelPhone: "Phone Number",
      labelMessage: "Message",
      placeholderFirstName: "Your first name...",
      placeholderLastName: "Your last name...",
      placeholderMessage: "How may i help you?",
      btnSendMessage: "Send Message",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
