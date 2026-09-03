
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What recruitment services does Career Solutions provide?",
    answer:
      "We support IT, Non-IT, Banking, staffing, fresher hiring, experienced hiring, and bulk recruitment requirements based on employer needs.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "You can visit our Jobs section, choose the relevant job category, review available opportunities, and use the application or enquiry option.",
  },
  {
    question: "Do you help freshers find jobs?",
    answer:
      "Yes. We support fresher recruitment and help connect candidates with suitable opportunities based on their skills, qualifications, and employer requirements.",
  },
  {
    question: "Do you conduct campus recruitment drives?",
    answer:
      "Yes. We support campus-to-corporate recruitment activities including candidate coordination, screening, hiring drives, and employer engagement.",
  },
  {
    question: "Do you provide staffing solutions?",
    answer:
      "Yes. Our staffing solutions are designed to help organizations meet their workforce requirements across different roles and business needs.",
  },
  {
    question: "Can companies approach Career Solutions for bulk hiring?",
    answer:
      "Yes. Employers can contact us for bulk hiring and recruitment support. Our team can understand the requirement and coordinate the hiring process.",
  },
  {
    question: "Do you work with recruitment vendors and partners?",
    answer:
      "Yes. We welcome suitable recruitment vendors and business partners who can collaborate with us to expand talent sourcing and recruitment capabilities.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "Our recruitment approach covers areas such as IT & Technology, Banking, Healthcare, Education, BPO, Retail, Logistics, Manufacturing, and E-commerce.",
  },
];

const categories = [
  {
    title: "Job Seekers",
    text: "Explore opportunities and take your next career step.",
    link: "/jobs",
  },
  {
    title: "Employers",
    text: "Connect with talent for your hiring requirements.",
    link: "/employers",
  },
  {
    title: "Campus",
    text: "Discover campus recruitment and hiring support.",
    link: "/campus-drive",
  },
  {
    title: "Partners",
    text: "Build recruitment partnerships with us.",
    link: "/vendor-partnership",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
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
    <div className="dark-page min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/5">

        <div className="blue-orb -left-32 top-10" />
        <div className="blue-orb -right-32 bottom-0" />

        {/* Floating stars */}
        <motion.span
          className="star-small absolute left-[12%] top-[25%]"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[15%] top-[30%]"
          animate={{
            y: [0, 12, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative py-24 md:py-32">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">
                Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Answers to your
              <span className="gradient-text">
                {" "}questions.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              Find quick answers about recruitment, jobs, campus drives,
              staffing solutions, employer services, and partnerships.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr]">

            {/* ================= LEFT ================= */}
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
                Need Help?
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Everything you need to know.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Whether you are looking for your next opportunity or hiring
                talent for your organization, we are here to help.
              </p>

              <motion.div
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
                  delay: 0.2,
                }}
                whileHover={{
                  y: -6,
                }}
                className="premium-card mt-8 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Looking for opportunities?
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Explore our job categories and find opportunities that match
                  your skills and career goals.
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Link
                    to="/jobs"
                    className="btn-secondary mt-5 w-full"
                  >
                    Explore Jobs →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ================= ACCORDION ================= */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    variants={fadeUp}
                    whileHover={{
                      y: -3,
                    }}
                    className={`premium-card overflow-hidden transition-colors duration-300 ${
                      isOpen
                        ? "border-blue-500/40 shadow-lg shadow-blue-500/5"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-6 p-5 text-left md:p-6"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-white md:text-lg">
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="border-t border-white/5 px-5 pb-6 pt-5 md:px-6">
                            <motion.p
                              initial={{
                                opacity: 0,
                                y: -8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: 0.08,
                              }}
                              className="text-sm leading-7 text-slate-400 md:text-base"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= QUICK CATEGORIES ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20">

        <div className="page-container">

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
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-label justify-center">
              Explore Career Solutions
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Find the right place to start
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Choose the path that matches your current requirement.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >
                <Link
                  to={item.link}
                  className="premium-card group block p-6"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
                  >
                    →
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>

                  <motion.span
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-5 inline-block text-sm font-semibold text-blue-400"
                  >
                    Learn more →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-20 md:py-28">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <motion.span
          className="star absolute left-[15%] top-[30%]"
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
          className="star-small absolute right-[18%] top-[50%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        />

        <div className="page-container relative">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12"
          >
            <span className="section-label justify-center">
              Still Have Questions?
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Let's talk about your requirement.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Our team is ready to understand your requirement and help you
              choose the right recruitment path.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Contact Us →
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/services"
                  className="btn-secondary"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default FAQ;