import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "Understand Requirements",
    text: "We begin by understanding the employer's hiring requirements, roles, skills, experience, and workforce needs.",
  },
  {
    number: "02",
    title: "Talent Sourcing",
    text: "Relevant candidates are identified through suitable recruitment and talent sourcing channels.",
  },
  {
    number: "03",
    title: "Candidate Screening",
    text: "Candidate profiles are reviewed against the required qualifications, skills, and role expectations.",
  },
  {
    number: "04",
    title: "Shortlisting",
    text: "Suitable profiles are shortlisted and organized according to the employer's requirements.",
  },
  {
    number: "05",
    title: "Interview Coordination",
    text: "We support communication and coordination between candidates and employers throughout the interview stage.",
  },
  {
    number: "06",
    title: "Candidate Evaluation",
    text: "Candidates progress through the employer's evaluation and selection process.",
  },
  {
    number: "07",
    title: "Selection & Offer",
    text: "Selected candidates move forward with the employer's offer and onboarding procedures.",
  },
  {
    number: "08",
    title: "Joining Support",
    text: "We provide coordination support through the final stages of the recruitment journey.",
  },
];

function RecruitmentProcess() {
  return (
    <div className="dark-page min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-40 bottom-0" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Our Recruitment Process</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              A structured path from
              <span className="gradient-text"> requirement to hiring.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              A clear and coordinated recruitment journey designed to connect
              employers with suitable talent while keeping the process
              organized and efficient.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/employers" className="btn-primary">
                Start Hiring →
              </Link>

              <Link to="/jobs" className="btn-secondary">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              How We Work
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Eight steps. One clear journey.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              From understanding the requirement to supporting the joining
              stage, every step is designed to keep recruitment focused and
              coordinated.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Desktop connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className={`relative flex animate-fade-up ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-full lg:w-[46%]">
                      <div className="premium-card group p-6 md:p-8">
                        <div className="flex items-start gap-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110">
                            {step.number}
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-brand-950 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Employer / Candidate Journey */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Employer */}
            <div className="premium-card p-8 md:p-10">
              <span className="section-label">For Employers</span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Build your team with confidence.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Share your hiring requirements with us and let our recruitment
                process support your search for suitable talent.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Share your requirement",
                  "Receive suitable profiles",
                  "Coordinate interviews",
                  "Select the right candidates",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400">
                      {index + 1}
                    </span>

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/employers" className="btn-primary mt-8">
                Hire Talent →
              </Link>
            </div>

            {/* Candidate */}
            <div className="premium-card p-8 md:p-10">
              <span className="section-label">For Candidates</span>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Move toward your next opportunity.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Explore opportunities that match your skills, experience, and
                career direction.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Explore suitable opportunities",
                  "Share your profile",
                  "Complete the selection process",
                  "Move toward your career goal",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400">
                      {index + 1}
                    </span>

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/jobs" className="btn-secondary mt-8">
                Explore Jobs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="max-w-3xl">
            <span className="section-label">Why Our Process</span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Recruitment built around clarity and coordination.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A structured approach helps keep employers, candidates, and
              recruitment teams aligned throughout the hiring journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Structured",
                text: "A clear recruitment flow from requirement to joining.",
              },
              {
                title: "Focused",
                text: "Hiring activities are aligned with role-specific requirements.",
              },
              {
                title: "Coordinated",
                text: "Communication between stakeholders remains organized.",
              },
              {
                title: "Flexible",
                text: "The approach can adapt to different hiring requirements.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="premium-card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 h-1 w-10 rounded-full bg-blue-500" />

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="page-container relative">
          <div className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12">
            <span className="section-label justify-center">
              Ready to Begin?
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Let's connect the right people with the right opportunities.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you are hiring talent or looking for your next
              opportunity, take the next step with Career Solutions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started →
              </Link>

              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecruitmentProcess;