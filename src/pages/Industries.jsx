import { Link } from "react-router-dom";

function Industries() {
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

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blue-orb -left-32 top-20" />
        <div className="blue-orb -right-20 top-10 opacity-60" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Industries We Serve</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Recruitment expertise across
              <span className="gradient-text"> diverse industries.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We understand that every industry has different talent
              requirements. Our recruitment approach is designed to connect
              businesses with candidates who match their specific needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/employers" className="btn-primary">
                Hire Talent
                <span>→</span>
              </Link>

              <Link to="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-label">Industry Understanding</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Talent solutions built around your industry.
              </h2>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Industry Coverage</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Supporting businesses across key sectors
            </h2>

            <p className="mt-5 text-slate-400">
              Explore the industries where our recruitment and staffing
              solutions can support your growth.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <article
                key={industry.number}
                className={`premium-card group p-7 animate-fade-up delay-${
                  ((index % 5) + 1) * 100
                }`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-500">
                      {industry.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="premium-card p-7">
              <div className="text-3xl font-bold text-blue-400">01</div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Understand
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                We understand your industry, business environment and role
                requirements.
              </p>
            </div>

            <div className="premium-card p-7">
              <div className="text-3xl font-bold text-blue-400">02</div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Identify
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                We identify candidates whose skills and experience align with
                the requirement.
              </p>
            </div>

            <div className="premium-card p-7">
              <div className="text-3xl font-bold text-blue-400">03</div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Connect
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                We help create the connection between the right talent and the
                right opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="section-label">Let's Work Together</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Looking for the right talent in your industry?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Tell us what you are looking for and our recruitment team can
                help you explore the right hiring solution.
              </p>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;