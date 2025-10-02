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

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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

        <div className="d-flex justify-content-center">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`testimonial-card text-center mx-3 transition-all`}
              style={{
                flex: index === currentIndex ? "1 0 300px" : "0 0 250px",
                opacity: index === currentIndex ? 1 : 0.4,
                transform:
                  index === currentIndex ? "scale(1.05)" : "scale(0.9)",
                transition: "all 0.6s ease-in-out",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="rounded-circle mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="bg-white p-4 shadow-sm">
                <p>{t.text}</p>
                <h5 className="text-truncate">{t.name}</h5>
                <span>{t.profession}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
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
