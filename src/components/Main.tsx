// IMPORTS:

import { useTranslation, Trans } from "react-i18next";

// MAIN SECTION:

const Main = () => {
  const { t } = useTranslation();

  return (
    <section
      id="main"
      className="w-full min-h-[calc(100vh-76px)] max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-300 mt-[73px] sm:mt-[77px]"
    >
      {/* INTRODUCION: */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-michroma leading-tight">
          {t("welcome")} <br />
          <span className="block md:inline italic text-blue-700 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] cursor-pointer mt-10 md:mt-0">
            Leonardo Costa
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed sm:leading-loose mt-2 md:mt-4 font-poppins tracking-wide text-justify md:text-left">
          <Trans
            i18nKey="description"
            components={{
              1: <span className="italic text-black dark:text-white" />,
            }}
          />
        </p>

        {/* BUTTONS: */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-4 md:mt-2">
          <button
            onClick={() => (window.location.href = "#projects")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm sm:text-base text-center"
          >
            {t("viewProjects")}
          </button>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv_leonardocosta.pdf";
              link.download = "Leonardo_Costa_CV.pdf";
              link.click();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm sm:text-base text-center"
          >
            {t("downloadCv")}
          </button>
        </div>
      </div>

      {/* INTRODUCTION PHOTO: */}
      <div className="flex flex-col items-center gap-3 md:gap-4 shrink-0">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-700 dark:to-zinc-900 opacity-30 blur-md group-hover:opacity-50 transition duration-300"></div>

          <img
            src="/images/main/photo-develop.jpg"
            alt="Leonardo Costa"
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold tracking-widest text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-oregano">
            {t("devTitle")}
          </h2>
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-700 to-transparent rounded"></div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-blue-700 to-transparent rounded"></div>
            <div className="h-0.5 w-4 bg-gradient-to-r from-transparent via-blue-700 to-transparent rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
