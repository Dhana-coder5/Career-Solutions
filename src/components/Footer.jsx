import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-950">

      {/* Background glow */}
      <div className="blue-orb -left-32 top-10 opacity-40" />
      <div className="blue-orb -right-32 bottom-0 opacity-30" />

      <div className="page-container relative">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Career Solutions"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Connecting employers with the right talent across IT,
              Non-IT and Banking sectors.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-300">
              Hire Talent. Build Careers. Grow Together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Industries", "/industries"],
                ["Jobs", "/jobs"],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <div className="mt-5 space-y-3">
              {[
                ["Employers", "/employers"],
                ["Jobs", "/jobs"],
                ["Campus Drives", "/campus-drive"],
                ["Vendor Partnership", "/vendor-partnership"],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Chennai, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:info@careersolutions.com"
                  className="mt-1 block text-sm text-slate-300 transition-colors hover:text-blue-400"
                >
                  info@careersolutions.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:+919876425364"
                  className="mt-1 block text-sm text-slate-300 transition-colors hover:text-blue-400"
                >
                  +91 98764 25364
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-transparent p-6">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

            <div>
              <h3 className="text-lg font-semibold text-white">
                Ready to build your next opportunity?
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Let's connect talent with the right possibilities.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn-primary whitespace-nowrap"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-slate-500">
            © {currentYear} Career Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/contact"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Contact
            </Link>

            <Link
              to="/jobs"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Find Jobs
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;