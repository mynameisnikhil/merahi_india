import React from "react";
import { useParams } from "react-router-dom";
import { trips } from "../data/trips";

const TripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return <h2 className="text-center my-5">Trip not found</h2>;
  }

  return (
    <div className=" py-5">
      {/* Trip Overview */}
      {/* Trip Hero Section */}
      <div
        className="trip-hero position-relative text-white text-center mb-5"
        style={{
          width: "100vw", // full screen width
          height: "100vh", // full screen height
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <img
          src={trip.image}
          alt={trip.destination}
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        {/* Overlay Content */}
        <div className="d-flex flex-column justify-content-center align-items-center h-100 px-3">
          <h1
            className="display-3 font-weight-bold mb-3"
            style={{
              color: "white",
              textShadow: "2px 2px 8px rgba(12, 12, 12, 0.6)",
            }}
          >
            {trip.destination}
          </h1>

          <p
            className="lead mb-4"
            style={{
              fontSize: "1.25rem",
              textShadow: "2px 2px 20px rgba(12, 12, 12, 0.6)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "10px 20px",
            }}
          >
            <i className="fa fa-clock mr-2"></i> {trip.duration} &nbsp; | &nbsp;
            <i className="fa fa-tag mr-2"></i> {trip.price}
          </p>

          {/* Highlights as Cards */}
          <div
            className="d-flex flex-wrap justify-content-center"
            style={{ maxWidth: "900px" }}
          >
            {trip.highlights.map((h, idx) => (
              <div
                key={idx}
                className="bg-white text-dark rounded-pill shadow-sm m-2 px-3 py-2 d-flex align-items-center"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="fa fa-check-circle text-primary mr-2"></i>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roadmap (Timeline Style) */}
      <div className="timeline container mb-5">
        {trip.itinerary.map((day, idx) => (
          <div key={idx} className="timeline-item mb-4">
            <div className="d-flex">
              {/* Timeline Indicator */}
              <div className="pr-3 text-primary">
                <i className="fa fa-map-marker-alt fa-2x"></i>
              </div>

              {/* Day Content */}
              <div>
                <h5 className="text-dark mb-1">
                  {day.day}: {day.route}
                </h5>
                <p className="mb-1">
                  <strong>Overview:</strong> {day.overview}
                </p>
                <p className="mb-1">
                  <strong>Road:</strong> {day.road}
                </p>
                <p className="mb-1">
                  <strong>Network:</strong> {day.network}
                </p>
                <p className="mb-1">
                  <strong>Stay:</strong> {day.stay}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inclusions & Exclusions */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4 className="text-primary">Inclusions</h4>
            <ul>
              {trip.inclusions.map((inc, idx) => (
                <li key={idx}>{inc}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="text-danger">Exclusions</h4>
            <ul>
              {trip.exclusions.map((exc, idx) => (
                <li key={idx}>{exc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
