import React from "react";
import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import about from "../images/about.jpg";

const About = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container py-5">
        <div className="row no-gutters shadow-lg rounded overflow-hidden">
          {/* LEFT SIDE - Full Height Image */}
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={about}
              alt="About main"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", minHeight: "550px" }}
            />
          </div>

          {/* RIGHT SIDE - Content Centered */}
          <div className="col-lg-6 d-flex align-items-center bg-white">
            <div className="p-5">
              <h6
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "4px" }}
              >
                About Us
              </h6>
              <h2 className="mb-4 font-weight-bold text-dark">
                “Where Journeys Become Experiences”
              </h2>
              <p className="mb-3">
                At <strong>Meraahi INDIA</strong>, our name is inspired by the
                soulful blend of two words: <em>“Me” (मैं)</em> meaning{" "}
                <strong>I</strong> & <em>“Raahi” (राही)</em> meaning{" "}
                <strong>traveller</strong> – a declaration of spirit, curiosity
                & the timeless love for journeys.
              </p>
              <p className="mb-3">
                We believe travel is not just about <strong>places</strong>—it's
                about <strong>experiences that last a lifetime</strong>.
              </p>

              {/* Bullet Highlights */}
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="fa fa-check text-primary mr-2"></i>
                  100+ Successful Trips planned
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary mr-2"></i>
                  Luxury Getaways, Honeymoons & Pilgrimages
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary mr-2"></i>
                  Trekking Trails & Bike Expeditions
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary mr-2"></i>
                  Global Destinations: Ladakh to Bali & Europe
                </li>
              </ul>

              {/* Collage Images */}
              <div className="row mt-3 mb-4">
                <div className="col-6 pr-2">
                  <img
                    className="img-fluid rounded shadow-sm"
                    src={about1}
                    alt="About collage 1"
                  />
                </div>
                <div className="col-6 pl-2">
                  <img
                    className="img-fluid rounded shadow-sm"
                    src={about2}
                    alt="About collage 2"
                  />
                </div>
              </div>

              <h5 className="text-primary font-italic mb-3">
                Join our tribe of explorers. Let’s Plan Together, Travel Better.
              </h5>
              <a href="/contact" className="btn btn-primary px-4 py-2">
                Get! Set! Explore!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
