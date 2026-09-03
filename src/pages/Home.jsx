import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    number: "01",
    title: "IT Recruitment",
    description:
      "Connect with skilled developers, engineers, analysts and technology professionals.",
    path: "/services",
  },
  {
    number: "02",
    title: "Non-IT Recruitment",
    description:
      "Find dependable talent across BPO, HR, Finance, Sales, Operations and more.",
    path: "/services",
  },
  {
    number: "03",
    title: "Banking Recruitment",
    description:
      "Source professionals for banking operations, sales, finance and customer-facing roles.",
    path: "/services",
  },
  {
    number: "04",
    title: "Campus Recruitment",
    description:
      "Build your future workforce by connecting employers with emerging graduate talent.",
    path: "/campus-drive",
  },
  {
    number: "05",
    title: "Bulk Hiring",
    description:
      "Scale your recruitment process with structured and efficient bulk hiring support.",
    path: "/employers",
  },
  {
    number: "06",
    title: "Vendor Partnership",
    description:
      "Collaborate with us for candidate sourcing, staffing and recruitment process support.",
    path: "/vendor-partnership",
  },
];

const industries = [
  "IT & Technology",
  "Banking & Finance",
  "Healthcare",
  "Education",
  "BPO & Customer Service",
  "Retail",
  "Logistics",
  "Manufacturing",
  "E-Commerce",
  "Professional Services",
];

