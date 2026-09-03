import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutUs() {
  const expertise = [
    "IT & Technology Recruitment",
    "Non-IT Recruitment",
    "Banking & Financial Services",
    "Fresher Recruitment",
    "Experienced Professionals",
    "Bulk Hiring",
  ];

  const stakeholders = [
    {
      number: "01",
      title: "Employers",
      description:
        "Organizations looking for relevant talent to support their workforce requirements.",
      link: "/employers",
    },
    {
      number: "02",
      title: "Candidates",
      description:
        "Professionals and freshers looking for meaningful career opportunities.",
      link: "/jobs",
    },
    {
      number: "03",
      title: "Institutions",
      description:
        "Educational institutions looking to connect students with career opportunities.",
      link: "/campus-drive",
    },
  ];

  const strengths = [
    "Industry-focused recruitment",
    "Structured candidate sourcing",
    "Fresher & experienced talent",
    "IT, Non-IT & Banking expertise",
    "Bulk hiring support",
    "Employer & candidate assistance",
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="dark-page overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/5">

        <div className="blue-orb -left-40 top-10 opacity-50" />
        <div className="blue-orb -right-40 bottom-0 opacity-40" />

        {/* Decorative stars */}
        <span className="tiny-star left-[12%] top-[25%]" />
        <span className="tiny-star left-[35%] top-[15%]" />
        <span className="tiny-star left-[65%] top-[30%]" />
        <span className="tiny-star left-[88%] top-[20%]" />

        <motion.div
          className="absolute right-[10%] top-[20%] hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="small-space-moon opacity-30" />
        </motion.div>

        <div className="page-container relative py-24 lg:py-32">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >

            <motion.div variants={fadeUp}>
              <span className="section-label">
                About Career Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Connecting{" "}
              <span className="gradient-text">
                people,
              </span>
              <br />
              opportunities & businesses.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              We help create meaningful connections between employers,
              candidates and institutions across IT, Non-IT and Banking
              sectors.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >

              <Link
                to="/services"
                className="btn-primary group"
              >
                Explore Our Services
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="btn-secondary group"
              >
                Talk to Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
          >

            <motion.div variants={fadeUp}>

              <span className="section-label">
                Who We Are
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                A recruitment partner focused on{" "}
                <span className="gradient-text">
                  meaningful connections.
                </span>
              </h2>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-base leading-8 text-slate-400"
            >

              <p>
                Career Solutions Pvt Ltd is a recruitment and workforce
                solutions company focused on connecting organizations with
                relevant talent and helping candidates discover suitable
                career opportunities.
              </p>

              <p>
                Our recruitment focus covers technology, non-IT functions,
                banking and financial services, while also supporting
                fresher recruitment, experienced hiring, campus recruitment
                and bulk hiring requirements.
              </p>

              <p>
                We believe recruitment is more than matching a profile to a
                vacancy. It is about understanding people, requirements and
                opportunities to create connections that can move careers and
                businesses forward.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="dark-section-alt border-y border-white/5">

        <div className="page-container py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-5 lg:grid-cols-2"
          >

            {/* Mission */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="premium-card group p-8 sm:p-10"
            >

              <div className="flex items-center gap-4">

                <motion.span
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400"
                >
                  01
                </motion.span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Our Mission
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                Making recruitment more meaningful.
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                To connect employers with relevant talent and help candidates
                access opportunities that align with their skills, experience
                and career goals.
              </p>

              <div className="mt-7 h-px w-10 bg-blue-500/40 transition-all duration-500 group-hover:w-24" />

            </motion.div>


            {/* Vision */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="premium-card group p-8 sm:p-10"
            >

              <div className="flex items-center gap-4">

                <motion.span
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400"
                >
                  02
                </motion.span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Our Vision
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                Building stronger career connections.
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                To create a trusted recruitment ecosystem where organizations,
                professionals and institutions can discover better
                possibilities and grow together.
              </p>

              <div className="mt-7 h-px w-10 bg-blue-500/40 transition-all duration-500 group-hover:w-24" />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]"
          >

            <motion.div variants={fadeUp}>

              <span className="section-label">
                Our Expertise
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Recruitment expertise across{" "}
                <span className="gradient-text">
                  key sectors.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                Our service portfolio is designed to support different
                workforce requirements across industries and experience
                levels.
              </p>

            </motion.div>


            <motion.div
              variants={staggerContainer}
              className="grid gap-3 sm:grid-cols-2"
            >

              {expertise.map((item, index) => (

                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600/20 hover:shadow-2xl hover:shadow-blue-500/30"
                >

                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs font-semibold text-blue-400"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-white">
                    {item}
                  </span>

                </motion.div>

              ))}

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="dark-section-alt border-y border-white/5">

        <div className="page-container py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >

            <span className="section-label">
              Who We Serve
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              One ecosystem.
              <br />
              <span className="gradient-text">
                Three important connections.
              </span>
            </h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-14 grid gap-5 lg:grid-cols-3"
          >

            {stakeholders.map((item) => (

              <motion.div
                key={item.number}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
              >

                <Link
                  to={item.link}
                  className="premium-card group block p-7 sm:p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-bold text-blue-500">
                      {item.number}
                    </span>

                    <motion.span
                      whileHover={{
                        x: 5,
                        y: -5,
                      }}
                      className="text-slate-600 transition-colors group-hover:text-blue-400"
                    >
                      ↗
                    </motion.span>

                  </div>

                  <h3 className="mt-10 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-blue-500/40 transition-all duration-500 group-hover:w-20" />

                  <span className="mt-5 block text-sm font-medium text-blue-400">
                    Explore →
                  </span>

                </Link>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          WHAT MAKES US DIFFERENT
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="relative rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-600/10 to-transparent p-8 sm:p-10"
              >

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Our Approach
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  People first.
                  <br />
                  Requirements understood.
                  <br />
                  Opportunities connected.
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  Our approach focuses on understanding the requirement,
                  identifying relevant talent and creating a smoother path
                  between employers and candidates.
                </p>

              </motion.div>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >

              <span className="section-label">
                Why Career Solutions
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Built around the needs of{" "}
                <span className="gradient-text">
                  people and businesses.
                </span>
              </h2>


              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >

                {strengths.map((strength, index) => (

                  <motion.div
                    key={strength}
                    variants={fadeUp}
                    whileHover={{
                      x: 8,
                    }}
                    className="flex items-center gap-4 rounded-xl border border-white/6 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04]"
                  >

                    <span className="text-xs font-bold text-blue-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-slate-400">
                      {strength}
                    </span>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS TO CORPORATE
      ===================================================== */}

      <section className="dark-section-alt border-y border-white/5">

        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >

              <span className="section-label">
                Campus to Corporate
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Helping emerging talent take the{" "}
                <span className="gradient-text">
                  next step.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                We support campus recruitment initiatives that help
                institutions, students and employers connect around career
                opportunities.
              </p>

              <Link
                to="/campus-drive"
                className="btn-primary mt-7 inline-flex"
              >
                Explore Campus Drives →
              </Link>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3"
            >

              {[
                ["01", "Students"],
                ["02", "Institutions"],
                ["03", "Employers"],
                ["04", "Opportunities"],
              ].map(([number, title]) => (

                <motion.div
                  key={number}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/8 bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
                >

                  <span className="text-xs font-semibold text-blue-500">
                    {number}
                  </span>

                  <p className="mt-8 font-semibold text-white">
                    {title}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="dark-section">

        <div className="page-container py-20 lg:py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-600/5 to-transparent p-8 sm:p-10 lg:p-14"
          >

            {/* CTA glows */}

            <motion.div
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <span className="section-label">
                  Let's Connect
                </span>

                <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Looking for the right{" "}
                  <span className="gradient-text">
                    connection?
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Whether you're hiring talent, searching for your next
                  opportunity or exploring a recruitment partnership,
                  let's start a conversation.
                </p>

              </div>


              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col gap-3 sm:flex-row lg:flex-col"
              >

                <Link
                  to="/contact"
                  className="btn-primary group whitespace-nowrap"
                >
                  Contact Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="btn-secondary group whitespace-nowrap"
                >
                  Explore Services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;