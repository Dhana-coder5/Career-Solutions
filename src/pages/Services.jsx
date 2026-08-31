
const Services = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Our Services
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Recruitment Solutions
            <br />
            Built Around Your Needs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Connecting organizations with skilled professionals across
            IT, Non-IT, Banking and Financial Services through reliable
            and flexible recruitment solutions.
          </p>

        </div>
      </section>


      {/* IT Placement */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              IT Recruitment
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              IT Placement Services
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We connect organizations with technology professionals
              across a wide range of technical roles, from software
              development to cloud, data and IT support.
            </p>
          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Software Developer",
              "Full Stack Developer",
              "Java / Python Developer",
              "Data Analyst",
              "Data Science / AI-ML",
              "Cloud / DevOps",
              "Testing / Automation",
              "SQL / PL-SQL",
              "IT Support",
              "Other Technology Roles",
            ].map((role) => (
              <div
                key={role}
                className="rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                  IT
                </div>

                <h3 className="font-semibold">
                  {role}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Non-IT Placement */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Non-IT Recruitment
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Non-IT Placement Services
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our non-IT recruitment services help businesses find
              capable professionals across customer service, HR, sales,
              finance, operations and other business functions.
            </p>
          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "BPO / Customer Support",
              "Telecalling / Telesales",
              "HR",
              "Accounts / Finance",
              "Sales & Marketing",
              "Operations",
              "Healthcare",
              "Admin",
              "Logistics",
              "Retail",
              "Other Non-IT Roles",
            ].map((role) => (
              <div
                key={role}
                className="rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                  NI
                </div>

                <h3 className="font-semibold">
                  {role}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Banking & Financial Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Banking & Finance
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Banking & Financial Services Recruitment
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We provide recruitment support for banking and financial
              services organizations across sales, operations, credit,
              customer service and back-office functions.
            </p>
          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Banking Operations",
              "Relationship Manager",
              "Customer Service Executive",
              "Sales Officer",
              "Banking Sales",
              "Credit & Loan Processing",
              "Branch Operations",
              "Back Office Operations",
              "Collection / Recovery",
              "Insurance & Financial Services",
              "Credit Analyst",
              "Loan Officer",
              "Other Banking & Finance Roles",
            ].map((role) => (
              <div
                key={role}
                className="rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                  BF
                </div>

                <h3 className="font-semibold">
                  {role}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Staffing Solutions */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Workforce Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Staffing & Workforce Solutions
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Flexible staffing solutions designed to help organizations
              meet changing workforce requirements while maintaining
              access to quality talent.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-gray-700 p-7">
              <h3 className="text-xl font-bold">
                Contract / Temporary Staffing
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Flexible workforce support for short-term, project-based
                and temporary staffing requirements.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-7">
              <h3 className="text-xl font-bold">
                Permanent Recruitment
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Helping organizations identify and hire professionals
                for long-term positions.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-7">
              <h3 className="text-xl font-bold">
                Bulk Hiring
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Scalable recruitment support for organizations with
                high-volume hiring requirements.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-7">
              <h3 className="text-xl font-bold">
                Campus Recruitment
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Connecting employers with fresh talent through campus
                recruitment drives and hiring programs.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-7">
              <h3 className="text-xl font-bold">
                Executive Search
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Focused search solutions to identify experienced
                professionals for specialized and leadership roles.
              </p>
            </div>


            <div className="rounded-2xl border border-blue-500 bg-blue-600 p-7">
              <h3 className="text-xl font-bold">
                End-to-End Hiring
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Recruitment support from talent sourcing and screening
                through candidate coordination and hiring.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Let's Work Together
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking for the Right Talent?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Tell us about your hiring requirements and let us help you
            build the right workforce for your organization.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Hire Talent
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
              Find Jobs
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
              Become a Recruitment Partner
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
