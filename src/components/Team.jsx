import React from "react";
import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";

const Team = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Guides
          </h6>
          <h1>Our Travel Guides</h1>
        </div>
        <div className="row">
          {[team1, team2, team3, team4].map((teamMember, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={teamMember}
                    alt={`Guide ${index + 1}`}
                  />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Guide Name</h5>
                  <p className="m-0">Designation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
