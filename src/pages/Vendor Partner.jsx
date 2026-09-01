import { Link } from "react-router-dom";

function VendorPartnership() {
const services = [
"Recruitment Vendor Partnership",
"Staffing Partner / Sub-Vendor Partnership",
"Candidate Sourcing",
"Bulk Hiring",
"IT & Non-IT Staffing",
"Banking Recruitment",
"Contract / Temporary Staffing",
"Profile Screening",
"Interview Coordination",
"Workforce Deployment",
"Recruitment Process Support",
];

return ( <div>

  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold mb-4">
        PARTNERSHIPS
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Vendor & Recruitment Partnership
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        We collaborate with recruitment agencies, staffing companies,
        HR consultants and corporate hiring partners to support
        large-scale talent requirements.
      </p>

    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="max-w-3xl mx-auto text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Grow Together Through Recruitment Partnerships
        </h2>

        <p className="text-gray-600 leading-8">
          Our partnership model supports sourcing, screening,
          interview coordination, staffing and workforce deployment
          across IT, Non-IT and Banking sectors.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl bg-gray-50"
          >

            <span className="text-blue-600 font-bold mr-3">
              ✓
            </span>

            <span className="font-medium">
              {service}
            </span>

          </div>
        ))}

      </div>

    </div>
  </section>

  <section className="py-20 bg-gray-50 text-center">
    <div className="max-w-3xl mx-auto px-6">

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Become a Recruitment Partner
      </h2>

      <p className="text-gray-600 leading-7 mb-8">
        Let's work together to support organizations with quality
        talent and scalable recruitment solutions.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Become a Recruitment Partner
      </Link>

    </div>
  </section>

</div>);
}

export default VendorPartnership;
