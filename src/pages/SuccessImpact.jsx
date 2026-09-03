import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const impactAreas = [
  {
    number: "01",
    title: "Candidates",
    description:
      "Helping job seekers discover relevant opportunities across different experience levels and career paths.",
    points: [
      "Fresher opportunities",
      "Experienced roles",
      "IT & Non-IT careers",
      "Banking opportunities",
    ],
  },
  {
    number: "02",
    title: "Employers",
    description:
      "Supporting organizations with structured recruitment solutions aligned with their workforce requirements.",
    points: [
      "Talent sourcing",
      "Candidate screening",
      "Bulk hiring support",
      "Recruitment coordination",
    ],
  },
  {
    number: "03",
    title: "Institutions",
    description:
      "Connecting educational institutions with employers through campus recruitment and career-focused activities.",
    points: [
      "Campus drives",
      "Candidate coordination",
      "Industry interaction",
      "Campus-to-corporate support",
    ],
  },
];

const sectors = [
  "IT & Technology",
  "Banking",
  "Healthcare",
  "Education",
  "BPO",
  "Retail",
  "Logistics",
  "Manufacturing",
  "E-commerce",
];

const successItems = [
  {
    title: "Right Opportunity",
    text: "Candidates can move toward roles that better match their skills and career direction.",
  },
  {
    title: "Right Talent",
    text: "Employers can connect with candidates aligned with their hiring requirements.",
  },
  {
    title: "Right Connection",
    text: "Institutions and partners can build stronger links with the employment ecosystem.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
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

function SuccessImpact() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="dark-page min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/5">

        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-40 bottom-0" />

        {/* Floating stars */}
        <motion.span
          className="star star-large absolute left-[8%] top-[28%]"
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
          className="star absolute right-[18%] top-[20%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.div
          className="space-moon absolute -right-24 top-[38%] scale-50 opacity-20"
          animate={{
            y: [-10, 20, -10],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="page-container relative py-24 md:py-32">

          <motion.div
            className="max-w-4xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            <motion.span variants={fadeUp} className="section-label">
              Success & Impact
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Creating connections that
              <span className="gradient-text">
                {" "}move careers forward.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              Our focus is simple — create meaningful connections between
              candidates, employers, and institutions through structured
              recruitment support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/jobs" className="btn-primary">
                  Find Opportunities →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/employers" className="btn-secondary">
                  Hire Talent
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <motion.div
              data-aos="fade-right"
            >
              <span className="section-label">
                Our Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Impact begins with the right connection.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Recruitment is more than matching a resume with a job
                description. It is about understanding requirements, people,
                skills, and long-term career goals.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                We aim to create a smoother journey for candidates and
                employers while supporting institutions and recruitment
                partners.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              className="premium-card blue-glow relative overflow-hidden p-8 md:p-10"
              data-aos="fade-left"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >

              <motion.div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="relative grid grid-cols-2 gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                {["People", "Careers", "Talent", "Growth"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5"
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                        borderColor: "rgba(96,165,250,0.35)",
                      }}
                    >
                      <p className="text-sm text-slate-400">
                        Focus
                      </p>

                      <p className="mt-2 text-xl font-bold text-white">
                        {item}
                      </p>
                    </motion.div>
                  )
                )}

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= IMPACT AREAS ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="section-label justify-center">
              Where We Create Value
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Supporting every side of the recruitment ecosystem.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our services are designed around the needs of candidates,
              employers, and educational institutions.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {impactAreas.map((area) => (
              <motion.div
                key={area.number}
                variants={fadeUp}
                className="premium-card group relative overflow-hidden p-7 md:p-8"
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
              >

                {/* Glow */}
                <motion.div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Number(area.number) * 0.3,
                  }}
                />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <motion.span
                      className="text-sm font-bold tracking-widest text-blue-400"
                      whileHover={{
                        scale: 1.15,
                      }}
                    >
                      {area.number}
                    </motion.span>

                    <motion.span
                      className="text-2xl text-blue-400"
                      whileHover={{
                        x: 8,
                        scale: 1.2,
                      }}
                    >
                      →
                    </motion.span>

                  </div>

                  <motion.h3
                    className="mt-8 text-2xl font-bold text-white"
                    whileHover={{ x: 5 }}
                  >
                    {area.title}
                  </motion.h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-white/5 pt-6">

                    {area.points.map((point, pointIndex) => (
                      <motion.div
                        key={point}
                        className="flex items-center gap-3 text-sm text-slate-300"
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: pointIndex * 0.08,
                        }}
                      >
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-blue-400"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: pointIndex * 0.2,
                          }}
                        />

                        {point}
                      </motion.div>
                    ))}

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ================= SECTOR COVERAGE ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              data-aos="fade-right"
            >
              <span className="section-label">
                Sector Coverage
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Recruitment across diverse industries.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Our recruitment expertise spans multiple sectors, allowing us
                to understand different workforce requirements and candidate
                profiles.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              {sectors.map((sector, index) => (
                <motion.div
                  key={sector}
                  variants={fadeUp}
                  className="premium-card flex min-h-24 items-center justify-center p-5 text-center"
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                >
                  <motion.span
                    className="text-sm font-semibold text-slate-200"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {sector}
                  </motion.span>

                  <motion.span
                    className="absolute"
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                  />
                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= WHAT SUCCESS MEANS ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="section-label justify-center">
              What Success Means
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              More than filling a position.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We believe successful recruitment creates value for everyone
              involved in the journey.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            {successItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="premium-card group relative overflow-hidden p-7"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >

                <motion.div
                  className="absolute -right-10 -top-10 text-7xl font-bold text-blue-500/5"
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  {index + 1}
                </motion.div>

                <motion.div
                  className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400"
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                >
                  {index + 1}
                </motion.div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-20 md:py-28">

        <motion.div
          className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star star-large absolute left-[10%] top-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[12%] bottom-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <div className="page-container relative">

          <motion.div
            className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.01,
            }}
          >

            <motion.span
              className="section-label justify-center"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Be Part of the Journey
            </motion.span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Your next opportunity or your next hire could start here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Connect with Career Solutions and take the next step toward your
              career or hiring goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link to="/contact" className="btn-primary">
                  Get Started →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default SuccessImpact;