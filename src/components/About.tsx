// IMPORTS:

import { useTranslation, Trans } from "react-i18next";
import { SiAircanada } from "react-icons/si";

// ABOUT SECTION:

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto scroll-mt-24"
    >
      {/* TITLE: */}
      <div className="mb-8 md:mb-12 text-center md:text-left">
        <h2 className="font-michroma text-2xl sm:text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100">
          {t("aboutTitle")}
          <span className="text-blue-500 dark:text-blue-700">
            {t("aboutMe")}
          </span>
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-700 to-transparent rounded mt-4 mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* PROFILE PHOTO CONTAINER: */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-black dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
              <img
                src="/images/about/profile-photo.jpeg"
                alt="Sua Foto"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ABOUT INFORMATIONS: */}
        <div className="md:col-span-7 space-y-4 md:space-y-6 text-center md:text-left">
          <h3 className="font-aldrich text-lg sm:text-xl md:text-2xl text-zinc-800 dark:text-zinc-200">
            {t("aboutSubtitle")}
          </h3>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 text-justify md:text-left">
            <p>
              <Trans
                i18nKey="aboutBio1"
                components={{
                  1: (
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 italic" />
                  ),
                  3: <span className="italic text-black dark:text-white" />,
                }}
              />
            </p>
            <p>{t("aboutBio2")}</p>
            <p>{t("aboutBio3")}</p>
            <p>{t("aboutBio4")}</p>
          </div>

          {/* INFORMATIONS GRID: */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left text-xs sm:text-sm border-t border-zinc-200 dark:border-zinc-800 md:border-t-0">
            <div className="flex items-center gap-2">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-700 dark:text-zinc-300 truncate">
                <strong>{t("labelLocation")}:</strong> Vancouver, BC
              </span>{" "}
              <SiAircanada className="text-red-600 shrink-0" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>{t("labelTechs")}:</strong> React.js & Node.js
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>{t("labelDatabases")}:</strong> MongoDB, Postgres & Neon
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>{t("labelDesign")}:</strong> UI/UX, Figma & Stitch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
