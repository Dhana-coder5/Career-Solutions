import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What recruitment services does Career Solutions provide?",
    answer:
      "We support IT, Non-IT, Banking, staffing, fresher hiring, experienced hiring, and bulk recruitment requirements based on employer needs.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "You can visit our Jobs section, choose the relevant job category, review available opportunities, and use the application or enquiry option.",
  },
  {
    question: "Do you help freshers find jobs?",
    answer:
      "Yes. We support fresher recruitment and help connect candidates with suitable opportunities based on their skills, qualifications, and employer requirements.",
  },
  {
    question: "Do you conduct campus recruitment drives?",
    answer:
      "Yes. We support campus-to-corporate recruitment activities including candidate coordination, screening, hiring drives, and employer engagement.",
  },
  {
    question: "Do you provide staffing solutions?",
    answer:
      "Yes. Our staffing solutions are designed to help organizations meet their workforce requirements across different roles and business needs.",
  },
  {
    question: "Can companies approach Career Solutions for bulk hiring?",
    answer:
      "Yes. Employers can contact us for bulk hiring and recruitment support. Our team can understand the requirement and coordinate the hiring process.",
  },
  {
    question: "Do you work with recruitment vendors and partners?",
    answer:
      "Yes. We welcome suitable recruitment vendors and business partners who can collaborate with us to expand talent sourcing and recruitment capabilities.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "Our recruitment approach covers areas such as IT & Technology, Banking, Healthcare, Education, BPO, Retail, Logistics, Manufacturing, and E-commerce.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dark-page min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="blue-orb -left-32 top-10" />
        <div className="blue-orb -right-32 bottom-0" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Frequently Asked Questions</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Answers to your
              <span className="gradient-text"> questions.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Find quick answers about recruitment, jobs, campus drives,
              staffing solutions, employer services, and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dark-section py-20 md:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr]">
            {/* Left */}
            <div className="animate-fade-up">
              <span className="section-label">Need Help?</span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Everything you need to know.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Whether you are looking for your next opportunity or hiring
                talent for your organization, we are here to help.
              </p>

              <div className="premium-card mt-8 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Looking for opportunities?
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Explore our job categories and find opportunities that match
                  your skills and career goals.
                </p>

                <Link to="/jobs" className="btn-secondary mt-5 w-full">
                  Explore Jobs →
                </Link>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`premium-card animate-fade-up ${
                      isOpen ? "border-blue-500/40" : ""
                    }`}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-6 p-5 text-left md:p-6"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-white md:text-lg">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/5 px-5 pb-6 pt-5 md:px-6">
                          <p className="text-sm leading-7 text-slate-400 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="dark-section-alt border-y border-white/5 py-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label justify-center">
              Explore Career Solutions
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Find the right place to start
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Choose the path that matches your current requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Job Seekers",
                text: "Explore opportunities and take your next career step.",
                link: "/jobs",
              },
              {
                title: "Employers",
                text: "Connect with talent for your hiring requirements.",
                link: "/employers",
              },
              {
                title: "Campus",
                text: "Discover campus recruitment and hiring support.",
                link: "/campus-drive",
              },
              {
                title: "Partners",
                text: "Build recruitment partnerships with us.",
                link: "/vendor-partnership",
              },
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="premium-card group p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  →
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blue-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="page-container relative">
          <div className="premium-card blue-glow mx-auto max-w-4xl p-8 text-center md:p-12">
            <span className="section-label justify-center">Still Have Questions?</span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Let's talk about your requirement.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Our team is ready to understand your requirement and help you
              choose the right recruitment path.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Contact Us →
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

export default FAQ;