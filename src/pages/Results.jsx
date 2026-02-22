// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import { useEffect, useState } from "react";
// // // // // import api from "../services/api";
// // // // // import MovieCard from "../components/MovieCard";
// // // // // import Loader from "../components/Loader";

// // // // // export default function Results() {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();

// // // // //   const state = location.state;

// // // // //   const [movies, setMovies] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     // 🚨 Hard guard: if user refreshes or state missing
// // // // //     if (!state || !state.industry) {
// // // // //       navigate("/");
// // // // //       return;
// // // // //     }

// // // // //     const fetchMovies = async () => {
// // // // //       try {
// // // // //         const res = await api.get(`/filter/${state.industry}`, {
// // // // //           params: {
// // // // //             year: state.year || null,
// // // // //             genre: state.genre || null,
// // // // //             ratingMin: state.ratingMin || null,
// // // // //           },
// // // // //         });

// // // // //         setMovies(res.data);
// // // // //       } catch (err) {
// // // // //         console.error(err);
// // // // //         setError("Backend error. Please try again.");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchMovies();
// // // // //   }, [state, navigate]);

// // // // //   // LOADING
// // // // //   if (loading) return <Loader />;

// // // // //   // ERROR
// // // // //   if (error)
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
// // // // //         <h2 className="text-xl mb-4">{error}</h2>
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="px-6 py-2 bg-red-500 rounded"
// // // // //         >
// // // // //           Go Back
// // // // //         </button>
// // // // //       </div>
// // // // //     );

// // // // //   // EMPTY
// // // // //   if (movies.length === 0)
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
// // // // //         <h2 className="text-xl mb-4">
// // // // //           Sorry, we couldn't find the movies for your preferences...
// // // // //         </h2>
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="px-6 py-2 bg-blue-500 rounded"
// // // // //         >
// // // // //           Go Back
// // // // //         </button>
// // // // //       </div>
// // // // //     );

// // // // //   // SUCCESS
// // // // //   return (
// // // // //     <div className="min-h-screen bg-black text-white p-10">
// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // //         {movies.map((m) => (
// // // // //           <MovieCard key={m.movie_id} movie={m} />
// // // // //         ))}
// // // // //       </div>
// // // // //       <div style={{
// // // // //         display: 'flex',
// // // // //         justifyContent: 'center',
// // // // //         alignItems: 'center'
// // // // //       }}>
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="px-6 py-2 bg-red-500 rounded"
// // // // //           style={{
// // // // //             marginTop: '60px',
// // // // //             marginBottom: '30px'
// // // // //           }}
// // // // //         >
// // // // //           Go Back
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import api from "../services/api";
// // // // import MovieCard from "../components/MovieCard";
// // // // import Loader from "../components/Loader";

// // // // export default function Results() {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const state = location.state;

// // // //   const [movies, setMovies] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     if (!state || !state.industry) {
// // // //       navigate("/");
// // // //       return;
// // // //     }

// // // //     const fetchMovies = async () => {
// // // //       try {
// // // //         const res = await api.get(`/filter/${state.industry}`, {
// // // //           params: {
// // // //             year: state.year || null,
// // // //             genre: state.genre || null,
// // // //             ratingMin: state.ratingMin || null,
// // // //           },
// // // //         });
// // // //         setMovies(res.data);
// // // //       } catch (err) {
// // // //         setError("Our servers are taking a cinematic break. Please try again later.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchMovies();
// // // //   }, [state, navigate]);

// // // //   if (loading) return <Loader />;

// // // //   // Note for user: Enhanced Error State
// // // //   if (error || movies.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6">
// // // //         <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
// // // //           <span className="text-4xl">🎬</span>
// // // //         </div>
// // // //         <h2 className="text-2xl font-bold text-white mb-2">
// // // //           {error ? "System Interruption" : "No Matches Found"}
// // // //         </h2>
// // // //         <p className="text-white/50 max-w-md mb-8">
// // // //           {error ? error : "We couldn't find any films matching your specific filters. Try expanding your timeline or genre preferences."}
// // // //         </p>
// // // //         <button
// // // //           onClick={() => navigate(-1)}
// // // //           className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
// // // //         >
// // // //           Adjust Filters
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
// // // //       {/* Ambient background glow */}
// // // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
// // // //         {/* Header Section */}
// // // //         <div className="mb-12 border-l-4 border-blue-500 pl-6">
// // // //           <h1 className="text-4xl font-black uppercase tracking-tighter italic">
// // // //             {state.industry} <span className="text-blue-500">Spotlight</span>
// // // //           </h1>
// // // //           <p className="text-white/40 text-sm mt-2 font-medium tracking-widest uppercase">
// // // //             {movies.length} Curated Masterpieces Found
// // // //           </p>
// // // //         </div>

