import React from "react";
import destination1 from "../images/destination-1.jpg";
import destination2 from "../images/destination-2.jpg";
import destination3 from "../images/destination-3.jpg";
import destination4 from "../images/destination-4.jpg";
import destination5 from "../images/destination-5.jpg";
import destination6 from "../images/destination-6.jpg";

const Destination = () => {
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
          <h1>Explore Top Destination</h1>
        </div>
        <div className="row">
          {[
            destination1,
            destination2,
            destination3,
            destination4,
            destination5,
            destination6,
          ].map((destination, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination} alt="" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Destination {index + 1}</h5>
                  <span>100 Cities</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
