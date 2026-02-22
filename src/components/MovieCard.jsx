// // // // // // export default function MovieCard({ movie }) {
// // // // // //   return (
// // // // // //     <div className="bg-white/10 p-4 rounded-lg">
// // // // // //       <img src={movie.movie_poster} className="w-full h-60 object-cover" />
// // // // // //       <h3 className="mt-2 font-bold">{movie.title}</h3>
// // // // // //       <p>{movie.release_year}</p>
// // // // // //       <p>{movie.genre}</p>
// // // // // //       <p>⭐ {movie.rating}</p>
// // // // // //       <p>{movie.director}</p>
// // // // // //       <p className="text-sm">{movie.cast}</p>

// // // // // //       {movie.trailer_link !== "Movie Trailer Not Available" && (
// // // // // //         <a
// // // // // //           href={movie.trailer_link}
// // // // // //           target="_blank"
// // // // // //           className="block mt-2 text-red-400"
// // // // // //         >
// // // // // //           Watch Trailer
// // // // // //         </a>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import { motion } from "framer-motion";

// // // // // export default function MovieCard({ movie }) {
// // // // //   // Helper to handle trailer clicks
// // // // //   const watchTrailer = (e) => {
// // // // //     e.stopPropagation();
// // // // //     if (movie.trailer_link) {
// // // // //       window.open(movie.trailer_link, "_blank");
// // // // //     } else {
// // // // //       alert("Trailer not available for this title.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, y: 20 }}
// // // // //       whileInView={{ opacity: 1, y: 0 }}
// // // // //       whileHover={{ y: -12 }}
// // // // //       viewport={{ once: true }}
// // // // //       className="relative group cursor-pointer"
// // // // //     >
// // // // //       {/* Dynamic Glow - Matches the vibe of your Filter page */}
// // // // //       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
// // // // //       <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
// // // // //         {/* Poster Image Container */}
// // // // //         <div className="relative aspect-[2/3] overflow-hidden">
// // // // //           <img
// // // // //             src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
// // // // //             alt={movie.title}
// // // // //             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// // // // //           />
          
// // // // //           {/* Rating Badge - Always visible */}
// // // // //           <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
// // // // //              <span className="text-yellow-400 font-bold text-xs">★ {movie.rating || "N/A"}</span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Content Section */}
// // // // //         <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
// // // // //           <h3 className="text-lg font-bold text-white truncate mb-1">{movie.title}</h3>
          
// // // // //           {/* Director & Year Row */}
// // // // //           <div className="flex justify-between items-center mb-3">
// // // // //             <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
// // // // //               Dir: {movie.director || "Unknown"}
// // // // //             </p>
// // // // //             <span className="text-[10px] text-white/40">{movie.release_year}</span>
// // // // //           </div>

// // // // //           {/* Cast List - Small and clean */}
// // // // //           <p className="text-[11px] text-white/60 line-clamp-1 mb-4 italic">
// // // // //             <span className="text-white/30 not-italic mr-1">Cast:</span>
// // // // //             {movie.cast || "Cast details unavailable"}
// // // // //           </p>

// // // // //           {/* Action Buttons */}
// // // // //           <div className="mt-auto flex gap-2">
// // // // //             <motion.button 
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               onClick={watchTrailer}
// // // // //               className="flex-1 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-indigo-50 transition-colors"
// // // // //             >
// // // // //               Play Trailer
// // // // //             </motion.button>
            
// // // // //             <motion.button 
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               className="px-3 py-2 bg-white/10 text-white text-[10px] font-black rounded-lg hover:bg-white/20 transition-colors"
// // // // //             >
// // // // //               +
// // // // //             </motion.button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Hover Overlay for Genre - Premium feel */}
// // // // //         <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
// // // // //           <span className="text-[9px] font-bold bg-indigo-600 px-2 py-0.5 rounded uppercase tracking-widest text-white">
// // // // //             {movie.genre}
// // // // //           </span>
// // // // //         </div>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // }





