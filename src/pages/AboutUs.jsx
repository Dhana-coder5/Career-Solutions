import { Link } from "react-router-dom";

function About() {
const expertise = [
"IT Recruitment",
"Non-IT Recruitment",
"Banking & Financial Services Recruitment",
"Freshers & Experienced Candidate Support",
"Campus-to-Corporate Hiring",
"End-to-End Recruitment Solutions",
];

const stakeholders = [
{
title: "Employers",
description:
"We help organizations connect with suitable talent based on their hiring and workforce requirements.",
},
{
title: "Candidates",
description:
"We support freshers and experienced professionals in finding suitable career opportunities.",
},
{
title: "Colleges & Institutions",
description:
"We coordinate campus recruitment and placement activities between educational institutions and employers.",
},
{
title: "Recruitment Partners",
description:
"We collaborate with recruitment agencies, staffing companies and HR consultants to support talent requirements.",
},
];

const strengths = [
"Industry-Focused Recruitment",
"IT, Non-IT & Banking Expertise",
"Fresher & Experienced Talent",
"Campus-to-Corporate Hiring",
"End-to-End Recruitment Support",
"Employer, Candidate & Vendor Partnership",
];

return ( <div className="w-full">


  {/* =====================================================
      HERO
  ====================================================== */}
  <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold uppercase tracking-wide mb-4">
        ABOUT CAREER SOLUTION
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Connecting Talent with Opportunity
      </h1>

      <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-8">
        Connecting Employers with the Right Talent Across IT,
        Non-IT & Banking Sectors.
      </p>

    </div>
  </section>

  {/* =====================================================
      WHO WE ARE
  ====================================================== */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Recruitment & Workforce Partner
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            Career Solution Pvt Ltd is focused on connecting
            organizations with suitable talent across IT, Non-IT and
            Banking sectors.
          </p>

          <p className="text-gray-600 leading-8 mb-5">
            We support employers, candidates, colleges and recruitment
            partners through recruitment, staffing, campus hiring and
            workforce solutions.
          </p>

          <p className="text-gray-600 leading-8">
            Our approach focuses on understanding hiring requirements,
            identifying suitable candidates and supporting the
            recruitment journey from sourcing through joining.
          </p>

        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h3>

          <div className="space-y-4">

            {expertise.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4"
              >

                <span className="text-blue-600 font-bold text-lg">
                  ✓
                </span>

                <span className="text-gray-700 font-medium">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  </section>

  {/* =====================================================
      MISSION & VISION
  ====================================================== */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">

          <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-6">
            M
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            Our mission is to connect employers with the right talent
            while helping candidates discover suitable career
            opportunities. We aim to provide reliable recruitment,
            staffing and workforce solutions that create value for
            employers, candidates, colleges and recruitment partners.
          </p>

        </div>

        {/* Vision */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">

          <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl mb-6">
            V
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8">
            Our vision is to build a trusted recruitment ecosystem that
            connects organizations and talent through transparent,
            efficient and industry-focused hiring solutions across
            diverse sectors.
          </p>

        </div>

      </div>

    </div>
  </section>

  {/* =====================================================
      WHAT WE DO
  ====================================================== */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          WHAT WE DO
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Supporting the Complete Recruitment Journey
        </h2>

        <p className="text-gray-600 leading-8">
          We work with different stakeholders across the recruitment
          ecosystem to create meaningful connections between talent and
          opportunity.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stakeholders.map((item, index) => (
          <div
            key={item.title}
            className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition"
          >

            <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-5">
              {index + 1}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* =====================================================
      WHY CAREER SOLUTION
  ====================================================== */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
          WHY CAREER SOLUTION?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Focused Approach to Recruitment
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

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
      CAMPUS TO CORPORATE
  ====================================================== */}
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
        CAMPUS TO CORPORATE
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Helping Freshers Begin Their Careers
      </h2>

      <p className="text-gray-600 text-lg leading-8 mb-8">
        We support fresher hiring and campus recruitment by connecting
        students and graduates with suitable employers and career
        opportunities.
      </p>

      <Link
        to="/campus-drives"
        className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Explore Campus Recruitment
      </Link>

    </div>
  </section>

  {/* =====================================================
      FINAL CTA
  ====================================================== */}
  <section className="py-20 bg-blue-700 text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Hire Talent. Build Careers. Grow Together.
      </h2>

      <p className="text-blue-100 text-lg leading-8 max-w-2xl mx-auto mb-8">
        Whether you are an employer, candidate, college or recruitment
        partner, let's connect and build meaningful opportunities
        together.
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

export default About;
