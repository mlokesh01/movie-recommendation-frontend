import { motion } from "framer-motion";

export default function IndustryCard({ name, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }} // Slightly larger scale since there's no border
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer bg-transparent p-6 text-center"
      onClick={onClick}
    >
      <motion.h2 
        whileHover={{ color: "#ffffff", textShadow: "0px 0px 15px rgba(255,255,255,0.8)" }}
        className="text-xl font-bold tracking-[0.2em] text-white/80 transition-all duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
      >
        {name}
      </motion.h2>
    </motion.div>
  );
}