import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Filter() {
  const { industry } = useParams();
  const navigate = useNavigate();

  const themes = useMemo(() => [
    { p: "#020617", s: "#0f172a", a: "#818cf8", textG: ["#ffffff", "#818cf8"] }, 
    { p: "#052e16", s: "#064e3b", a: "#4ade80", textG: ["#ffffff", "#4ade80"] }, 
    { p: "#450a0a", s: "#7c2d12", a: "#fb7185", textG: ["#ffffff", "#fb7185"] }, 
    { p: "#1e1b4b", s: "#312e81", a: "#c084fc", textG: ["#ffffff", "#c084fc"] }, 
  ], []);

  const [themeIdx, setThemeIdx] = useState(0);
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState(""); 
  const [rating, setRating] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const years = [2021, 2022, 2023, 2024, 2025];

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIdx((prev) => (prev + 1) % themes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [themes.length]);

  const currentTheme = themes[themeIdx] || themes[0];

  return (
    <motion.div 
      animate={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.p} 0%, ${currentTheme.s} 100%)` }}
      transition={{ duration: 2 }}
      className="min-h-screen text-white flex flex-col items-center py-12 px-6 relative overflow-hidden font-sans select-none"
    >
      {/* --- LAYERED PLASMA BACKGROUND GLOW --- */}
      <motion.div 
        animate={{ backgroundColor: currentTheme.a }}
        className="absolute inset-0 opacity-30 blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], x: [-100, 100, -100], y: [-50, 50, -50], backgroundColor: currentTheme.a }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-50 pointer-events-none z-0"
      />

      {/* --- TITLE SECTION --- */}
      <div className="relative z-10 mb-2 w-full flex justify-center">
        <svg viewBox="0 0 800 120" className="w-full max-w-4xl overflow-visible">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentTheme.textG[0]} />
              <stop offset="100%" stopColor={currentTheme.textG[1]} />
            </linearGradient>
          </defs>
          <text
            x="50%" y="70%" textAnchor="middle"
            className="font-black italic uppercase tracking-tighter"
            style={{ fontSize: "100px", fill: "url(#textGradient)", filter: `drop-shadow(0 0 20px ${currentTheme.a}88)` }}
          >
            {industry || "CINEMA"}
          </text>
        </svg>
      </div>

      <p className="relative z-10 text-[11px] font-bold tracking-[0.8em] uppercase mb-16 text-white/70 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Choose the preferences you like
      </p>

      {/* --- FORM LAYOUT --- */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          {/* Timeline Dropdown */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] ml-2">Timeline</label>
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: `0 0 40px ${currentTheme.a}88`, borderColor: currentTheme.a }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-black/50 backdrop-blur-3xl border border-white/10 p-5 rounded-2xl flex justify-between items-center cursor-pointer transition-all"
                animate={{ borderColor: isOpen ? currentTheme.a : "rgba(255,255,255,0.1)" }}
              >
                <span className={year ? "text-white font-bold" : "text-white/30"}>{year || "Select Year"}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-xs opacity-50">▼</motion.span>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 5,
                      borderColor: currentTheme.a,
                      boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${currentTheme.a}44`
                    }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute w-full mt-2 bg-black/80 backdrop-blur-3xl border rounded-2xl overflow-hidden z-50"
                  >
                    {years.map((y) => (
                      <motion.div 
                        key={y} 
                        onClick={() => { setYear(y); setIsOpen(false); }} 
                        whileHover={{ 
                          backgroundColor: `${currentTheme.a}33`,
                          color: currentTheme.a,
                          paddingLeft: "2rem"
                        }}
                        className="p-4 cursor-pointer text-center border-b border-white/5 last:border-0 font-bold transition-all text-white/80"
                      >
                        {y}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Genre Input with Enhanced Glow */}
          <div className="space-y-3 relative">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] ml-2">Genre Preference</label>
            <div className="relative">
              <motion.div 
                animate={{ boxShadow: genre ? `0 0 60px ${currentTheme.a}77` : `0 0 20px ${currentTheme.a}22` }}
                className="absolute inset-0 rounded-2xl bg-transparent pointer-events-none"
              />
              <motion.input
                whileHover={{ scale: 1.01, boxShadow: `0 0 50px ${currentTheme.a}aa`, borderColor: currentTheme.a }}
                whileFocus={{ scale: 1.02, boxShadow: `0 0 80px ${currentTheme.a}`, borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.8)" }}
                type="text"
                placeholder="Action, Drama, Thriller..."
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="relative w-full bg-black/50 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl outline-none placeholder:text-white/20 transition-all text-white font-bold"
              />
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="space-y-6">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] ml-2">Minimum Rating</label>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
              <motion.button
                key={r}
                whileHover={{ scale: 1.1, boxShadow: `0 0 35px ${currentTheme.a}`, borderColor: "#fff" }}
                onClick={() => setRating(r)}
                animate={{ 
                  backgroundColor: rating === r ? "#ffffff" : "rgba(0,0,0,0.6)",
                  color: rating === r ? "#000" : "#fff",
                  borderColor: rating === r ? "#fff" : "rgba(255,255,255,0.1)",
                  boxShadow: rating === r ? `0 0 40px ${currentTheme.a}` : "none"
                }}
                className="h-14 rounded-xl font-black border transition-all"
              >
                {r}+
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* --- EXPLORE & BACK BUTTONS --- */}
      <div className="mt-24 w-full max-w-sm flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: `0 0 80px ${currentTheme.a}`, filter: "brightness(1.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/results", { state: { industry, year, genre, ratingMin: rating } })}
          animate={{ backgroundColor: currentTheme.a, boxShadow: `0 0 40px ${currentTheme.a}66` }}
          className="w-full py-6 rounded-full font-black text-xl tracking-[0.3em] shadow-2xl transition-all text-black border-t border-white/40"
        >
          EXPLORE
        </motion.button>

        <button 
          onClick={() => navigate(-1)}
          className="mt-8 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all cursor-pointer"
        >
          ← Change Industry
        </button>
      </div>
    </motion.div>
  );
}