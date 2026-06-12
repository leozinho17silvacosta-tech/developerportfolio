// IMPORTS:

import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

// PROJECTS SECTION:

const projectsData = [
  {
    id: 1,
    title: "CostaFlix",
    descKey: "project_1_desc",
    image: "/images/projects/CostaFlix.logo.png",
    siteUrl: "https://costaflix-kyat.vercel.app/",
    githubUrl:
      "https://github.com/Cornerstone-CICCC/web-2-midterm-project-leozinho17silvacosta-tech",
  },
  {
    id: 2,
    title: "GD Store",
    descKey: "project_2_desc",
    image: "/images/projects/gdstore-logo.png",
    siteUrl: "https://gdstore-project-lts7.vercel.app/",
    githubUrl:
      "https://github.com/Cornerstone-CICCC/react-js-midterm-project-e-us-guri",
  },
  {
    id: 3,
    title: "FIFA 2026 | WC Simulator",
    descKey: "project_3_desc",
    image: "/images/projects/worldcupsimulator.logo.png",
    siteUrl: "https://fifawc-simulator-r3ib.vercel.app/",
    githubUrl:
      "https://github.com/Cornerstone-CICCC/nodejs-midterm-project-leozinho17silvacosta-tech",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-20 bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 flex justify-center mb-10 md:mb-14">
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="font-michroma text-lg xs:text-2xl sm:text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100 leading-none whitespace-nowrap">
            <span className="text-blue-500 dark:text-blue-400">
              {t("projectsTitle")}
            </span>
            {t("projectsSubtitle")}
          </h2>
          <div className="h-1 w-20 sm:w-36 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-4 md:mt-6"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="hidden md:flex absolute inset-0 bg-zinc-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-semibold flex items-center gap-2 shadow-md transition-all scale-90 group-hover:scale-100 duration-300"
                >
                  <FiExternalLink /> Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 text-lg flex items-center justify-center shadow-md transition-all scale-90 group-hover:scale-100 duration-300"
                  title="View Code"
                >
                  <LuGithub />
                </a>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide text-zinc-800 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed text-justify sm:text-left">
                  {t(project.descKey)}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 md:hidden w-full border-t border-zinc-200/60 dark:border-zinc-800/60">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all"
                >
                  <FiExternalLink /> Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-base flex items-center justify-center shadow-sm active:scale-98 transition-all"
                  title="View Code"
                >
                  <LuGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