const strengths = [
  "Industry-focused recruitment",
  "Verified candidate profiles",
  "Fast candidate sourcing",
  "Fresher & experienced talent",
  "Bulk hiring capability",
  "Dedicated recruitment support",
  "Employer & candidate assistance",
  "IT, Non-IT & Banking expertise",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your hiring requirements and workforce needs.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "Our team identifies suitable candidates from relevant talent pools.",
  },
  {
    number: "03",
    title: "Screen",
    description:
      "Profiles are reviewed against the role and requirement.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Qualified candidates are connected with the right opportunities.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Astronaut() {
  return (
    <motion.div
      className="absolute right-[8%] top-[18%] z-20"
      animate={{
        y: [0, -18, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="100"
        height="130"
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Helmet */}
        <circle
          cx="50"
          cy="30"
          r="24"
          fill="#E2E8F0"
          fillOpacity="0.95"
        />

        <rect
          x="32"
          y="19"
          width="36"
          height="23"
          rx="11"
          fill="#0F172A"
        />

        <rect
          x="37"
          y="23"
          width="26"
          height="13"
          rx="6"
          fill="#2563EB"
          fillOpacity="0.7"
        />

        {/* Body */}
        <rect
          x="32"
          y="49"
          width="36"
          height="45"
          rx="14"
          fill="#F8FAFC"
        />

        <rect
          x="42"
          y="57"
          width="16"
          height="18"
          rx="4"
          fill="#2563EB"
          fillOpacity="0.8"
        />

        {/* Arms */}
        <rect
          x="20"
          y="52"
          width="12"
          height="35"
          rx="6"
          transform="rotate(12 20 52)"
          fill="#CBD5E1"
        />

        <rect
          x="68"
          y="52"
          width="12"
          height="35"
          rx="6"
          transform="rotate(-12 68 52)"
          fill="#CBD5E1"
        />

        {/* Legs */}
        <rect
          x="34"
          y="88"
          width="13"
          height="31"
          rx="6"
          fill="#CBD5E1"
        />

        <rect
          x="53"
          y="88"
          width="13"
          height="31"
          rx="6"
          fill="#CBD5E1"
        />

        {/* Backpack */}
        <rect
          x="25"
          y="55"
          width="8"
          height="28"
          rx="4"
          fill="#64748B"
        />
      </svg>
    </motion.div>
  );
}

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const { scrollYProgress } = useScroll();

  const rawHeroY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -100]
  );

  const heroY = useSpring(rawHeroY, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div className="dark-page overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background glow */}
        <motion.div
          className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[-180px] top-[30%] h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stars */}
        <span className="star star-small left-[8%] top-[18%]" />
        <span className="star left-[17%] top-[72%]" />
        <span className="star star-large left-[31%] top-[22%]" />
        <span className="star-small star left-[43%] top-[78%]" />
        <span className="star left-[55%] top-[12%]" />
        <span className="star-large star left-[69%] top-[34%]" />
        <span className="star-small star left-[80%] top-[76%]" />
        <span className="star left-[91%] top-[20%]" />

        {/* Shooting stars */}
        <span className="shooting-star left-[8%] top-[20%]" />
        <span
          className="shooting-star left-[58%] top-[10%]"
          style={{ animationDelay: "4s" }}
        />

        {/* Moon */}
        <motion.div
          className="space-moon absolute -right-20 top-[58%] scale-90 opacity-30"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Planet */}
        <motion.div
          className="space-planet absolute left-[3%] top-[65%] scale-50 opacity-30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="page-container relative z-10 flex min-h-[calc(100vh-80px)] items-center">

          <div className="grid w-full items-center gap-12 py-20 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >

              <motion.div variants={fadeUp}>
                <span className="section-label">
                  Career Solutions Pvt Ltd
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Hire Talent.
                <br />
                <span className="gradient-text">
                  Build Careers.
                </span>
                <br />
                Grow Together.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Connecting Employers with the Right Talent Across
                IT, Non-IT & Banking Sectors.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  to="/employers"
                  className="btn-primary group"
                >
                  Hire Talent
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/jobs"
                  className="btn-secondary group"
                >
                  Find Jobs
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400"
              >
                {["IT", "Non-IT", "Banking", "Campus"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item} Recruitment
                    </span>
                  )
                )}
              </motion.div>

            </motion.div>

            {/* RIGHT SPACE VISUAL */}
            <motion.div
              style={{ y: heroY }}
              className="relative hidden h-[600px] lg:block"
            >

              {/* Large orbital rings */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center glow */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[90px]"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Rocket */}
              <motion.div
                className="absolute bottom-[15%] left-[12%] z-20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, 3, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-rocket">
                  <div className="space-rocket-body">
                    <div className="space-rocket-window" />
                  </div>
                  <div className="space-rocket-flame" />
                </div>
              </motion.div>

              {/* Astronaut */}
              <Astronaut />

              {/* Main glass card */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="premium-card rounded-3xl p-8 text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20">
                    <span className="text-3xl">✦</span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Career Solutions
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Connecting Futures
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    People, opportunities and businesses connected
                    through meaningful recruitment.
                  </p>

                </div>
              </motion.div>

              {/* Floating card - People */}
              <motion.div
                className="absolute right-[2%] top-[18%] z-30"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="premium-card rounded-2xl px-5 py-4">
                  <p className="text-xs text-slate-400">
                    Talent
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Right People
                  </p>
                </div>
              </motion.div>

              {/* Floating card - Careers */}
              <motion.div
                className="absolute bottom-[18%] right-[5%] z-30"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="premium-card rounded-2xl px-5 py-4">
                  <p className="text-xs text-slate-400">
                    Opportunities
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Right Careers
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className="dark-section relative py-24">

        <div className="page-container">

          <div
            data-aos="fade-up"
            className="mx-auto max-w-4xl text-center"
          >
            <span className="section-label">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Recruitment built around{" "}
              <span className="gradient-text">
                people and possibilities.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Career Solutions connects employers, candidates and
              institutions through structured recruitment solutions
              designed to create meaningful long-term connections.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500">
              From fresh graduates beginning their careers to
              experienced professionals and organizations building
              their teams, we help create the right connection.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn More About Us →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="dark-section-alt relative py-24">

        <div className="page-container">

          <div
            data-aos="fade-right"
            className="max-w-3xl"
          >
            <span className="section-label">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Recruitment solutions for{" "}
              <span className="gradient-text">
                every hiring need.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              From technology and banking to non-IT roles, campus
              recruitment and bulk hiring, our services are designed
              around real workforce requirements.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="premium-card group rounded-3xl p-7"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-blue-500">
                    {service.number}
                  </span>

                  <span className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <Link
                  to={service.path}
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Explore Service →
                </Link>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="dark-section relative py-24">

        <div className="page-container">

          <div
            data-aos="zoom-in"
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-label">
              Industries
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Talent across{" "}
              <span className="gradient-text">
                multiple industries.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Our recruitment expertise extends across diverse
              industries and workforce requirements.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          >

            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                variants={cardAnimation}
                whileHover={{
                  y: -7,
                  scale: 1.03,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.06]"
              >

                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-sm font-medium leading-6 text-slate-300 group-hover:text-white">
                  {industry}
                </p>

              </motion.div>
            ))}

          </motion.div>

          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Explore All Industries →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="dark-section-alt relative py-24">

        <div className="page-container">

          <div
            data-aos="fade-up"
            className="max-w-3xl"
          >
            <span className="section-label">
              Why Career Solutions
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Built for{" "}
              <span className="gradient-text">
                better connections.
              </span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                }}
                className="premium-card rounded-2xl p-6"
              >

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-sm font-medium leading-6 text-slate-300">
                  {strength}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="dark-section relative py-24">

        <div className="page-container">

          <div
            data-aos="fade-up"
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-label">
              Our Process
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Simple process.{" "}
              <span className="gradient-text">
                Strong results.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A structured recruitment journey designed to make
              hiring easier and opportunities more accessible.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >

            {/* Connecting line */}
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent lg:block" />

            {process.map((step) => (
              <motion.div
                key={step.number}
                variants={cardAnimation}
                className="relative z-10"
              >

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  className="premium-card rounded-3xl p-7 text-center"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-lg font-bold text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                </motion.div>

              </motion.div>
            ))}

          </motion.div>

          <div
            data-aos="fade-up"
            className="mt-12 text-center"
          >
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Start a Conversation →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          DUAL CTA
      ========================================================= */}

      <section className="dark-section-alt relative py-20">

        <div className="page-container">

          <div className="grid gap-6 md:grid-cols-2">

            <motion.div
              data-aos="fade-right"
              whileHover={{ scale: 1.02 }}
              className="premium-card rounded-3xl p-8 md:p-10"
            >

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                For Employers
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Build your team with the right talent.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Tell us what you need and let us help you connect
                with suitable candidates.
              </p>

              <Link
                to="/employers"
                className="btn-primary mt-7"
              >
                Hire Talent →
              </Link>

            </motion.div>

            <motion.div
              data-aos="fade-left"
              whileHover={{ scale: 1.02 }}
              className="premium-card rounded-3xl p-8 md:p-10"
            >

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                For Candidates
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Find the opportunity that moves you forward.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Explore opportunities across IT, Non-IT, Banking,
                Fresher and Experienced roles.
              </p>

              <Link
                to="/jobs"
                className="btn-secondary mt-7"
              >
                Explore Jobs →
              </Link>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden py-28">

        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          data-aos="zoom-in"
          className="page-container relative z-10 text-center"
        >

          <span className="section-label">
            Let's Build What's Next
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The right connection can change a{" "}
            <span className="gradient-text">
              career
            </span>{" "}
            or a{" "}
            <span className="gradient-text">
              business.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you are hiring, looking for your next opportunity,
            or interested in partnering with us, let's start the
            conversation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="btn-primary group"
            >
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/jobs"
              className="btn-secondary"
            >
              Browse Jobs
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;