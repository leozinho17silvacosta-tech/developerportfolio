// IMPORTS:

import { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";

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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const { t } = useTranslation();

  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="w-full py-12 md:py-16 bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        data-aos="fade-down"
        className="w-full max-w-6xl px-4 sm:px-6 md:px-12 flex justify-center mb-8 md:mb-12"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="font-michroma text-2xl sm:text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100">
            {t("skillsMe")}{" "}
            <span className="text-blue-500 dark:text-blue-700">
              {t("skillsTitle")}
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-36 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-4 md:mt-6"></div>
        </div>
      </div>

      {/* CARROSSEL SKILLS: */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-2 sm:px-4 gap-2 sm:gap-6 md:gap-10"
      >
        {/* PREV BUTTON: */}
        <button
          onClick={prev}
          className="z-20 p-2 sm:p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer shrink-0"
          aria-label="Previous skill"
        >
          <IoIosArrowBack size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* CARROSSEL CONTAINER WITH MOBILE SWIPE: */}
        <div
          className="relative w-full h-[300px] sm:h-[350px] flex items-center justify-center overflow-hidden [perspective:1000px] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
                className={`absolute w-[150px] sm:w-[200px] h-[230px] sm:h-[280px] rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 border shadow-lg [transform-style:preserve-3d]
                  transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "bg-white border-zinc-200 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-2 dark:bg-zinc-900 dark:border-zinc-800"
                      : "bg-zinc-50 border-zinc-100 dark:bg-zinc-900/40 dark:border-zinc-800/50"
                  }`}
                style={{
                  transform: `
                    translateX(${adjustedOffset * (window.innerWidth < 640 ? 110 : 220)}px)
                    scale(${isActive ? 1 : 0.75})
                    rotateY(${adjustedOffset * (window.innerWidth < 640 ? 25 : 35)}deg)
                  `,
                  opacity:
                    Math.abs(adjustedOffset) > (window.innerWidth < 640 ? 1 : 2)
                      ? 0
                      : 1,
                  zIndex: 10 - Math.abs(adjustedOffset),
                  filter: isActive ? "none" : "blur(1px) brightness(0.7)",
                }}
              >
                {/* TECH LOGO: */}
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-md pointer-events-none"
                />

                {/* CARD CONTENT: */}
                <div className="text-center w-full">
                  <h2 className="text-sm sm:text-lg font-bold tracking-wide text-zinc-800 dark:text-zinc-100 mb-1 sm:mb-2 truncate">
                    {skill.name}
                  </h2>

                  <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-3 sm:mt-6 mx-auto"></div>

                  {isActive && (
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-4 sm:mt-8 px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/30 animate-fade-in inline-block">
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
          className="z-20 p-2 sm:p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer shrink-0"
          aria-label="Next skill"
        >
          <IoIosArrowForward size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Skills;