// // // // import { motion } from "framer-motion";

// // // // export default function MovieCard({ movie }) {
// // // //   const watchTrailer = (e) => {
// // // //     e.stopPropagation();
// // // //     if (movie.trailer_link) {
// // // //       window.open(movie.trailer_link, "_blank");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 20 }}
// // // //       whileInView={{ opacity: 1, y: 0 }}
// // // //       whileHover={{ y: -12 }}
// // // //       viewport={{ once: true }}
// // // //       className="relative group cursor-pointer"
// // // //     >
// // // //       {/* Dynamic Glow Background */}
// // // //       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
// // // //       <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
// // // //         {/* Poster Image */}
// // // //         <div className="relative aspect-[2/3] overflow-hidden">
// // // //           <img
// // // //             src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
// // // //             alt={movie.title}
// // // //             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// // // //           />
// // // //         </div>

// // // //         {/* Content Section */}
// // // //         <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
// // // //           <h3 className="text-lg font-bold text-white truncate mb-2">{movie.title}</h3>
          
// // // //           {/* New Row: Genre and Rating (Above Director) */}
// // // //           <div className="flex justify-between items-center mb-1">
// // // //             <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
// // // //               {movie.genre || "Drama"}
// // // //             </span>
// // // //             <span className="text-yellow-400 font-bold text-xs">
// // // //               ★ {movie.rating || "N/A"}
// // // //             </span>
// // // //           </div>

// // // //           {/* Director & Year Row */}
// // // //           <div className="flex justify-between items-center mb-3">
// // // //             <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
// // // //               Dir: <span className="text-white">{movie.director || "Unknown"}</span>
// // // //             </p>
// // // //             <span className="text-[10px] text-white/30">{movie.release_year}</span>
// // // //           </div>

// // // //           {/* Cast List */}
// // // //           <p className="text-[11px] text-white/60 line-clamp-1 mb-4 italic">
// // // //             <span className="text-white/30 not-italic mr-1">Cast:</span>
// // // //             {movie.cast || "Cast details unavailable"}
// // // //           </p>

// // // //           {/* Action Buttons - Conditional Trailer */}
// // // //           <div className="mt-auto flex gap-2">
// // // //             {movie.trailer_link && (
// // // //               <motion.button 
// // // //                 whileTap={{ scale: 0.95 }}
// // // //                 onClick={watchTrailer}
// // // //                 className="flex-1 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
// // // //               >
// // // //                 Play Trailer
// // // //               </motion.button>
// // // //             )}
            
// // // //             <motion.button 
// // // //               whileTap={{ scale: 0.95 }}
// // // //               className={`py-2 bg-white/10 text-white text-[10px] font-black rounded-lg hover:bg-white/20 transition-colors ${!movie.trailer_link ? 'w-full' : 'px-4'}`}
// // // //             >
// // // //               {movie.trailer_link ? "+" : "VIEW DETAILS"}
// // // //             </motion.button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }




// // // import { motion } from "framer-motion";

// // // export default function MovieCard({ movie }) {
// // //   const watchTrailer = (e) => {
// // //     e.stopPropagation();
// // //     if (movie.trailer_link) {
// // //       window.open(movie.trailer_link, "_blank");
// // //     }
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 20 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       whileHover={{ y: -12 }}
// // //       viewport={{ once: true }}
// // //       className="relative group cursor-pointer"
// // //     >
// // //       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
// // //       <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
// // //         <div className="relative aspect-[2/3] overflow-hidden">
// // //           <img
// // //             src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
// // //             alt={movie.title}
// // //             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// // //           />
// // //         </div>

// // //         <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
// // //           <h3 className="text-lg font-bold text-white truncate mb-2">{movie.title}</h3>
          
// // //           <div className="flex justify-between items-center mb-1">
// // //             <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
// // //               {movie.genre || "Drama"}
// // //             </span>
// // //             <span className="text-yellow-400 font-bold text-xs">★ {movie.rating || "N/A"}</span>
// // //           </div>

