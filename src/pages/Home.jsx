import { useNavigate } from "react-router-dom";
import IndustryCard from "../components/IndustryCard";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = ["TOLLYWOOD", "KOLLYWOOD", "MOLLYWOOD", "SANDALWOOD", "BOLLYWOOD", "HOLLYWOOD"];

const backgroundImages = [
  "https://wallpaperaccess.com/full/12061830.jpg",
  "https://wallpaperaccess.com/full/2272647.jpg",
  "https://www.wallsnapy.com/img_gallery/leo-movie-thalapathi-dance-wallpaper-hd-1080p-5693021.jpg",
  "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/marvel-2.jpg?fit=1200%2C630&ssl=1",
  "https://images.wallpapersden.com/image/download/allu-arjun-pushpa-movie_bG1raGyUmZqaraWkpJRnZWltrWZlZ2k.jpg",
  "https://wallpapercave.com/wp/wp15542190.jpg",
  "https://wallpapers.com/images/hd/ram-charan-hd-bandana-on-hands-5fm5rr48cdtomc6g.jpg",
  "https://www.baltana.com/files/wallpapers-32/RRR-Movie-Ram-Charan-Background-Wallpaper-125760.jpg",
  "https://images3.alphacoders.com/875/thumb-1920-875105.jpg",
  "https://wallpapers.com/images/hd/komaram-bheem-from-rrr-6df5g25wqkc504zx.jpg",
  "https://cdn.wallpapersafari.com/90/49/IqYWf2.jpg",
  "https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
];

export default function Home() {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // PRELOADER LOGIC
  useEffect(() => {
    let loadedCount = 0;
    
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === backgroundImages.length) {
          // Add a small delay so the transition doesn't feel abrupt
          setTimeout(() => setIsLoading(false), 500);
        }
      };
      img.onerror = () => {
        loadedCount++; // Count even if it fails so the page doesn't hang
        if (loadedCount === backgroundImages.length) setIsLoading(false);
      };
    });
  }, []);

  // SLIDE TIMER
  useEffect(() => {
    if (isLoading) return; // Don't start the timer until loaded
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % backgroundImages.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      
      {/* 1. Loading Spinner Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full mb-4"
            />
            <p className="text-white/50 tracking-widest text-sm uppercase">Loading Cinematic Experience...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Background Slider Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={backgroundImages[currentIdx]}
            src={backgroundImages[currentIdx]}
            initial={{ opacity: 0, scale: 1.15 }} 
            animate={{ 
              opacity: 0.8, 
              scale: 1,
              transition: {
                opacity: { duration: 1 },
                scale: { duration: 3, ease: "linear" } 
              }
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: 'transform, opacity' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 z-10" /> 
      </div>

      {/* 3. Foreground Content */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
          className="text-4xl mb-12 font-bold text-center drop-shadow-2xl"
        >
          Choose an industry
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <IndustryCard
              key={ind}
              name={ind}
              onClick={() => navigate(`/filter/${ind}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


// import { useNavigate } from "react-router-dom";
// import IndustryCard from "../components/IndustryCard";
// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const industries = ["TOLLYWOOD", "KOLLYWOOD", "MOLLYWOOD", "SANDALWOOD", "BOLLYWOOD", "HOLLYWOOD"];

// const backgroundImages = [
//   "https://wallpaperaccess.com/full/12061830.jpg",
//   "https://wallpaperaccess.com/full/2272647.jpg",
//   "https://www.wallsnapy.com/img_gallery/leo-movie-thalapathi-dance-wallpaper-hd-1080p-5693021.jpg",
//   "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/marvel-2.jpg?fit=1200%2C630&ssl=1",
//   "https://images.wallpapersden.com/image/download/allu-arjun-pushpa-movie_bG1raGyUmZqaraWkpJRnZWltrWZlZ2k.jpg",
//   "https://wallpapercave.com/wp/wp15542190.jpg",
//   "https://wallpapers.com/images/hd/ram-charan-hd-bandana-on-hands-5fm5rr48cdtomc6g.jpg",
//   "https://www.baltana.com/files/wallpapers-32/RRR-Movie-Ram-Charan-Background-Wallpaper-125760.jpg",
//   "https://images3.alphacoders.com/875/thumb-1920-875105.jpg",
//   "https://wallpapers.com/images/hd/komaram-bheem-from-rrr-6df5g25wqkc504zx.jpg",
//   "https://cdn.wallpapersafari.com/90/49/IqYWf2.jpg",
//   "https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // 1. ROBUST PRELOADER
//   // Uses a mounted flag to prevent setting state on unmounted components (common crash cause)
//   useEffect(() => {
//     let isMounted = true;
//     let loadedCount = 0;
    
//     backgroundImages.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         loadedCount++;
//         if (loadedCount === backgroundImages.length && isMounted) {
//           setTimeout(() => setIsLoading(false), 800);
//         }
//       };
//       img.onerror = () => {
//         loadedCount++; 
//         if (loadedCount === backgroundImages.length && isMounted) setIsLoading(false);
//       };
//     });

//     return () => { isMounted = false; };
//   }, []);

//   // 2. STABLE SLIDE TIMER
//   useEffect(() => {
//     if (isLoading) return;
//     const timer = setInterval(() => {
//       setCurrentIdx((prev) => (prev + 1) % backgroundImages.length);
//     }, 3000); // Slightly slower for better UX
//     return () => clearInterval(timer);
//   }, [isLoading]);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center font-sans">
      
//       {/* Loading Spinner */}
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div 
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
//           >
//             <motion.div 
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//               className="w-14 h-14 border-4 border-white/10 border-t-red-600 rounded-full mb-6"
//             />
//             <motion.p 
//               animate={{ opacity: [0.3, 1, 0.3] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="text-white/70 tracking-[0.3em] text-xs uppercase font-bold"
//             >
//               Initializing Cinema...
//             </motion.p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none">
//         <AnimatePresence mode="popLayout">
//           <motion.img
//             key={backgroundImages[currentIdx]}
//             src={backgroundImages[currentIdx]}
//             initial={{ opacity: 0, scale: 1.1 }} 
//             animate={{ 
//               opacity: 0.6, // Lowered opacity slightly for better button visibility
//               scale: 1,
//               transition: {
//                 opacity: { duration: 1.5 },
//                 scale: { duration: 4, ease: "easeOut" } 
//               }
//             }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ willChange: 'transform, opacity' }}
//           />
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" /> 
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 flex flex-col items-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={!isLoading ? { opacity: 1, y: 0 } : {}}
//           className="text-center mb-16"
//         >
//           <p className="text-5xl md:text-6xl font-black tracking-tighter drop-shadow-2xl italic">
//             SELECT <span className="text-red-600">INDUSTRY</span>
//           </p>
//           <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
//         </motion.div>

//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl">
//           {industries.map((ind) => (
//             <div 
//               key={ind} 
//               className="group relative" // 'group' allows us to animate children on parent hover
//             >
//               {/* Dynamic Glow Layer */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500 group-hover:duration-200" />
              
//               <IndustryCard
//                 name={ind}
//                 onClick={() => navigate(`/filter/${ind}`)}
//                 // Note: Keep your existing IndustryCard component as is. 
//                 // The glow effect is handled by the wrapper div above.
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }