
const RecruitmentProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Requirement",
      description:
        "We understand the employer's hiring requirements, job roles, skills, experience and workforce needs.",
    },
    {
      number: "02",
      title: "Sourcing",
      description:
        "We identify and source suitable candidates through our recruitment network and talent pool.",
    },
    {
      number: "03",
      title: "Screening",
      description:
        "Candidate profiles are reviewed and screened based on the required qualifications and job criteria.",
    },
    {
      number: "04",
      title: "Shortlisting",
      description:
        "Relevant candidates are shortlisted and presented to the employer for further evaluation.",
    },
    {
      number: "05",
      title: "Interview",
      description:
        "We coordinate interviews between shortlisted candidates and the employer's hiring team.",
    },
    {
      number: "06",
      title: "Selection",
      description:
        "Selected candidates are supported through the final selection and offer process.",
    },
    {
      number: "07",
      title: "Joining",
      description:
        "We assist candidates and employers with joining coordination and onboarding communication.",
    },
    {
      number: "08",
      title: "Post-Placement Support",
      description:
        "We continue to support employers and candidates after placement to ensure a smooth recruitment experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Our Process
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Our Recruitment
            <br />
            Process
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            A structured, transparent and candidate-focused recruitment
            process designed to connect employers with the right talent
            from requirement to successful joining.
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


      {/* Process Overview */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From Requirement to Post-Placement Support
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our end-to-end recruitment process ensures that every
              stage of hiring is handled with proper coordination,
              communication and support.
            </p>

          </div>


          {/* Process Flow */}
          <div className="mt-16">

            <div className="hidden items-center lg:flex">

              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-1 items-center"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.number}
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="h-0.5 flex-1 bg-blue-200" />
                  )}

                </div>
              ))}

            </div>


            {/* Desktop Process Titles */}
            <div className="mt-6 hidden grid-cols-8 gap-4 lg:grid">

              {processSteps.map((step) => (
                <div key={step.number}>

                  <h3 className="text-sm font-bold">
                    {step.title}
                  </h3>

                </div>
              ))}

            </div>


            {/* Mobile / Tablet Process */}
            <div className="mt-8 space-y-5 lg:hidden">

              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.number}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-6 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* Detailed Process */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              End-to-End Recruitment
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Every Step, Properly Coordinated
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From understanding the requirement to supporting
              candidates after placement, we stay involved throughout
              the recruitment journey.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {step.number}
                  </div>

                  <span className="text-4xl font-bold text-gray-100">
                    {step.number}
                  </span>

                </div>


                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Employer & Candidate Journey */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Employer */}
            <div className="rounded-3xl bg-gray-900 p-8 text-white lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                For Employers
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                A Simple Hiring Experience
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                We help employers move efficiently from sharing a
                requirement to finding and onboarding suitable talent.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Understand hiring requirements",
                  "Source suitable candidates",
                  "Screen and shortlist profiles",
                  "Coordinate interviews",
                  "Support selection and joining",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      {index + 1}
                    </span>

                    <span className="text-gray-200">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* Candidate */}
            <div className="rounded-3xl bg-blue-600 p-8 text-white lg:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                For Candidates
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Support Throughout Your Career Journey
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                Candidates receive guidance and coordination throughout
                the recruitment process, from application to joining and
                beyond.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Explore suitable opportunities",
                  "Profile screening and shortlisting",
                  "Interview coordination",
                  "Selection and offer support",
                  "Joining and post-placement assistance",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                      {index + 1}
                    </span>

                    <span className="text-blue-50">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Key Benefits */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Why Our Process Works
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Structured
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A clearly defined recruitment workflow helps ensure
                every hiring stage is properly managed.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Efficient
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Coordinated sourcing, screening and interviews help
                simplify the recruitment process.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Supportive
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Our support continues through joining and post-placement
                to create a smoother experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Start Today
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Connect the Right Talent With the Right Opportunity
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether you are an employer looking to hire or a candidate
            searching for your next opportunity, our team is ready to
            support you.
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

export default RecruitmentProcess;
