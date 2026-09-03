import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function JobCategory() {
  const { category } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const jobs = {
    it: [
      {
        title: "Software Developer",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Opportunities for candidates interested in software development and technology roles.",
      },
      {
        title: "Frontend Developer",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Build modern web interfaces using frontend technologies and frameworks.",
      },
      {
        title: "Backend Developer",
        type: "IT",
        experience: "Experienced",
        description:
          "Work on backend applications, APIs, databases and server-side systems.",
      },
    ],

    "non-it": [
      {
        title: "Customer Support Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Customer-facing opportunities across support and service operations.",
      },
      {
        title: "Operations Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Opportunities across business operations and process management.",
      },
      {
        title: "Sales Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Roles for candidates interested in sales, customer engagement and business development.",
      },
    ],

    banking: [
      {
        title: "Banking Operations Executive",
        type: "Banking",
        experience: "Fresher / Experienced",
        description:
          "Opportunities across banking operations, documentation and customer service.",
      },
      {
        title: "Relationship Executive",
        type: "Banking",
        experience: "Experienced",
        description:
          "Customer relationship and financial services opportunities.",
      },
      {
        title: "Banking Sales Executive",
        type: "Banking",
        experience: "Fresher / Experienced",
        description:
          "Roles focused on customer acquisition, financial products and sales.",
      },
    ],

    fresher: [
      {
        title: "Graduate Trainee",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Entry-level opportunities for graduates beginning their professional journey.",
      },
      {
        title: "Junior Developer",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Technology opportunities for candidates starting their development career.",
      },
      {
        title: "Process Associate",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Entry-level roles across business process and customer support functions.",
      },
    ],

    experienced: [
      {
        title: "Senior Software Developer",
        type: "IT",
        experience: "2+ Years",
        description:
          "Technology opportunities for professionals with development experience.",
      },
      {
        title: "Senior Operations Executive",
        type: "Non-IT",
        experience: "2+ Years",
        description:
          "Experienced professionals can explore operations and business support roles.",
      },
      {
        title: "Team Lead",
        type: "Multiple Industries",
        experience: "3+ Years",
        description:
          "Leadership opportunities for professionals ready to take greater responsibility.",
      },
    ],

    "walk-in": [
      {
        title: "Walk-in Recruitment Drive",
        type: "Walk-in",
        experience: "As Required",
        description:
          "Explore current walk-in opportunities and recruitment drives.",
      },
      {
        title: "Customer Support Walk-in",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Walk-in opportunities across customer support and service roles.",
      },
      {
        title: "IT Recruitment Drive",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Explore technology-focused recruitment opportunities and hiring drives.",
      },
    ],
  };

  const categoryTitles = {
    it: "IT Jobs",
    "non-it": "Non-IT Jobs",
    banking: "Banking Jobs",
    fresher: "Fresher Jobs",
    experienced: "Experienced Jobs",
    "walk-in": "Walk-in Jobs",
  };

  const categoryDescriptions = {
    it: "Explore technology opportunities across development, support and software roles.",
    "non-it":
      "Discover opportunities across operations, sales, customer service and business functions.",
    banking:
      "Explore career opportunities across banking, financial services and operations.",
    fresher:
      "Start your career with opportunities designed for graduates and entry-level candidates.",
    experienced:
      "Take the next step in your career with opportunities for experienced professionals.",
    "walk-in":
      "Explore walk-in opportunities and recruitment drives across different roles.",
  };

  const currentJobs = jobs[category] || [];
  const title = categoryTitles[category] || "Job Opportunities";

  const description =
    categoryDescriptions[category] ||
    "Explore available career opportunities with Career Solutions.";

  /* ================= ANIMATION VARIANTS ================= */

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
        staggerChildren: 0.14,
      },
    },
  };

  return (
    <div className="dark-page">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Blue glows */}
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
          className="blue-orb -right-32 top-20 opacity-60"
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

        {/* Stars */}
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
          className="star absolute right-[18%] top-[20%]"
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
          className="star star-large absolute right-[8%] bottom-[18%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Back button */}
            <motion.div variants={fadeUp}>
              <Link
                to="/jobs"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
              >
                <motion.span
                  whileHover={{ x: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  ←
                </motion.span>

                Back to Jobs
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8"
            >
              <span className="section-label">
                Career Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= JOBS ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          {currentJobs.length > 0 ? (
            <>
              {/* Section heading */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
              >
                <div>
                  <span className="section-label">
                    Available Roles
                  </span>

                  <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                    Explore current opportunities
                  </h2>
                </div>

                <motion.p
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  className="text-sm text-slate-500"
                >
                  {currentJobs.length} opportunities listed
                </motion.p>
              </motion.div>

              {/* Job cards */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="mt-12 space-y-5"
              >
                {currentJobs.map((job, index) => (
                  <motion.article
                    key={`${job.title}-${index}`}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="premium-card group relative overflow-hidden p-6 md:p-8"
                  >
                    {/* Hover glow */}
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/15" />

                    <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-3xl">
                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap items-center gap-2"
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
                        >
                          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                            {job.type}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                            {job.experience}
                          </span>
                        </motion.div>

                        {/* Job title */}
                        <motion.h3
                          className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 md:text-2xl"
                          whileHover={{
                            x: 5,
                          }}
                        >
                          {job.title}
                        </motion.h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                          {job.description}
                        </p>
                      </div>

                      {/* Apply button */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          x: 3,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                      >
                        <Link
                          to="/contact"
                          className="btn-primary whitespace-nowrap"
                        >
                          Apply / Enquire

                          <motion.span
                            whileHover={{
                              x: 6,
                            }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Animated bottom line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                      initial={{
                        width: 0,
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                  </motion.article>
                ))}
              </motion.div>
            </>
          ) : (
            /* ================= NOT FOUND ================= */
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mx-auto max-w-2xl py-12 text-center"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400"
              >
                ?
              </motion.div>

              <h2 className="mt-7 text-3xl font-bold text-white">
                Category not found
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                The job category you are looking for is not available.
                Please return to the jobs page and choose another category.
              </p>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link to="/jobs" className="btn-primary mt-7">
                  Browse Jobs
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= CANDIDATE CTA ================= */}
      <section className="relative overflow-hidden border-t border-white/5">
        <motion.div
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shining particles */}
        <motion.span
          className="shine-particle absolute left-[15%] top-[25%]"
          animate={{
            scale: [0.5, 1.5, 0.5],
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
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16"
          >
            <span className="section-label">
              Your Next Opportunity
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Don't see the right role?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Get in touch with us and share your profile. We can help you
              explore opportunities that match your skills and career goals.
            </p>

            <motion.div
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
              >
                <Link to="/contact" className="btn-primary">
                  Contact Us
                  <span>→</span>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
              >
                <Link to="/jobs" className="btn-secondary">
                  Browse All Jobs
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default JobCategory;