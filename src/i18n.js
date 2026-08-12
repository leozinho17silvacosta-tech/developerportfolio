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
      ai: "IA",

      // Main Section
      welcome: "Olá, eu sou o",
      description:
        "Sou um desenvolvedor full-stack estudando na CICCC <1>Cornerstone International Community College of Canada</1>, localizada em Vancouver, Colúmbia Britânica. <br><br> Meu foco é construir aplicações web modernas, fluidas e visualmente limpas. Combino uma lógica de back-end sólida com interfaces de front-end intuitivas para transformar ideias em experiências digitais eficazes.",
      viewProjects: "Ver Meus Projetos",
      downloadCv: "Baixar CV",
      devTitle: "Desenvolvedor FullStack",

      // About Section
      aboutTitle: "Sobre",
      aboutMe: ".Mim",
      aboutSubtitle:
        "Desenvolvedor Full-Stack focado em criar experiências digitais fluidas e bem estruturadas.",
      aboutBio1:
        "Meu nome é <1>Leonardo Costa</1>. Sou estudante de Desenvolvimento Web na CICCC <3>Cornerstone International Community College of Canada</3>, em Vancouver, BC.",
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

      // Skills Section
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

      // AiChat Section
      "aiChat.title": "Assistente",
      "aiChat.subtitle": ".IA",
      "aiChat.heading": "Assistente IA",
      "aiChat.description":
        "Converse com Pepita, a IA do portfólio para tirar dúvidas rápidas sobre a carreira, habilidades e projetos.",
      "aiChat.chatHeader": "Pepita IA",
      "aiChat.placeholder": "Pergunte algo sobre o Léo...",
      "aiChat.thinking": "Pensando...",
      "aiChat.welcome":
        "Olá! Sou a Pepita, a assistente virtual do Leonardo Costa. Quer saber mais sobre os projetos dele, tecnologias ou sobre a vida pessoal? Pode perguntar!",
      "aiChat.responseStudy":
        "O Léo estuda Web Development no Cornerstone Community College, em Vancouver, Canadá! A previsão de formatura é agosto de 2027.",
      "aiChat.responseTech":
        "Ele domina o ecossistema Full-Stack: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, entre outras!",
      "aiChat.responseProject":
        "Os principais destaques dele são o CostaFlix, a GD Store e o Simulador da Copa do Mundo 2026. Todos estão na seção de projetos aqui do portfólio!",
      "aiChat.responseContact":
        "Você pode mandar uma mensagem pelo formulário no final da página ou direto no e-mail: leonardo.duartecosta@outlook.com!",
      "aiChat.responseAge": "O Léo tem 22 anos!",
      "aiChat.responseTeam": "O Léo é torcedor apaixonado do Santos! 🤍🖤",
      "aiChat.responseGame": "Ele ama jogar Counter-Strike com os amigos! 🔫",
      "aiChat.responseGirlfriend": "Ele namora a Larissa! ❤️",
      "aiChat.responseBirth":
        "Ele nasceu em Pindamonhangaba-SP, mas morou a vida toda em Tremembé-SP, e hoje mora em Vancouver, Canadá.",
      "aiChat.responseFreeTime":
        "No tempo livre, ele gosta de jogar videogame com os amigos e jogar futebol.",
      "aiChat.responseDream":
        "O grande sonho dele para o futuro é conseguir unir suas duas paixões: trabalhar com tecnologia e futebol!",
      "aiChat.responseWork":
        "Antes de focar 100% em desenvolvimento web, o Léo trabalhou como Assessor de Vendas na Advantage Solutions, Secretário em um escritório de advocacia e foi Estagiário de TI na Cade Guincho Tech!",
      "aiChat.responseOtherGames":
        "Além do Counter-Strike (que é o favorito), ele também curte muito jogar Minecraft e Call of Duty com os amigos!",
      "aiChat.responseDesignTools":
        "Sim! Ele gosta muito de usar o Figma e o Stitch para planejar e desenhar as interfaces antes de começar a codar.",
      "aiChat.responseMotivation":
        "O que mais motiva o Léo é transformar ideias criativas em realidade através de código limpo, criando experiências digitais que realmente funcionam e encantam os usuários.",
      "aiChat.responseWhoAreYou":
        "Eu sou a Pepita, a assistente virtual e melhor amiga do Leonardo!",
      "aiChat.responseTech":
        "Ele domina o ecossistema Full-Stack: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, entre outras!",
      "aiChat.responseInspiration":
        "Depois que a minha cachorrinha partiu, eu quis encontrar uma forma significativa de honrar a memória dela, eternizando sua presença e companhia sempre comigo.",
      "aiChat.responseDefault":
        "Desculpe, ainda não sou capaz de responder essa pergunta. Tente novamente mais tarde ou entre em contato diretamente com o Léo!",

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
      ai: "AI",

      // Main Section
      welcome: "Hi, I am",
      description:
        "I'm a full-stack developer currently studying at CICCC <1>Cornerstone International Community College of Canada</1>, located in Vancouver, British Columbia. <br><br> I focus on building modern, fluid, and visually clean web applications. I combine solid back-end logic with intuitive front-end interfaces to turn ideas into effective digital experiences.",
      viewProjects: "View My Projects",
      downloadCv: "Download CV",
      devTitle: "FullStack Developer",

      // About Section
      aboutTitle: "About",
      aboutMe: ".Me",
      aboutSubtitle:
        "Full-Stack Developer focused on creating fluid and well-structured digital experiences.",
      aboutBio1:
        "My name is <1>Leonardo Costa</1>. I'm a Web Development student at <3>Cornerstone International Community College of Canada</3>, in Vancouver, BC.",
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

      // AiChat Section
      "aiChat.title": "AI",
      "aiChat.subtitle": ".Assistant",
      "aiChat.heading": "AI Assistant",
      "aiChat.description":
        "Chat with Pepita, portfolio's AI to quickly answer questions about career, skills, and projects.",
      "aiChat.chatHeader": "Pepita AI",
      "aiChat.placeholder": "Ask something about Leo...",
      "aiChat.thinking": "Thinking...",
      "aiChat.welcome":
        "Hello! I am Pepita, Leonardo Costa's virtual assistant. Want to know more about his projects, technologies, or personal life? Feel free to ask!",
      "aiChat.responseStudy":
        "Leo studies Web Development at Cornerstone Community College in Vancouver, Canada! Expected graduation is August 2027.",
      "aiChat.responseTech":
        "He masters the Full-Stack ecosystem: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, and more!",
      "aiChat.responseProject":
        "His main highlights are CostaFlix, GD Store, and the 2026 FIFA World Cup Simulator. They are all in the projects section here on the portfolio!",
      "aiChat.responseContact":
        "You can send a message using the form at the bottom of the page or directly via email: leonardo.duartecosta@outlook.com!",
      "aiChat.responseAge": "Leo is 22 years old!",
      "aiChat.responseTeam": "Leo is a passionate supporter of Santos! 🤍🖤",
      "aiChat.responseGame":
        "He loves playing Counter-Strike with his friends! 🔫",
      "aiChat.responseGirlfriend": "He is in a relationship with Larissa! ❤️",
      "aiChat.responseBirth":
        "He was born in Pindamonhangaba-SP, but lived his whole life in Tremembé-SP, and now lives in Vancouver, Canada.",
      "aiChat.responseFreeTime":
        "In his free time, he enjoys playing video games with friends and playing soccer.",
      "aiChat.responseDream":
        "His biggest dream for the future is to work combining his two greatest passions: technology and soccer!",
      "aiChat.responseWork":
        "Before focusing 100% on web development, Leo worked as a Sales Advisor at Advantage Solutions, a Secretary at a law office, and an IT Intern at Cade Guincho Tech!",
      "aiChat.responseOtherGames":
        "Besides Counter-Strike (which is his favorite), he also really enjoys playing Minecraft and Call of Duty with his friends!",
      "aiChat.responseDesignTools":
        "Yes! He loves using Figma and Stitch to plan and design his interfaces before writing any code.",
      "aiChat.responseMotivation":
        "What motivates Leo the most is turning creative ideas into reality through clean code, creating digital experiences that truly work and delight users.",
      "aiChat.responseWhoAreYou":
        "I'm Pepita, Leonardo's virtual assistant and best friend!",
      "aiChat.responseTech":
        "He masters the Full-Stack ecosystem: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, and more!",
      "aiChat.responseInspiration":
        "After my little dog passed away, I wanted to find a meaningful way to honor her memory, immortalizing her presence and companionship by my side forever.",
      "aiChat.responseDefault":
        "Sorry, I am not yet able to answer this question. Please try again later or contact Leo directly!",

      // Contact Section
      contactTitle: "Contact",
      contactName: ".Me",
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
