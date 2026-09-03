import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbz-uCOq3X2TQDF2hMauQ03op2wisxh4iJZbVYtldDsG4LShn3EysLrHZysb8KldOE3z/exec";

      const data = new URLSearchParams();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("enquiryType", formData.enquiryType);
      data.append("message", formData.message);

      await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      setStatus("Thank you! Your enquiry has been submitted.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="dark-page min-h-screen overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="blue-orb -left-40 top-10 opacity-30" />
        <div className="blue-orb -right-32 top-20 opacity-60" />

        {/* Floating Stars */}
        <motion.span
          className="star star-small absolute left-[8%] top-[25%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[15%] top-[22%]"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.span
          className="star star-large absolute bottom-[18%] left-[30%]"
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
          className="small-space-moon absolute right-[7%] top-[35%] opacity-30"
          animate={{
            y: [0, -20, 0],
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
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="section-label"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Let's start a
              <span className="gradient-text">
                {" "}conversation.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              Whether you're looking for talent, exploring career
              opportunities or interested in a partnership, we'd love to hear
              from you.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="dark-section">

        <div className="page-container py-20 md:py-28">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >

              <span className="section-label">
                Contact Information
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                We're here to help.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Have a hiring requirement, job enquiry or partnership
                opportunity? Send us a message and our team will get in touch.
              </p>

              {/* Contact Cards */}
              <motion.div
                className="mt-10 space-y-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
              >

                {/* Location */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                    y: -4,
                    scale: 1.01,
                  }}
                  className="premium-card group p-6"
                >
                  <div className="flex gap-4">

                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      ●
                    </motion.div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Location
                      </p>

                      <p className="mt-2 text-sm font-medium text-white">
                        Chennai, Tamil Nadu
                      </p>
                    </div>

                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                    y: -4,
                    scale: 1.01,
                  }}
                  className="premium-card group p-6"
                >
                  <div className="flex gap-4">

                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: -8,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      @
                    </motion.div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Email
                      </p>

                      <a
                        href="mailto:info@careersolutions.com"
                        className="mt-2 block text-sm font-medium text-white transition-colors hover:text-blue-400"
                      >
                        info@careersolutions.com
                      </a>
                    </div>

                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                    y: -4,
                    scale: 1.01,
                  }}
                  className="premium-card group p-6"
                >
                  <div className="flex gap-4">

                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      ☎
                    </motion.div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Phone
                      </p>

                      <a
                        href="tel:+919876425364"
                        className="mt-2 block text-sm font-medium text-white transition-colors hover:text-blue-400"
                      >
                        +91 98764 25364
                      </a>
                    </div>

                  </div>
                </motion.div>

              </motion.div>

              {/* Quick Enquiry */}
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
                  delay: 0.4,
                }}
                whileHover={{
                  y: -5,
                }}
                className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6"
              >
                <p className="text-sm font-semibold text-white">
                  Looking for talent?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share your hiring requirement and let us understand how we
                  can support your organization.
                </p>
              </motion.div>

            </motion.div>

            {/* =====================================================
                FORM
            ===================================================== */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="premium-card relative overflow-hidden p-6 md:p-8 lg:p-10"
            >

              {/* Form Glow */}
              <motion.div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              <div className="relative">

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                >
                  <span className="section-label">
                    Send An Enquiry
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                    Tell us how we can help.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Fill in the details below and we'll get back to you.
                  </p>
                </motion.div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Name */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                    >
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                    >
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                    >
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-slate-300"
                      >
                        Phone
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                      />
                    </motion.div>

                    {/* Enquiry Type */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                    >
                      <label
                        htmlFor="enquiryType"
                        className="text-sm font-medium text-slate-300"
                      >
                        Enquiry Type
                      </label>

                      <motion.select
                        whileFocus={{
                          scale: 1.01,
                        }}
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                      >
                        <option value="" disabled>
                          Select enquiry type
                        </option>

                        <option value="Job Seeker">
                          Job Seeker
                        </option>

                        <option value="Employer">
                          Employer
                        </option>

                        <option value="Campus Drive">
                          Campus Drive
                        </option>

                        <option value="Vendor Partnership">
                          Vendor Partnership
                        </option>

                        <option value="General Enquiry">
                          General Enquiry
                        </option>
                      </motion.select>
                    </motion.div>

                  </div>

                  {/* Message */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <motion.textarea
                      whileFocus={{
                        scale: 1.005,
                      }}
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement..."
                      required
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </motion.div>

                  {/* Status */}
                  {status && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-300"
                    >
                      {status}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="btn-primary w-full"
                  >
                    Send Enquiry
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>

                </form>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/5">

        <motion.div
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        {/* Stars */}
        <motion.span
          className="star absolute left-[15%] top-[30%]"
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

        <div className="page-container relative py-20 md:py-28">

          <motion.div
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16"
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
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
            }}
          >

            <motion.span
              className="section-label"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Career Solutions
            </motion.span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let's connect the right people with the right opportunities.
            </h2>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              Hire talent. Build careers. Grow together.
            </motion.p>

            <motion.div
              className="mt-8"
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
                delay: 0.55,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-block"
              >
                <Link to="/jobs" className="btn-primary">
                  Explore Jobs →
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Contact;