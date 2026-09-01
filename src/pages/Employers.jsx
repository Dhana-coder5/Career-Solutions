
const Employers = () => {
  const recruitmentServices = [
    {
      title: "IT Recruitment",
      description:
        "Find skilled technology professionals across software development, data, cloud, testing and other IT roles.",
      short: "IT",
    },
    {
      title: "Non-IT Recruitment",
      description:
        "Hire qualified professionals across BPO, customer support, HR, sales, operations, administration and more.",
      short: "NI",
    },
    {
      title: "Banking Recruitment",
      description:
        "Connect with talent across banking operations, sales, customer service, credit, loans and financial services.",
      short: "BF",
    },
    {
      title: "Campus Hiring",
      description:
        "Connect your organization with talented freshers through structured campus recruitment drives.",
      short: "CH",
    },
    {
      title: "Staffing Solutions",
      description:
        "Flexible workforce solutions designed around your organization's short-term and long-term hiring requirements.",
      short: "ST",
    },
    {
      title: "Contract Staffing",
      description:
        "Access skilled professionals for temporary, contractual and project-based workforce requirements.",
      short: "CS",
    },
    {
      title: "Bulk Hiring",
      description:
        "Scalable recruitment support for organizations with high-volume and immediate hiring requirements.",
      short: "BH",
    },
    {
      title: "Vendor Partnership",
      description:
        "Collaborate with us to strengthen your recruitment network and support large-scale talent requirements.",
      short: "VP",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            For Employers
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find the Right Talent
            <br />
            for Your Organization
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            From individual hiring to large-scale recruitment, we help
            employers connect with the right talent across IT, Non-IT
            and Banking & Financial Services.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Submit Requirement
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900">
              Hire Talent
            </button>

          </div>

        </div>
      </section>


      {/* Why Employers Choose Us */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Employer Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Recruitment Support Built Around Your Hiring Needs
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                Every organization has different workforce requirements.
                We provide flexible recruitment and staffing solutions
                designed around your business needs.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Whether you need a single professional, a complete team
                or large-scale hiring support, our recruitment solutions
                help simplify the hiring process.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-8">

              <h3 className="text-2xl font-bold">
                What We Can Help You With
              </h3>

              <div className="mt-6 space-y-4">

                {[
                  "Single & Multiple Position Hiring",
                  "Bulk Recruitment",
                  "Campus Hiring",
                  "Contract & Temporary Staffing",
                  "IT & Non-IT Recruitment",
                  "Banking Recruitment",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="font-medium">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Recruitment Services */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Employer Services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Hiring Solutions for Every Requirement
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Choose the recruitment solution that matches your
              organization's hiring requirements.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {recruitmentServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {service.short}
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


      {/* Hiring Process */}
      <section className="bg-gray-900 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Simple Hiring Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From Requirement to Hiring
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              We support employers throughout the recruitment journey
              to make the hiring process simple and efficient.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                01
              </span>

              <h3 className="mt-4 font-semibold">
                Submit Requirement
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Share your job and workforce requirements with us.
              </p>
            </div>


            <div className="rounded-xl border border-gray-700 p-6">
              <span className="text-sm font-bold text-blue-400">
                02
              </span>

              <h3 className="mt-4 font-semibold">
                Candidate Sourcing
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                We identify candidates matching your requirements.
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
                Relevant profiles are reviewed and shortlisted.
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
                Interviews are coordinated with your hiring team.
              </p>
            </div>


            <div className="rounded-xl border border-blue-500 bg-blue-600 p-6">
              <span className="text-sm font-bold text-blue-100">
                05
              </span>

              <h3 className="mt-4 font-semibold">
                Hiring
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Selected candidates move forward towards joining.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Requirement Form */}
      <section className="py-20">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Get Started
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Submit Your Hiring Requirement
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Tell us about the positions you need to fill. Our
                recruitment team can connect you with suitable talent
                based on your requirements.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    ✓
                  </div>

                  <span className="font-medium">
                    IT & Non-IT Recruitment
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    ✓
                  </div>

                  <span className="font-medium">
                    Banking Recruitment
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    ✓
                  </div>

                  <span className="font-medium">
                    Bulk & Campus Hiring
                  </span>
                </div>


                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                    ✓
                  </div>

                  <span className="font-medium">
                    Staffing & Contract Solutions
                  </span>
                </div>

              </div>

            </div>


            {/* Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-2xl font-bold">
                Tell Us What You Need
              </h3>

              <form className="mt-6 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Contact Person
                  </label>

                  <input
                    type="text"
                    placeholder="Enter contact person"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Hiring Requirement
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>Select requirement</option>
                    <option>IT Recruitment</option>
                    <option>Non-IT Recruitment</option>
                    <option>Banking Recruitment</option>
                    <option>Bulk Hiring</option>
                    <option>Campus Hiring</option>
                    <option>Staffing Solutions</option>
                    <option>Contract Staffing</option>
                    <option>Vendor Partnership</option>
                  </select>
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your hiring requirements..."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Requirement
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* Callback CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Need Assistance?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Want to Discuss Your Hiring Requirements?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Our team is ready to understand your requirements and help
            you find the right recruitment solution.
          </p>

          <button className="mt-8 rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
            Request a Callback
          </button>

        </div>

      </section>

    </div>
  );
};

export default Employers;
