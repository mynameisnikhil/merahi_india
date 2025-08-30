import React from "react";
import Destination from "../components/Destination";

const DestinationPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">Destinations</h1>
          <p className="lead text-white">
            Explore the most beautiful places with us
          </p>
        </div>
      </div>

      <Destination />
    </div>
  );
};

export default DestinationPage;
