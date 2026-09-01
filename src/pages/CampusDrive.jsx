import { Link } from "react-router-dom";

function CampusDrives() {
const activities = [
"On-Campus & Off-Campus Drives",
"Fresher Hiring",
"College Partnerships",
"Pre-Placement Activities",
"Aptitude Test Coordination",
"Technical Interview Coordination",
"HR Interview Coordination",
"Bulk Fresher Recruitment",
"Placement Assistance",
"Employer–College Coordination",
];

return ( <div>


  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold mb-4">
        CAMPUS RECRUITMENT
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Campus Recruitment & Placement Drives
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        We conduct and coordinate campus recruitment drives for
        colleges, universities, training institutions and corporate
        hiring partners.
      </p>

    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6">

      <p className="text-gray-600 text-lg leading-8 mb-8">
        We connect talented students and freshers with suitable career
        opportunities while supporting employers and educational
        institutions throughout the campus hiring process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="p-5 border border-gray-200 rounded-xl bg-gray-50"
          >
            <span className="text-blue-600 font-bold mr-3">
              ✓
            </span>

            {activity}
          </div>
        ))}

      </div>

    </div>
  </section>

  <section className="py-20 bg-gray-50 text-center">
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Looking to Conduct a Campus Drive?
      </h2>

      <p className="text-gray-600 mb-8">
        Partner with us for fresher recruitment and campus placement
        activities.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Contact Us
      </Link>

    </div>
  </section>

</div>);
}

export default CampusDrives;
