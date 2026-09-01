import { Link } from "react-router-dom";

function Services() {
const itRoles = [
"Software Developer",
"Full Stack Developer",
"Java Developer",
"Python Developer",
"Data Analyst",
"Data Science / AI-ML",
"Cloud / DevOps",
"Testing / Automation",
"SQL / PL-SQL",
"IT Support",
];

const nonItRoles = [
"BPO / Customer Support",
"Telecalling / Telesales",
"HR",
"Accounts / Finance",
"Sales & Marketing",
"Operations",
"Healthcare",
"Administration",
"Logistics",
"Retail",
];

const bankingRoles = [
"Banking Operations",
"Relationship Manager",
"Customer Service Executive",
"Sales Officer",
"Banking Sales",
"Credit & Loan Processing",
"Branch Operations",
"Back Office Operations",
"Collection / Recovery",
"Insurance & Financial Services",
"Credit Analyst",
"Loan Officer",
];

const staffingServices = [
"Contract / Temporary Staffing",
"Permanent Recruitment",
"Bulk Hiring",
"Campus Recruitment",
"Executive Search",
];

return ( <div>


  {/* Hero */}
  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <p className="text-blue-200 font-semibold mb-4">
        OUR SERVICES
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        End-to-End Recruitment Solutions
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        Connecting employers with qualified talent across IT, Non-IT,
        Banking and Financial Services through reliable recruitment
        and workforce solutions.
      </p>
    </div>
  </section>

  {/* IT */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="max-w-3xl mb-10">
        <p className="text-blue-600 font-semibold mb-3">
          IT RECRUITMENT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Technology Talent Solutions
        </h2>

        <p className="text-gray-600 leading-8">
          We support organizations in sourcing technology professionals
          across software development, data, cloud, testing and IT
          support roles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {itRoles.map((role, index) => (
          <div
            key={index}
            className="p-5 border border-gray-200 rounded-xl bg-gray-50"
          >
            <span className="text-blue-600 font-bold mr-2">✓</span>
            {role}
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* Non IT */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="max-w-3xl mb-10">
        <p className="text-blue-600 font-semibold mb-3">
          NON-IT RECRUITMENT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Non-IT Talent Solutions
        </h2>

        <p className="text-gray-600 leading-8">
          Our recruitment services cover business, customer service,
          sales, finance, administration, healthcare, logistics and
          other non-technical functions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {nonItRoles.map((role, index) => (
          <div
            key={index}
            className="p-5 border border-gray-200 rounded-xl bg-white"
          >
            <span className="text-blue-600 font-bold mr-2">✓</span>
            {role}
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* Banking */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="max-w-3xl mb-10">
        <p className="text-blue-600 font-semibold mb-3">
          BANKING & FINANCIAL SERVICES
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Banking & Finance Recruitment
        </h2>

        <p className="text-gray-600 leading-8">
          We connect banking and financial services organizations with
          professionals across operations, sales, credit, loans,
          customer service and relationship management.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bankingRoles.map((role, index) => (
          <div
            key={index}
            className="p-5 border border-gray-200 rounded-xl bg-gray-50"
          >
            <span className="text-blue-600 font-bold mr-2">✓</span>
            {role}
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* Staffing */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-blue-600 font-semibold mb-3">
          STAFFING & WORKFORCE SOLUTIONS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Flexible Workforce Solutions
        </h2>

        <p className="text-gray-600 leading-8">
          Flexible recruitment and staffing solutions designed to
          support organizations with changing workforce requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {staffingServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 text-center"
          >
            <div className="text-blue-600 font-bold text-2xl mb-4">
              {index + 1}
            </div>

            <h3 className="font-semibold text-gray-900">
              {service}
            </h3>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* CTA */}
  <section className="py-20 bg-blue-700 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Looking for the Right Talent?
      </h2>

      <p className="text-blue-100 text-lg mb-8">
        Tell us your recruitment requirements and our team can help
        you identify suitable candidates.
      </p>

      <Link
        to="/employers"
        className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition"
      >
        Hire Talent
      </Link>

    </div>
  </section>

</div>
);
}

export default Services;