// // // //         {/* Grid with Framer Motion Stagger */}
// // // //         <motion.div 
// // // //           initial="hidden"
// // // //           animate="show"
// // // //           variants={{
// // // //             hidden: { opacity: 0 },
// // // //             show: {
// // // //               opacity: 1,
// // // //               transition: { staggerChildren: 0.1 }
// // // //             }
// // // //           }}
// // // //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
// // // //         >
// // // //           {movies.map((m) => (
// // // //             <MovieCard key={m.movie_id} movie={m} />
// // // //           ))}
// // // //         </motion.div>

// // // //         {/* Bottom Navigation */}
// // // //         <div className="mt-20 flex flex-col items-center gap-4">
// // // //           <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em]">End of results</p>
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
// // // //           >
// // // //             <span className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-blue-500 transition-all"></span>
// // // //             <span className="text-[10px] font-black uppercase tracking-widest">Back to Filters</span>
// // // //             <span className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-blue-500 transition-all"></span>
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }





// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";
// // // import api from "../services/api";
// // // import MovieCard from "../components/MovieCard";
// // // import Loader from "../components/Loader";

// // // export default function Results() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const state = location.state;

// // //   const [movies, setMovies] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     if (!state || !state.industry) {
// // //       navigate("/");
// // //       return;
// // //     }

// // //     const fetchMovies = async () => {
// // //       try {
// // //         const res = await api.get(`/filter/${state.industry}`, {
// // //           params: {
// // //             year: state.year || null,
// // //             genre: state.genre || null,
// // //             ratingMin: state.ratingMin || null,
// // //           },
// // //         });
// // //         setMovies(res.data);
// // //       } catch (err) {
// // //         setError("Our servers are currently unavailable. Please try again later.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchMovies();
// // //   }, [state, navigate]);

// // //   if (loading) return <Loader />;

// // //   // --- CASE 2: ERROR OR NO MOVIES FOUND ---
// // //   if (error || movies.length === 0) {
// // //     return (
// // //       <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6 text-white">
// // //         <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-6">🍿</motion.div>
// // //         <h2 className="text-2xl font-black uppercase tracking-widest mb-4">
// // //           {error ? "System Error" : "No Matches Found"}
// // //         </h2>
        
// // //         {/* User Note */}
// // //         <p className="text-white/50 max-w-md mb-10 leading-relaxed">
// // //           {error ? error : "Note: We couldn't find movies for your exact preferences. Try selecting a broader year range or a different genre to see more results."}
// // //         </p>

// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest text-xs"
// // //         >
// // //           ← Go Back
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   // --- CASE 1: SUCCESS (Movies Fetched) ---
// // //   return (
// // //     <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden pb-20">
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/10 blur-[120px] pointer-events-none" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
// // //         <div className="mb-12 border-l-4 border-indigo-500 pl-6">
// // //           <h1 className="text-4xl font-black uppercase tracking-tighter italic">
// // //             {state.industry} <span className="text-indigo-500">Collection</span>
// // //           </h1>
// // //           <p className="text-white/40 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase">
// // //             Showing {movies.length} Results for your preferences
// // //           </p>
// // //         </div>

// // //         <motion.div 
// // //           initial="hidden" animate="show"
// // //           variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
// // //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
// // //         >
// // //           {movies.map((m) => (
// // //             <MovieCard key={m.movie_id} movie={m} />
// // //           ))}
// // //         </motion.div>

// // //         {/* Success Case "Go Back" Button */}
// // //         <div className="mt-24 flex flex-col items-center">
// // //           <button
// // //             onClick={() => navigate(-1)}
// // //             className="px-10 py-4 bg-transparent border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs"
// // //           >
// // //             ← Change Preferences
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import api from "../services/api";
// // import MovieCard from "../components/MovieCard";
// // import Loader from "../components/Loader";

// // export default function Results() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const state = location.state;

// //   const [movies, setMovies] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (!state || !state.industry) {
// //       navigate("/");
// //       return;
// //     }

// //     const fetchMovies = async () => {
// //       try {
// //         const res = await api.get(`/filter/${state.industry}`, {
// //           params: {
// //             year: state.year || null,
// //             genre: state.genre || null,
// //             ratingMin: state.ratingMin || null,
// //           },
// //         });
// //         setMovies(res.data);
// //       } catch (err) {
// //         setError("Database connection interrupted. Please check your network and try again.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMovies();
// //   }, [state, navigate]);

// //   if (loading) return <Loader />;

// //   // --- CASE: ERROR OR NO MOVIES ---
// //   if (error || !movies || movies.length === 0) {
// //     return (
// //       <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6 text-white">
// //         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
// //           <span className="text-6xl">🔍</span>
// //         </motion.div>
        
// //         <h2 className="text-2xl font-black uppercase tracking-widest mb-4">
// //           {error ? "Error Encountered" : "No Matches Found"}
// //         </h2>
        
// //         {/* Important User Note */}
// //         <p className="text-white/50 max-w-md mb-10 leading-relaxed text-sm">
// //           {error ? error : "Note: We couldn't find any movies matching your specific preferences. This might be due to restrictive filters. Try selecting a different year or expanding your genre search."}
// //         </p>

