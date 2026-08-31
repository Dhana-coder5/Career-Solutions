
const Industries = () => {
  const industries = [
    {
      title: "IT & Technology",
      description:
        "Connecting technology companies with skilled developers, engineers, analysts and other IT professionals.",
      short: "IT",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Supporting banks and financial organizations with reliable talent across operations, sales, service and finance.",
      short: "BFS",
    },
    {
      title: "Healthcare",
      description:
        "Helping healthcare organizations find capable professionals for their growing workforce requirements.",
      short: "HC",
    },
    {
      title: "Education / EdTech",
      description:
        "Providing recruitment solutions for educational institutions and technology-driven learning organizations.",
      short: "ED",
    },
    {
      title: "BPO & Customer Service",
      description:
        "Supporting customer-focused organizations with talent for BPO, customer support and service operations.",
      short: "CS",
    },
    {
      title: "Retail",
      description:
        "Connecting retail businesses with professionals across sales, operations, customer service and management.",
      short: "RT",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Helping logistics and supply chain organizations build efficient teams for their operational requirements.",
      short: "LS",
    },
    {
      title: "Manufacturing",
      description:
        "Supporting manufacturing organizations with recruitment solutions across technical and operational functions.",
      short: "MF",
    },
    {
      title: "E-commerce",
      description:
        "Providing talent solutions for fast-growing e-commerce businesses across technology, operations and customer support.",
      short: "EC",
    },
    {
      title: "Finance & Accounting",
      description:
        "Connecting organizations with finance and accounting professionals for diverse business requirements.",
      short: "FA",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Industries We Serve
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Talent Solutions Across
            <br />
            Multiple Industries
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We understand that every industry has unique workforce
            requirements. Our recruitment solutions help organizations
            find the right people with the right skills.
          </p>

        </div>
      </section>


      {/* Industries Grid */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Industry Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Industries We Serve
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From technology and banking to healthcare, retail and
              manufacturing, we provide recruitment support across
              diverse business sectors.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {industry.short}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {industry.description}
                </p>

                {/* Learn More */}
                <div className="mt-6 font-semibold text-blue-600">
                  Recruitment Solutions →
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Industry Approach */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Understanding Your Industry,
                <br />
                Finding Your Talent
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                Our recruitment approach begins by understanding the
                specific requirements, working environment and skill
                expectations of each industry.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                This allows us to identify candidates whose skills and
                experience align with the organization's requirements.
              </p>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Industry Understanding
                </h3>

                <p className="mt-3 text-gray-600">
                  Understanding the specific hiring needs of different
                  industries.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Right Talent
                </h3>

                <p className="mt-3 text-gray-600">
                  Identifying candidates with relevant skills and
                  experience.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Flexible Solutions
                </h3>

                <p className="mt-3 text-gray-600">
                  Recruitment solutions designed around your workforce
                  requirements.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Long-Term Partnership
                </h3>

                <p className="mt-3 text-gray-600">
                  Building lasting relationships with employers and
                  recruitment partners.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Partner With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking for Talent in Your Industry?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Tell us about your workforce requirements and let us help
            you connect with the right talent.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
              Hire Talent
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
              Find Jobs
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
              Become a Recruitment Partner
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Industries;

