import { Link } from "react-router-dom";

const strengths = [
  {
    number: "01",
    title: "Industry-Focused Recruitment",
    text: "Recruitment support designed around different industries, roles, skills, and workforce requirements.",
  },
  {
    number: "02",
    title: "Verified Candidate Profiles",
    text: "Candidate information can be reviewed against relevant qualifications and role requirements.",
  },
  {
    number: "03",
    title: "Fast Candidate Sourcing",
    text: "A focused sourcing approach helps employers connect with suitable talent efficiently.",
  },
  {
    number: "04",
    title: "Fresher & Experienced Talent",
    text: "Support for both early-career candidates and experienced professionals across multiple roles.",
  },
  {
    number: "05",
    title: "Bulk Hiring Capability",
    text: "Recruitment support for organizations with larger workforce and multiple-position requirements.",
  },
  {
    number: "06",
    title: "Dedicated Recruitment Support",
    text: "Coordinated assistance throughout the recruitment journey from requirement to selection.",
  },
  {
    number: "07",
    title: "Employer & Candidate Assistance",
    text: "A balanced approach that supports both organizations and candidates throughout the hiring process.",
  },
  {
    number: "08",
    title: "IT, Non-IT & Banking Expertise",
    text: "Recruitment coverage across key sectors with an understanding of different talent requirements.",
  },
];

const expertise = [
  {
    short: "IT",
    title: "IT & Technology",
    text: "Technology roles across development, support, testing, and related areas.",
  },
  {
    short: "NI",
    title: "Non-IT",
    text: "Recruitment support for business, operations, BPO, sales, and other functions.",
  },
  {
    short: "BF",
    title: "Banking & Finance",
    text: "Talent support for banking, financial services, and related opportunities.",
  },
];

function WhyChooseUs() {
  return (
    <div className="dark-page min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-40 bottom-0" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Why Career Solutions</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Recruitment with a
              <span className="gradient-text"> people-first approach.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We bring together recruitment expertise, structured processes,
              and industry understanding to create meaningful connections
              between talent and opportunity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/employers" className="btn-primary">
                Hire Talent →
              </Link>

              <Link to="/jobs" className="btn-secondary">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">What Sets Us Apart</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Built around people, requirements, and results.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Every organization has different hiring requirements, and every
                candidate has a different career journey. Our approach is
                designed to understand those differences.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                From talent sourcing and screening to interview coordination and
                joining support, we focus on creating a clear and organized
                recruitment experience.
              </p>
            </div>

            <div className="premium-card blue-glow p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Our Expertise
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {expertise.map((item) => (
                  <div
                    key={item.short}
                    className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-blue-400">
                      {item.short}
                    </div>

                    <div className="mt-2 text-xs font-medium leading-5 text-slate-400">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/5 pt-6">
                <p className="text-sm leading-6 text-slate-400">
                  Connecting talent and employers across diverse recruitment
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              Our Strengths
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Why organizations and candidates choose us.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our recruitment capabilities are designed to support different
              hiring needs while keeping the experience clear and focused.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {strengths.map((item, index) => (
              <div
                key={item.number}
                className="premium-card group p-6 animate-fade-up md:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="max-w-3xl">
            <span className="section-label">Recruitment Expertise</span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Coverage across key talent segments.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our recruitment services are structured to address different
              sectors, candidate profiles, and employer requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <div
                key={item.short}
                className="premium-card group p-7 md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-lg font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  {item.short}
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
                >
                  Explore Services →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="premium-card p-8 md:p-10">
              <span className="section-label">For Employers</span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                A recruitment partner for your hiring needs.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Whether you need support for a specific role or multiple
                positions, we can understand your requirement and coordinate
                the recruitment journey.
              </p>

              <Link to="/employers" className="btn-primary mt-8">
                Employer Services →
              </Link>
            </div>

            <div className="premium-card p-8 md:p-10">
              <span className="section-label">For Candidates</span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                A pathway toward your next opportunity.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Explore suitable opportunities across IT, Non-IT, Banking,
                fresher, experienced, and other recruitment categories.
              </p>

              <Link to="/jobs" className="btn-secondary mt-8">
                Explore Opportunities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="page-container relative">
          <div className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12">
            <span className="section-label justify-center">
              Let's Build Connections
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              The right connection can change what comes next.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Start your recruitment journey with Career Solutions and move
              toward the right opportunity or the right talent.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started →
              </Link>

              <Link to="/about" className="btn-secondary">
                About Career Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;