import React, { useState, useEffect } from "react";
import testimonial1 from "../images/testimonial-1.jpg";
import testimonial2 from "../images/testimonial-2.jpg";
import testimonial3 from "../images/testimonial-3.jpg";
import testimonial4 from "../images/testimonial-4.jpg";

const testimonials = [
  {
    id: 1,
    img: testimonial1,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    name: "Client Name",
    profession: "Profession",
  },
  {
    id: 2,
    img: testimonial2,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    name: "Client Name",
    profession: "Profession",
  },
  {
    id: 3,
    img: testimonial3,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    name: "Client Name",
    profession: "Profession",
  },
  {
    id: 4,
    img: testimonial4,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    name: "Client Name",
    profession: "Profession",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide properly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 < testimonials.length ? prev + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h6>
          <h1>What Our Clients Say</h1>
        </div>

        {/* Slider Wrapper */}
        <div
          className="slider-wrapper"
          style={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            className="slider-track d-flex"
            style={{
              width: `${testimonials.length * 100}%`,
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${
                currentIndex * (100 / testimonials.length)
              }%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="text-center p-3"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="bg-white p-4 shadow-sm">
                  <p>{t.text}</p>
                  <h5 className="text-truncate">{t.name}</h5>
                  <span>{t.profession}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="text-center mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                display: "inline-block",
                width: "14px",
                height: "14px",
                margin: "0 5px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "green" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
