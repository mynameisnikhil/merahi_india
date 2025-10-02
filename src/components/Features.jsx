import React from "react";

const featuresData = [
  {
    id: 1,
    icon: "fa-money-check-alt",
    title: "Competitive Pricing",
    description:
      "We offer the best travel packages at affordable prices without compromising quality.",
  },
  {
    id: 2,
    icon: "fa-award",
    title: "Top-notch Services",
    description:
      "Our team ensures excellent customer support and seamless travel experiences.",
  },
  {
    id: 3,
    icon: "fa-globe",
    title: "Global Coverage",
    description:
      "We provide travel services to destinations worldwide with trusted partners.",
  },
];

const Features = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="container pb-5">
        <div className="row">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: "100px", width: "100px" }}
                >
                  <i className={`fa fa-2x ${feature.icon} text-white`}></i>
                </div>
                <div className="d-flex flex-column">
                  <h5>{feature.title}</h5>
                  <p className="m-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
