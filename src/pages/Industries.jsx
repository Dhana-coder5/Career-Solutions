import { Link } from "react-router-dom";

function Industries() {
const industries = [
{
title: "IT & Technology",
description:
"Technology professionals across software development, data, cloud, testing and IT support.",
},
{
title: "Banking & Financial Services",
description:
"Talent for banking operations, sales, credit, loans, customer service and financial services.",
},
{
title: "Healthcare",
description:
"Recruitment support for healthcare organizations and related business functions.",
},
{
title: "Education / EdTech",
description:
"Talent solutions for educational institutions, EdTech companies and support functions.",
},
{
title: "BPO & Customer Service",
description:
"Customer support, telecalling, telesales and BPO workforce solutions.",
},
{
title: "Retail",
description:
"Recruitment support for retail operations, sales and customer-facing roles.",
},
{
title: "Logistics & Supply Chain",
description:
"Workforce solutions for logistics, operations and supply chain functions.",
},
{
title: "Manufacturing",
description:
"Recruitment support for manufacturing organizations and business functions.",
},
{
title: "E-commerce",
description:
"Talent solutions supporting e-commerce operations, customer service and business functions.",
},
{
title: "Finance & Accounting",
description:
"Professionals across accounting, finance and related business functions.",
},
];

return ( <div>


  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

      <p className="text-blue-200 font-semibold mb-4">
        INDUSTRIES WE SERVE
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Talent Solutions Across Industries
      </h1>

      <p className="text-lg text-blue-100 max-w-3xl leading-8">
        We support organizations across diverse industries with
        recruitment and workforce solutions tailored to their hiring
        requirements.
      </p>

    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {industries.map((industry, index) => (
          <div
            key={index}
            className="p-7 rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-5">
              {index + 1}
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {industry.title}
            </h2>

            <p className="text-gray-600 leading-7">
              {industry.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  </section>

  <section className="py-20 bg-gray-50 text-center">
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Need Industry-Specific Talent?
      </h2>

      <p className="text-gray-600 mb-8">
        Let us understand your requirement and help you find suitable
        talent.
      </p>

      <Link
        to="/employers"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Submit Requirement
      </Link>

    </div>
  </section>

</div>);
}

export default Industries;
