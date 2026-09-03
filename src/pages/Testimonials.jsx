import { Link } from "react-router-dom";

const testimonialSections = [
  {
    number: "01",
    title: "Employer Experiences",
    description:
      "A space to showcase verified feedback from organizations that work with Career Solutions for their recruitment requirements.",
    icon: "◆",
  },
  {
    number: "02",
    title: "Candidate Experiences",
    description:
      "A space to highlight genuine candidate experiences and career journeys supported through our recruitment network.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Campus Experiences",
    description:
      "A space for verified feedback from institutions and students participating in campus recruitment activities.",
    icon: "◇",
  },
];

const feedbackValues = [
  {
    title: "Real Experiences",
    text: "We believe testimonials should represent genuine experiences from candidates, employers, and institutions.",
  },
  {
    title: "Meaningful Connections",
    text: "Every successful recruitment journey begins with understanding the needs of the people involved.",
  },
  {
    title: "Long-Term Relationships",
    text: "Strong recruitment relationships are built through communication, support, and consistent engagement.",
  },
];

function TestimonialPlaceholder({ type, description }) {
  return (
    <div className="premium-card p-7 md:p-8">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
          {type}
        </span>

        <span className="text-2xl text-blue-400">“</span>
      </div>

      <div className="mt-8">
        <div className="h-3 w-32 rounded-full bg-white/10" />
        <div className="mt-4 h-3 w-full rounded-full bg-white/5" />
        <div className="mt-3 h-3 w-5/6 rounded-full bg-white/5" />
        <div className="mt-3 h-3 w-4/6 rounded-full bg-white/5" />
      </div>

      <div className="mt-8 border-t border-white/5 pt-5">
        <p className="text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="dark-page min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-40 bottom-0" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Testimonials</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Real experiences.
              <span className="gradient-text"> Meaningful connections.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We believe the strongest measure of a recruitment partnership is
              the experience of the people and organizations involved.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Share Your Experience →
              </Link>

              <Link to="/services" className="btn-secondary">
                Explore Services
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
              <span className="section-label">Our Philosophy</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Every successful connection has a story.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Recruitment brings together people with different goals —
                candidates looking for opportunities, employers looking for
                talent, and institutions helping students move toward their
                careers.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                This section is designed to showcase genuine experiences as
                verified feedback becomes available.
              </p>
            </div>

            <div className="premium-card blue-glow p-8 md:p-10">
              <div className="text-6xl font-bold text-blue-400">“</div>

              <p className="mt-5 text-xl font-semibold leading-8 text-white">
                The best recruitment stories begin with the right connection.
              </p>

              <div className="mt-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

              <p className="mt-5 text-sm text-slate-500">
                Career Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              Experiences We Value
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Different perspectives. One shared journey.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              As verified feedback is collected, these sections can highlight
              experiences from across our recruitment ecosystem.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonialSections.map((section, index) => (
              <div
                key={section.number}
                className="premium-card group p-7 animate-fade-up md:p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-blue-400">
                    {section.number}
                  </span>

                  <span className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-125">
                    {section.icon}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {section.description}
                </p>

                <div className="mt-7 border-t border-white/5 pt-5">
                  <span className="text-sm font-semibold text-blue-400">
                    Feedback collection area
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Preview */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="section-label">Featured Experiences</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Your feedback can be part of our story.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Genuine feedback helps future candidates and employers
                understand what it is like to work with us.
              </p>
            </div>

            <Link to="/contact" className="btn-secondary">
              Get In Touch →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TestimonialPlaceholder
              type="Employer"
              description="Verified employer feedback can be displayed here."
            />

            <TestimonialPlaceholder
              type="Candidate"
              description="Verified candidate feedback can be displayed here."
            />

            <TestimonialPlaceholder
              type="Campus"
              description="Verified institution or student feedback can be displayed here."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="dark-section-alt border-y border-white/5 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              What Matters To Us
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Feedback built on trust.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We want every experience shared on this page to be genuine,
              useful, and representative of the recruitment journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {feedbackValues.map((item, index) => (
              <div
                key={item.title}
                className="premium-card p-7 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
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
              Let's Connect
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Ready to create your own success story?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you are searching for talent or your next opportunity,
              start your journey with Career Solutions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Contact Us →
              </Link>

              <Link to="/jobs" className="btn-secondary">
                Explore Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;