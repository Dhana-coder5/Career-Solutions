import { Link } from "react-router-dom";

function Home() {
const services = [
{
title: "IT & Non-IT Recruitment",
description:
"Recruitment solutions for technology and business roles across multiple experience levels.",
},
{
title: "Banking & Financial Services",
description:
"Talent solutions for banking operations, sales, credit, loans, customer service and finance roles.",
},
{
title: "Campus Recruitment Drives",
description:
"Connecting colleges, students and employers through organized campus recruitment and placement drives.",
},
{
title: "Staffing & Workforce Solutions",
description:
"Flexible workforce solutions including permanent, contract, temporary and bulk hiring.",
},
{
title: "Vendor & Recruitment Partnership",
description:
"Collaboration with recruitment agencies, staffing companies and HR consultants for scalable hiring.",
},
{
title: "Employer & Candidate Support",
description:
"Dedicated support for employers seeking talent and candidates looking for suitable career opportunities.",
},
];

const industries = [
"IT & Technology",
"Banking & Financial Services",
"Healthcare",
"Education / EdTech",
"BPO & Customer Service",
"Retail",
"Logistics & Supply Chain",
"Manufacturing",
"E-commerce",
"Finance & Accounting",
];

const strengths = [
"Industry-Focused Recruitment",
"Verified Candidate Profiles",
"Fast Candidate Sourcing",
"Fresher & Experienced Talent",
"Bulk Hiring Capability",
"Dedicated Recruitment Support",
"Employer & Candidate Assistance",
"IT, Non-IT & Banking Expertise",
];

const recruitmentProcess = [
"Requirement",
"Sourcing",
"Screening",
"Shortlisting",
"Interview",
"Selection",
"Joining",
"Post-Placement Support",
];

return ( <div className="w-full">

  {/* =====================================================
      HERO SECTION
  ====================================================== */}
  <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <div className="max-w-4xl">

        <p className="text-blue-200 font-semibold uppercase tracking-wide mb-4">
          Career Solution Pvt Ltd
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Hire Talent.
          <br />
          Build Careers.
          <br />
          Grow Together.
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6">
          Connecting Employers with the Right Talent Across IT,
          Non-IT & Banking Sectors.
        </p>

        <p className="text-blue-100 leading-7 max-w-3xl mb-10">
          We connect employers with suitable talent and help candidates
          discover career opportunities through recruitment, staffing,
          campus hiring and workforce solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link
            to="/employers"
            className="bg-white text-blue-700 px-7 py-3.5 rounded-lg font-semibold text-center hover:bg-blue-50 transition"
          >
            Hire Talent
          </Link>

          <Link
            to="/jobs"
            className="border border-white text-white px-7 py-3.5 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-700 transition"
          >
            Find Jobs
          </Link>

          <Link
            to="/vendor-partnership"
            className="bg-blue-500 text-white px-7 py-3.5 rounded-lg font-semibold text-center hover:bg-blue-400 transition"
          >
            Become a Recruitment Partner
          </Link>

        </div>

      </div>

    </div>
  </section>

  {/* =====================================================
      INTRODUCTION
  ====================================================== */}
  <section className="bg-white py-20">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
        WHO WE ARE
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Connecting People, Talent & Opportunities
      </h2>

      <p className="text-gray-600 text-lg leading-8">
        Career Solution Pvt Ltd provides recruitment and workforce
        solutions across IT, Non-IT and Banking sectors. We support
        employers, candidates, colleges and recruitment partners with
        reliable and industry-focused hiring solutions.
      </p>

    </div>
  </section>

  {/* =====================================================
      SERVICES
  ====================================================== */}
  <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          OUR SERVICES
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Recruitment Solutions That Work
        </h2>

        <p className="text-gray-600 leading-7">
          From individual hiring to bulk recruitment and campus drives,
          we provide solutions designed around your workforce needs.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-lg transition"
          >

            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-5">
              {index + 1}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {service.description}
            </p>

          </div>
        ))}

      </div>

      <div className="text-center mt-10">

        <Link
          to="/services"
          className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View All Services
        </Link>

      </div>

    </div>
  </section>

  {/* =====================================================
      INDUSTRIES
  ====================================================== */}
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          INDUSTRIES WE SERVE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Talent Across Diverse Industries
        </h2>

        <p className="text-gray-600 leading-7">
          Our recruitment expertise extends across technology,
          financial services, healthcare, education, retail and more.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        {industries.map((industry) => (
          <div
            key={industry}
            className="border border-gray-200 rounded-xl p-5 text-center bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition"
          >
            <p className="font-medium text-gray-800">
              {industry}
            </p>
          </div>
        ))}

      </div>

      <div className="text-center mt-10">

        <Link
          to="/industries"
          className="text-blue-600 font-semibold hover:text-blue-800"
        >
          Explore Industries →
        </Link>

      </div>

    </div>
  </section>

  {/* =====================================================
      WHY CHOOSE US
  ====================================================== */}
  <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Career Solution?
        </h2>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {strengths.map((strength) => (
          <div
            key={strength}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >

            <div className="text-blue-600 text-2xl font-bold mb-3">
              ✓
            </div>

            <h3 className="font-semibold text-gray-900">
              {strength}
            </h3>

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* =====================================================
      RECRUITMENT PROCESS
  ====================================================== */}
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          OUR PROCESS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Simple & Effective Recruitment Process
        </h2>

        <p className="text-gray-600">
          A structured recruitment journey from requirement to
          post-placement support.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

        {recruitmentProcess.map((step, index) => (
          <div
            key={step}
            className="text-center"
          >

            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
              {index + 1}
            </div>

            <p className="text-sm font-medium text-gray-700">
              {step}
            </p>

          </div>
        ))}

      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500">
          Requirement → Sourcing → Screening → Shortlisting →
          Interview → Selection → Joining → Post-Placement Support
        </p>
      </div>

    </div>
  </section>

  {/* =====================================================
      EMPLOYER / CANDIDATE CTA
  ====================================================== */}
  <section className="bg-blue-700 py-20 text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-blue-200 font-semibold uppercase tracking-wide mb-3">
        LET'S CONNECT
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Ready to Build Your Next Career or Team?
      </h2>

      <p className="text-blue-100 text-lg leading-8 max-w-2xl mx-auto mb-9">
        Whether you are an employer looking for the right talent or a
        candidate searching for your next opportunity, Career Solution
        is here to help.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <Link
          to="/employers"
          className="bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Hire Talent
        </Link>

        <Link
          to="/jobs"
          className="border border-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
        >
          Find Jobs
        </Link>

      </div>

    </div>
  </section>

</div>
);
}

export default Home;
