import React, { useState } from "react";

const destinations = [
  "Spiti Valley",
  "Goa",
  "Kashmir",
  "Ladakh",
  "Kerala",
  "Meghalaya",
];

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Enquiry about ${destination || "your tour"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    const toEmail = "meraahiindia@gmail.com";

    // Detect domain and open webmail
    if (toEmail.endsWith("@gmail.com")) {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`,
        "_blank"
      );
    } else if (
      toEmail.endsWith("@outlook.com") ||
      toEmail.endsWith("@hotmail.com")
    ) {
      window.open(
        `https://outlook.office.com/mail/deeplink/compose?to=${toEmail}&subject=${subject}&body=${body}`,
        "_blank"
      );
    } else if (toEmail.endsWith("@yahoo.com")) {
      window.open(
        `https://compose.mail.yahoo.com/?to=${toEmail}&subject=${subject}&body=${body}`,
        "_blank"
      );
    } else {
      // fallback to mailto
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div
      className="container-fluid bg-registration py-5"
      style={{
        margin: "90px 0",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Info Section */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Special Offer
              </h6>
              <h1 className="text-white">
                <span className="text-primary">30% OFF</span> On Selected Tours
              </h1>
            </div>
            <p className="text-white">
              Plan your dream vacation with us. Fill out the form and our travel
              experts will assist you with all the details for your chosen
              destination.
            </p>
            <ul className="list-inline text-white m-0">
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Personalized
                travel guidance
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Best deals on
                hotels and flights
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Easy booking
                and support
              </li>
            </ul>
          </div>

          {/* Form Section */}
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Enquire Now</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control p-4"
                      placeholder="Your Contact Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "47px" }}
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                    >
                      <option value="">Select a Destination</option>
                      {destinations.map((dest, index) => (
                        <option key={index} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control p-4"
                      rows="4"
                      placeholder="Your Message / Requirements"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block py-3"
                      type="submit"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
