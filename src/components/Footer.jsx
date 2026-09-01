
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Career Solutions
            </h2>

            <p className="text-gray-400 leading-6">
              Hire Talent. Build Careers. Grow Together.
            </p>

            <p className="text-gray-400 mt-3 leading-6">
              Connecting employers with the right talent
              across IT, Non-IT & Banking sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                className="text-gray-400 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="text-gray-400 hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/jobs"
                className="text-gray-400 hover:text-white"
              >
                Jobs
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                to="/employers"
                className="text-gray-400 hover:text-white"
              >
                Hire Talent
              </Link>

              <Link
                to="/jobs"
                className="text-gray-400 hover:text-white"
              >
                Find Jobs
              </Link>

              <Link
                to="/vendor-partnership"
                className="text-gray-400 hover:text-white"
              >
                Vendor Partnership
              </Link>

              {/* Fixed route */}
              <Link
                to="/campus-drive"
                className="text-gray-400 hover:text-white"
              >
                Campus Drives
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400 mb-2">
              Chennai, Tamil Nadu, India
            </p>

            <p className="text-gray-400 mb-2">
              Email: info@careersolutions.com
            </p>

            <p className="text-gray-400">
              Phone: +91 98764 25364
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Career Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
