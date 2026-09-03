import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialSections = [
  {
    number: "01",
    title: "Employer Experiences",
    description:
      "A space to showcase verified feedback from organizations that work with Career Solutions for their recruitment requirements.",
    icon: "◆",
  },
  {
    number: "02",
    title: "Candidate Experiences",
    description:
      "A space to highlight genuine candidate experiences and career journeys supported through our recruitment network.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Campus Experiences",
    description:
      "A space for verified feedback from institutions and students participating in campus recruitment activities.",
    icon: "◇",
  },
];

const feedbackValues = [
  {
    title: "Real Experiences",
    text: "We believe testimonials should represent genuine experiences from candidates, employers, and institutions.",
  },
  {
    title: "Meaningful Connections",
    text: "Every successful recruitment journey begins with understanding the needs of the people involved.",
  },
  {
    title: "Long-Term Relationships",
    text: "Strong recruitment relationships are built through communication, support, and consistent engagement.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

function TestimonialPlaceholder({ type, description }) {
  return (
    <motion.div
      className="premium-card group relative overflow-hidden p-7 md:p-8"
      variants={fadeUp}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
    >
      {/* Animated glow */}
      <motion.div
        className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="relative">

        <div className="flex items-center justify-between">

          <motion.span
            className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400"
            whileHover={{
              scale: 1.08,
            }}
          >
            {type}
          </motion.span>

          <motion.span
            className="text-3xl text-blue-400"
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            “
          </motion.span>

        </div>

        {/* Placeholder content */}
        <div className="mt-8">

          <motion.div
            className="h-3 w-32 rounded-full bg-white/10"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <div className="mt-4 h-3 w-full rounded-full bg-white/5" />
          <div className="mt-3 h-3 w-5/6 rounded-full bg-white/5" />
          <div className="mt-3 h-3 w-4/6 rounded-full bg-white/5" />

        </div>

        <div className="mt-8 border-t border-white/5 pt-5">
          <p className="text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function Testimonials() {
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
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[16%] top-[20%]"
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

        <motion.div
          className="space-moon absolute -right-24 top-[35%] scale-50 opacity-20"
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

            <motion.span
              variants={fadeUp}
              className="section-label"
            >
              Testimonials
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Real experiences.
              <span className="gradient-text">
                {" "}Meaningful connections.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              We believe the strongest measure of a recruitment partnership is
              the experience of the people and organizations involved.
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
                <Link to="/contact" className="btn-primary">
                  Share Your Experience →
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

      {/* ================= INTRO ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <motion.div data-aos="fade-right">

              <span className="section-label">
                Our Philosophy
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Every successful connection has a story.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Recruitment brings together people with different goals —
                candidates looking for opportunities, employers looking for
                talent, and institutions helping students move toward their
                careers.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                This section is designed to showcase genuine experiences as
                verified feedback becomes available.
              </p>

            </motion.div>

            {/* Quote Card */}
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

              <div className="relative">

                <motion.div
                  className="text-6xl font-bold text-blue-400"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  “
                </motion.div>

                <p className="mt-5 text-xl font-semibold leading-8 text-white">
                  The best recruitment stories begin with the right connection.
                </p>

                <motion.div
                  className="mt-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <p className="mt-5 text-sm text-slate-500">
                  Career Solutions
                </p>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= TESTIMONIAL CATEGORIES ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >

            <span className="section-label justify-center">
              Experiences We Value
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Different perspectives. One shared journey.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              As verified feedback is collected, these sections can highlight
              experiences from across our recruitment ecosystem.
            </p>

          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {testimonialSections.map((section) => (
              <motion.div
                key={section.number}
                variants={fadeUp}
                className="premium-card group relative overflow-hidden p-7 md:p-8"
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
              >

                <motion.div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <motion.span
                      className="text-sm font-bold tracking-widest text-blue-400"
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      {section.number}
                    </motion.span>

                    <motion.span
                      className="text-xl text-blue-400"
                      animate={{
                        rotate: [0, 8, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      whileHover={{
                        scale: 1.3,
                      }}
                    >
                      {section.icon}
                    </motion.span>

                  </div>

                  <motion.h3
                    className="mt-8 text-2xl font-bold text-white"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    {section.title}
                  </motion.h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {section.description}
                  </p>

                  <div className="mt-7 border-t border-white/5 pt-5">

                    <motion.span
                      className="text-sm font-semibold text-blue-400"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      Feedback collection area
                    </motion.span>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ================= FEATURED EXPERIENCES ================= */}
      <section className="dark-section py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-aos="fade-up"
          >

            <div className="max-w-2xl">

              <span className="section-label">
                Featured Experiences
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Your feedback can be part of our story.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Genuine feedback helps future candidates and employers
                understand what it is like to work with us.
              </p>

            </div>

            <motion.div
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
            >
              <Link to="/contact" className="btn-secondary">
                Get In Touch →
              </Link>
            </motion.div>

          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            <TestimonialPlaceholder
              type="Employer"
              description="Verified employer feedback can be displayed here."
            />

            <TestimonialPlaceholder
              type="Candidate"
              description="Verified candidate feedback can be displayed here."
            />

            <TestimonialPlaceholder
              type="Campus"
              description="Verified institution or student feedback can be displayed here."
            />

          </motion.div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">

        <div className="page-container">

          <motion.div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >

            <span className="section-label justify-center">
              What Matters To Us
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Feedback built on trust.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We want every experience shared on this page to be genuine,
              useful, and representative of the recruitment journey.
            </p>

          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {feedbackValues.map((item, index) => (
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
                  className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400"
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
              Let's Connect
            </motion.span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Ready to create your own success story?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you are searching for talent or your next opportunity,
              start your journey with Career Solutions.
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
                  Contact Us →
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
                <Link to="/jobs" className="btn-secondary">
                  Explore Jobs
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Testimonials;