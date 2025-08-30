import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Team from "../components/Team";

const AboutPage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white">About Us</h1>
              <p className="lead text-white">
                Learn more about our company, our mission and our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Features />
      <Team />
    </div>
  );
};

export default AboutPage;
