import React from "react";
import Services from "../components/Services";
import Features from "../components/Features";

const ServicesPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">Services</h1>
          <p className="lead text-white">
            What we offer for your travel experiences
          </p>
        </div>
      </div>

      <Services />
      <Features />
    </div>
  );
};

export default ServicesPage;
