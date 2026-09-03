import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Employers() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const services = [
    {
      number: "01",
      title: "Permanent Recruitment",
      description:
        "Find qualified professionals for permanent positions across different business functions.",
    },
    {
      number: "02",
      title: "IT Recruitment",
      description:
        "Connect with technology professionals across development, support, testing and other IT roles.",
    },
    {
      number: "03",
      title: "Non-IT Recruitment",
      description:
        "Build dependable teams across operations, sales, administration and customer support.",
    },
    {
      number: "04",
      title: "Banking Recruitment",
      description:
        "Access candidates for banking, financial services, operations and customer-facing positions.",
    },
    {
      number: "05",
      title: "Bulk Hiring",
      description:
        "Support larger recruitment requirements with structured candidate sourcing and coordination.",
    },
    {
      number: "06",
      title: "Staffing Solutions",
      description:
        "Explore flexible staffing solutions designed around your workforce requirements.",
    },
    {
      number: "07",
      title: "Candidate Sourcing",
      description:
        "Identify and connect with candidates based on your specific role requirements.",
    },
    {
      number: "08",
      title: "Profile Screening",
      description:
        "Support the initial screening process to help identify relevant candidate profiles.",
    },
    {
      number: "09",
      title: "Interview Coordination",
      description:
        "Simplify communication and coordination between employers and shortlisted candidates.",
    },
    {
      number: "10",
      title: "Workforce Deployment",
      description:
        "Support organizations with workforce deployment based on business and operational needs.",
    },
    {
      number: "11",
      title: "Recruitment Process Support",
      description:
        "Get recruitment assistance across different stages of your hiring process.",
    },
  ];

  const hiringSteps = [
    {
      number: "01",
      title: "Share Requirements",
      text: "Tell us about the role, skills and workforce requirement.",
    },
    {
      number: "02",
      title: "Candidate Sourcing",
      text: "We identify profiles aligned with your requirements.",
    },
    {
      number: "03",
      title: "Screen & Coordinate",
      text: "Relevant candidates are shortlisted and coordinated.",
    },
    {
      number: "04",
      title: "Move Forward",
      text: "Take the next step with candidates who fit your needs.",
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="dark-page">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
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

        {/* Stars */}
        <motion.span
          className="star star-small absolute left-[9%] top-[25%]"
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

        <div className="page-container relative py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">
                For Employers
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Build your team with
              <span className="gradient-text">
                {" "}the right talent.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              From individual hiring needs to larger workforce requirements,
              we provide recruitment and staffing support designed around your
              business.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
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
                <Link to="/contact" className="btn-primary">
                  Start Hiring
                  <span>→</span>
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
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="section-label">
                Our Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Recruitment that starts with understanding your needs.
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <p className="text-base leading-8 text-slate-400">
                Every organization has different hiring priorities. We focus on
                understanding the role, required skills, experience level and
                business expectations before connecting candidates.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Our solutions cover IT, Non-IT and Banking requirements, along
                with fresher, experienced, staffing and bulk hiring needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
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
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Employer Solutions
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Solutions for different hiring needs
            </h2>

            <p className="mt-5 text-slate-400">
              Choose the recruitment support that fits your organization and
              current workforce requirements.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.number}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="premium-card group relative overflow-hidden p-7"
              >
                {/* Hover glow */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="text-sm font-bold tracking-widest text-blue-500"
                      whileHover={{
                        x: 5,
                        scale: 1.1,
                      }}
                    >
                      {service.number}
                    </motion.span>

                    <motion.span
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                      whileHover={{
                        scale: 1.15,
                        rotate: 90,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      +
                    </motion.span>
                  </div>

                  <motion.h3
                    className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400"
                    whileHover={{
                      x: 4,
                    }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* Animated line */}
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
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HIRING PROCESS ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
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
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Simple Process
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              A straightforward path to hiring
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mt-14 grid gap-5 md:grid-cols-4"
          >
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
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="absolute left-[12%] right-[12%] top-8 hidden h-px origin-left bg-gradient-to-r from-transparent via-blue-500/40 to-transparent md:block"
            />

            {hiringSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="premium-card group relative z-10 p-6"
              >
                <motion.span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-sm font-bold text-blue-400"
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                >
                  {step.number}
                </motion.span>

                <h3 className="mt-5 font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= REQUIREMENT FORM ================= */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="section-label">
                Tell Us What You Need
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let's discuss your hiring requirement.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Share a few details about your organization and hiring
                requirement. Our team can use this information to understand
                how we can support you.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-8 space-y-4"
              >
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                  }}
                  className="premium-card p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    IT • Non-IT • Banking
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Recruitment support across multiple sectors.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                  }}
                  className="premium-card p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    Fresher • Experienced • Bulk Hiring
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Flexible support for different hiring requirements.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.form
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="premium-card p-6 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="companyName"
                    className="text-sm font-medium text-slate-300"
                  >
                    Company Name
                  </label>

                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter company name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPerson"
                    className="text-sm font-medium text-slate-300"
                  >
                    Contact Person
                  </label>

                  <input
                    id="contactPerson"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-300"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="text-sm font-medium text-slate-300"
                  >
                    Hiring Requirement
                  </label>

                  <textarea
                    id="requirement"
                    rows="5"
                    placeholder="Tell us about your hiring requirement..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <motion.button
                type="button"
                className="btn-primary mt-6 w-full"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Submit Requirement
                <span>→</span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden">
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
            }}
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="section-label">
                  Ready to Hire?
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Let's build your next team together.
                </h2>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Connect with our team and tell us what your organization is
                  looking for.
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
                  to="/contact"
                  className="btn-primary whitespace-nowrap"
                >
                  Contact Us
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Employers;