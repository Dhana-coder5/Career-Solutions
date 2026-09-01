import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import CampusDrive from "../pages/CampusDrive";
import Jobs from "../pages/Jobs";
import Employers from "../pages/Employers";
import VendorPartnership from "../pages/Vendor Partner";
import Contact from "../pages/Contact";
import JobCategory from "../pages/JobCategory";

function Router() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Main Pages */}
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
    </Routes>
  
  );
}

export default Router;