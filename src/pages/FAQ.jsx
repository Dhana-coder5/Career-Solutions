
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can companies submit requirements?",
      answer:
        "Companies can submit their hiring requirements through our employer support section. You can share details such as job role, required skills, experience, number of positions and other hiring requirements with our recruitment team.",
    },
    {
      question: "How can candidates apply?",
      answer:
        "Candidates can explore available job opportunities through our Jobs / Careers section and apply for suitable positions. Candidates can also submit their resume for consideration for relevant future opportunities.",
    },
    {
      question: "Do you recruit freshers?",
      answer:
        "Yes. We support fresher recruitment across IT, Non-IT and Banking & Financial Services sectors. We also support campus recruitment and placement activities for fresh graduates.",
    },
    {
      question: "Do you conduct campus drives?",
      answer:
        "Yes. We conduct and coordinate campus recruitment and placement drives for colleges, universities, training institutions and corporate hiring partners.",
    },
    {
      question: "Do you provide staffing solutions?",
      answer:
        "Yes. We provide staffing and workforce solutions including contract staffing, temporary staffing, permanent recruitment and bulk hiring support based on employer requirements.",
    },
    {
      question: "Do you work with recruitment vendors?",
      answer:
        "Yes. We collaborate with recruitment agencies, staffing companies, HR consultants and corporate hiring partners to support talent requirements across IT, Non-IT and Banking sectors.",
    },
    {
      question: "Which industries do you support?",
      answer:
        "We support multiple industries including IT & Technology, Banking & Financial Services, Healthcare, Education / EdTech, BPO & Customer Service, Retail, Logistics & Supply Chain, Manufacturing, E-commerce and Finance & Accounting.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Frequently Asked Questions
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Frequently Asked
            <br />
            Questions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Find answers to common questions about our recruitment,
            staffing, campus placement and partnership services.
          </p>

        </div>

      </section>


      {/* FAQ Section */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Need Help?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Browse the questions below to learn more about our
              recruitment and workforce solutions.
            </p>

          </div>


          {/* Accordion */}
          <div className="space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-md"
                      : "border-gray-200"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 bg-white px-6 py-6 text-left transition hover:bg-gray-50"
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-semibold">
                        {faq.question}
                      </span>

                    </div>


                    {/* Plus / Minus */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-gray-100 px-6 pb-6 pt-5">

                        <p className="pl-14 leading-7 text-gray-600">
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

      </section>


      {/* Quick Categories */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Looking for Something Specific?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore the areas where we can support you.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                E
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Employers
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Find the right talent for your organization.
              </p>

              <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
                Hire Talent →
              </button>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                C
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Candidates
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover career opportunities that match your skills.
              </p>

              <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
                Find Jobs →
              </button>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                P
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Recruitment Partners
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Partner with us for recruitment and staffing support.
              </p>

              <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
                Partner With Us →
              </button>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                C
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Campus
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Conduct campus recruitment and placement drives.
              </p>

              <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
                Campus Drives →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Still Have Questions */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <div className="rounded-3xl bg-gray-900 px-8 py-12 text-white lg:px-16">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Still Have Questions?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              We're Here to Help
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
              If you couldn't find the answer you're looking for,
              get in touch with our team and we'll be happy to assist.
            </p>

            <button className="mt-8 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
              Contact Us
            </button>

          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Connect with us for recruitment, staffing, campus placement
            and workforce solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
              Hire Talent
            </button>

            <button className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
              Find Jobs
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FAQ;

