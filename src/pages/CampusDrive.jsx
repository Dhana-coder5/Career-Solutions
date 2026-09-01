
const CampusDrives = () => {
  const activities = [
    {
      title: "On-Campus & Off-Campus Drives",
      description:
        "Organizing recruitment opportunities for students through both on-campus and off-campus hiring drives.",
    },
    {
      title: "Fresher Hiring",
      description:
        "Connecting fresh graduates and students with suitable entry-level career opportunities.",
    },
    {
      title: "College Partnerships",
      description:
        "Building strong partnerships with colleges, universities and training institutions.",
    },
    {
      title: "Pre-Placement Activities",
      description:
        "Supporting students with activities that prepare them for upcoming recruitment opportunities.",
    },
    {
      title: "Aptitude Test Coordination",
      description:
        "Coordinating aptitude assessments as part of the campus recruitment process.",
    },
    {
      title: "Technical Interview Coordination",
      description:
        "Managing technical interview coordination between candidates and hiring organizations.",
    },
    {
      title: "HR Interview Coordination",
      description:
        "Facilitating HR interview rounds and ensuring smooth communication between candidates and employers.",
    },
    {
      title: "Bulk Fresher Recruitment",
      description:
        "Supporting organizations with high-volume recruitment of fresh graduates.",
    },
    {
      title: "Placement Assistance",
      description:
        "Helping students and freshers navigate the placement process and connect with relevant opportunities.",
    },
    {
      title: "Employer–College Coordination",
      description:
        "Creating a smooth connection between employers and educational institutions throughout the recruitment process.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Campus Recruitment
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Campus Recruitment &
            <br />
            Placement Drives
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We conduct and coordinate campus recruitment drives for
            colleges, universities, training institutions and corporate
            hiring partners, connecting talented students and freshers
            with suitable career opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Organize a Campus Drive
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
                Campus To Corporate
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Connecting Fresh Talent With Career Opportunities
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                Our campus recruitment services help employers connect
                with emerging talent while giving students and freshers
                access to relevant career opportunities.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We coordinate with educational institutions, candidates
                and corporate hiring partners to make the recruitment
                process structured and efficient.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-8">

              <h3 className="text-2xl font-bold">
                Our Campus Recruitment Network
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    01
                  </div>

                  <span className="font-medium">
                    Colleges & Universities
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    02
                  </div>

                  <span className="font-medium">
                    Training Institutions
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    03
                  </div>

                  <span className="font-medium">
                    Students & Freshers
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    04
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


      {/* Recruitment Activities */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Campus Recruitment Activities
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From initial coordination to final placement assistance,
              we support multiple stages of the campus recruitment
              process.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {activity.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Process */}
      <section className="bg-gray-900 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From Campus To Corporate
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              We help coordinate the complete recruitment journey,
              creating a structured connection between institutions,
              candidates and employers.
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
                Understand employer hiring requirements.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                02
              </span>

              <h3 className="mt-4 font-semibold">
                Campus Coordination
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Coordinate with colleges and institutions.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                03
              </span>

              <h3 className="mt-4 font-semibold">
                Candidate Selection
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Support assessments and interview rounds.
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
                Coordinate technical and HR interviews.
              </p>
            </div>


            <div className="rounded-xl border border-blue-500 bg-blue-600 p-6">
              <span className="text-sm font-bold text-blue-100">
                05
              </span>

              <h3 className="mt-4 font-semibold">
                Placement
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Support candidates through the placement process.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* College Partnership CTA */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Partner With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking to Conduct a Campus Recruitment Drive?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Whether you are a college, university, training institution
            or corporate hiring partner, we can help coordinate your
            campus recruitment requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Partner With Us
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
              Hire Freshers
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default CampusDrives;