// //         <button
// //           onClick={() => navigate(-1)}
// //           className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] uppercase tracking-widest text-xs cursor-pointer"
// //         >
// //           ← Adjust Filters
// //         </button>
// //       </div>
// //     );
// //   }

// //   // --- CASE: SUCCESS ---
// //   return (
// //     <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden pb-24">
// //       {/* Background Glow */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/10 blur-[120px] pointer-events-none" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
// //         <div className="mb-12 border-l-4 border-indigo-500 pl-6">
// //           <h1 className="text-4xl font-black uppercase tracking-tighter italic">
// //             {state.industry} <span className="text-indigo-500">Spotlight</span>
// //           </h1>
// //           <p className="text-white/40 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase">
// //             Successfully fetched {movies.length} curated titles
// //           </p>
// //         </div>

// //         <motion.div 
// //           initial="hidden" animate="show"
// //           variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
// //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
// //         >
// //           {movies.map((m) => (
// //             <MovieCard key={m.movie_id} movie={m} />
// //           ))}
// //         </motion.div>

// //         {/* Go Back Button for success case */}
// //         <div className="mt-24 flex justify-center">
// //           <button
// //             onClick={() => navigate(-1)}
// //             className="px-10 py-4 bg-transparent border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px] cursor-pointer"
// //           >
// //             ← Change Preferences
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }







// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import api from "../services/api";
// import MovieCard from "../components/MovieCard";
// import Loader from "../components/Loader";

// export default function Results() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const state = location.state;

//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!state || !state.industry) {
//       navigate("/");
//       return;
//     }

//     const fetchMovies = async () => {
//       try {
//         const res = await api.get(`/filter/${state.industry}`, {
//           params: {
//             year: state.year || null,
//             genre: state.genre || null,
//             ratingMin: state.ratingMin || null,
//           },
//         });
//         setMovies(res.data);
//       } catch (err) {
//         setError("Network Error: Unable to reach the cinematic archives.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [state, navigate]);

//   if (loading) return <Loader />;

//   // --- EMPTY OR ERROR STATE ---
//   if (error || !movies || movies.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6 text-white">
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl mb-6">🎬</motion.div>
//         <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Results Found</h2>
        
//         {/* User Note */}
//         <p className="text-white/50 max-w-md mb-10 leading-relaxed text-sm">
//           Note: Your specific combination of filters yielded no matches. Try selecting a different timeline or broadening your genre choice to discover more films.
//         </p>

//         <button
//           onClick={() => navigate(-1)}
//           className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest text-xs"
//         >
//           ← Go Back
//         </button>
//       </div>
//     );
//   }

//   // --- SUCCESS STATE ---
//   return (
//     <div className="min-h-screen bg-[#020617] text-white relative pb-20 overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/10 blur-[100px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
//         <div className="mb-12 border-l-4 border-indigo-500 pl-6">
//           <h1 className="text-4xl font-black uppercase tracking-tighter italic">
//             {state.industry} <span className="text-indigo-500">Spotlight</span>
//           </h1>
//           <p className="text-white/40 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase">
//             Discovered {movies.length} matches for your taste
//           </p>
//         </div>

//         <motion.div 
//           initial="hidden" animate="show"
//           variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {movies.map((m) => (
//             <MovieCard key={m.movie_id} movie={m} />
//           ))}
//         </motion.div>

//         {/* Go Back button for Success Case */}
//         <div className="mt-20 flex justify-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="px-10 py-4 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px]"
//           >
//             ← Change Preferences
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state || !state.industry) {
      navigate("/");
      return;
    }

    const fetchMovies = async () => {
      try {
        const res = await api.get(`/filter/${state.industry}`, {
          params: {
            year: state.year || null,
            genre: state.genre || null,
            ratingMin: state.ratingMin || null,
          },
        });
        setMovies(res.data);
      } catch (err) {
        setError("Network connectivity issue. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [state, navigate]);

  if (loading) return <Loader />;

  // --- CASE: NO MOVIES FOUND ---
  if (error || !movies || movies.length === 0) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6 text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl mb-6">🎬</motion.div>
        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Matches Found</h2>
        <p className="text-white/50 max-w-md mb-10 text-sm leading-relaxed">
          Note: We couldn't find any movies matching your specific preferences. This might be due to restrictive filters. Try selecting a different year or expanding your genre search.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-xs"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  // --- CASE: SUCCESS ---
  return (
    <div className="min-h-screen bg-[#020617] text-white relative pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
        <div className="mb-12 border-l-4 border-indigo-500 pl-6">
          <h1 className="text-4xl font-black uppercase tracking-tighter italic">
            {state.industry} <span className="text-indigo-500">Collection</span>
          </h1>
          <p className="text-white/40 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase">
            {movies.length} results discovered
          </p>
        </div>

        <motion.div 
          initial="hidden" animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {movies.map((m) => (
            <MovieCard key={m.movie_id} movie={m} />
          ))}
        </motion.div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-10 py-4 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px]"
          >
            ← Change Preferences
          </button>
        </div>
      </div>
    </div>
  );
}