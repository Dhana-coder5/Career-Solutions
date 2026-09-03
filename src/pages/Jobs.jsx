import { Link } from "react-router-dom";

function Jobs() {
  const categories = [
    {
      number: "01",
      title: "IT Jobs",
      description:
        "Explore opportunities across software development, testing, support, infrastructure and other technology roles.",
      path: "/jobs/it",
      tags: ["Software", "Development", "Support"],
    },
    {
      number: "02",
      title: "Non-IT Jobs",
      description:
        "Discover opportunities across operations, administration, customer service, sales and other business functions.",
      path: "/jobs/non-it",
      tags: ["Operations", "Sales", "Support"],
    },
    {
      number: "03",
      title: "Banking Jobs",
      description:
        "Find career opportunities across banking, financial services, operations and customer-facing roles.",
      path: "/jobs/banking",
      tags: ["Banking", "Finance", "Operations"],
    },
    {
      number: "04",
      title: "Fresher Jobs",
      description:
        "Start your professional journey with opportunities designed for graduates and entry-level candidates.",
      path: "/jobs/fresher",
      tags: ["Freshers", "Graduates", "Entry Level"],
    },
    {
      number: "05",
      title: "Experienced Jobs",
      description:
        "Explore opportunities for professionals looking to grow their careers and take on new challenges.",
      path: "/jobs/experienced",
      tags: ["Professionals", "Growth", "Careers"],
    },
    {
      number: "06",
      title: "Walk-in Jobs",
      description:
        "Explore walk-in opportunities and stay prepared for upcoming recruitment drives and hiring events.",
      path: "/jobs/walk-in",
      tags: ["Walk-in", "Hiring", "Drives"],
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
            <span className="section-label">Career Opportunities</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Find the opportunity that
              <span className="gradient-text"> moves you forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Explore job opportunities across IT, Non-IT, Banking and
              different experience levels. Your next career opportunity could
              be closer than you think.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#job-categories" className="btn-primary">
                Explore Jobs
                <span>↓</span>
              </a>

              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="premium-card p-6 animate-fade-up delay-200">
              <p className="text-sm text-slate-500">Explore</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Multiple Industries
              </p>
            </div>

            <div className="premium-card p-6 animate-fade-up delay-300">
              <p className="text-sm text-slate-500">Opportunities</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Fresher & Experienced
              </p>
            </div>

            <div className="premium-card p-6 animate-fade-up delay-400">
              <p className="text-sm text-slate-500">Career Path</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Find Your Next Step
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section
        id="job-categories"
        className="dark-section-alt border-y border-white/5"
      >
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Browse Opportunities</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Explore jobs by category
            </h2>

            <p className="mt-5 text-slate-400">
              Choose a category that matches your career goals and explore
              available opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.path}
                to={category.path}
                className={`premium-card group block p-7 animate-fade-up delay-${
                  ((index % 5) + 1) * 100
                }`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-500">
                      {category.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-400">
                    View Opportunities
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Journey */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="section-label">Your Career Journey</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                From searching to starting.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                We aim to make your job search simple, focused and connected
                to the right opportunities.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
              <div className="premium-card p-6">
                <span className="text-sm font-bold text-blue-400">01</span>
                <h3 className="mt-4 font-semibold text-white">
                  Explore
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Browse opportunities based on your skills and interests.
                </p>
              </div>

              <div className="premium-card p-6">
                <span className="text-sm font-bold text-blue-400">02</span>
                <h3 className="mt-4 font-semibold text-white">
                  Apply
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Identify roles that match your profile and career goals.
                </p>
              </div>

              <div className="premium-card p-6">
                <span className="text-sm font-bold text-blue-400">03</span>
                <h3 className="mt-4 font-semibold text-white">
                  Grow
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Take the next step toward building your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="relative overflow-hidden">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="section-label">For Employers</span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Looking for the right talent?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell us about your hiring requirements and explore how our
                  recruitment solutions can support your team.
                </p>
              </div>

              <Link
                to="/employers"
                className="btn-primary whitespace-nowrap"
              >
                Hire Talent
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Jobs;