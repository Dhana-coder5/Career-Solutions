import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    number: "01",
    title: "Understand Requirements",
    text: "We begin by understanding the employer's hiring requirements, roles, skills, experience, and workforce needs.",
  },
  {
    number: "02",
    title: "Talent Sourcing",
    text: "Relevant candidates are identified through suitable recruitment and talent sourcing channels.",
  },
  {
    number: "03",
    title: "Candidate Screening",
    text: "Candidate profiles are reviewed against the required qualifications, skills, and role expectations.",
  },
  {
    number: "04",
    title: "Shortlisting",
    text: "Suitable profiles are shortlisted and organized according to the employer's requirements.",
  },
  {
    number: "05",
    title: "Interview Coordination",
    text: "We support communication and coordination between candidates and employers throughout the interview stage.",
  },
  {
    number: "06",
    title: "Candidate Evaluation",
    text: "Candidates progress through the employer's evaluation and selection process.",
  },
  {
    number: "07",
    title: "Selection & Offer",
    text: "Selected candidates move forward with the employer's offer and onboarding procedures.",
  },
  {
    number: "08",
    title: "Joining Support",
    text: "We provide coordination support through the final stages of the recruitment journey.",
  },
];

const employerJourney = [
  "Share your requirement",
  "Receive suitable profiles",
  "Coordinate interviews",
  "Select the right candidates",
];

const candidateJourney = [
  "Explore suitable opportunities",
  "Share your profile",
  "Complete the selection process",
  "Move toward your career goal",
];

const benefits = [
  {
    title: "Structured",
    text: "A clear recruitment flow from requirement to joining.",
  },
  {
    title: "Focused",
    text: "Hiring activities are aligned with role-specific requirements.",
  },
  {
    title: "Coordinated",
    text: "Communication between stakeholders remains organized.",
  },
  {
    title: "Flexible",
    text: "The approach can adapt to different hiring requirements.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
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
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function RecruitmentProcess() {
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
          className="star star-small absolute left-[8%] top-[25%]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[15%] top-[30%]"
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
          className="space-moon absolute -right-20 top-[35%] scale-50 opacity-20"
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
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="section-label">
              Our Recruitment Process
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              A structured path from
              <span className="gradient-text">
                {" "}requirement to hiring.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              A clear and coordinated recruitment journey designed to connect
              employers with suitable talent while keeping the process
              organized and efficient.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/employers" className="btn-primary">
                  Start Hiring →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/jobs" className="btn-secondary">
                  Find Jobs
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="section-label justify-center">
              How We Work
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Eight steps. One clear journey.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              From understanding the requirement to supporting the joining
              stage, every step is designed to keep recruitment focused and
              coordinated.
            </p>
          </motion.div>

          <div className="relative mt-16">

            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/60 to-transparent lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-8 lg:space-y-12">

              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    className={`relative flex ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }`}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                  >

                    <div className="w-full lg:w-[46%]">

                      <motion.div
                        className="premium-card group relative overflow-hidden p-6 md:p-8"
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >

                        {/* Card shine */}
                        <motion.div
                          className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-xl"
                          animate={{
                            x: [0, 500],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 4,
                          }}
                        />

                        <div className="relative flex items-start gap-5">

                          <motion.div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-400"
                            whileHover={{
                              scale: 1.15,
                              rotate: 8,
                            }}
                          >
                            {step.number}
                          </motion.div>

                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {step.text}
                            </p>
                          </div>

                        </div>
                      </motion.div>

                    </div>

                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-brand-950 bg-blue-500 lg:block"
                      animate={{
                        scale: [1, 1.35, 1],
                        boxShadow: [
                          "0 0 10px rgba(59,130,246,0.3)",
                          "0 0 30px rgba(59,130,246,0.9)",
                          "0 0 10px rgba(59,130,246,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />

                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* ================= EMPLOYER / CANDIDATE ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* Employer */}
            <motion.div
              variants={fadeUp}
              className="premium-card group relative overflow-hidden p-8 md:p-10"
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
            >

              <motion.div
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              <div className="relative">

                <span className="section-label">
                  For Employers
                </span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                  Build your team with confidence.
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Share your hiring requirements with us and let our recruitment
                  process support your search for suitable talent.
                </p>

                <div className="mt-8 space-y-4">

                  {employerJourney.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <motion.span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400"
                        whileHover={{
                          scale: 1.2,
                        }}
                      >
                        {index + 1}
                      </motion.span>

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}

                </div>

                <motion.div
                  className="mt-8 inline-block"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Link to="/employers" className="btn-primary">
                    Hire Talent →
                  </Link>
                </motion.div>

              </div>
            </motion.div>

            {/* Candidate */}
            <motion.div
              variants={fadeUp}
              className="premium-card group relative overflow-hidden p-8 md:p-10"
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
            >

              <motion.div
                className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              <div className="relative">

                <span className="section-label">
                  For Candidates
                </span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                  Move toward your next opportunity.
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Explore opportunities that match your skills, experience, and
                  career direction.
                </p>

                <div className="mt-8 space-y-4">

                  {candidateJourney.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <motion.span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400"
                        whileHover={{
                          scale: 1.2,
                        }}
                      >
                        {index + 1}
                      </motion.span>

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}

                </div>

                <motion.div
                  className="mt-8 inline-block"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Link to="/jobs" className="btn-secondary">
                    Explore Jobs →
                  </Link>
                </motion.div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="max-w-3xl"
            data-aos="fade-right"
          >
            <span className="section-label">
              Why Our Process
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Recruitment built around clarity and coordination.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A structured approach helps keep employers, candidates, and
              recruitment teams aligned throughout the hiring journey.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="premium-card group relative overflow-hidden p-6"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >

                <motion.div
                  className="mb-5 h-1 w-10 rounded-full bg-blue-500"
                  whileHover={{
                    width: 70,
                  }}
                />

                <motion.div
                  className="absolute right-5 top-5 text-4xl font-bold text-blue-500/5"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  0{index + 1}
                </motion.div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden py-20 md:py-28">

        <motion.div
          className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star star-large absolute left-[12%] top-[30%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
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
            scale: [0.8, 1.5, 0.8],
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
              y: 50,
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
              Ready to Begin?
            </motion.span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Let's connect the right people with the right opportunities.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you are hiring talent or looking for your next
              opportunity, take the next step with Career Solutions.
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
                  View Services
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default RecruitmentProcess;