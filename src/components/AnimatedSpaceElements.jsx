import { motion } from "framer-motion";

function AnimatedSpaceElements() {
  return (
  
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {/* =====================================================
          🚀 ROCKET 1
      ===================================================== */}

      <motion.div
        className="absolute left-[-150px] top-[15%]"
        animate={{
          x: ["0vw", "120vw"],
          y: [0, -60, 30, -20, 0],
          rotate: [-8, 3, -5, 2, -8],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-16 w-28">

          {/* Rocket body */}
          <div className="absolute right-0 top-2 h-12 w-20 rounded-r-full rounded-l-2xl bg-gradient-to-r from-slate-300 via-white to-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.5)]" />

          {/* Rocket nose */}
          <div className="absolute right-[-5px] top-2 h-12 w-8 rounded-r-full bg-white" />

          {/* Window */}
          <div className="absolute right-6 top-5 h-6 w-6 rounded-full border-2 border-blue-400 bg-blue-900 shadow-[0_0_18px_rgba(59,130,246,1)]" />

          {/* Fin */}
          <div className="absolute right-10 top-12 h-5 w-8 -skew-x-12 rounded-sm bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

          {/* Flame */}
          <motion.div
            className="absolute left-0 top-5 h-5 w-16 origin-right rounded-full bg-gradient-to-r from-blue-700 via-cyan-300 to-transparent blur-sm"
            animate={{
              scaleX: [0.7, 1.5, 0.8, 1.3],
              opacity: [0.5, 1, 0.6, 1],
            }}
            transition={{
              duration: 0.35,
              repeat: Infinity,
            }}
          />

          {/* Flame core */}
          <motion.div
            className="absolute left-0 top-6 h-3 w-10 rounded-full bg-cyan-200 blur-sm"
            animate={{
              scaleX: [0.6, 1.4, 0.7],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>


      {/* =====================================================
          🚀 ROCKET 2
      ===================================================== */}

      <motion.div
        className="absolute left-[-100px] top-[70%] opacity-70"
        animate={{
          x: ["0vw", "115vw"],
          y: [0, 50, -30, 20, 0],
          rotate: [5, -3, 4, -2, 5],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-10 w-20">

          <div className="absolute right-0 top-1 h-8 w-14 rounded-r-full rounded-l-xl bg-gradient-to-r from-slate-300 to-white shadow-[0_0_20px_rgba(255,255,255,0.4)]" />

          <div className="absolute right-4 top-3 h-4 w-4 rounded-full border border-blue-400 bg-blue-900 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

          <motion.div
            className="absolute left-0 top-3 h-3 w-10 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent blur-sm"
            animate={{
              scaleX: [0.6, 1.4, 0.7],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>


      {/* =====================================================
          📚 FLOATING BOOK 1
      ===================================================== */}

      <motion.div
        className="absolute left-[10%] top-[48%] opacity-70"
        animate={{
          y: [0, -45, 0],
          x: [0, 25, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-14 w-20">

          {/* Book */}
          <div className="absolute bottom-0 h-10 w-20 rounded-md border border-blue-300 bg-blue-800/90 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

          {/* Pages */}
          <div className="absolute left-2 top-1 h-8 w-16 rounded-sm border border-white/30 bg-slate-800" />

          {/* Lines */}
          <div className="absolute left-6 top-4 h-px w-9 bg-blue-300" />
          <div className="absolute left-6 top-6 h-px w-7 bg-blue-300/70" />

          {/* Shine */}
          <motion.div
            className="absolute left-2 top-1 h-8 w-1 bg-white/50 blur-sm"
            animate={{
              x: [0, 55, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>


      {/* =====================================================
          📖 FLOATING BOOK 2
      ===================================================== */}

      <motion.div
        className="absolute right-[12%] top-[25%] opacity-60"
        animate={{
          y: [0, 30, 0],
          rotate: [8, -6, 8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="h-10 w-16 rounded-md border border-cyan-300/70 bg-cyan-900/80 shadow-[0_0_25px_rgba(34,211,238,0.5)]">
          <div className="m-2 h-1 w-10 bg-cyan-300/70" />
          <div className="mx-2 h-1 w-7 bg-cyan-300/50" />
        </div>
      </motion.div>


      {/* =====================================================
          💼 FLOATING BRIEFCASE
      ===================================================== */}

      <motion.div
        className="absolute right-[15%] top-[58%] opacity-70"
        animate={{
          y: [0, -35, 0],
          x: [0, -15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-14 w-20 rounded-lg border border-blue-300 bg-slate-800/95 shadow-[0_0_30px_rgba(59,130,246,0.5)]">

          {/* Handle */}
          <div className="absolute -top-4 left-6 h-5 w-8 rounded-t-lg border-2 border-blue-400 border-b-0" />

          {/* Lock */}
          <div className="absolute left-7 top-6 h-3 w-6 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        </div>
      </motion.div>


      {/* =====================================================
          💻 FLOATING LAPTOP
      ===================================================== */}

      <motion.div
        className="absolute right-[5%] top-[40%] opacity-60"
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, -4, 0, 4, 0],
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-14 w-24">

          {/* Screen */}
          <div className="h-12 w-24 rounded-md border border-blue-400/70 bg-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4)]">

            <div className="p-2 text-[6px] leading-3 text-blue-400">
              &lt;career /&gt;
              <br />
              talent.connect()
              <br />
              future.build()
              <br />
              hire.success()
            </div>
          </div>

          {/* Base */}
          <div className="absolute -bottom-2 left-[-5px] h-2 w-[106px] rounded-full bg-slate-600 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
        </div>
      </motion.div>


      {/* =====================================================
          🪐 FLOATING PLANET
      ===================================================== */}

      <motion.div
        className="absolute left-[76%] top-[10%] opacity-70"
        animate={{
          y: [0, -35, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-950 shadow-[0_0_40px_rgba(59,130,246,0.6)]">

          <div className="absolute left-[-20px] top-9 h-5 w-32 rotate-[-15deg] rounded-full border-2 border-blue-300/60" />

        </div>
      </motion.div>


      {/* =====================================================
          🌙 FLOATING MOON
      ===================================================== */}

      <motion.div
        className="absolute left-[82%] top-[75%] opacity-70"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-slate-100 via-slate-400 to-slate-700 shadow-[0_0_40px_rgba(255,255,255,0.35)]">

          <div className="absolute left-5 top-6 h-3 w-3 rounded-full bg-slate-500/60" />
          <div className="absolute left-11 top-10 h-4 w-4 rounded-full bg-slate-500/50" />
          <div className="absolute left-8 top-14 h-2 w-2 rounded-full bg-slate-600/50" />

        </div>
      </motion.div>


      {/* =====================================================
          ☄️ SHOOTING STAR 1
      ===================================================== */}

      <motion.div
        className="absolute left-[55%] top-[18%] h-1 w-32 origin-left rounded-full bg-gradient-to-r from-white via-blue-400 to-transparent shadow-[0_0_12px_rgba(96,165,250,0.9)]"
        animate={{
          x: [0, 300],
          y: [0, 220],
          opacity: [0, 1, 0],
          scaleX: [0.3, 1.2, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeIn",
        }}
      />


      {/* =====================================================
          ☄️ SHOOTING STAR 2
      ===================================================== */}

      <motion.div
        className="absolute left-[20%] top-[30%] h-px w-24 origin-left bg-gradient-to-r from-white via-cyan-300 to-transparent"
        animate={{
          x: [0, 400],
          y: [0, 180],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 9,
          delay: 3,
        }}
      />


      {/* =====================================================
          ✨ BIG SHINING PARTICLES
      ===================================================== */}

      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_15px_5px_rgba(96,165,250,0.9)]"
          style={{
            left: `${8 + index * 7}%`,
            top: `${15 + ((index * 13) % 70)}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.7, 0.5],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            delay: index * 0.4,
          }}
        />
      ))}


      {/* =====================================================
          ✨ SMALL STARS
      ===================================================== */}

      {[...Array(25)].map((_, index) => (
        <motion.div
          key={`star-${index}`}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 29) % 95}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{
            duration: 1.5 + (index % 3),
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      ))}


      {/* =====================================================
          💫 ENERGY ORBITS
      ===================================================== */}

      <motion.div
        className="absolute left-[42%] top-[40%] h-40 w-40 rounded-full border border-blue-400/30"
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
          },
        }}
      />

      <motion.div
        className="absolute left-[45%] top-[43%] h-28 w-28 rounded-full border border-cyan-400/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          ✨ CENTER GLOW
      ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_10px_rgba(59,130,246,0.8)]"
        animate={{
          scale: [0.5, 2, 0.5],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

    </div>
  );
}

export default AnimatedSpaceElements;