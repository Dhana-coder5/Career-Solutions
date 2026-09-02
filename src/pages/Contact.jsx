
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz-uCOq3X2TQDF2hMauQ03op2wisxh4iJZbVYtldDsG4LShn3EysLrHZysb8KldOE3z/exec";

    const data = new URLSearchParams();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("enquiryType", formData.enquiryType);
    data.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      setStatus("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

          <p className="text-blue-200 font-semibold mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl leading-8">
            Whether you are an employer, candidate, college or recruitment
            partner, we would be happy to hear from you.
          </p>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>

              <p className="text-blue-600 font-semibold mb-3">
                CONTACT INFORMATION
              </p>

              <h2 className="text-3xl font-bold mb-6">
                Let's Start a Conversation
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Contact our team for recruitment requirements, job
                opportunities, campus recruitment, staffing solutions or
                vendor partnerships.
              </p>

              <div className="space-y-5">

                <div className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@careersolutions.com
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

            {/* Enquiry Form */}
            <div>

              <h2 className="text-3xl font-bold mb-6">
                Send an Enquiry
              </h2>

              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                />

                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                >
                  <option value="" disabled>
                    Select Enquiry Type
                  </option>

                  <option value="employer">
                    Employer Enquiry
                  </option>

                  <option value="candidate">
                    Candidate Enquiry
                  </option>

                  <option value="vendor">
                    Vendor Enquiry
                  </option>

                  <option value="campus">
                    Campus / College Enquiry
                  </option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Enquiry
                </button>

                {status && (
                  <p className="text-center font-medium text-gray-700">
                    {status}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gray-200 h-72 rounded-2xl flex items-center justify-center">
            <p className="text-gray-600 font-medium">
              Google Map will be added here
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
