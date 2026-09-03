import { Link } from "react-router-dom";

const impactAreas = [
  {
    number: "01",
    title: "Candidates",
    description:
      "Helping job seekers discover relevant opportunities across different experience levels and career paths.",
    points: [
      "Fresher opportunities",
      "Experienced roles",
      "IT & Non-IT careers",
      "Banking opportunities",
    ],
  },
  {
    number: "02",
    title: "Employers",
    description:
      "Supporting organizations with structured recruitment solutions aligned with their workforce requirements.",
    points: [
      "Talent sourcing",
      "Candidate screening",
      "Bulk hiring support",
      "Recruitment coordination",
    ],
  },
  {
    number: "03",
    title: "Institutions",
    description:
      "Connecting educational institutions with employers through campus recruitment and career-focused activities.",
    points: [
      "Campus drives",
      "Candidate coordination",
      "Industry interaction",
      "Campus-to-corporate support",
    ],
  },
];

const sectors = [
  "IT & Technology",
  "Banking",
  "Healthcare",
  "Education",
  "BPO",
  "Retail",
  "Logistics",
  "Manufacturing",
  "E-commerce",
];

function SuccessImpact() {
  return (
    <div className="dark-page min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-40 bottom-0" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Success & Impact</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Creating connections that
              <span className="gradient-text"> move careers forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Our focus is simple — create meaningful connections between
              candidates, employers, and institutions through structured
              recruitment support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/jobs" className="btn-primary">
                Find Opportunities →
              </Link>

              <Link to="/employers" className="btn-secondary">
                Hire Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Our Approach</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Impact begins with the right connection.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Recruitment is more than matching a resume with a job
                description. It is about understanding requirements, people,
                skills, and long-term career goals.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                We aim to create a smoother journey for candidates and
                employers while supporting institutions and recruitment
                partners.
              </p>
            </div>

            <div className="premium-card blue-glow p-8 md:p-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    People
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Careers
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Talent
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              Where We Create Value
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Supporting every side of the recruitment ecosystem.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our services are designed around the needs of candidates,
              employers, and educational institutions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {impactAreas.map((area, index) => (
              <div
                key={area.number}
                className="premium-card group p-7 animate-fade-up md:p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-blue-400">
                    {area.number}
                  </span>

                  <span className="text-2xl text-blue-400 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-white/5 pt-6">
                  {area.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Coverage */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-label">Sector Coverage</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Recruitment across diverse industries.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Our recruitment expertise spans multiple sectors, allowing us
                to understand different workforce requirements and candidate
                profiles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="premium-card flex min-h-24 items-center justify-center p-5 text-center animate-fade-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="text-sm font-semibold text-slate-200">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Success Means */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              What Success Means
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              More than filling a position.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We believe successful recruitment creates value for everyone
              involved in the journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Right Opportunity",
                text: "Candidates can move toward roles that better match their skills and career direction.",
              },
              {
                title: "Right Talent",
                text: "Employers can connect with candidates aligned with their hiring requirements.",
              },
              {
                title: "Right Connection",
                text: "Institutions and partners can build stronger links with the employment ecosystem.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="premium-card p-7 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="page-container relative">
          <div className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12">
            <span className="section-label justify-center">
              Be Part of the Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Your next opportunity or your next hire could start here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Connect with Career Solutions and take the next step toward your
              career or hiring goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started →
              </Link>

              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessImpact;