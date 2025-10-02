import React from "react";

const Topbar = () => {
  return (
    <div className="container-fluid bg-light pt-3 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <p>
                <a
                  href="mailto:meraahiindia@gmail.com"
                  style={{ color: "#007BFF" }} // custom blue
                >
                  <i className="fa fa-envelope mr-2"></i> meraahiindia@gmail.com
                </a>
              </p>
              <p className="text-body px-3">|</p>
              <p>
                <a
                  href="https://wa.me/917990098991?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i>+91 7990098991
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-primary px-3"
                href="https://www.facebook.com/karmiyal.backpackres"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-primary px-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              {/* <a className="text-primary px-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
              <a
                className="text-primary px-3"
                href="https://www.instagram.com/meraahi_india/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-primary pl-3" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
