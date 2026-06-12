// IMPORTS:
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

// FOOTER SECTION:
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-50 text-zinc-600 dark:bg-zinc-950/80 dark:text-zinc-400 transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xs sm:text-sm font-medium tracking-wide text-center sm:text-left font-michroma text-zinc-700 dark:text-zinc-300 leading-relaxed">
          &copy; {currentYear} Leonardo Costa
          <span className="hidden sm:inline"> | </span>
          <br className="sm:hidden" />
          FullStack Developer
        </h1>

        {/* SOCIAL MEDIA: */}
        <div className="flex gap-6 sm:gap-4 text-2xl pt-2 sm:pt-0">
          <a
            href="https://www.linkedin.com/in/leonardo-da-silva-duarte-costa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-1 sm:p-0"
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/leozinho17silvacosta-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 p-1 sm:p-0"
            aria-label="GitHub"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.instagram.com/leozinn04/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 p-1 sm:p-0"
            aria-label="Instagram"
          >
            <CiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
