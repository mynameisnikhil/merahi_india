import React from "react";
import { useParams } from "react-router-dom";
import trips from "../data/trips.json"; // will hold array of trip objects like above

const TripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return <h2 className="text-center my-5">Trip not found</h2>;
  }

  return (
    <div className="container py-5">
      {/* Trip Overview */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">{trip.destination}</h1>
        <p className="lead">
          Duration: {trip.duration} | Price: {trip.price}
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          {trip.highlights.map((h, idx) => (
            <span
              key={idx}
              className="badge badge-primary m-2 p-2"
              style={{ fontSize: "14px" }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Roadmap (Timeline Style) */}
      <div className="timeline mb-5">
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
  );
};

export default TripDetails;
