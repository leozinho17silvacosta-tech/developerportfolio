// IMPORTS:

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation, Trans } from "react-i18next";

// SKILLS SECTION:

const skills = [
  { name: "HTML", img: "/images/skills/html.logo.png", field: "Front-end" },
  { name: "CSS", img: "/images/skills/css.logo.png", field: "Front-end" },
  {
    name: "JavaScript",
    img: "/images/skills/javascript.logo.png",
    field: "Front-end",
  },
  { name: "React", img: "/images/skills/reactjs.logo.png", field: "Front-end" },
  { name: "Node.js", img: "/images/skills/nodejs.logo.png", field: "Back-end" },
  { name: "Vite", img: "/images/skills/vite.logo.png", field: "Front-end" },
  {
    name: "Tailwind CSS",
    img: "/images/skills/tailwindcss.logo.png",
    field: "Front-end",
  },
  { name: "Git Hub", img: "/images/skills/github.logo.png", field: "Tool" },
  {
    name: "Neon Database",
    img: "/images/skills/neon.logo.png",
    field: "Back-end",
  },
  {
    name: "Mongo DB",
    img: "/images/skills/mongodb.logo.png",
    field: "Back-end",
  },
  {
    name: "Bootstrap",
    img: "/images/skills/bootstrap.logo.png",
    field: "Framework",
  },
  {
    name: "Zustand",
    img: "/images/skills/zustand.logo.png",
    field: "Front-end",
  },
  {
    name: "Next JS",
    img: "/images/skills/nextjs.logo.png",
    field: "Framework",
  },
];

const Skills = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="w-full py-16 bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl px-6 md:px-12 flex justify-center mb-12">
        <div className="flex flex-col items-center">
          <h2 className="font-michroma text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100">
            {t("skillsMe")}
            <span className="text-blue-500 dark:text-blue-700">
              {t("skillsTitle")}
            </span>
          </h2>
          <div className="h-1 w-36 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-6"></div>
        </div>
      </div>

      {/* CARROSSEL SKILLS: */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-4 gap-10">
        {/* PREV BUTTON: */}
        <button
          onClick={prev}
          className="z-20 p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous skill"
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* CARROSSEL CONTAINER: */}
        <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden [perspective:1000px]">
          {skills.map((skill, index) => {
            const offset = (index - current + skills.length) % skills.length;
            let adjustedOffset = offset;

            if (offset > skills.length / 2) {
              adjustedOffset = offset - skills.length;
            }

            const isActive = adjustedOffset === 0;

            return (
              <div
                key={index}
                className={`absolute w-[200px] h-[280px] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border shadow-lg [transform-style:preserve-3d]
                  transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "bg-white border-zinc-200 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-2 dark:bg-zinc-900 dark:border-zinc-800"
                      : "bg-zinc-50 border-zinc-100 dark:bg-zinc-900/40 dark:border-zinc-800/50"
                  }`}
                style={{
                  transform: `
                    translateX(${adjustedOffset * 220}px)
                    scale(${isActive ? 1 : 0.75})
                    rotateY(${adjustedOffset * 35}deg)
                  `,
                  opacity: Math.abs(adjustedOffset) > 2 ? 0 : 1,
                  zIndex: 10 - Math.abs(adjustedOffset),
                  filter: isActive ? "none" : "blur(1px) brightness(0.7)",
                }}
              >
                {/* TECH LOGO: */}
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 object-contain drop-shadow-md pointer-events-none"
                />

                {/* CARD CONTENT: */}
                <div className="text-center">
                  <h2 className="text-lg font-bold tracking-wide text-zinc-800 dark:text-zinc-100 mb-2">
                    {skill.name}
                  </h2>

                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-6"></div>

                  {isActive && (
                    <p className="text-xs font-semibold uppercase tracking-wider mt-8 px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/30 animate-fade-in">
                      {skill.field}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* NEXT BUTTON: */}
        <button
          onClick={next}
          className="z-20 p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next skill"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
  );
};

export default Skills;
