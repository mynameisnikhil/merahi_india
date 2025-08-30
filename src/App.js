import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import DestinationPage from "./pages/DestinationPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Topbar from "./components/Topbar";
import TripDetails from "./components/TripDetails";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/guides" element={<GuidesPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
