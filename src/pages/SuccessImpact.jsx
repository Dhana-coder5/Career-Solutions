
const SuccessImpact = () => {
  // Keep numerical statistics hidden until verified company figures
  // are available.
  const showImpactStats = false;

  const impactStats = [
    {
      value: "0",
      label: "Candidates Placed",
    },
    {
      value: "0",
      label: "Hiring Partners",
    },
    {
      value: "0",
      label: "Campus Drives Conducted",
    },
    {
      value: "0",
      label: "Open Positions",
    },
    {
      value: "0",
      label: "Industries Covered",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Our Impact
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Our Success
            <br />
            & Impact
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We focus on creating meaningful connections between
            employers, candidates, institutions and recruitment partners.
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


      {/* Impact Statistics */}
      {showImpactStats && (
        <section className="py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Numbers
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Our Recruitment Impact
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Our growing recruitment network continues to connect
                talent with opportunities across multiple sectors.
              </p>

            </div>


            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <p className="text-4xl font-bold text-blue-600">
                    {stat.value}
                  </p>

                  <p className="mt-3 font-semibold text-gray-700">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>
      )}


      {/* Our Impact Areas */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Reach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Creating Opportunities Through Recruitment
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our recruitment ecosystem brings together candidates,
              employers and institutions to create better career
              opportunities.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Candidates */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                C
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Candidates
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Supporting freshers and experienced professionals in
                discovering suitable career opportunities across
                different sectors.
              </p>

              <div className="mt-6 space-y-3">

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Fresher Opportunities
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Experienced Hiring
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Career Support
                </p>

              </div>

            </div>


            {/* Employers */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                E
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Employers
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Helping organizations find suitable professionals for
                individual positions, bulk hiring and workforce needs.
              </p>

              <div className="mt-6 space-y-3">

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Talent Sourcing
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Bulk Hiring
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Staffing Solutions
                </p>

              </div>

            </div>


            {/* Institutions */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                I
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Institutions
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Supporting colleges, universities and training
                institutions through campus recruitment and placement
                activities.
              </p>

              <div className="mt-6 space-y-3">

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Campus Drives
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Fresher Hiring
                </p>

                <p className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-blue-600">✓</span>
                  Placement Assistance
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Sectors Covered */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Sector Coverage
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Connecting Talent Across Industries
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our recruitment services support organizations and
                candidates across IT, Non-IT and Banking & Financial
                Services sectors.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {[
                "IT & Technology",
                "Banking",
                "Healthcare",
                "Education",
                "BPO",
                "Retail",
                "Logistics",
                "Manufacturing",
                "E-commerce",
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-gray-200 bg-white p-5 text-center font-semibold transition hover:border-blue-300 hover:shadow-md"
                >
                  {industry}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Grow With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Create More Success Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether you are looking for the right talent, your next
            career opportunity or a recruitment partnership, we are
            here to help.
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

export default SuccessImpact;

