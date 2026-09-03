import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import CampusDrive from "../pages/CampusDrive";
import Jobs from "../pages/Jobs";
import JobCategory from "../pages/JobCategory";
import Employers from "../pages/Employers";
import VendorPartnership from "../pages/Vendor Partner";
import Contact from "../pages/Contact";

import FAQ from "../pages/FAQ";
import RecruitmentProcess from "../pages/RecruitmentProcess";
import SuccessImpact from "../pages/SuccessImpact";
import Testimonials from "../pages/Testimonials";
import WhyChooseUs from "../pages/WhyChooseUs";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/industries" element={<Industries />} />

      <Route path="/campus-drive" element={<CampusDrive />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/jobs/:category" element={<JobCategory />} />

      <Route path="/employers" element={<Employers />} />

      <Route
        path="/vendor-partnership"
        element={<VendorPartnership />}
      />

      <Route path="/contact" element={<Contact />} />

      {/* Additional Pages */}
      <Route path="/faq" element={<FAQ />} />

      <Route
        path="/recruitment-process"
        element={<RecruitmentProcess />}
      />

      <Route path="/success-impact" element={<SuccessImpact />} />

      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/why-choose-us" element={<WhyChooseUs />} />
    </Routes>
  );
}

export default Router;