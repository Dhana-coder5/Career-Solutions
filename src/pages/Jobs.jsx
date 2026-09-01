
const Jobs = () => {
  const jobs = [
    {
      title: "Java Developer",
      category: "IT Jobs",
      experience: "Fresher",
      location: "Chennai",
      type: "Full Time",
    },
    {
      title: "React Developer",
      category: "IT Jobs",
      experience: "Experienced",
      location: "Chennai",
      type: "Full Time",
    },
    {
      title: "Customer Support Executive",
      category: "Non-IT Jobs",
      experience: "Fresher",
      location: "Chennai",
      type: "Full Time",
    },
    {
      title: "Relationship Manager",
      category: "Banking Jobs",
      experience: "Experienced",
      location: "Chennai",
      type: "Full Time",
    },
    {
      title: "Data Analyst",
      category: "IT Jobs",
      experience: "Fresher",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      title: "HR Executive",
      category: "Non-IT Jobs",
      experience: "Experienced",
      location: "Chennai",
      type: "Full Time",
    },
  ];

  const categories = [
    "Latest Jobs",
    "IT Jobs",
    "Non-IT Jobs",
    "Banking Jobs",
    "Fresher Jobs",
    "Experienced Jobs",
    "Walk-in Jobs",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Careers
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find Your Next
            <br />
            Career Opportunity
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Explore the latest IT, Non-IT and Banking opportunities
            and find the right role to take your career forward.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Latest Jobs
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900">
              Upload Resume
            </button>

          </div>

        </div>
      </section>


      {/* Job Categories */}
      <section className="border-b border-gray-200 py-8">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-wrap gap-3">

            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* Jobs Section */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Opportunities
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Latest Jobs
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                Explore current opportunities across IT, Non-IT and
                Banking & Financial Services.
              </p>

            </div>


            {/* Search */}
            <div className="w-full md:w-80">

              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>


          {/* Job Cards */}
          <div className="mt-12 grid gap-6">

            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

                  {/* Job Information */}
                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                      {job.category === "IT Jobs"
                        ? "IT"
                        : job.category === "Banking Jobs"
                        ? "BF"
                        : "NI"}
                    </div>


                    <div>

                      <h3 className="text-xl font-bold">
                        {job.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">

                        <span>{job.category}</span>

                        <span>•</span>

                        <span>{job.experience}</span>

                        <span>•</span>

                        <span>{job.location}</span>

                        <span>•</span>

                        <span>{job.type}</span>

                      </div>

                    </div>

                  </div>


                  {/* Apply Button */}
                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                    Apply Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Job Categories Cards */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Find Jobs That Match Your Career
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* IT */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                IT
              </div>

              <h3 className="mt-6 text-xl font-bold">
                IT Jobs
              </h3>

              <p className="mt-3 text-gray-600">
                Software development, testing, data, cloud, DevOps and
                other technology opportunities.
              </p>

              <button className="mt-5 font-semibold text-blue-600">
                View IT Jobs →
              </button>

            </div>


            {/* Non IT */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                NI
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Non-IT Jobs
              </h3>

              <p className="mt-3 text-gray-600">
                BPO, customer support, HR, sales, operations, admin and
                other non-IT opportunities.
              </p>

              <button className="mt-5 font-semibold text-blue-600">
                View Non-IT Jobs →
              </button>

            </div>


            {/* Banking */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                BF
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Banking Jobs
              </h3>

              <p className="mt-3 text-gray-600">
                Banking operations, relationship management, sales,
                credit, loans and financial services roles.
              </p>

              <button className="mt-5 font-semibold text-blue-600">
                View Banking Jobs →
              </button>

            </div>


            {/* Fresher */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                FR
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Fresher Jobs
              </h3>

              <p className="mt-3 text-gray-600">
                Entry-level opportunities for fresh graduates and
                candidates starting their careers.
              </p>

              <button className="mt-5 font-semibold text-blue-600">
                View Fresher Jobs →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Upload Resume */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="rounded-3xl bg-gray-900 p-8 text-center text-white sm:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 font-bold">
              CV
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Don't See the Right Job?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
              Upload your resume and let our recruitment team consider
              your profile for future opportunities.
            </p>


            <div className="mx-auto mt-8 max-w-md">

              <label
                htmlFor="resume"
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-600 px-6 py-10 transition hover:border-blue-400 hover:bg-gray-800"
              >

                <span className="font-semibold">
                  Upload Your Resume
                </span>

                <span className="mt-2 text-sm text-gray-400">
                  PDF, DOC or DOCX
                </span>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

              </label>

            </div>


            <button className="mt-6 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
              Submit Resume
            </button>

          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Build Your Career?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Explore our latest opportunities and take the next step
            towards your career goals.
          </p>

          <button className="mt-8 rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
            View Latest Jobs
          </button>

        </div>

      </section>

    </div>
  );
};

export default Jobs;