// // //           <div className="flex justify-between items-center mb-3">
// // //             <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
// // //               Dir: <span className="text-white">{movie.director || "Unknown"}</span>
// // //             </p>
// // //             <span className="text-[10px] text-white/30">{movie.release_year}</span>
// // //           </div>

// // //           <p className="text-[11px] text-white/60 line-clamp-1 mb-4 italic">
// // //             <span className="text-white/30 not-italic mr-1">Cast:</span>
// // //             {movie.cast || "Cast details unavailable"}
// // //           </p>

// // //           <div className="mt-auto flex gap-2">
// // //             {/* STICKING TO ORIGINAL LOGIC: Only render if trailer_link exists */}
// // //             {movie.trailer_link && (
// // //               <motion.button 
// // //                 whileTap={{ scale: 0.95 }}
// // //                 onClick={watchTrailer}
// // //                 className="flex-1 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
// // //               >
// // //                 Play Trailer
// // //               </motion.button>
// // //             )}
            
// // //             <motion.button 
// // //               whileTap={{ scale: 0.95 }}
// // //               className={`py-2 bg-white/10 text-white text-[10px] font-black rounded-lg hover:bg-white/20 transition-colors ${!movie.trailer_link ? 'w-full' : 'px-4'}`}
// // //             >
// // //               {movie.trailer_link ? "+" : "VIEW DETAILS"}
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }


// // import { motion } from "framer-motion";

// // export default function MovieCard({ movie }) {
// //   const watchTrailer = (e) => {
// //     e.stopPropagation();
// //     // Only attempts to open if link exists
// //     if (movie.trailer_link) {
// //       window.open(movie.trailer_link, "_blank");
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       whileHover={{ y: -12 }}
// //       viewport={{ once: true }}
// //       className="relative group cursor-pointer"
// //     >
// //       {/* Background Glow */}
// //       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
// //       <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
// //         {/* Poster */}
// //         <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
// //           <img
// //             src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
// //             alt={movie.title}
// //             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
// //           <h3 className="text-lg font-bold text-white truncate mb-2">{movie.title}</h3>
          
// //           {/* Genre & Rating Row */}
// //           <div className="flex justify-between items-center mb-1">
// //             <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
// //               {movie.genre || "Cinema"}
// //             </span>
// //             <span className="text-yellow-400 font-bold text-xs">★ {movie.rating || "N/A"}</span>
// //           </div>

// //           {/* Director & Year */}
// //           <div className="flex justify-between items-center mb-2">
// //             <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
// //               Dir: <span className="text-white">{movie.director || "Unknown"}</span>
// //             </p>
// //             <span className="text-[10px] text-white/30">{movie.release_year}</span>
// //           </div>

// //           {/* Cast */}
// //           <p className="text-[11px] text-white/60 line-clamp-1 mb-4 italic">
// //             <span className="text-white/30 not-italic mr-1">Cast:</span>
// //             {movie.cast || "Not listed"}
// //           </p>

// //           {/* Action Buttons - Strict Conditional Logic */}
// //           <div className="mt-auto flex gap-2">
// //             {movie.trailer_link && movie.trailer_link !== "" ? (
// //               <motion.button 
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={watchTrailer}
// //                 className="flex-1 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
// //               >
// //                 Play Trailer
// //               </motion.button>
// //             ) : null}
            
// //             <motion.button 
// //               whileTap={{ scale: 0.95 }}
// //               className={`py-2 bg-white/10 text-white text-[10px] font-black rounded-lg hover:bg-white/20 transition-colors ${(!movie.trailer_link || movie.trailer_link === "") ? 'w-full' : 'px-4'}`}
// //             >
// //               {movie.trailer_link ? "+" : "VIEW DETAILS"}
// //             </motion.button>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }








// import { motion } from "framer-motion";

