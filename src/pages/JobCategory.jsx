import { Link, useParams } from "react-router-dom";

function JobCategory() {
  const { category } = useParams();

  const jobs = {
    it: [
      {
        title: "Software Developer",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Opportunities for candidates interested in software development and technology roles.",
      },
      {
        title: "Frontend Developer",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Build modern web interfaces using frontend technologies and frameworks.",
      },
      {
        title: "Backend Developer",
        type: "IT",
        experience: "Experienced",
        description:
          "Work on backend applications, APIs, databases and server-side systems.",
      },
    ],

    "non-it": [
      {
        title: "Customer Support Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Customer-facing opportunities across support and service operations.",
      },
      {
        title: "Operations Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Opportunities across business operations and process management.",
      },
      {
        title: "Sales Executive",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Roles for candidates interested in sales, customer engagement and business development.",
      },
    ],

    banking: [
      {
        title: "Banking Operations Executive",
        type: "Banking",
        experience: "Fresher / Experienced",
        description:
          "Opportunities across banking operations, documentation and customer service.",
      },
      {
        title: "Relationship Executive",
        type: "Banking",
        experience: "Experienced",
        description:
          "Customer relationship and financial services opportunities.",
      },
      {
        title: "Banking Sales Executive",
        type: "Banking",
        experience: "Fresher / Experienced",
        description:
          "Roles focused on customer acquisition, financial products and sales.",
      },
    ],

    fresher: [
      {
        title: "Graduate Trainee",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Entry-level opportunities for graduates beginning their professional journey.",
      },
      {
        title: "Junior Developer",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Technology opportunities for candidates starting their development career.",
      },
      {
        title: "Process Associate",
        type: "Fresher",
        experience: "0–1 Years",
        description:
          "Entry-level roles across business process and customer support functions.",
      },
    ],

    experienced: [
      {
        title: "Senior Software Developer",
        type: "IT",
        experience: "2+ Years",
        description:
          "Technology opportunities for professionals with development experience.",
      },
      {
        title: "Senior Operations Executive",
        type: "Non-IT",
        experience: "2+ Years",
        description:
          "Experienced professionals can explore operations and business support roles.",
      },
      {
        title: "Team Lead",
        type: "Multiple Industries",
        experience: "3+ Years",
        description:
          "Leadership opportunities for professionals ready to take greater responsibility.",
      },
    ],

    "walk-in": [
      {
        title: "Walk-in Recruitment Drive",
        type: "Walk-in",
        experience: "As Required",
        description:
          "Explore current walk-in opportunities and recruitment drives.",
      },
      {
        title: "Customer Support Walk-in",
        type: "Non-IT",
        experience: "Fresher / Experienced",
        description:
          "Walk-in opportunities across customer support and service roles.",
      },
      {
        title: "IT Recruitment Drive",
        type: "IT",
        experience: "Fresher / Experienced",
        description:
          "Explore technology-focused recruitment opportunities and hiring drives.",
      },
    ],
  };

  const categoryTitles = {
    it: "IT Jobs",
    "non-it": "Non-IT Jobs",
    banking: "Banking Jobs",
    fresher: "Fresher Jobs",
    experienced: "Experienced Jobs",
    "walk-in": "Walk-in Jobs",
  };

  const categoryDescriptions = {
    it: "Explore technology opportunities across development, support and software roles.",
    "non-it":
      "Discover opportunities across operations, sales, customer service and business functions.",
    banking:
      "Explore career opportunities across banking, financial services and operations.",
    fresher:
      "Start your career with opportunities designed for graduates and entry-level candidates.",
    experienced:
      "Take the next step in your career with opportunities for experienced professionals.",
    "walk-in":
      "Explore walk-in opportunities and recruitment drives across different roles.",
  };

  const currentJobs = jobs[category] || [];
  const title = categoryTitles[category] || "Job Opportunities";
  const description =
    categoryDescriptions[category] ||
    "Explore available career opportunities with Career Solutions.";

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-32 top-20 opacity-60" />

        <div className="page-container relative py-20 md:py-28">
          <div className="animate-fade-up">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
            >
              <span>←</span>
              Back to Jobs
            </Link>

            <span className="section-label mt-8">
              Career Opportunities
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          {currentJobs.length > 0 ? (
            <>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="section-label">Available Roles</span>

                  <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                    Explore current opportunities
                  </h2>
                </div>

                <p className="text-sm text-slate-500">
                  {currentJobs.length} opportunities listed
                </p>
              </div>

              <div className="mt-12 space-y-5">
                {currentJobs.map((job, index) => (
                  <article
                    key={`${job.title}-${index}`}
                    className="premium-card group p-6 md:p-8"
                  >
                    <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                            {job.type}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                            {job.experience}
                          </span>
                        </div>

                        <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 md:text-2xl">
                          {job.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                          {job.description}
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        className="btn-primary whitespace-nowrap"
                      >
                        Apply / Enquire
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400">
                ?
              </div>

              <h2 className="mt-7 text-3xl font-bold text-white">
                Category not found
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                The job category you are looking for is not available.
                Please return to the jobs page and choose another category.
              </p>

              <Link to="/jobs" className="btn-primary mt-7">
                Browse Jobs
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Candidate CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16">
            <span className="section-label">Your Next Opportunity</span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Don't see the right role?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Get in touch with us and share your profile. We can help you
              explore opportunities that match your skills and career goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <span>→</span>
              </Link>

              <Link to="/jobs" className="btn-secondary">
                Browse All Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobCategory;