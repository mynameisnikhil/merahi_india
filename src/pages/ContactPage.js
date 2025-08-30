import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">Contact Us</h1>
          <p className="lead text-white">We would love to hear from you</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className="mb-4">Get In Touch</h3>
            <p>
              <i className="fa fa-map-marker-alt text-primary mr-2"></i>123
              Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt text-primary mr-2"></i>+012 345
              67890
            </p>
            <p>
              <i className="fa fa-envelope text-primary mr-2"></i>
              info@example.com
            </p>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">Send Us a Message</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control p-4"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control p-4"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button className="btn btn-primary py-3 px-5" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
