import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/BtnBackToTop";

const App = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-between transition-colors duration-300
      /* ☀️ Light Mode: Azul claro nas pontas e Branco puro concentrado no meio, fixo na tela */
      bg-gradient-to-b from-blue-200 via-white to-blue-200 text-zinc-900 bg-fixed
      
      /* 🌙 Dark Mode: Preto absoluto nas pontas com um reflexo azul ultra escuro e sutil no centro */
      dark:bg-gradient-to-b dark:from-zinc-950 dark:via-blue-950/25 dark:to-zinc-950 dark:text-zinc-100 dark:bg-fixed"
    >
      {/* Menu de Navegação Superior */}
      <Header />

      {/* Corpo do Site: O pt-24 evita que o Header fixo cubra o topo do conteúdo */}
      <main className="w-full pt-24 flex-grow">
        <Main />

        {/* Separador Horizontal com Gradiente Suave */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500/20 to-transparent my-10"></div>
        <About />

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500/20 to-transparent my-10"></div>
        <Skills />

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500/20 to-transparent my-10"></div>
        <Projects />

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500/20 to-transparent my-10"></div>
        <Contact />
      </main>

      {/* Rodapé do Site */}
      <Footer />

      {/* Botão Flutuante de Voltar ao Topo */}
      <ScrollToTop />
    </div>
  );
};

export default App;
