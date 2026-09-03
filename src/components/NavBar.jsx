import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Jobs", path: "/jobs" },
    { name: "Employers", path: "/employers" },
    { name: "Campus Drives", path: "/campus-drive" },
    { name: "Vendor Partnership", path: "/vendor-partnership" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/80 backdrop-blur-xl"
    >
      <div className="page-container">

        {/* ================= DESKTOP NAV ================= */}

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group relative flex items-center"
          >
            <motion.img
              src="/logo.png"
              alt="Career Solutions"
              className="h-14 w-14 rounded-lg object-contain"
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            />

            {/* Logo glow */}
            <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden xl:flex items-center gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative rounded-xl px-3 py-2 text-sm font-medium"
              >

                <motion.span
                  animate={{
                    color: isActive(link.path)
                      ? "#ffffff"
                      : "#94a3b8",
                  }}
                  whileHover={{
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.span>

                {/* Active indicator */}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  />
                )}

                {/* Hover glow */}
                <span className="absolute inset-0 -z-10 rounded-xl bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/10" />

              </Link>
            ))}

          </div>

          {/* FIND JOBS BUTTON */}
          <div className="hidden xl:block">

            <Link
              to="/jobs"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
            >

              {/* Animated shine */}
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10">
                Find Jobs
              </span>

              <motion.span
                className="relative z-10"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>

            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">

              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}

            </AnimatePresence>
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="overflow-hidden xl:hidden"
            >

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                className="mb-5 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl"
              >

                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                  >

                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? "bg-blue-600/15 text-blue-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>

                  </motion.div>
                ))}

                <Link
                  to="/jobs"
                  onClick={closeMenu}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
                >
                  Find Jobs
                  <span>→</span>
                </Link>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default NavBar;