import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="meeta-footer-section meeta-footer-3"
        style={{ backgroundImage: "url(assets/images/bg/footer-bg-3.jpg)" }}
      >
        <div className="footer-wrap">
          <div className="container">
            <div className="footer-widget-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h4 className="widget-title">Organized By</h4>
                    <a className="footer-logo" href="index-2.html">
                      <img src="assets/images/footer-logo-2.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h4 className="widget-title">Event Details</h4>
                    <div className="widget-text">
                      <span className="date">21 - 23 Octobor 2022</span>
                      <p>
                        66 Road Broklyn Street BNG 275 New York. United States
                        of America.
                      </p>
                      <a className="btn-2" href="price.html">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-info">
                      <ul>
                        <li>
                          <div className="info-icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="info-text">
                            <span>
                              <a href="#">+91 458 654 528</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="info-icon">
                            <i className="far fa-envelope-open"></i>
                          </div>
                          <div className="info-text">
                            <span>
                              <a href="#">info@example.com </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="info-text">
                            <span>60 East 65th Street, NY</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h4 className="widget-title">Event Details</h4>
                    <div className="widget-form">
                      <form action="#">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Email Address"
                        />
                        <button>
                          <i className="flaticon-send"></i>
                        </button>
                      </form>
                    </div>
                    <div className="footer-widget-social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center">
            <div className="container">
              <div className="copyright-text">
                <p>
                  2022 Copyright Meeta Designed by Pixelcurve. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
