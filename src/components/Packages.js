import React from "react";
import package1 from "../images/package-1.jpg";
import package2 from "../images/package-2.jpg";
import package3 from "../images/package-3.jpg";
import package4 from "../images/package-4.jpg";
import package5 from "../images/package-5.jpg";
import package6 from "../images/package-6.jpg";

const Packages = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1>Perfect Tour Packages</h1>
        </div>
        <div className="row">
          {[package1, package2, package3, package4, package5, package6].map(
            (pkg, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={pkg} alt="" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                        Thailand
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2"></i>
                        3 days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2"></i>2 Person
                      </small>
                    </div>
                    <a className="h5 text-decoration-none" href="">
                      Discover amazing places with us
                    </a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                          <small>(250)</small>
                        </h6>
                        <h5 className="m-0">$350</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;
