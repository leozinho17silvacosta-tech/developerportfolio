// IMPORTS:

import { useState, useRef, useEffect } from "react";
import { FiSend, FiUser, FiZap } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const AiChat = () => {
  const { t, i18n } = useTranslation();

  // Direct path to the image in the public folder
  const aiLogo = "/images/ai/ailogo.png";

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: t("aiChat.welcome"),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Updates the initial message if the language changes during the session
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length > 0 && prev[0].role === "assistant") {
        const updated = [...prev];
        updated[0] = { role: "assistant", content: t("aiChat.welcome") };
        return updated;
      }
      return prev;
    });
  }, [i18n.language, t]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Automatic response logic based on keywords (using i18n)
  const getBotResponse = (userText: string) => {
    const text = userText.toLowerCase();

    if (
      text.includes("quem é você") ||
      text.includes("quem e voce") ||
      text.includes("quem é voce") ||
      text.includes("who are you") ||
      text.includes("seu nome")
    ) {
      return t("aiChat.responseWhoAreYou");
    }
    if (
      text.includes("inspiração") ||
      text.includes("inspiracao") ||
      text.includes("criou essa") ||
      text.includes("criou a ai") ||
      text.includes("por que") ||
      text.includes("perdeu") ||
      text.includes("inspiration") ||
      text.includes("created this")
    ) {
      return t("aiChat.responseInspiration");
    }
    if (
      text.includes("estuda") ||
      text.includes("faculdade") ||
      text.includes("cornerstone") ||
      text.includes("vancouver") ||
      text.includes("study") ||
      text.includes("college") ||
      text.includes("university")
    ) {
      return t("aiChat.responseStudy");
    }
    if (
      text.includes("tecnologia") ||
      text.includes("techs") ||
      text.includes("stack") ||
      text.includes("linguagem") ||
      text.includes("react") ||
      text.includes("node") ||
      text.includes("technology") ||
      text.includes("language")
    ) {
      return t("aiChat.responseTech");
    }
    if (
      text.includes("projeto") ||
      text.includes("costaflix") ||
      text.includes("store") ||
      text.includes("copa") ||
      text.includes("project") ||
      text.includes("world cup")
    ) {
      return t("aiChat.responseProject");
    }
    if (
      text.includes("contato") ||
      text.includes("email") ||
      text.includes("falar") ||
      text.includes("contratar") ||
      text.includes("contact") ||
      text.includes("hire") ||
      text.includes("talk")
    ) {
      return t("aiChat.responseContact");
    }
    if (
      text.includes("idade") ||
      text.includes("anos") ||
      text.includes("age") ||
      text.includes("old")
    ) {
      return t("aiChat.responseAge");
    }
    if (
      text.includes("time") ||
      text.includes("torce") ||
      text.includes("futebol") ||
      text.includes("santos") ||
      text.includes("soccer") ||
      text.includes("team")
    ) {
      if (
        text.includes("tempo livre") ||
        text.includes("free time") ||
        text.includes("faz")
      ) {
        return t("aiChat.responseFreeTime");
      }
      return t("aiChat.responseTeam");
    }
    if (
      text.includes("jogo") ||
      text.includes("joga") ||
      text.includes("counter-strike") ||
      text.includes("cs") ||
      text.includes("videogame") ||
      text.includes("game") ||
      text.includes("play")
    ) {
      if (text.includes("tempo livre") || text.includes("free time")) {
        return t("aiChat.responseFreeTime");
      }
      return t("aiChat.responseGame");
    }
    if (
      text.includes("namorada") ||
      text.includes("larissa") ||
      text.includes("relacionamento") ||
      text.includes("girlfriend")
    ) {
      return t("aiChat.responseGirlfriend");
    }
    if (
      text.includes("trabalho") ||
      text.includes("trabalhou") ||
      text.includes("experiência") ||
      text.includes("empresa") ||
      text.includes("work") ||
      text.includes("job")
    ) {
      return t("aiChat.responseWork");
    }
    if (
      text.includes("minecraft") ||
      text.includes("call of duty") ||
      text.includes("cod") ||
      text.includes("outros jogos")
    ) {
      return t("aiChat.responseOtherGames");
    }
    if (
      text.includes("figma") ||
      text.includes("stitch") ||
      text.includes("design") ||
      text.includes("layout")
    ) {
      return t("aiChat.responseDesignTools");
    }
    if (
      text.includes("motiva") ||
      text.includes("motivação") ||
      text.includes("paixão por codar") ||
      text.includes("motivation")
    ) {
      return t("aiChat.responseMotivation");
    }
    if (
      text.includes("nasceu") ||
      text.includes("cidade") ||
      text.includes("pindamonhangaba") ||
      text.includes("tremembé") ||
      text.includes("onde") ||
      text.includes("born") ||
      text.includes("where")
    ) {
      return t("aiChat.responseBirth");
    }
    if (
      text.includes("tempo livre") ||
      text.includes("lazer") ||
      text.includes("hobby") ||
      text.includes("free time")
    ) {
      return t("aiChat.responseFreeTime");
    }
    if (
      text.includes("sonho") ||
      text.includes("futuro") ||
      text.includes("objetivo") ||
      text.includes("dream") ||
      text.includes("future")
    ) {
      return t("aiChat.responseDream");
    }

    return t("aiChat.responseDefault");
  };

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: messageText }]);
    setLoading(true);

    setTimeout(() => {
      const reply = getBotResponse(messageText);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    handleSendMessage(userMessage);
  };

  // List of translated or dynamic quick suggestions
  const suggestions = [
    {
      labelPt: "Quem é você?",
      labelEn: "Who are you?",
      textPt: "Quem é você?",
      textEn: "Who are you?",
    },
    {
      labelPt: "Qual a inspiração desta IA?",
      labelEn: "What inspired this AI?",
      textPt: "Qual foi a inspiração de criar essa IA?",
      textEn: "What was the inspiration for creating this AI?",
    },
    {
      labelPt: "Onde você estuda?",
      labelEn: "Where do you study?",
      textPt: "Onde o Léo estuda?",
      textEn: "Where does Leo study?",
    },
    {
      labelPt: "Quais são as techs?",
      labelEn: "What are your techs?",
      textPt: "Quais tecnologias ele domina?",
      textEn: "What are your techs?",
    },
  ];

  return (
    <section
      id="ai-chat"
      className="w-full py-8 sm:py-12 px-3 sm:px-6 md:px-12 max-w-6xl mx-auto scroll-mt-24"
    >
      {/* TITLE */}
      <div
        data-aos="fade-down"
        className="mb-8 md:mb-12 flex flex-col items-center justify-center text-center"
      >
        <h2 className="font-michroma text-xl sm:text-3xl md:text-4xl tracking-wider text-zinc-900 dark:text-zinc-100 px-2">
          {t("aiChat.title")}{" "}
          <span className="text-blue-500 dark:text-blue-700">
            {t("aiChat.subtitle")}
          </span>
        </h2>
        <div className="h-1 w-20 sm:w-36 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded mt-3 md:mt-6 mx-auto"></div>
      </div>

      {/* Two-column container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Column: Logo / Visual Identity */}
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
        >
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-lg p-2 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <img
              src={aiLogo}
              alt="Logo Leonardo Costa"
              className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-michroma text-base sm:text-xl text-zinc-900 dark:text-zinc-100 tracking-wider">
              {t("aiChat.heading")}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-sm px-4 sm:px-0">
              {t("aiChat.description")}
            </p>
          </div>
        </div>

        {/* Right Column: The Chat */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="lg:col-span-7 w-full"
        >
          <div className="w-full rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden flex flex-col h-[420px] sm:h-[480px]">
            {/* Chat Header */}
            <div className="px-3 sm:px-4 py-3 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-michroma tracking-wide truncate">
                {t("aiChat.chatHeader")}
              </span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 sm:gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <FiUser size={16} className="sm:w-[18px] sm:h-[18px]" />
                    ) : (
                      <img
                        src={aiLogo}
                        alt="AI Avatar"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div
                    className={`max-w-[82%] sm:max-w-[75%] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl leading-relaxed ${msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none"}`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={aiLogo}
                      alt="AI Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl rounded-tl-none animate-pulse">
                    {t("aiChat.thinking")}
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Question Suggestions */}
            <div className="px-2.5 sm:px-3 py-2 bg-zinc-100/60 dark:bg-zinc-800/40 border-t border-zinc-200 dark:border-zinc-800 flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 shrink-0 pl-1 pr-0.5">
                <FiZap size={13} className="text-blue-500" />
              </div>
              {suggestions.map((item, idx) => {
                const label =
                  i18n.language === "en" ? item.labelEn : item.labelPt;
                const textToSend =
                  i18n.language === "en" ? item.textEn : item.textPt;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(textToSend)}
                    disabled={loading}
                    className="text-[11px] sm:text-xs bg-white dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Send Input */}
            <form
              onSubmit={handleSubmit}
              className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800/80 border-t border-zinc-200 dark:border-zinc-800 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("aiChat.placeholder")}
                className="flex-1 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 shrink-0"
              >
                <FiSend size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChat;
