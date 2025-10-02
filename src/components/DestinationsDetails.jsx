import React from "react";
import { useParams } from "react-router-dom";
import { destinationsData } from "../data/destinations";

const DestinationDetail = () => {
  const { slug } = useParams();

  // Find the destination from data
  const destination = destinationsData.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="container text-center my-5">
        <h2>Destination Not Found</h2>
        <p>The destination you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="position-relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="img-fluid w-100"
          style={{ maxHeight: "60vh", objectFit: "cover" }}
        />
        <div
          className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.4)",
            color: "white",
          }}
        >
          <h1 className="display-4 text-center text-white">
            {destination.name}
          </h1>
          <p className="lead text-center">
            Discover the beauty of {destination.name}
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="container my-5">
        <h2>About {destination.name}</h2>
        <p>{destination.description}</p>
      </div>

      {/* Gallery Section */}
      <div className="container my-5">
        <h2 className="mb-4">Gallery</h2>
        <div className="row g-3">
          {destination.gallery.map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
              <img
                src={img}
                alt={`${destination.name} ${index + 1}`}
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="container my-5">
        <h2>Highlights</h2>
        <ul>
          {destination.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationDetail;
