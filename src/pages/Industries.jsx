import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Industries() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const industries = [
    {
      number: "01",
      title: "IT & Technology",
      description:
        "Connecting organizations with skilled technology professionals across development, infrastructure, support and emerging technologies.",
      tags: ["Software", "Development", "IT Support"],
    },
    {
      number: "02",
      title: "Banking & Financial Services",
      description:
        "Supporting banks and financial organizations with reliable talent for operational, technical and customer-facing roles.",
      tags: ["Banking", "Finance", "Operations"],
    },
    {
      number: "03",
      title: "Healthcare",
      description:
        "Helping healthcare organizations find capable professionals for administrative, operational and technology requirements.",
      tags: ["Healthcare", "Operations", "Administration"],
    },
    {
      number: "04",
      title: "Education",
      description:
        "Supporting educational institutions with recruitment solutions for academic, administrative and technology-related positions.",
      tags: ["Education", "Administration", "Technology"],
    },
    {
      number: "05",
      title: "BPO & Customer Service",
      description:
        "Building customer-focused teams with candidates suited for voice, non-voice, support and process-driven environments.",
      tags: ["BPO", "Customer Support", "Operations"],
    },
    {
      number: "06",
      title: "Retail",
      description:
        "Helping retail businesses build dependable teams across sales, operations, customer service and support functions.",
      tags: ["Retail", "Sales", "Operations"],
    },
    {
      number: "07",
      title: "Logistics",
      description:
        "Providing recruitment support for logistics and supply-chain organizations across operational and support roles.",
      tags: ["Logistics", "Supply Chain", "Operations"],
    },
    {
      number: "08",
      title: "Manufacturing",
      description:
        "Supporting manufacturing organizations with talent across technical, operational, administrative and support functions.",
      tags: ["Manufacturing", "Technical", "Operations"],
    },
    {
      number: "09",
      title: "E-commerce",
      description:
        "Helping growing e-commerce businesses build teams across technology, customer experience, operations and support.",
      tags: ["E-commerce", "Technology", "Support"],
    },
  ];

  const approachItems = [
    {
      number: "01",
      title: "Understand",
      text: "We understand your industry, business environment and role requirements.",
    },
    {
      number: "02",
      title: "Identify",
      text: "We identify candidates whose skills and experience align with the requirement.",
    },
    {
      number: "03",
      title: "Connect",
      text: "We help create the connection between the right talent and the right opportunity.",
    },
  ];

  return (
    <div className="dark-page overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Floating glow */}

        <motion.div
          className="blue-orb -left-32 top-20"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="blue-orb -right-20 top-10 opacity-60"
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
          className="star absolute left-[12%] top-[25%]"
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
          className="star absolute right-[16%] top-[30%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.span
          className="tiny-star absolute left-[70%] top-[18%]"
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
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Industries We Serve
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Recruitment expertise across
              <span className="gradient-text">
                {" "}diverse industries.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              We understand that every industry has different talent
              requirements. Our recruitment approach is designed to connect
              businesses with candidates who match their specific needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/employers"
                  className="btn-primary group"
                >
                  Hire Talent

                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  Talk to Our Team
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRO
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
                Industry Understanding
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Talent solutions built around your industry.
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
                From technology and banking to healthcare, education, retail
                and manufacturing, our recruitment solutions are designed to
                adapt to different business environments.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Whether you need individual professionals, fresh talent,
                experienced specialists or support for larger hiring
                requirements, we focus on understanding the role before
                connecting the right candidates.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES GRID
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
              Our Industry Coverage
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Supporting businesses across key sectors
            </h2>

            <p className="mt-5 text-slate-400">
              Explore the industries where our recruitment and staffing
              solutions can support your growth.
            </p>

          </motion.div>


          {/* Cards */}

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
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {industries.map((industry) => (

              <motion.article
                key={industry.number}
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

                  <div className="flex items-start justify-between">

                    <motion.span
                      className="text-sm font-bold tracking-widest text-blue-500"
                      whileHover={{
                        x: 4,
                      }}
                    >
                      {industry.number}
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
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {industry.title}
                  </motion.h3>


                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {industry.description}
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {industry.tags.map((tag, tagIndex) => (

                      <motion.span
                        key={tag}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: tagIndex * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:text-slate-300"
                      >
                        {tag}
                      </motion.span>

                    ))}

                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 md:py-28">

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
            className="grid gap-6 md:grid-cols-3"
          >

            {approachItems.map((item, index) => (

              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index === 0 ? -50 : index === 2 ? 50 : 0,
                    y: index === 1 ? 40 : 0,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="premium-card group p-7"
              >

                <motion.div
                  className="text-3xl font-bold text-blue-400"
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                  }}
                >
                  {item.number}
                </motion.div>

                <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

                {/* Animated line */}

                <motion.div
                  className="mt-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent"
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
                    duration: 0.8,
                    delay: 0.2,
                  }}
                />

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden">

        <motion.div
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
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
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16"
          >

            <motion.div
              className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />

            <div className="relative max-w-3xl">

              <span className="section-label">
                Let's Work Together
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
                className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl"
              >
                Looking for the right talent in your industry?
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
                className="mt-5 max-w-2xl text-base leading-8 text-slate-300"
              >
                Tell us what you are looking for and our recruitment team can
                help you explore the right hiring solution.
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
                className="mt-8"
              >

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="inline-block"
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

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Industries;