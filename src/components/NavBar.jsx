import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/85 backdrop-blur-xl">
      <div className="page-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="group flex items-center">
            <img
              src="/logo.png"
              alt="Career Solutions"
              className="w-14 h-14 rounded-lg object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link to="/jobs" className="btn-primary">
              Find Jobs
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
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
            ))}

            <Link
              to="/jobs"
              onClick={closeMenu}
              className="btn-primary mt-3 w-full"
            >
              Find Jobs
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
