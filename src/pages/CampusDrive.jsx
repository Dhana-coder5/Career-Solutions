import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CampusDrive() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const activities = [
    {
      number: "01",
      title: "Campus Hiring Drives",
      description:
        "Organize structured recruitment drives to connect students and graduates with potential career opportunities.",
    },
    {
      number: "02",
      title: "Pre-Placement Activities",
      description:
        "Support students with activities that help them understand recruitment expectations and workplace opportunities.",
    },
    {
      number: "03",
      title: "Candidate Registration",
      description:
        "Coordinate candidate information and registration to create an organized campus hiring process.",
    },
    {
      number: "04",
      title: "Talent Screening",
      description:
        "Support the identification and initial screening of candidates based on employer requirements.",
    },
    {
      number: "05",
      title: "Aptitude & Skill Assessment",
      description:
        "Facilitate assessment activities based on the skills and requirements defined for the hiring process.",
    },
    {
      number: "06",
      title: "Interview Coordination",
      description:
        "Help coordinate interview schedules and communication between employers, institutions and candidates.",
    },
    {
      number: "07",
      title: "Fresher Recruitment",
      description:
        "Connect organizations with fresh graduates looking to begin their professional careers.",
    },
    {
      number: "08",
      title: "Institution Collaboration",
      description:
        "Work with educational institutions to support structured campus recruitment initiatives.",
    },
    {
      number: "09",
      title: "Bulk Graduate Hiring",
      description:
        "Support employers with larger fresher hiring requirements through organized recruitment activities.",
    },
    {
      number: "10",
      title: "Campus-to-Corporate Support",
      description:
        "Help create a smoother transition for students moving from academic environments into professional careers.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      text: "Understand the employer's hiring requirements.",
    },
    {
      number: "02",
      title: "Connect",
      text: "Coordinate with institutions and eligible candidates.",
    },
    {
      number: "03",
      title: "Recruit",
      text: "Conduct structured screening and recruitment activities.",
    },
    {
      number: "04",
      title: "Transition",
      text: "Support candidates as they move toward professional opportunities.",
    },
  ];

  const audiences = [
    {
      label: "For Employers",
      title: "Access emerging talent",
      text: "Connect with graduates and emerging professionals through structured campus recruitment activities.",
      link: "/employers",
      linkText: "Hire Talent",
    },
    {
      label: "For Institutions",
      title: "Strengthen placement support",
      text: "Collaborate on campus recruitment initiatives that connect students with potential employers.",
      link: "/contact",
      linkText: "Partner With Us",
    },
    {
      label: "For Students",
      title: "Start your career journey",
      text: "Explore fresher opportunities and prepare yourself for the transition from campus to corporate life.",
      link: "/jobs/fresher",
      linkText: "Find Fresher Jobs",
    },
  ];

  return (
    <div className="dark-page overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Floating glows */}

        <motion.div
          className="blue-orb -left-40 top-10"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="blue-orb -right-32 top-20 opacity-60"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stars */}

        <motion.span
          className="star absolute left-[10%] top-[25%]"
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
          className="star absolute right-[15%] top-[22%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.span
          className="tiny-star absolute right-[30%] top-[35%]"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative py-24 md:py-32">

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="max-w-4xl"
          >

            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="section-label"
            >
              Campus Drives
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Connecting campus talent with
              <span className="gradient-text">
                {" "}career opportunities.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              We support institutions, employers and students through
              structured campus recruitment activities designed to connect
              emerging talent with meaningful career opportunities.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  Organize a Campus Drive

                  <motion.span
                    className="inline-block"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  to="/jobs/fresher"
                  className="btn-secondary"
                >
                  Explore Fresher Jobs
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 md:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <span className="section-label">
                Campus to Corporate
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Helping students take the first step toward their careers.
              </h2>

            </motion.div>


            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p className="text-base leading-8 text-slate-400">
                Campus recruitment creates an important connection between
                educational institutions and the professional world. Our
                approach focuses on making that connection structured and
                meaningful.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                From candidate registration and screening to interview
                coordination and recruitment drives, we support different
                stages of the campus hiring journey.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="dark-section-alt border-y border-white/5">

        <div className="page-container py-20 md:py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-2xl text-center"
          >

            <span className="section-label">
              What We Support
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Campus recruitment solutions
            </h2>

            <p className="mt-5 text-slate-400">
              Structured support for institutions, employers and students
              throughout the campus hiring process.
            </p>

          </motion.div>


          {/* Activity cards */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {activities.map((activity) => (

              <motion.article
                key={activity.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.96,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="premium-card group p-7"
              >

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <motion.span
                      className="text-sm font-bold tracking-widest text-blue-500"
                      whileHover={{
                        x: 5,
                      }}
                    >
                      {activity.number}
                    </motion.span>

                    <motion.span
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      ↗
                    </motion.span>

                  </div>

                  <motion.h3
                    className="mt-7 text-xl font-semibold text-white"
                    whileHover={{
                      x: 4,
                    }}
                  >
                    {activity.title}
                  </motion.h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {activity.description}
                  </p>

                  {/* Animated bottom line */}

                  <motion.div
                    className="mt-6 h-px bg-gradient-to-r from-blue-500/40 to-transparent"
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 md:py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-2xl text-center"
          >

            <span className="section-label">
              How It Works
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              A structured campus hiring journey
            </h2>

          </motion.div>


          <div className="relative mt-14">

            {/* Connecting line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1.2,
              }}
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-gradient-to-r from-transparent via-blue-500/40 to-transparent md:block"
            />


            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid gap-8 md:grid-cols-4"
            >

              {processSteps.map((step, index) => (

                <motion.div
                  key={step.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative text-center"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/10 text-sm font-bold text-blue-400 shadow-lg shadow-blue-500/5"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="mt-5 font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THREE AUDIENCES
      ===================================================== */}

      <section className="dark-section-alt border-y border-white/5">

        <div className="page-container py-20 md:py-28">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-3"
          >

            {audiences.map((audience, index) => (

              <motion.div
                key={audience.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 45,
                    x: index === 0 ? -30 : index === 2 ? 30 : 0,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="premium-card group p-7"
              >

                <span className="section-label">
                  {audience.label}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {audience.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {audience.text}
                </p>

                <Link
                  to={audience.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
                >
                  {audience.linkText}

                  <motion.span
                    className="inline-block"
                    whileHover={{
                      x: 4,
                    }}
                  >
                    →
                  </motion.span>
                </Link>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden">

        <motion.div
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small floating stars */}

        <motion.span
          className="star absolute left-[15%] top-[30%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[15%] top-[40%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <div className="page-container relative py-20 md:py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16"
          >

            {/* CTA glow */}

            <motion.div
              className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />

            <div className="relative">

              <span className="section-label">
                Build Better Connections
              </span>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl"
              >
                Ready to connect campus talent with opportunity?
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300"
              >
                Whether you are an employer, institution or candidate, let's
                create meaningful connections between education and employment.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                }}
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
              >

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <Link
                    to="/contact"
                    className="btn-primary group"
                  >
                    Get Started

                    <motion.span
                      className="inline-block"
                      whileHover={{
                        x: 5,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <Link
                    to="/jobs/fresher"
                    className="btn-secondary"
                  >
                    View Fresher Jobs
                  </Link>
                </motion.div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default CampusDrive;