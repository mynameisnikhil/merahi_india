import React from "react";
import { trips } from "../data/trips";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1>Perfect Tour Packages</h1>
        </div>
        <div className="row">
          {trips.map((trip) => (
            <div key={trip.id} className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2 shadow-sm">
                <Link to={`/trip/${trip.id}`}>
                  <img
                    className="img-fluid"
                    src={trip.image}
                    alt={trip.destination}
                    style={{
                      cursor: "pointer",
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <div className="p-4">
                  <div className="d-flex flex-column gap-1 mb-3">
                    <small className="m-0 d-flex align-items-center">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      {trip.location}
                    </small>
                    <small className="m-0 d-flex align-items-center">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      {trip.duration}
                    </small>
                    <small className="m-0 d-flex align-items-center">
                      <i className="fa fa-user text-primary mr-2"></i>
                      {trip.people}
                    </small>
                  </div>

                  <Link
                    className="h5 text-decoration-none"
                    to={`/trip/${trip.id}`}
                  >
                    {trip.destination}
                  </Link>

                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>
                        {trip.rating}
                        {/* <small>({trip.reviews})</small> */}
                      </h6>
                      <h5 className="m-0">{trip.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
