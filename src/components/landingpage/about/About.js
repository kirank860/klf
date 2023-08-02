import React from "react";

const About = () => {
  return (
    <div>
      <div className="meeta-about-section-3 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images-3-wrap">
                <div className="shape-1">
                  <img src="assets/images/shape/ab-shape-1.png" alt="" />
                </div>

                <div className="about-img-big">
                  <img src="assets/images/about-3.jpg" alt="" />
                  <div className="shape-2">
                    <img src="assets/images/shape/ab-shape-2.png" alt="" />
                  </div>
                </div>
                <div className="about-img-small">
                  <div className="image-1">
                    <img src="assets/images/about-4.jpg" alt="" />
                  </div>
                  <div className="image-2">
                    <img src="assets/images/about-5.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-3-wrap">
                <div className="meeta-section-title-2">
                  <h2 className="main-title">
                    About the Open Education 8th Conference
                  </h2>
                </div>

                <div className="about-content-3">
                  <p className="text">
                    Grow, scrape their knees, try new things, to be vulnerable,
                    and to have epic adventures together
                  </p>

                  <p>
                    We’re inviting the top creatives in the tech industry from
                    all over the world to come learn, grow, scrape their knees,
                    try new things, to be vulnerable, and to have epic
                    adventures together, this time both in-person
                  </p>

                  <a className="btn-2" href="login-register.html">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
