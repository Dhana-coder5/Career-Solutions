import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Industries", "/industries"],
    ["Jobs", "/jobs"],
  ];

  const serviceLinks = [
    ["Employers", "/employers"],
    ["Jobs", "/jobs"],
    ["Campus Drives", "/campus-drive"],
    ["Vendor Partnership", "/vendor-partnership"],
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-950">

      {/* ================= SPACE EFFECTS ================= */}

      <div className="blue-orb -left-32 top-10 opacity-40" />
      <div className="blue-orb -right-32 bottom-0 opacity-30" />

      {/* Stars */}
      <span className="tiny-star left-[8%] top-[20%]" />
      <span className="tiny-star left-[18%] top-[70%]" />
      <span className="tiny-star left-[35%] top-[30%]" />
      <span className="tiny-star left-[52%] top-[75%]" />
      <span className="tiny-star left-[68%] top-[20%]" />
      <span className="tiny-star left-[82%] top-[60%]" />
      <span className="tiny-star left-[94%] top-[30%]" />

      {/* Small floating moon */}
      <motion.div
        className="small-space-moon absolute right-[8%] top-[8%] opacity-30"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shining particle */}
      <span className="shine-particle left-[45%] top-[15%]" />

      {/* ================= CONTENT ================= */}

      <div className="page-container relative z-10">

        {/* Main Footer */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4"
        >

          {/* ================= BRAND ================= */}

          <motion.div variants={fadeUp}>

            <Link
              to="/"
              className="group relative inline-block"
            >
              <motion.img
                src={logo}
                alt="Career Solutions"
                className="h-14 w-auto object-contain"
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
              <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Connecting employers with the right talent across IT,
              Non-IT and Banking sectors.
            </p>

            <motion.p
              className="mt-4 text-sm font-medium text-slate-300"
              whileHover={{ x: 5 }}
            >
              Hire Talent. Build Careers. Grow Together.
            </motion.p>

          </motion.div>

          {/* ================= QUICK LINKS ================= */}

          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <motion.div
              variants={stagger}
              className="mt-5 space-y-3"
            >
              {quickLinks.map(([name, path]) => (
                <motion.div key={path} variants={fadeUp}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <motion.span
                      className="text-blue-500 opacity-0"
                      initial={{ x: -5 }}
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* ================= SERVICES ================= */}

          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <motion.div
              variants={stagger}
              className="mt-5 space-y-3"
            >
              {serviceLinks.map(([name, path]) => (
                <motion.div key={path} variants={fadeUp}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* ================= CONTACT ================= */}

          <motion.div variants={fadeUp}>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <motion.div whileHover={{ x: 5 }}>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Chennai, Tamil Nadu
                </p>
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ x: 5 }}>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:info@careersolutions.com"
                  className="mt-1 block text-sm text-slate-300 transition-colors hover:text-blue-400"
                >
                  info@careersolutions.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div whileHover={{ x: 5 }}>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <a
                  href="tel:+919876425364"
                  className="mt-1 block text-sm text-slate-300 transition-colors hover:text-blue-400"
                >
                  +91 98764 25364
                </a>
              </motion.div>

            </div>

          </motion.div>

        </motion.div>

        {/* ================= CTA STRIP ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-transparent p-6"
        >

          {/* Moving glow */}
          <motion.div
            className="absolute -left-20 top-0 h-full w-40 bg-blue-500/10 blur-3xl"
            animate={{
              x: [0, 700, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

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
              className="btn-primary group whitespace-nowrap"
            >
              Contact Us

              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </Link>

          </div>

        </motion.div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm md:flex-row md:items-center md:justify-between"
        >

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

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;