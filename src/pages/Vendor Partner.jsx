import { Link } from "react-router-dom";

function VendorPartnership() {
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

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-32 top-20 opacity-60" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Vendor Partnership</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Grow together through
              <span className="gradient-text"> stronger partnerships.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Partner with Career Solutions to strengthen recruitment
              capabilities, expand candidate sourcing and support workforce
              requirements across multiple sectors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Become a Partner
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
              <span className="section-label">Partnership Approach</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                A recruitment partnership built around collaboration.
              </h2>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Why Partner With Us</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Extend your recruitment capabilities
            </h2>

            <p className="mt-5 text-slate-400">
              Our partnership model is designed to support different hiring
              requirements through coordinated recruitment services.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="premium-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                ◇
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Wider Sourcing
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Strengthen your candidate sourcing capabilities for different
                roles and hiring requirements.
              </p>
            </div>

            <div className="premium-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                +
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Flexible Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Access recruitment support based on your current workforce and
                sourcing requirements.
              </p>
            </div>

            <div className="premium-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                ↗
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Shared Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Build a long-term professional relationship focused on
                collaboration and recruitment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Partnership Services</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              How we can work together
            </h2>

            <p className="mt-5 text-slate-400">
              Explore the recruitment and staffing activities available through
              our partnership model.
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
                      ↗
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

      {/* How Partnership Works */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Partnership Journey</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Simple, clear and collaborative
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
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
            ].map((step) => (
              <div key={step.number} className="premium-card p-6">
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-white">
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

      {/* Who Can Partner */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="premium-card p-7">
              <span className="section-label">Recruitment Firms</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Expand sourcing capacity
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Collaborate on candidate sourcing and recruitment requirements
                across different roles and sectors.
              </p>
            </div>

            <div className="premium-card p-7">
              <span className="section-label">Staffing Partners</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Support workforce needs
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Work together on staffing, contract and workforce deployment
                requirements.
              </p>
            </div>

            <div className="premium-card p-7">
              <span className="section-label">Business Partners</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Create new opportunities
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Build professional partnerships that create opportunities for
                collaboration and shared growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16">
            <span className="section-label">Let's Partner</span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to build a stronger recruitment partnership?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Tell us about your organization and partnership requirements.
              Let's explore how we can work together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Become a Partner
                <span>→</span>
              </Link>

              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VendorPartnership;