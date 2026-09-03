import { Link } from "react-router-dom";

function Services() {
  const itRoles = [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Data Analyst",
    "Data Science / AI-ML",
    "Cloud / DevOps",
    "Testing / Automation",
    "SQL / PL-SQL",
    "IT Support",
  ];

  const nonItRoles = [
    "BPO / Customer Support",
    "Telecalling / Telesales",
    "HR",
    "Accounts / Finance",
    "Sales & Marketing",
    "Operations",
    "Healthcare",
    "Administration",
    "Logistics",
    "Retail",
  ];

  const bankingRoles = [
    "Banking Operations",
    "Relationship Manager",
    "Customer Service Executive",
    "Sales Officer",
    "Banking Sales",
    "Credit & Loan Processing",
    "Branch Operations",
    "Back Office Operations",
    "Collection / Recovery",
    "Insurance & Financial Services",
    "Credit Analyst",
    "Loan Officer",
  ];

  const staffingServices = [
    "Contract / Temporary Staffing",
    "Permanent Recruitment",
    "Bulk Hiring",
    "Campus Recruitment",
    "Executive Search",
  ];

  const serviceGroups = [
    {
      number: "01",
      label: "Technology",
      title: "IT Recruitment",
      description:
        "Build technology teams with professionals across software development, data, cloud, testing and IT support.",
      items: itRoles,
    },
    {
      number: "02",
      label: "Business Functions",
      title: "Non-IT Recruitment",
      description:
        "Discover talent across customer service, HR, finance, sales, operations, healthcare and administration.",
      items: nonItRoles,
    },
    {
      number: "03",
      label: "Financial Services",
      title: "Banking Recruitment",
      description:
        "Connect with candidates for banking operations, sales, customer service, credit and financial services.",
      items: bankingRoles,
    },
    {
      number: "04",
      label: "Workforce Solutions",
      title: "Staffing Solutions",
      description:
        "Flexible recruitment models designed to support permanent hiring, bulk requirements, campus hiring and more.",
      items: staffingServices,
    },
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
                Our Services
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-up delay-100">
              Recruitment solutions
              <br />
              built for{" "}
              <span className="gradient-text">
                real opportunities.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg animate-fade-up delay-200">
              From technology and banking to business functions and
              workforce solutions, we help organizations connect with
              relevant talent across diverse hiring needs.
            </p>

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

          {/* Service summary */}
          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "IT", "Technology Talent"],
              ["02", "NON-IT", "Business Talent"],
              ["03", "BANKING", "Financial Talent"],
              ["04", "STAFFING", "Workforce Solutions"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
              >
                <span className="text-xs font-semibold text-blue-500">
                  {number}
                </span>

                <h3 className="mt-5 text-sm font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          SERVICE GROUPS
      ======================================== */}

      <section className="dark-section">
        <div className="page-container py-20 lg:py-28">

          <div className="mb-16 max-w-2xl">
            <span className="section-label">
              Areas of Expertise
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Talent solutions across{" "}
              <span className="gradient-text">
                multiple domains.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Explore the roles and recruitment areas we support across
              technology, business functions, banking and staffing.
            </p>
          </div>

          <div className="space-y-8">

            {serviceGroups.map((group, groupIndex) => (
              <div
                key={group.number}
                className="premium-card p-7 sm:p-9 lg:p-10"
              >

                {/* Heading */}
                <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">

                  <div>
                    <div className="flex items-center gap-4">

                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400">
                        {group.number}
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {group.label}
                      </span>

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                      {group.description}
                    </p>
                  </div>

                  {/* Roles */}
                  <div className="grid gap-2 sm:grid-cols-2">

                    {group.items.map((item, index) => (
                      <div
                        key={item}
                        className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.05]"
                      >

                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-150" />

                        <span className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-white">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

                {/* Bottom line */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/6 pt-6">

                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />

                  <span className="text-xs text-slate-600">
                    {group.items.length} recruitment areas
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          HOW WE HELP
      ======================================== */}

      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            <div>
              <span className="section-label">
                Built Around Your Needs
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                One recruitment partner.
                <br />
                <span className="gradient-text">
                  Multiple possibilities.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                Whether you need one specialist, a growing team or support
                for a larger hiring requirement, our services can be aligned
                with your recruitment goals.
              </p>

              <Link
                to="/contact"
                className="btn-primary mt-7"
              >
                Discuss Your Requirement →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  title: "Permanent Recruitment",
                  text: "Find talent for long-term organizational needs.",
                },
                {
                  title: "Bulk Hiring",
                  text: "Support for larger and time-sensitive hiring requirements.",
                },
                {
                  title: "Campus Recruitment",
                  text: "Connect organizations with emerging graduate talent.",
                },
                {
                  title: "Flexible Staffing",
                  text: "Explore contract and temporary workforce solutions.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >

                  <span className="text-xs font-semibold text-blue-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
{/* ========================================
    EMPLOYER CTA
======================================== */}

<section className="dark-section">
  <div className="page-container py-20 lg:py-28">

    <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-600/5 to-transparent p-8 sm:p-10 lg:p-14">

      {/* Glow */}
      <div className="blue-orb -right-32 -top-32 opacity-30" />
      <div className="blue-orb -bottom-40 -left-32 opacity-20" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

        <div>

          <span className="section-label">
            For Employers
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to find the right{" "}
            <span className="gradient-text">
              talent for your team?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Share your hiring requirement with us and explore how our
            recruitment services can support your organization.
          </p>

        </div>

        <Link
          to="/employers"
          className="btn-primary group shrink-0"
        >
          Hire Talent
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </div>

  </div>
</section>

    </div>
  );
}

export default Services;