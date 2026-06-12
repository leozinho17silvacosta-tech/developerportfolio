// IMPORTS:

import { useTranslation } from "react-i18next";
import { SiAircanada } from "react-icons/si";
import { SlArrowRightCircle } from "react-icons/sl";

// CONTACT SECTION:

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto scroll-mt-24"
    >
      {/* TITLE CONTAINER: */}
      <div className="w-full flex justify-center md:justify-end mb-8 md:mb-12">
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="font-michroma text-2xl sm:text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100">
            {t("contactTitle")}
            <span className="text-blue-500 dark:text-blue-400">
              {t("contactMe")}
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-4"></div>
        </div>
      </div>

      {/* CARD CONTENT: */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* TEXTS & PERSONAL INFO: */}
        <div className="md:col-span-5 space-y-4 md:space-y-6 text-center md:text-left">
          <h3 className="font-aldrich text-lg sm:text-xl md:text-2xl text-zinc-800 dark:text-zinc-200">
            {t("contactSubtitle")}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans text-justify md:text-left">
            {t("contactBio")}
          </p>

          {/* PERSONAL INFORMATIONS: */}
          <div className="space-y-4 pt-4 font-sans text-xs sm:text-sm border-t border-zinc-200 dark:border-zinc-800 md:border-t-0 flex flex-col items-center md:items-start text-left">
            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full max-w-full group">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-500 dark:text-zinc-400 italic shrink-0">
                Email:
              </span>
              <a
                href="mailto:leonardo.duartecosta@outlook.com"
                className="text-zinc-800 dark:text-zinc-200 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors break-all"
              >
                leonardo.duartecosta@outlook.com
              </a>
            </div>

            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full">
              <span className="text-blue-500 shrink-0">▹</span>
              <span className="text-zinc-500 dark:text-zinc-400 italic shrink-0">
                {t("labelLocation")}:
              </span>
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                Vancouver, BC
              </span>
              <SiAircanada className="text-red-600 shrink-0" />
            </div>
          </div>
        </div>

        {/* FORM: */}
        <div className="md:col-span-7">
          <form className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* FIRST NAME FIELD: */}
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {t("labelFirstName")}
                </label>
                <input
                  type="text"
                  placeholder={t("placeholderFirstName")}
                  className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* LAST NAME FIELD: */}
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {t("labelLastName")}
                </label>
                <input
                  type="text"
                  placeholder={t("placeholderLastName")}
                  className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* EMAIL FIELD: */}
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="yourmail@email.com"
                  className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* PHONE NUMBER FIELD: */}
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {t("labelPhone")}
                </label>
                <input
                  type="text"
                  placeholder="+1 (123) 123-4567"
                  className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* MESSAGE FIELD: */}
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {t("labelMessage")}
              </label>
              <textarea
                rows={4}
                placeholder={t("placeholderMessage")}
                className="w-full px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON (RESPONSIVO): */}
            <div className="pt-2 flex justify-center sm:justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto justify-center px-6 py-3 font-aldrich text-xs sm:text-sm uppercase tracking-wider text-zinc-100 dark:text-zinc-950 bg-zinc-950 dark:bg-zinc-100 border border-zinc-950 dark:border-zinc-100 hover:bg-transparent hover:text-zinc-950 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-all duration-300 rounded cursor-pointer flex items-center gap-2"
              >
                {t("btnSendMessage")}
                <SlArrowRightCircle className="shrink-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
