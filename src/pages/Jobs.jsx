import { Link } from "react-router-dom";

function Jobs() {
const categories = [
 {
    name: "IT Jobs",
    path: "/jobs/it",
  },
  {
    name: "Non-IT Jobs",
    path: "/jobs/non-it",
  },
  {
    name: "Banking Jobs",
    path: "/jobs/banking",
  },
  {
    name: "Fresher Jobs",
    path: "/jobs/fresher",
  },
  {
    name: "Experienced Jobs",
    path: "/jobs/experienced",
  },
  {
    name: "Walk-in Jobs",
    path: "/jobs/walk-in",
  },
];

return ( <div>

  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold mb-4">
        JOBS & CAREERS
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Find Your Next Career Opportunity
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        Explore career opportunities across IT, Non-IT and Banking
        sectors for freshers and experienced professionals.
      </p>

    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {categories.map((category, index) => (
          <div
            key={index}
            className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition"
          >

            <div className="text-blue-600 text-3xl font-bold mb-5">
              {index + 1}
            </div>

            <h2 className="text-xl font-bold mb-3">
              {category.name}
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Discover relevant opportunities and take the next step
              in your career journey.
            </p>

            <Link
  to={category.path}
  className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700"
>
  View Jobs
</Link>

          </div>
        ))}

      </div>

    </div>
  </section>

  <section className="py-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-6 text-center">

      <h2 className="text-3xl font-bold mb-5">
        Looking for a Job?
      </h2>

      <p className="text-gray-600 leading-7 mb-8">
        Share your profile with us and explore suitable career
        opportunities.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
      >
        Apply Now
      </Link>

    </div>
  </section>

</div>);
}

export default Jobs;
