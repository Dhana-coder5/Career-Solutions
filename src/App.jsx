import Router from "./router/Router"

function App() {

  return (
    <>
    <Router/>
     <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Recruitment & Workforce Solutions
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hire Talent.
              <br />
              Build Careers.
              <br />
              Grow Together.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Connecting employers with the right talent across IT,
              Non-IT and Banking & Financial Services sectors.
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

        </div>
      </section>


      {/* Recruitment Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Recruitment Solutions
            </h2>

            <p className="mt-4 text-gray-600">
              End-to-end recruitment and workforce solutions designed
              to connect the right people with the right opportunities.
            </p>
          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                IT & Non-IT Recruitment
              </h3>

              <p className="mt-3 text-gray-600">
                Connecting organizations with skilled professionals
                across IT and non-IT domains.
              </p>
            </div>


            <div className="rounded-xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Banking & Financial Services
              </h3>

              <p className="mt-3 text-gray-600">
                Recruitment solutions for banking and financial
                services organizations.
              </p>
            </div>


            <div className="rounded-xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Campus Recruitment Drives
              </h3>

              <p className="mt-3 text-gray-600">
                Helping organizations connect with emerging talent
                through campus recruitment programs.
              </p>
            </div>


            <div className="rounded-xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                Staffing & Workforce Solutions
              </h3>

              <p className="mt-3 text-gray-600">
                Flexible workforce solutions designed around
                organizational hiring requirements.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Partnership Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Partnerships
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Vendor & Recruitment Partnership
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Partner with us to expand your recruitment capabilities,
                access quality talent and build long-term workforce
                solutions.
              </p>

              <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Become a Recruitment Partner
              </button>
            </div>


            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Employer & Candidate Support
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We support employers throughout the hiring process
                while helping candidates discover meaningful career
                opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Whether you're looking to hire exceptional talent or find
            your next career opportunity, we're here to help.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
              Hire Talent
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
              Find Jobs
            </button>
          </div>

        </div>
      </section>

    </div>
  

    </>
  )
}

export default App
