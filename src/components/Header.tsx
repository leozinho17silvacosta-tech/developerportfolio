// IMPORTS:

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import { IoMdMoon, IoMdMenu, IoMdClose } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../context/theme/ThemeContext";

// HEADER SECTION:

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  const currentLang = i18n.language?.toLowerCase().split("-")[0] || "pt";

  const navLinks = [
    { href: "#", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-zinc-50/90 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
      {/* LOGO */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src="/images/header/logo.png"
          alt="logo"
          className="w-16 h-12 sm:w-20 sm:h-15 object-contain border-r border-black dark:border-zinc-700 pr-3 sm:pr-4 shrink-0"
        />
        <h1 className="text-base sm:text-xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100 italic font-michroma">
          LEO_DEV
        </h1>
      </div>

      {/* DESKTOP NAV LINKS */}
      <nav className="hidden md:block font-michroma">
        <ul className="flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs lg:text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="h-9 sm:h-10 px-2.5 sm:px-3 flex items-center gap-1.5 sm:gap-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all duration-300 shadow-sm cursor-pointer text-xs sm:text-sm font-semibold uppercase"
          >
            <GrLanguage className="text-base sm:text-lg shrink-0" />
            <span>{currentLang}</span>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl
                    ${
                      currentLang === lang.code
                        ? "bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-zinc-50"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-950 dark:hover:text-zinc-50"
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TOGGLE THEME */}
        <button
          className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all duration-300 shadow-sm cursor-pointer"
          onClick={toggleDarkMode}
          aria-label="Toggle Theme"
        >
          <span
            className={`text-xl sm:text-2xl transition-all duration-300 absolute ${darkMode ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
          >
            <CiLight />
          </span>
          <span
            className={`text-lg sm:text-xl transition-all duration-300 absolute ${darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
          >
            <IoMdMoon />
          </span>
        </button>

        {/* BURGUER MENU (MOBILE) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-all duration-300 shadow-sm cursor-pointer text-xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* MOBILE MENU NAV DRAWER (SIDEBAR EFFECT) */}
      <div
        className={`fixed top-[73px] sm:top-[77px] right-0 h-[calc(100vh-73px)] w-64 bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-lg border-l border-zinc-200 dark:border-zinc-800/80 shadow-xl transition-transform duration-300 z-40 md:hidden font-michroma
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col p-6 gap-6 pt-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 block py-2 border-b border-zinc-200/50 dark:border-zinc-800/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 top-[73px] bg-black/10 dark:bg-black/30 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </header>
  );
};

export default Header;
