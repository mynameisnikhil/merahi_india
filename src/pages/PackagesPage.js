import React from "react";
import Packages from "../components/Packages";
import Registration from "../components/Registration";

const PackagesPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">Tour Packages</h1>
          <p className="lead text-white">
            Choose the perfect tour package for your next trip
          </p>
        </div>
      </div>

      <Packages />
      <Registration />
    </div>
  );
};

export default PackagesPage;
