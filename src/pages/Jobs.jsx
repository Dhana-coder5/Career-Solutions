import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Jobs() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const categories = [
    {
      number: "01",
      title: "IT Jobs",
      description:
        "Explore opportunities across software development, testing, support, infrastructure and other technology roles.",
      path: "/jobs/it",
      tags: ["Software", "Development", "Support"],
    },
    {
      number: "02",
      title: "Non-IT Jobs",
      description:
        "Discover opportunities across operations, administration, customer service, sales and other business functions.",
      path: "/jobs/non-it",
      tags: ["Operations", "Sales", "Support"],
    },
    {
      number: "03",
      title: "Banking Jobs",
      description:
        "Find career opportunities across banking, financial services, operations and customer-facing roles.",
      path: "/jobs/banking",
      tags: ["Banking", "Finance", "Operations"],
    },
    {
      number: "04",
      title: "Fresher Jobs",
      description:
        "Start your professional journey with opportunities designed for graduates and entry-level candidates.",
      path: "/jobs/fresher",
      tags: ["Freshers", "Graduates", "Entry Level"],
    },
    {
      number: "05",
      title: "Experienced Jobs",
      description:
        "Explore opportunities for professionals looking to grow their careers and take on new challenges.",
      path: "/jobs/experienced",
      tags: ["Professionals", "Growth", "Careers"],
    },
    {
      number: "06",
      title: "Walk-in Jobs",
      description:
        "Explore walk-in opportunities and stay prepared for upcoming recruitment drives and hiring events.",
      path: "/jobs/walk-in",
      tags: ["Walk-in", "Hiring", "Drives"],
    },
  ];

  const journey = [
    {
      number: "01",
      title: "Explore",
      description:
        "Browse opportunities based on your skills and interests.",
    },
    {
      number: "02",
      title: "Apply",
      description:
        "Identify roles that match your profile and career goals.",
    },
    {
      number: "03",
      title: "Grow",
      description:
        "Take the next step toward building your career.",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
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
    <div className="dark-page">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <motion.div
          className="blue-orb -left-40 top-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="blue-orb -right-32 top-24 opacity-60"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating stars */}
        <motion.span
          className="star star-small absolute left-[10%] top-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[18%] top-[18%]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.span
          className="star star-large absolute right-[8%] bottom-[20%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">
                Career Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Find the opportunity that
              <span className="gradient-text">
                {" "}moves you forward.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              Explore job opportunities across IT, Non-IT, Banking and
              different experience levels. Your next career opportunity could
              be closer than you think.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#job-categories"
                className="btn-primary"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Explore Jobs
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  ↓
                </motion.span>
              </motion.a>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
              >
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero summary cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                title: "Multiple Industries",
                label: "Explore",
              },
              {
                title: "Fresher & Experienced",
                label: "Opportunities",
              },
              {
                title: "Find Your Next Step",
                label: "Career Path",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="premium-card group relative overflow-hidden p-6"
              >
                {/* Card glow */}
                <span className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/30" />

                <p className="relative text-sm text-slate-500">
                  {item.label}
                </p>

                <p className="relative mt-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= JOB CATEGORIES ================= */}
      <section
        id="job-categories"
        className="dark-section-alt border-y border-white/5"
      >
        <div className="page-container py-20 md:py-28">
          <div
            data-aos="fade-up"
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Browse Opportunities
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Explore jobs by category
            </h2>

            <p className="mt-5 text-slate-400">
              Choose a category that matches your career goals and explore
              available opportunities.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category) => (
              <motion.div
                key={category.path}
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
              >
                <Link
                  to={category.path}
                  className="premium-card group relative block overflow-hidden p-7"
                >
                  {/* Hover glow */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <motion.span
                        className="text-sm font-bold tracking-widest text-blue-500"
                        whileHover={{
                          scale: 1.15,
                          x: 4,
                        }}
                      >
                        {category.number}
                      </motion.span>

                      <motion.span
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-400"
                        whileHover={{
                          scale: 1.15,
                          rotate: 8,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        ↗
                      </motion.span>
                    </div>

                    <motion.h3
                      className="mt-7 text-xl font-semibold text-white"
                      whileHover={{ x: 5 }}
                    >
                      {category.title}
                    </motion.h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {category.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: tagIndex * 0.08,
                          }}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:text-slate-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-400">
                      View Opportunities

                      <motion.span
                        whileHover={{ x: 8 }}
                      >
                        →
                      </motion.span>
                    </div>

                    {/* Bottom animated line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CANDIDATE JOURNEY ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <span className="section-label">
                Your Career Journey
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                From searching to starting.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                We aim to make your job search simple, focused and connected
                to the right opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 grid gap-4 sm:grid-cols-3"
            >
              {journey.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="premium-card group relative overflow-hidden p-6"
                >
                  <motion.span
                    className="text-sm font-bold text-blue-400"
                    whileHover={{
                      scale: 1.2,
                      x: 5,
                    }}
                  >
                    {item.number}
                  </motion.span>

                  <h3 className="mt-4 font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= EMPLOYER CTA ================= */}
      <section className="relative overflow-hidden">
        <motion.div
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating shine */}
        <motion.span
          className="shine-particle absolute left-[20%] top-[25%]"
          animate={{
            scale: [0.6, 1.5, 0.6],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="shine-particle absolute right-[15%] bottom-[25%]"
          animate={{
            scale: [0.5, 1.4, 0.5],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <div className="page-container relative py-20 md:py-28">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="section-label">
                  For Employers
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Looking for the right talent?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell us about your hiring requirements and explore how our
                  recruitment solutions can support your team.
                </p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/employers"
                  className="btn-primary whitespace-nowrap"
                >
                  Hire Talent
                  <motion.span
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Jobs;