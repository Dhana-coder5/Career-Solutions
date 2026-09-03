import { Link } from "react-router-dom";

function Employers() {
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

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-32 top-24 opacity-60" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">For Employers</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Build your team with
              <span className="gradient-text"> the right talent.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              From individual hiring needs to larger workforce requirements,
              we provide recruitment and staffing support designed around your
              business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start Hiring
                <span>→</span>
              </Link>

              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-label">Our Approach</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Recruitment that starts with understanding your needs.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-400">
                Every organization has different hiring priorities. We focus on
                understanding the role, required skills, experience level and
                business expectations before connecting candidates.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Our solutions cover IT, Non-IT and Banking requirements, along
                with fresher, experienced, staffing and bulk hiring needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Employer Solutions</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Solutions for different hiring needs
            </h2>

            <p className="mt-5 text-slate-400">
              Choose the recruitment support that fits your organization and
              current workforce requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.number}
                className={`premium-card group p-7 animate-fade-up delay-${
                  ((index % 5) + 1) * 100
                }`}
              >
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-500">
                      {service.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      +
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Simple Process</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              A straightforward path to hiring
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
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
            ].map((step) => (
              <div key={step.number} className="premium-card p-6">
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Form */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-label">Tell Us What You Need</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let's discuss your hiring requirement.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Share a few details about your organization and hiring
                requirement. Our team can use this information to understand
                how we can support you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="premium-card p-5">
                  <p className="text-sm font-semibold text-white">
                    IT • Non-IT • Banking
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Recruitment support across multiple sectors.
                  </p>
                </div>

                <div className="premium-card p-5">
                  <p className="text-sm font-semibold text-white">
                    Fresher • Experienced • Bulk Hiring
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Flexible support for different hiring requirements.
                  </p>
                </div>
              </div>
            </div>

            <form className="premium-card p-6 md:p-8">
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

              <button type="button" className="btn-primary mt-6 w-full">
                Submit Requirement
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="section-label">Ready to Hire?</span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Let's build your next team together.
                </h2>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Connect with our team and tell us what your organization is
                  looking for.
                </p>
              </div>

              <Link
                to="/contact"
                className="btn-primary whitespace-nowrap"
              >
                Contact Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Employers;