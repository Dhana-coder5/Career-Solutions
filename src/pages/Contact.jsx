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

    try {
     

      const scriptURL = "https://script.google.com/macros/s/AKfycbz-uCOq3X2TQDF2hMauQ03op2wisxh4iJZbVYtldDsG4LShn3EysLrHZysb8KldOE3z/exec";

      const data = new URLSearchParams();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("enquiryType", formData.enquiryType);
      data.append("message", formData.message);

      await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      setStatus("Thank you! Your enquiry has been submitted.");

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
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blue-orb -left-40 top-10" />
        <div className="blue-orb -right-32 top-20 opacity-60" />

        <div className="page-container relative py-24 md:py-32">
          <div className="max-w-4xl animate-fade-up">
            <span className="section-label">Get In Touch</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Let's start a
              <span className="gradient-text"> conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Whether you're looking for talent, exploring career
              opportunities or interested in a partnership, we'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="dark-section">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Contact Information */}
            <div>
              <span className="section-label">Contact Information</span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                We're here to help.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Have a hiring requirement, job enquiry or partnership
                opportunity? Send us a message and our team will get in touch.
              </p>

              <div className="mt-10 space-y-4">
                {/* Location */}
                <div className="premium-card p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      ●
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Location
                      </p>

                      <p className="mt-2 text-sm font-medium text-white">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="premium-card p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      @
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Email
                      </p>

                      <a
                        href="mailto:info@careersolutions.com"
                        className="mt-2 block text-sm font-medium text-white transition-colors hover:text-blue-400"
                      >
                        info@careersolutions.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="premium-card p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      ☎
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Phone
                      </p>

                      <a
                        href="tel:+919876425364"
                        className="mt-2 block text-sm font-medium text-white transition-colors hover:text-blue-400"
                      >
                        +91 98764 25364
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Enquiry */}
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6">
                <p className="text-sm font-semibold text-white">
                  Looking for talent?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share your hiring requirement and let us understand how we
                  can support your organization.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="premium-card p-6 md:p-8 lg:p-10">
              <div>
                <span className="section-label">Send An Enquiry</span>

                <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                  Tell us how we can help.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Fill in the details below and we'll get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-300"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-300"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="text-sm font-medium text-slate-300"
                    >
                      Enquiry Type
                    </label>

                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      <option value="Job Seeker">Job Seeker</option>
                      <option value="Employer">Employer</option>
                      <option value="Campus Drive">Campus Drive</option>
                      <option value="Vendor Partnership">
                        Vendor Partnership
                      </option>
                      <option value="General Enquiry">
                        General Enquiry
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Status */}
                {status && (
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-300">
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Enquiry
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="blue-orb left-1/2 top-0 -translate-x-1/2 opacity-50" />

        <div className="page-container relative py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-700/25 via-blue-900/20 to-slate-950 p-8 text-center md:p-12 lg:p-16">
            <span className="section-label">Career Solutions</span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let's connect the right people with the right opportunities.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Hire talent. Build careers. Grow together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;