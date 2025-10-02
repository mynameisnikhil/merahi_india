import React, { useState, useEffect } from "react";

const destinations = [
  "Spiti Valley",
  "Goa",
  "Kashmir",
  "Ladakh",
  "Kerala",
  "Meghalaya",
];

const EnquirePopup = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  // Open popup every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 3 * 60 * 1000); // 3 minutes
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => setShow(false);

  // Handle form submission
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

    // Optionally, close popup after submission
    setShow(false);
  };

  return (
    <>
      {show && (
        <div
          className="enquire-popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="card border-0"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <div className="card-header bg-primary text-center p-4">
              <h1 className="text-white m-0">Enquire Now</h1>
              <button
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
            </div>
            <div className="card-body rounded-bottom bg-white px-5 pt-4 pb-3">
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
                <div className="d-flex justify-content-center mt-3">
                  <a
                    href="https://wa.me/917990098991?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20tour%20packages."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center mr-3"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                  </a>

                  <a
                    href="tel:+917990098991"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="fa fa-phone-alt mr-2"></i> Call Us
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquirePopup;
