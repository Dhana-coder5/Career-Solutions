import { Link } from "react-router-dom";

function Employers() {
const services = [
"Submit Requirement",
"Hire Talent",
"Bulk Hiring",
"IT Recruitment",
"Non-IT Recruitment",
"Banking Recruitment",
"Campus Hiring",
"Staffing Solutions",
"Contract Staffing",
"Vendor Partnership",
"Request a Callback",
];

return ( <div>


  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold mb-4">
        FOR EMPLOYERS
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Find the Right Talent for Your Business
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        From individual hiring to bulk recruitment and staffing,
        we support employers with flexible talent solutions across
        IT, Non-IT and Banking sectors.
      </p>

    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              {index + 1}
            </div>

            <h2 className="font-semibold text-lg">
              {service}
            </h2>
          </div>
        ))}

      </div>

    </div>
  </section>

  <section className="py-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-center mb-8">
        Submit Your Requirement
      </h2>

      <form className="bg-white p-8 rounded-2xl border border-gray-200 space-y-5">

        <input
          type="text"
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Contact Person"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <textarea
          rows="5"
          placeholder="Tell us about your hiring requirement"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Submit Requirement
        </button>

      </form>

      <div className="text-center mt-8">
        <Link
          to="/contact"
          className="text-blue-600 font-semibold"
        >
          Need help? Contact our team →
        </Link>
      </div>

    </div>
  </section>

</div>);
}

export default Employers;
