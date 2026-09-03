import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      number: "01",
      title: "IT Recruitment",
      description:
        "Connect with skilled developers, engineers, analysts and technology professionals.",
      link: "/services",
    },
    {
      number: "02",
      title: "Non-IT Recruitment",
      description:
        "Find dependable talent across BPO, HR, Finance, Sales, Operations and more.",
      link: "/services",
    },
    {
      number: "03",
      title: "Banking Recruitment",
      description:
        "Source professionals for banking operations, sales, finance and customer-facing roles.",
      link: "/services",
    },
    {
      number: "04",
      title: "Campus Recruitment",
      description:
        "Build your future workforce by connecting employers with emerging graduate talent.",
      link: "/campus-drive",
    },
    {
      number: "05",
      title: "Bulk Hiring",
      description:
        "Scale your recruitment process with structured and efficient bulk hiring support.",
      link: "/employers",
    },
    {
      number: "06",
      title: "Vendor Partnership",
      description:
        "Collaborate with us for candidate sourcing, staffing and recruitment process support.",
      link: "/vendor-partnership",
    },
  ];

  const industries = [
    "IT & Technology",
    "Banking & Finance",
    "Healthcare",
    "Education",
    "BPO & Customer Service",
    "Retail",
    "Logistics",
    "Manufacturing",
    "E-Commerce",
    "Professional Services",
  ];

  const strengths = [
    "Industry-focused recruitment",
    "Verified candidate profiles",
    "Fast candidate sourcing",
    "Fresher & experienced talent",
    "Bulk hiring capability",
    "Dedicated recruitment support",
    "Employer & candidate assistance",
    "IT, Non-IT & Banking expertise",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "We understand your hiring requirements and workforce needs.",
    },
    {
      number: "02",
      title: "Source",
      text: "Our team identifies suitable candidates from relevant talent pools.",
    },
    {
      number: "03",
      title: "Screen",
      text: "Profiles are reviewed against the role and requirement.",
    },
    {
      number: "04",
      title: "Connect",
      text: "Qualified candidates are connected with the right opportunities.",
    },
  ];

  return (
    <div className="dark-page overflow-hidden">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">

        {/* Background effects */}
        <div className="blue-orb -left-40 top-20 opacity-60" />
        <div className="blue-orb -right-40 bottom-0 opacity-40" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="page-container relative py-24 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Hero Content */}
            <div>

              <div className="animate-fade-up">
                <span className="section-label">
                  Career Solutions Pvt Ltd
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-up delay-100">
                Hire Talent.
                <br />
                <span className="gradient-text">
                  Build Careers.
                </span>
                <br />
                Grow Together.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg animate-fade-up delay-200">
                Connecting employers with the right talent across
                <span className="font-medium text-slate-200">
                  {" "}IT, Non-IT & Banking sectors.
                </span>
                {" "}We create meaningful connections between businesses,
                professionals and emerging talent.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up delay-300">

                <Link
                  to="/employers"
                  className="btn-primary group"
                >
                  Hire Talent
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/jobs"
                  className="btn-secondary group"
                >
                  Find Jobs
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

              {/* Trust points */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500 animate-fade-up delay-400">
                <span>✓ IT Recruitment</span>
                <span>✓ Non-IT Recruitment</span>
                <span>✓ Banking Recruitment</span>
                <span>✓ Campus Hiring</span>
              </div>

            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">

              <div className="relative mx-auto aspect-square max-w-[480px]">

                {/* Outer glow */}
                <div className="absolute inset-8 rounded-full bg-blue-600/10 blur-3xl" />

                {/* Main circle */}
                <div className="absolute inset-10 rounded-full border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm" />

                {/* Inner circle */}
                <div className="absolute inset-24 rounded-full border border-blue-400/10 bg-slate-900/60" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-600/10 shadow-2xl shadow-blue-900/40 backdrop-blur-xl animate-float">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">
                      CS
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Careers
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute right-0 top-20 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl animate-float">
                  <div className="text-xs text-slate-500">
                    Talent
                  </div>
                  <div className="mt-1 font-semibold text-white">
                    Right People
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl animate-float">
                  <div className="text-xs text-slate-500">
                    Opportunities
                  </div>
                  <div className="mt-1 font-semibold text-white">
                    Right Careers
                  </div>
                </div>

                <div className="absolute bottom-8 right-16 rounded-xl border border-blue-400/20 bg-blue-600/10 px-4 py-3 backdrop-blur-xl">
                  <span className="text-sm font-medium text-blue-300">
                    Connecting Futures
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INTRO
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="section-label">
                Who We Are
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Building meaningful connections between{" "}
                <span className="gradient-text">
                  talent and opportunity.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                Career Solutions Pvt Ltd is focused on connecting businesses
                with the talent they need while helping professionals discover
                meaningful career opportunities.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                From technology and banking to non-IT functions and campus
                recruitment, our approach is built around understanding
                requirements, identifying relevant talent and creating
                connections that work for both employers and candidates.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
              >
                Discover our story
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <span className="section-label">
                What We Do
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Recruitment solutions designed around your{" "}
                <span className="gradient-text">
                  goals.
                </span>
              </h2>
            </div>

            <Link
              to="/services"
              className="hidden text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300 md:block"
            >
              Explore all services →
            </Link>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <Link
                key={service.number}
                to={service.link}
                className={`premium-card group p-7 animate-fade-up ${
                  index % 3 === 1
                    ? "delay-100"
                    : index % 3 === 2
                      ? "delay-200"
                      : ""
                }`}
              >

                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-blue-500">
                    {service.number}
                  </span>

                  <span className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-10 bg-blue-500/40 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-400" />

              </Link>
            ))}

          </div>

          <Link
            to="/services"
            className="mt-8 inline-flex text-sm font-semibold text-blue-400 md:hidden"
          >
            Explore all services →
          </Link>

        </div>
      </section>

      {/* ========================================
          INDUSTRIES
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="max-w-3xl">
            <span className="section-label">
              Industries
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Talent across industries that{" "}
              <span className="gradient-text">
                keep businesses moving.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Our recruitment focus spans multiple sectors, allowing us to
              connect candidates and employers across diverse workforce needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group rounded-xl border border-white/8 bg-white/[0.025] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
              >
                <span className="text-xs text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                  {industry}
                </p>
              </div>
            ))}

          </div>

          <Link
            to="/industries"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
          >
            View industry expertise
            <span>→</span>
          </Link>

        </div>
      </section>

      {/* ========================================
          WHY CHOOSE US
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <span className="section-label">
                Why Career Solutions
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Recruitment built around{" "}
                <span className="gradient-text">
                  people.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                We focus on creating a recruitment experience that is
                structured, responsive and aligned with the needs of both
                employers and candidates.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
              >
                Learn more about us
                <span>→</span>
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {strengths.map((strength, index) => (
                <div
                  key={strength}
                  className="group flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs font-semibold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-400 transition-colors group-hover:text-white">
                    {strength}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          PROCESS
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="text-center">
            <span className="section-label">
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              From requirement to{" "}
              <span className="gradient-text">
                opportunity.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {process.map((step) => (
              <div
                key={step.number}
                className="premium-card p-7"
              >
                <span className="text-3xl font-bold text-blue-500/40">
                  {step.number}
                </span>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
            >
              Talk to our recruitment team
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================
          DUAL CTA
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* Employer */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-600/5 to-transparent p-8 sm:p-10">

              <div className="blue-orb -right-32 -top-32 opacity-30" />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  For Employers
                </span>

                <h3 className="mt-5 max-w-md text-2xl font-bold text-white sm:text-3xl">
                  Looking for the right talent?
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-400">
                  Tell us what you are looking for and let us help you connect
                  with relevant candidates.
                </p>

                <Link
                  to="/employers"
                  className="btn-primary mt-7"
                >
                  Hire Talent →
                </Link>
              </div>
            </div>

            {/* Candidate */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 sm:p-10">

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  For Candidates
                </span>

                <h3 className="mt-5 max-w-md text-2xl font-bold text-white sm:text-3xl">
                  Ready for your next opportunity?
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-400">
                  Explore opportunities across IT, Non-IT, Banking and
                  fresher roles.
                </p>

                <Link
                  to="/jobs"
                  className="btn-secondary mt-7"
                >
                  Explore Jobs →
                </Link>
              </div>
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
            Let's Build What's Next
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The right connection can change a{" "}
            <span className="gradient-text">
              career or a business.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Whether you're hiring talent or looking for your next opportunity,
            Career Solutions is here to help you move forward.
          </p>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

          <Link
            to="/contact"
            className="btn-primary group whitespace-nowrap"
          >
            Get In Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/jobs"
            className="btn-secondary group whitespace-nowrap"
          >
            Browse Jobs
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

export default Home;