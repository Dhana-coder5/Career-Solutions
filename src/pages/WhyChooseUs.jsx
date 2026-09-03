import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const strengths = [
  {
    number: "01",
    title: "Industry-Focused Recruitment",
    text: "Recruitment support designed around different industries, roles, skills, and workforce requirements.",
  },
  {
    number: "02",
    title: "Verified Candidate Profiles",
    text: "Candidate information can be reviewed against relevant qualifications and role requirements.",
  },
  {
    number: "03",
    title: "Fast Candidate Sourcing",
    text: "A focused sourcing approach helps employers connect with suitable talent efficiently.",
  },
  {
    number: "04",
    title: "Fresher & Experienced Talent",
    text: "Support for both early-career candidates and experienced professionals across multiple roles.",
  },
  {
    number: "05",
    title: "Bulk Hiring Capability",
    text: "Recruitment support for organizations with larger workforce and multiple-position requirements.",
  },
  {
    number: "06",
    title: "Dedicated Recruitment Support",
    text: "Coordinated assistance throughout the recruitment journey from requirement to selection.",
  },
  {
    number: "07",
    title: "Employer & Candidate Assistance",
    text: "A balanced approach that supports both organizations and candidates throughout the hiring process.",
  },
  {
    number: "08",
    title: "IT, Non-IT & Banking Expertise",
    text: "Recruitment coverage across key sectors with an understanding of different talent requirements.",
  },
];

const expertise = [
  {
    short: "IT",
    title: "IT & Technology",
    text: "Technology roles across development, support, testing, and related areas.",
  },
  {
    short: "NI",
    title: "Non-IT",
    text: "Recruitment support for business, operations, BPO, sales, and other functions.",
  },
  {
    short: "BF",
    title: "Banking & Finance",
    text: "Talent support for banking, financial services, and related opportunities.",
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="dark-page min-h-screen overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/5">

        {/* Background Glows */}
        <div className="blue-orb -left-40 top-10 opacity-30" />
        <div className="blue-orb -right-40 bottom-0 opacity-25" />

        {/* Floating Stars */}
        <motion.span
          className="star star-small absolute left-[8%] top-[20%]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[15%] top-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.8,
          }}
        />

        <motion.span
          className="star star-large absolute bottom-[20%] left-[25%]"
          animate={{
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        {/* Small Moon */}
        <motion.div
          className="small-space-moon absolute right-[8%] top-[20%] opacity-40"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="page-container relative py-24 md:py-32">

          <motion.div
            className="max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.span
              variants={fadeUp}
              className="section-label"
            >
              Why Career Solutions
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Recruitment with a
              <span className="gradient-text">
                {" "}people-first approach.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              We bring together recruitment expertise, structured processes,
              and industry understanding to create meaningful connections
              between talent and opportunity.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link to="/employers" className="btn-primary">
                  Hire Talent →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link to="/jobs" className="btn-secondary">
                  Find Jobs
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="section-label">
                What Sets Us Apart
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Built around people, requirements, and results.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Every organization has different hiring requirements, and every
                candidate has a different career journey. Our approach is
                designed to understand those differences.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                From talent sourcing and screening to interview coordination and
                joining support, we focus on creating a clear and organized
                recruitment experience.
              </p>
            </motion.div>

            {/* Right Expertise Card */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="premium-card blue-glow p-8 md:p-10"
            >

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Our Expertise
              </p>

              <motion.div
                className="mt-7 grid grid-cols-3 gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {expertise.map((item) => (
                  <motion.div
                    key={item.short}
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 text-center transition-all duration-300"
                  >
                    <motion.div
                      className="text-2xl font-bold text-blue-400"
                      whileHover={{
                        scale: 1.15,
                        rotate: 5,
                      }}
                    >
                      {item.short}
                    </motion.div>

                    <div className="mt-2 text-xs font-medium leading-5 text-slate-400">
                      {item.title}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-7 border-t border-white/5 pt-6"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
              >
                <p className="text-sm leading-6 text-slate-400">
                  Connecting talent and employers across diverse recruitment
                  requirements.
                </p>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          STRENGTHS
      ========================================================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-label justify-center">
              Our Strengths
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Why organizations and candidates choose us.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our recruitment capabilities are designed to support different
              hiring needs while keeping the experience clear and focused.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-5 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {strengths.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >

                {/* Hover Glow */}
                <motion.div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                />

                <div className="relative flex gap-5">

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 6,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-400"
                  >
                    {item.number}
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>

                </div>

                {/* Animated Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                  initial={{
                    width: "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="max-w-3xl"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-label">
              Recruitment Expertise
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Coverage across key talent segments.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our recruitment services are structured to address different
              sectors, candidate profiles, and employer requirements.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.short}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="premium-card group relative overflow-hidden p-7 md:p-8"
              >

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: -6,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-lg font-bold text-blue-400"
                >
                  {item.short}
                </motion.div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition-transform duration-300 group-hover:translate-x-2"
                >
                  Explore Services →
                </Link>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                  initial={{
                    width: "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {/* Employers */}
            <motion.div
              variants={fadeLeft}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="premium-card group relative overflow-hidden p-8 md:p-10"
            >

              <motion.div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <div className="relative">

                <span className="section-label">
                  For Employers
                </span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                  A recruitment partner for your hiring needs.
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Whether you need support for a specific role or multiple
                  positions, we can understand your requirement and coordinate
                  the recruitment journey.
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                  }}
                  className="inline-block"
                >
                  <Link to="/employers" className="btn-primary mt-8">
                    Employer Services →
                  </Link>
                </motion.div>

              </div>
            </motion.div>

            {/* Candidates */}
            <motion.div
              variants={fadeRight}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="premium-card group relative overflow-hidden p-8 md:p-10"
            >

              <motion.div
                className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              <div className="relative">

                <span className="section-label">
                  For Candidates
                </span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                  A pathway toward your next opportunity.
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Explore suitable opportunities across IT, Non-IT, Banking,
                  fresher, experienced, and other recruitment categories.
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                  }}
                  className="inline-block"
                >
                  <Link to="/jobs" className="btn-secondary mt-8">
                    Explore Opportunities →
                  </Link>
                </motion.div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden py-20 md:py-28">

        <motion.div
          className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        {/* Floating Stars */}
        <motion.span
          className="star absolute left-[15%] top-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star star-large absolute right-[15%] bottom-[25%]"
          animate={{
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative">

          <motion.div
            className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12"
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
            }}
          >

            <motion.span
              className="section-label justify-center"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Let's Build Connections
            </motion.span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              The right connection can change what comes next.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Start your recruitment journey with Career Solutions and move
              toward the right opportunity or the right talent.
            </p>

            <motion.div
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link to="/contact" className="btn-primary">
                  Get Started →
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link to="/about" className="btn-secondary">
                  About Career Solutions
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default WhyChooseUs;