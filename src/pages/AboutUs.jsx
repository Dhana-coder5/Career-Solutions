import { Link } from "react-router-dom";

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

  return (
    <div className="dark-page overflow-hidden">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="relative overflow-hidden border-b border-white/5">

        <div className="blue-orb -left-40 top-10 opacity-50" />
        <div className="blue-orb -right-40 bottom-0 opacity-40" />

        <div className="page-container relative py-24 lg:py-32">

          <div className="max-w-4xl">

            <div className="animate-fade-up">
              <span className="section-label">
                About Career Solutions
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-up delay-100">
              Connecting{" "}
              <span className="gradient-text">
                people,
              </span>
              <br />
              opportunities & businesses.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg animate-fade-up delay-200">
              We help create meaningful connections between employers,
              candidates and institutions across IT, Non-IT and Banking
              sectors.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up delay-300">

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

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          WHO WE ARE
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <span className="section-label">
                Who We Are
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                A recruitment partner focused on{" "}
                <span className="gradient-text">
                  meaningful connections.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400">

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

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          MISSION / VISION
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* Mission */}
            <div className="premium-card p-8 sm:p-10">

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400">
                  01
                </span>

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

            </div>

            {/* Vision */}
            <div className="premium-card p-8 sm:p-10">

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400">
                  02
                </span>

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

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          EXPERTISE
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
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
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {expertise.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs font-semibold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-white">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          WHO WE SERVE
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="text-center">

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

          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">

            {stakeholders.map((item) => (
              <Link
                key={item.number}
                to={item.link}
                className="premium-card group p-7 sm:p-8"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-blue-500">
                    {item.number}
                  </span>

                  <span className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-10 bg-blue-500/40 transition-all duration-300 group-hover:w-20" />

                <span className="mt-5 block text-sm font-medium text-blue-400">
                  Explore →
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          WHAT MAKES US DIFFERENT
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div className="relative">

              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-600/10 to-transparent p-8 sm:p-10">

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

              </div>

            </div>

            <div>

              <span className="section-label">
                Why Career Solutions
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Built around the needs of{" "}
                <span className="gradient-text">
                  people and businesses.
                </span>
              </h2>

              <div className="mt-8 space-y-3">

                {strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className="flex items-center gap-4 rounded-xl border border-white/6 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04]"
                  >
                    <span className="text-xs font-bold text-blue-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-slate-400">
                      {strength}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          CAMPUS TO CORPORATE
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            <div>

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
                className="btn-primary mt-7"
              >
                Explore Campus Drives →
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {[
                ["01", "Students"],
                ["02", "Institutions"],
                ["03", "Employers"],
                ["04", "Opportunities"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/8 bg-slate-900/60 p-6"
                >
                  <span className="text-xs font-semibold text-blue-500">
                    {number}
                  </span>

                  <p className="mt-8 font-semibold text-white">
                    {title}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
    FINAL CTA
======================================== */}

<section className="dark-section">
  <div className="page-container py-20 lg:py-28">

    <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-600/5 to-transparent p-8 sm:p-10 lg:p-14">

      {/* Blue glow */}
      <div className="blue-orb -right-32 -top-32 opacity-30" />
      <div className="blue-orb -bottom-40 -left-32 opacity-20" />

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
            Whether you're hiring talent, searching for your next opportunity
            or exploring a recruitment partnership, let's start a conversation.
          </p>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

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

        </div>

      </div>

    </div>

  </div>
</section>

    </div>
  );
}

export default AboutUs;