// export default function MovieCard({ movie }) {
//   // Logic: Only valid if it's not null, not empty, and doesn't contain the "Not Available" string
//   const hasValidTrailer = 
//     movie.trailer_link && 
//     movie.trailer_link.trim() !== "" && 
//     movie.trailer_link !== "Movie Trailer Not Available";

//   const watchTrailer = (e) => {
//     e.stopPropagation();
//     if (hasValidTrailer) {
//       window.open(movie.trailer_link, "_blank");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -12 }}
//       viewport={{ once: true }}
//       className="relative group cursor-pointer"
//     >
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
//       <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
//         <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
//           <img
//             src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
//             alt={movie.title}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//           />
//         </div>

//         <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
//           <h3 className="text-lg font-bold text-white truncate mb-2">{movie.title}</h3>
          
//           {/* Genre & Rating Row */}
//           <div className="flex justify-between items-center mb-1">
//             <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
//               {movie.genre || "Cinema"}
//             </span>
//             <span className="text-yellow-400 font-bold text-xs">★ {movie.rating || "N/A"}</span>
//           </div>

//           {/* Director & Year */}
//           <div className="flex justify-between items-center mb-2">
//             <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
//               Dir: <span className="text-white">{movie.director || "Unknown"}</span>
//             </p>
//             <span className="text-[10px] text-white/30">{movie.release_year}</span>
//           </div>

//           {/* Cast */}
//           <p className="text-[11px] text-white/60 line-clamp-1 mb-4 italic">
//             <span className="text-white/30 not-italic mr-1">Cast:</span>
//             {movie.cast || "Not listed"}
//           </p>

//           <div className="mt-auto flex gap-2">
//             {/* CORRECTED TRAILER LOGIC */}
//             {hasValidTrailer ? (
//               <motion.button 
//                 whileTap={{ scale: 0.95 }}
//                 onClick={watchTrailer}
//                 className="flex-1 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
//               >
//                 Play Trailer
//               </motion.button>
//             ) : null}
            
//             <motion.button 
//               whileTap={{ scale: 0.95 }}
//               className={`py-2 bg-white/10 text-white text-[10px] font-black rounded-lg hover:bg-white/20 transition-colors ${!hasValidTrailer ? 'w-full' : 'px-4'}`}
//             >
//               {!hasValidTrailer ? "VIEW DETAILS" : "+"}
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }









import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  // Strict Logic: Only valid if it's a real URL and not the "Not Available" placeholder
  const hasValidTrailer = 
    movie.trailer_link && 
    movie.trailer_link.trim() !== "" && 
    movie.trailer_link !== "Movie Trailer Not Available";

  const watchTrailer = (e) => {
    e.stopPropagation();
    if (hasValidTrailer) {
      window.open(movie.trailer_link, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
    >
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full">
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
          <img
            src={movie.movie_poster || "https://via.placeholder.com/400x600?text=No+Poster"}
            alt={movie.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-slate-900 to-black">
          <h3 className="text-lg font-bold text-white truncate mb-2">{movie.title}</h3>
          
          {/* Genre & Rating */}
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              {movie.genre || "Cinema"}
            </span>
            <span className="text-yellow-400 font-bold text-xs">★ {movie.rating || "N/A"}</span>
          </div>

          {/* Director & Year */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
              Dir: <span className="text-white">{movie.director || "Unknown"}</span>
            </p>
            <span className="text-[10px] text-white/30">{movie.release_year}</span>
          </div>

          {/* Cast */}
          <p className="text-[11px] text-white/60 line-clamp-1 italic mb-4">
            <span className="text-white/30 not-italic mr-1">Cast:</span>
            {movie.cast || "Not listed"}
          </p>

          {/* Action Area: ONLY shows if valid trailer exists. Otherwise, empty space. */}
          <div className="mt-auto min-h-[40px] flex items-end">
            {hasValidTrailer && (
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={watchTrailer}
                className="w-full py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Play Trailer
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}