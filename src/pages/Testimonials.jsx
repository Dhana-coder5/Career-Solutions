
const Testimonials = () => {
  const employerTestimonials = [
    {
      quote:
        "Employer testimonial will be displayed here once verified feedback is available.",
      name: "Employer Name",
      role: "Designation",
      company: "Company Name",
    },
    {
      quote:
        "Verified employer feedback can be added here to highlight the recruitment experience.",
      name: "Employer Name",
      role: "Designation",
      company: "Company Name",
    },
  ];

  const candidateTestimonials = [
    {
      quote:
        "Candidate testimonial will be displayed here once verified feedback is available.",
      name: "Candidate Name",
      role: "Job Role",
      company: "Company Name",
    },
    {
      quote:
        "Verified candidate feedback can be added here to share their career experience.",
      name: "Candidate Name",
      role: "Job Role",
      company: "Company Name",
    },
  ];

  const campusTestimonials = [
    {
      quote:
        "Campus or college testimonial will be displayed here once verified feedback is available.",
      name: "Coordinator Name",
      role: "Placement Coordinator",
      company: "College / Institution",
    },
    {
      quote:
        "Verified institution feedback can be added here to highlight the campus recruitment experience.",
      name: "Coordinator Name",
      role: "Placement Coordinator",
      company: "College / Institution",
    },
  ];

  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

        {/* Quote Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-600">
          "
        </div>

        {/* Quote */}
        <p className="mt-6 leading-7 text-gray-600">
          {testimonial.quote}
        </p>

        {/* Person */}
        <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-6">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-500">
            {testimonial.name.charAt(0)}
          </div>

          <div>
            <h4 className="font-bold">
              {testimonial.name}
            </h4>

            <p className="text-sm text-gray-500">
              {testimonial.role}
            </p>

            <p className="text-sm font-medium text-blue-600">
              {testimonial.company}
            </p>
          </div>

        </div>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Testimonials
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            What People
            <br />
            Say About Us
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Hear from employers, candidates and educational institutions
            who experience our recruitment and placement support.
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


      {/* Introduction */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Relationships
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Built on Trust & Support
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Strong relationships with employers, candidates and
            educational institutions are an important part of our
            recruitment ecosystem.
          </p>

        </div>

      </section>


      {/* Employer Testimonials */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Employer Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What Employers Say
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Feedback from our employer partners about their
              recruitment experience.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {employerTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
              />
            ))}

          </div>

        </div>

      </section>


      {/* Candidate Testimonials */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Candidate Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What Candidates Say
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Feedback from candidates who received support throughout
              their recruitment and career journey.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {candidateTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
              />
            ))}

          </div>

        </div>

      </section>


      {/* Campus / College Testimonials */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Campus & College Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What Institutions Say
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Feedback from colleges, universities and training
              institutions about campus recruitment and placement
              support.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {campusTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
              />
            ))}

          </div>

        </div>

      </section>


      {/* Testimonial Categories */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Community
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Connecting Everyone in the Recruitment Ecosystem
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Employers */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                E
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Employers
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Recruitment and workforce solutions designed around
                organizational hiring requirements.
              </p>

            </div>


            {/* Candidates */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                C
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Candidates
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Career opportunities and recruitment support for
                freshers and experienced professionals.
              </p>

            </div>


            {/* Institutions */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                I
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Institutions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Campus recruitment and placement support for colleges,
                universities and training institutions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Let's Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Be Part of Our Recruitment Network
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether you're an employer, candidate or educational
            institution, we're ready to work together.
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

export default Testimonials;
