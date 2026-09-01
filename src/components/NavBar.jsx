import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl md:text-2xl font-bold text-blue-600 -ml-5"
          >
            Career Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>

            <Link
              to="/industries"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Industries
            </Link>

            <Link
              to="/jobs"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Jobs
            </Link>

            <Link
              to="/employers"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Employers
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

          </div>

          {/* Desktop CTA */}
          <Link
            to="/jobs"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition ml-6"
          >
            Find Jobs
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4">

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                About Us
              </Link>

              <Link
                to="/services"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Services
              </Link>

              <Link
                to="/industries"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Industries
              </Link>

              <Link
                to="/campus-drive"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Campus Drives
              </Link>

              <Link
                to="/jobs"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Jobs
              </Link>

              <Link
                to="/employers"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Employers
              </Link>

              <Link
                to="/vendor-partnership"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Vendor Partnership
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/jobs"
                onClick={closeMenu}
                className="bg-blue-600 text-white text-center px-5 py-2 rounded-lg hover:bg-blue-700 transition mt-2"
              >
                Find Jobs
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default NavBar;
