
const VendorPartnership = () => {
  const partnershipServices = [
    {
      title: "Recruitment Vendor Partnership",
      description:
        "Collaborate with us to support recruitment requirements and expand your talent sourcing capabilities.",
    },
    {
      title: "Staffing Partner / Sub-Vendor Partnership",
      description:
        "Work together on staffing requirements and workforce deployment for client organizations.",
    },
    {
      title: "Candidate Sourcing",
      description:
        "Source relevant and qualified candidates based on specific employer and project requirements.",
    },
    {
      title: "Bulk Hiring",
      description:
        "Support large-scale hiring requirements with coordinated candidate sourcing and recruitment.",
    },
    {
      title: "IT & Non-IT Staffing",
      description:
        "Provide staffing support across technical and non-technical roles and functions.",
    },
    {
      title: "Banking Recruitment",
      description:
        "Support recruitment requirements across banking and financial services roles.",
    },
    {
      title: "Contract / Temporary Staffing",
      description:
        "Provide flexible staffing solutions for temporary, contractual and project-based workforce requirements.",
    },
    {
      title: "Profile Screening",
      description:
        "Screen candidate profiles against job requirements to identify relevant talent.",
    },
    {
      title: "Interview Coordination",
      description:
        "Coordinate interviews between shortlisted candidates and employer hiring teams.",
    },
    {
      title: "Workforce Deployment",
      description:
        "Support the deployment of selected candidates according to workforce requirements.",
    },
    {
      title: "Recruitment Process Support",
      description:
        "Provide end-to-end recruitment process support to help partners manage large-scale hiring requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Partnership
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Vendor & Recruitment
            <br />
            Partnership
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Career Solution Pvt Ltd collaborates with recruitment agencies,
            staffing companies, HR consultants and corporate hiring
            partners to support large-scale talent requirements across
            IT, Non-IT and Banking sectors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Become a Recruitment Partner
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900">
              Contact Us
            </button>

          </div>

        </div>
      </section>


      {/* Partnership Introduction */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Strategic Collaboration
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Building Strong Recruitment Partnerships
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                We collaborate with recruitment agencies, staffing
                organizations, HR consultants and corporate hiring
                partners to help meet large-scale workforce requirements.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Through collaborative recruitment, we help partners
                access talent across IT, Non-IT and Banking sectors while
                supporting different stages of the recruitment process.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-8">

              <h3 className="text-2xl font-bold">
                Our Partnership Network
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    RA
                  </div>
                  <span className="font-medium">
                    Recruitment Agencies
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    SP
                  </div>
                  <span className="font-medium">
                    Staffing Companies
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    HR
                  </div>
                  <span className="font-medium">
                    HR Consultants
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    CH
                  </div>
                  <span className="font-medium">
                    Corporate Hiring Partners
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Partnership Services */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What We Support
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Partnership Services
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Flexible recruitment support designed to help partners
              handle sourcing, screening, interviews and workforce
              requirements efficiently.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {partnershipServices.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Partnership Process */}
      <section className="bg-gray-900 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Collaborative Recruitment Process
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              We work closely with our recruitment partners to support
              talent requirements from initial sourcing through workforce
              deployment.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                01
              </span>

              <h3 className="mt-4 font-semibold">
                Requirement
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Understand the hiring and workforce requirements.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                02
              </span>

              <h3 className="mt-4 font-semibold">
                Sourcing
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Source relevant candidates based on the requirement.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                03
              </span>

              <h3 className="mt-4 font-semibold">
                Screening
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Review and screen candidate profiles.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                04
              </span>

              <h3 className="mt-4 font-semibold">
                Interview
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Coordinate interviews with hiring teams.
              </p>
            </div>


            <div className="rounded-xl border border-blue-500 bg-blue-600 p-6">
              <span className="text-sm font-bold text-blue-100">
                05
              </span>

              <h3 className="mt-4 font-semibold">
                Deployment
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Support workforce deployment and recruitment closure.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Who Can Partner */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Partnership Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Who Can Partner With Us?
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Recruitment Agencies
              </h3>

              <p className="mt-3 text-gray-600">
                Collaborate on candidate sourcing and recruitment
                requirements.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Staffing Companies
              </h3>

              <p className="mt-3 text-gray-600">
                Work together on staffing and workforce deployment.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                HR Consultants
              </h3>

              <p className="mt-3 text-gray-600">
                Extend recruitment capabilities through strategic
                collaboration.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">
                Corporate Hiring Partners
              </h3>

              <p className="mt-3 text-gray-600">
                Support large-scale hiring and workforce requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Become a Partner
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Build a Stronger Talent Network Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Partner with us to support recruitment requirements across
            IT, Non-IT and Banking sectors.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
              Become a Recruitment Partner
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default VendorPartnership;
