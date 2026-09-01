
const WhyChooseUs = () => {
  const strengths = [
    {
      number: "01",
      title: "Industry-Focused Recruitment",
      description:
        "Our recruitment approach is aligned with industry-specific hiring requirements, helping employers find relevant talent.",
    },
    {
      number: "02",
      title: "Verified Candidate Profiles",
      description:
        "We focus on identifying and screening candidate profiles to help employers connect with suitable professionals.",
    },
    {
      number: "03",
      title: "Fast Candidate Sourcing",
      description:
        "Our recruitment network helps us source relevant candidates efficiently for urgent and regular hiring requirements.",
    },
    {
      number: "04",
      title: "Fresher & Experienced Talent",
      description:
        "We support organizations looking for both fresh graduates and experienced professionals across multiple roles.",
    },
    {
      number: "05",
      title: "Bulk Hiring Capability",
      description:
        "Our recruitment support can scale to meet high-volume hiring requirements across different sectors.",
    },
    {
      number: "06",
      title: "Dedicated Recruitment Support",
      description:
        "Our team provides recruitment assistance throughout the hiring process, from sourcing to candidate coordination.",
    },
    {
      number: "07",
      title: "Employer & Candidate Assistance",
      description:
        "We support both employers and candidates by helping create a smooth and coordinated recruitment experience.",
    },
    {
      number: "08",
      title: "IT, Non-IT & Banking Expertise",
      description:
        "Our recruitment expertise covers technology, non-IT and banking & financial services sectors.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Why Career Solution
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Recruitment Solutions
            <br />
            You Can Rely On
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We connect employers with the right talent through
            industry-focused recruitment, efficient candidate sourcing
            and dedicated recruitment support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Hire Talent
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900">
              Find Jobs
            </button>

          </div>

        </div>
      </section>


      {/* Introduction */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Strengths
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Why Choose Career Solution?
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                Finding the right talent requires more than simply
                matching resumes with job descriptions. We focus on
                understanding hiring requirements and connecting
                organizations with suitable candidates.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                From fresher recruitment to experienced hiring and
                large-scale workforce requirements, our solutions are
                designed to support employers at every stage.
              </p>

            </div>


            {/* Highlight Box */}
            <div className="rounded-3xl bg-gray-50 p-8 lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Expertise
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                One Recruitment Partner.
                <br />
                Multiple Talent Solutions.
              </h3>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">
                    IT
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Technology
                  </p>
                </div>


                <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">
                    NI
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Non-IT
                  </p>
                </div>


                <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">
                    BF
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Banking
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Strengths Grid */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What Sets Us Apart
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Why Employers Choose Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our recruitment solutions are built around speed,
              relevance, flexibility and continuous support.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {strengths.map((strength) => (
              <div
                key={strength.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {strength.number}
                  </div>

                  <span className="text-3xl font-bold text-gray-100">
                    +
                  </span>

                </div>


                <h3 className="mt-6 text-xl font-bold">
                  {strength.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {strength.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Employer + Candidate Support */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Employer */}
            <div className="rounded-3xl bg-gray-900 p-8 text-white lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                For Employers
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Helping You Find the Right Talent
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                From individual positions to bulk recruitment, we
                support employers with candidate sourcing, screening,
                interview coordination and recruitment assistance.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Fast Candidate Sourcing",
                  "Bulk Hiring Support",
                  "IT, Non-IT & Banking Recruitment",
                  "Dedicated Recruitment Assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm">
                      ✓
                    </span>

                    <span className="text-gray-200">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Hire Talent
              </button>

            </div>


            {/* Candidate */}
            <div className="rounded-3xl bg-blue-600 p-8 text-white lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                For Candidates
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Helping You Build Your Career
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                We help freshers and experienced professionals discover
                suitable career opportunities across IT, Non-IT and
                Banking sectors.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Fresher & Experienced Opportunities",
                  "IT & Technology Jobs",
                  "Non-IT Career Opportunities",
                  "Banking & Financial Services Jobs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-blue-600">
                      ✓
                    </span>

                    <span className="text-blue-50">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
                Find Jobs
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Recruitment Expertise */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Sector Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Expertise Across Multiple Sectors
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our recruitment capabilities cover a wide range of
              industries and professional requirements.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                IT
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                IT & Technology
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Software development, full stack development, data,
                AI-ML, cloud, DevOps, testing and technology support
                roles.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                NI
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Non-IT
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                BPO, customer support, HR, sales, finance, operations,
                healthcare, logistics, retail and administrative roles.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                BF
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Banking & Financial Services
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Banking operations, relationship management, sales,
                credit, loans, insurance and financial services roles.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Let's Work Together
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ready to Find the Right Talent?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether you're an employer looking to hire or a candidate
            searching for your next opportunity, Career Solution is
            here to support you.
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

export default WhyChooseUs;
