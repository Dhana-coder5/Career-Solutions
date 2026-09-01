
const SuccessImpact = () => {
  /*
    IMPORTANT:
    Keep this section hidden until verified company figures
    are provided.

    Example structure when verified figures are available:

    const impactStats = [
      {
        value: "500+",
        label: "Candidates Placed",
      },
      {
        value: "100+",
        label: "Hiring Partners",
      },
      {
        value: "50+",
        label: "Campus Drives Conducted",
      },
      {
        value: "200+",
        label: "Open Positions",
      },
      {
        value: "10+",
        label: "Industries Covered",
      },
    ];
  */

  const showImpactStats = false;

  if (!showImpactStats) {
    return null;
  }

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
            Our recruitment efforts are focused on creating meaningful
            connections between employers and talented professionals.
          </p>

        </div>

      </section>


      {/* Impact Statistics */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Numbers
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Making an Impact Through Recruitment
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our growing recruitment network helps connect talent with
              opportunities across multiple sectors.
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


      {/* Impact Areas */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Reach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Connecting Talent & Opportunities
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <h3 className="text-xl font-bold">
                Candidates
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Supporting freshers and experienced professionals in
                finding suitable career opportunities.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <h3 className="text-xl font-bold">
                Employers
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Helping organizations find suitable talent for their
                individual and large-scale hiring requirements.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8">

              <h3 className="text-xl font-bold">
                Campus & Institutions
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Supporting campus recruitment drives and connecting
                students and freshers with career opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Be Part of Our Growing Network
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether you're an employer, candidate or recruitment
            partner, let's create meaningful opportunities together.
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