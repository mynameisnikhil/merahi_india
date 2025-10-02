import React from "react";
import { useNavigate } from "react-router-dom"; // if you are using react-router
import destination1 from "../images/destination-1.jpg";
import destination2 from "../images/destination-2.jpg";
import destination3 from "../images/destination-3.jpg";
import destination4 from "../images/destination-4.jpg";
import destination5 from "../images/destination-5.jpg";
import destination6 from "../images/destination-6.jpg";
import { destinationsData } from "../data/destinations";

const Destination = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/destination/${slug}`);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1>Explore Top Destinations in India</h1>
        </div>
        <div className="row">
          {destinationsData.map((destination, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className="destination-item position-relative overflow-hidden mb-2"
                style={{
                  cursor: "pointer",
                  height: "250px", // FIXED HEIGHT
                }}
                onClick={() => handleClick(destination.slug)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // PREVENT STRETCHING / CROPPING NICELY
                  }}
                />
                <div className="destination-overlay text-white text-decoration-none d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-white">{destination.name}</h5>
                  <span>{destination.cities} Cities</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
