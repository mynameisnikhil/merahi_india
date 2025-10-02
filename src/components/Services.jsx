import React from "react";

const servicesData = [
  {
    id: 1,
    icon: "fa-route",
    title: "Travel Guide",
    description:
      "Experienced guides to make your journey safe, informative, and memorable.",
  },
  {
    id: 2,
    icon: "fa-ticket-alt",
    title: "Ticket Booking",
    description:
      "Seamless booking for flights, trains, buses, and more at best prices.",
  },
  {
    id: 3,
    icon: "fa-hotel",
    title: "Hotel Booking",
    description:
      "Handpicked hotels and resorts to suit every budget and preference.",
  },
];

const Services = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Services
          </h6>
          <h1>Tours & Travel Services</h1>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className={`fa fa-2x ${service.icon} mx-auto mb-4`}></i>
                <h5 className="mb-2">{service.title}</h5>
                <p className="m-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
