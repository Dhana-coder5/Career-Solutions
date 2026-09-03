import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function VendorPartnership() {
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
      title: "Recruitment Vendor Partnership",
      description:
        "Collaborate with us to support recruitment requirements and expand your talent sourcing capabilities.",
    },
    {
      number: "02",
      title: "Staffing Partner / Sub-Vendor Partnership",
      description:
        "Build a flexible recruitment partnership for staffing and workforce requirements.",
    },
    {
      number: "03",
      title: "Candidate Sourcing",
      description:
        "Source relevant candidate profiles based on specific skills, experience and role requirements.",
    },
    {
      number: "04",
      title: "Bulk Hiring",
      description:
        "Support high-volume recruitment requirements through coordinated candidate sourcing.",
    },
    {
      number: "05",
      title: "IT & Non-IT Staffing",
      description:
        "Support organizations with staffing requirements across technology and business functions.",
    },
    {
      number: "06",
      title: "Banking Recruitment",
      description:
        "Provide recruitment support for banking and financial services requirements.",
    },
    {
      number: "07",
      title: "Contract / Temporary Staffing",
      description:
        "Support flexible workforce requirements through contract and temporary staffing solutions.",
    },
    {
      number: "08",
      title: "Profile Screening",
      description:
        "Help identify candidate profiles that align with the required role and hiring criteria.",
    },
    {
      number: "09",
      title: "Interview Coordination",
      description:
        "Coordinate communication and interview activities between candidates and hiring teams.",
    },
    {
      number: "10",
      title: "Workforce Deployment",
      description:
        "Support workforce deployment based on project, operational and business requirements.",
    },
    {
      number: "11",
      title: "Recruitment Process Support",
      description:
        "Provide recruitment assistance across different stages of the hiring process.",
    },
  ];

  const benefits = [
    {
      icon: "◇",
      title: "Wider Sourcing",
      description:
        "Strengthen your candidate sourcing capabilities for different roles and hiring requirements.",
    },
    {
      icon: "+",
      title: "Flexible Support",
      description:
        "Access recruitment support based on your current workforce and sourcing requirements.",
    },
    {
      icon: "↗",
      title: "Shared Growth",
      description:
        "Build a long-term professional relationship focused on collaboration and recruitment opportunities.",
    },
  ];

  const partnershipSteps = [
    {
      number: "01",
      title: "Connect",
      text: "Share your organization and partnership requirements.",
    },
    {
      number: "02",
      title: "Understand",
      text: "Discuss the roles, sectors and recruitment support needed.",
    },
    {
      number: "03",
      title: "Collaborate",
      text: "Work together on sourcing and recruitment activities.",
    },
    {
      number: "04",
      title: "Grow",
      text: "Build an ongoing professional recruitment relationship.",
    },
  ];

  const partners = [
    {
      label: "Recruitment Firms",
      title: "Expand sourcing capacity",
      description:
        "Collaborate on candidate sourcing and recruitment requirements across different roles and sectors.",
    },
    {
      label: "Staffing Partners",
      title: "Support workforce needs",
      description:
        "Work together on staffing, contract and workforce deployment requirements.",
    },
    {
      label: "Business Partners",
      title: "Create new opportunities",
      description:
        "Build professional partnerships that create opportunities for collaboration and shared growth.",
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
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-32 top-20 opacity-60" />

        {/* Floating stars */}
        <motion.span
          className="star-small absolute left-[12%] top-[25%]"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="star absolute right-[18%] top-[30%]"
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
                Vendor Partnership
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Grow together through
              <span className="gradient-text">
                {" "}stronger partnerships.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              Partner with Career Solutions to strengthen recruitment
              capabilities, expand candidate sourcing and support workforce
              requirements across multiple sectors.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="btn-primary group"
              >
                Become a Partner
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                to="/services"
                className="btn-secondary"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">
                Partnership Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                A recruitment partnership built around collaboration.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base leading-8 text-slate-400">
                Recruitment requirements can change quickly. A strong
                partnership helps organizations respond with the right
                sourcing capabilities and workforce support.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                We work with recruitment partners, staffing organizations and
                vendors to support candidate sourcing, screening, bulk hiring,
                staffing and other recruitment activities.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Why Partner With Us
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Extend your recruitment capabilities
            </h2>

            <p className="mt-5 text-slate-400">
              Our partnership model is designed to support different hiring
              requirements through coordinated recruitment services.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="premium-card group p-7"
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400"
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="mt-6 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 h-px bg-blue-500/50"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Partnership Services
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              How we can work together
            </h2>

            <p className="mt-5 text-slate-400">
              Explore the recruitment and staffing activities available through
              our partnership model.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.number}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="premium-card group p-7"
              >
                <div className="relative">

                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="text-sm font-bold tracking-widest text-blue-500"
                    >
                      {service.number}
                    </motion.span>

                    <motion.span
                      whileHover={{
                        scale: 1.15,
                        rotate: 45,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    >
                      ↗
                    </motion.span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 h-px bg-blue-500/40"
                  />

                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= PARTNERSHIP JOURNEY ================= */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-label">
              Partnership Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Simple, clear and collaborative
            </h2>
          </motion.div>

          <div className="relative mt-14">

            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] right-[12%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-blue-500/50 to-transparent md:block"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 md:grid-cols-4"
            >
              {partnershipSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                  }}
                  className="premium-card relative z-10 p-6"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-slate-950 text-sm font-bold text-blue-400"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHO CAN PARTNER ================= */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.label}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="premium-card group p-7"
              >
                <span className="section-label">
                  {partner.label}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {partner.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {partner.description}
                </p>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{
                    x: 0,
                    opacity: 1,
                  }}
                  className="mt-6 text-blue-400"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50"
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

        <div className="page-container relative py-20 md:py-28">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
            }}
            className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16"
          >
            <span className="section-label">
              Let's Partner
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to build a stronger recruitment partnership?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Tell us about your organization and partnership requirements.
              Let's explore how we can work together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="btn-primary group"
              >
                Become a Partner

                <motion.span
                  className="inline-block"
                  whileHover={{
                    x: 6,
                  }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                to="/services"
                className="btn-secondary"
              >
                View Our Services
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default VendorPartnership;