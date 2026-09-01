import { useParams, Link } from "react-router-dom";

function JobCategory() {
  const { category } = useParams();

  const jobs = {
    it: [
      {
        title: "Junior Java Developer",
        company: "ABC Technologies",
        location: "Chennai",
        type: "Full Time",
      },
      {
        title: "React Developer",
        company: "XYZ Solutions",
        location: "Bangalore",
        type: "Full Time",
      },
      {
        title: "Software Engineer",
        company: "Tech Solutions",
        location: "Chennai",
        type: "Full Time",
      },
    ],

    "non-it": [
      {
        title: "HR Executive",
        company: "ABC Services",
        location: "Chennai",
        type: "Full Time",
      },
      {
        title: "Customer Support Executive",
        company: "XYZ Pvt Ltd",
        location: "Chennai",
        type: "Full Time",
      },
    ],

    banking: [
      {
        title: "Banking Executive",
        company: "ABC Finance",
        location: "Chennai",
        type: "Full Time",
      },
      {
        title: "Relationship Manager",
        company: "XYZ Bank",
        location: "Bangalore",
        type: "Full Time",
      },
    ],

    fresher: [
      {
        title: "Graduate Trainee",
        company: "ABC Technologies",
        location: "Chennai",
        type: "Full Time",
      },
      {
        title: "Junior Software Developer",
        company: "Tech Solutions",
        location: "Bangalore",
        type: "Full Time",
      },
    ],

    experienced: [
      {
        title: "Senior Java Developer",
        company: "ABC Technologies",
        location: "Chennai",
        type: "Full Time",
      },
      {
        title: "Senior React Developer",
        company: "XYZ Solutions",
        location: "Bangalore",
        type: "Full Time",
      },
    ],

    "walk-in": [
      {
        title: "Walk-in - Software Developer",
        company: "ABC Technologies",
        location: "Chennai",
        type: "Walk-in",
      },
      {
        title: "Walk-in - HR Executive",
        company: "XYZ Services",
        location: "Chennai",
        type: "Walk-in",
      },
    ],
  };

  const categoryJobs = jobs[category] || [];

  const categoryName = category
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <div>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="font-semibold mb-3">
            CAREER OPPORTUNITIES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {categoryName}
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Explore the latest {categoryName.toLowerCase()} opportunities.
          </p>

        </div>
      </section>

      {/* Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Available Jobs
          </h2>

          <div className="grid gap-6">

            {categoryJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >

                <h3 className="text-xl font-bold text-gray-900">
                  {job.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {job.company}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">

                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    📍 {job.location}
                  </span>

                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    💼 {job.type}
                  </span>

                </div>

                <button
                  className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Apply Now
                </button>

              </div>
            ))}

          </div>

          <Link
            to="/jobs"
            className="inline-block mt-8 text-blue-600 font-semibold hover:underline"
          >
            ← Back to All Job Categories
          </Link>

        </div>
      </section>

    </div>
  );
}

export default JobCategory;