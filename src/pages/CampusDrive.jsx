import { Link } from "react-router-dom";

function CampusDrive() {
  const activities = [
    {
      number: "01",
      title: "Campus Hiring Drives",
      description:
        "Organize structured recruitment drives to connect students and graduates with potential career opportunities.",
    },
    {
      number: "02",
      title: "Pre-Placement Activities",
      description:
        "Support students with activities that help them understand recruitment expectations and workplace opportunities.",
    },
    {
      number: "03",
      title: "Candidate Registration",
      description:
        "Coordinate candidate information and registration to create an organized campus hiring process.",
    },
    {
      number: "04",
      title: "Talent Screening",
      description:
        "Support the identification and initial screening of candidates based on employer requirements.",
    },
    {
      number: "05",
      title: "Aptitude & Skill Assessment",
      description:
        "Facilitate assessment activities based on the skills and requirements defined for the hiring process.",
    },
    {
      number: "06",
      title: "Interview Coordination",
      description:
        "Help coordinate interview schedules and communication between employers, institutions and candidates.",
    },
    {
      number: "07",
      title: "Fresher Recruitment",
      description:
        "Connect organizations with fresh graduates looking to begin their professional careers.",
    },
    {
      number: "08",
      title: "Institution Collaboration",
      description:
        "Work with educational institutions to support structured campus recruitment initiatives.",
    },
    {
      number: "09",
      title: "Bulk Graduate Hiring",
      description:
        "Support employers with larger fresher hiring requirements through organized recruitment activities.",
    },
    {
      number: "10",
      title: "Campus-to-Corporate Support",
      description:
        "Help create a smoother transition for students moving from academic environments into professional careers.",
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
            <span className="section-label">Campus Drives</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Connecting campus talent with
              <span className="gradient-text"> career opportunities.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We support institutions, employers and students through
              structured campus recruitment activities designed to connect
              emerging talent with meaningful career opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Organize a Campus Drive
                <span>→</span>
              </Link>

              <Link to="/jobs/fresher" className="btn-secondary">
                Explore Fresher Jobs
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
              <span className="section-label">Campus to Corporate</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Helping students take the first step toward their careers.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-400">
                Campus recruitment creates an important connection between
                educational institutions and the professional world. Our
                approach focuses on making that connection structured and
                meaningful.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                From candidate registration and screening to interview
                coordination and recruitment drives, we support different
                stages of the campus hiring journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">What We Support</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Campus recruitment solutions
            </h2>

            <p className="mt-5 text-slate-400">
              Structured support for institutions, employers and students
              throughout the campus hiring process.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <article
                key={activity.number}
                className={`premium-card group p-7 animate-fade-up delay-${
                  ((index % 5) + 1) * 100
                }`}
              >
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-500">
                      {activity.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {activity.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {activity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">How It Works</span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              A structured campus hiring journey
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent md:block" />

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Understand the employer's hiring requirements.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "Coordinate with institutions and eligible candidates.",
                },
                {
                  number: "03",
                  title: "Recruit",
                  text: "Conduct structured screening and recruitment activities.",
                },
                {
                  number: "04",
                  title: "Transition",
                  text: "Support candidates as they move toward professional opportunities.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/10 text-sm font-bold text-blue-400">
                    {step.number}
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three audiences */}
      <section className="dark-section-alt border-y border-white/5">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="premium-card p-7">
              <span className="section-label">For Employers</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Access emerging talent
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Connect with graduates and emerging professionals through
                structured campus recruitment activities.
              </p>

              <Link
                to="/employers"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
              >
                Hire Talent
                <span>→</span>
              </Link>
            </div>

            <div className="premium-card p-7">
              <span className="section-label">For Institutions</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Strengthen placement support
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Collaborate on campus recruitment initiatives that connect
                students with potential employers.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
              >
                Partner With Us
                <span>→</span>
              </Link>
            </div>

            <div className="premium-card p-7">
              <span className="section-label">For Students</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Start your career journey
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Explore fresher opportunities and prepare yourself for the
                transition from campus to corporate life.
              </p>

              <Link
                to="/jobs/fresher"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
              >
                Find Fresher Jobs
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16">
            <span className="section-label">Build Better Connections</span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to connect campus talent with opportunity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Whether you are an employer, institution or candidate, let's
              create meaningful connections between education and employment.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started
                <span>→</span>
              </Link>

              <Link to="/jobs/fresher" className="btn-secondary">
                View Fresher Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CampusDrive;