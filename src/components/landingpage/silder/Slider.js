import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <div className="off-canvas">
        <div className="icon-close"></div>

        <div className="meeta-mini-cart-box">
          <div className="mini-cart-items">
            <div className="mini-cart-item">
              <div className="mini-cart-item-image">
                <a href="#">
                  <img src="assets/images/cart/cart-1.jpg" alt="Cart" />
                </a>
              </div>
              <div className="mini-cart-item-content">
                <h4 className="mini-cart-title">
                  <a href="#">
                    Virtual Event with Protected Content and Hidden Livestream{" "}
                  </a>
                </h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
              </div>
              <button className="btn-close"></button>
            </div>

            <div className="mini-cart-item">
              <div className="mini-cart-item-image">
                <a href="#">
                  <img src="assets/images/cart/cart-2.jpg" alt="Cart" />
                </a>
              </div>
              <div className="mini-cart-item-content">
                <h4 className="mini-cart-title">
                  <a href="#">
                    Virtual Event with Protected Content and Hidden Livestream{" "}
                  </a>
                </h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
              </div>
              <button className="btn-close"></button>
            </div>

            <div className="mini-cart-item">
              <div className="mini-cart-item-image">
                <a href="#">
                  <img src="assets/images/cart/cart-3.jpg" alt="Cart" />
                </a>
              </div>
              <div className="mini-cart-item-content">
                <h4 className="mini-cart-title">
                  <a href="#">
                    Virtual Event with Protected Content and Hidden Livestream{" "}
                  </a>
                </h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
              </div>
              <button className="btn-close"></button>
            </div>
          </div>

          <div className="mini-cart-sub-total">
            <p>
              <strong>Subtotal:</strong>{" "}
              <span className="mini-cart-amount">$99.97</span>
            </p>
          </div>
          <div className="mini-cart-sub-btn">
            <a className="btn btn-primary" href="#">
              View cart
            </a>
            <a className="btn btn-white" href="#">
              Checkout
            </a>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start" id="offcanvasExample">
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <a href="index-2.html">
              <img src="assets/images/logo-4.png" alt="" />
            </a>
          </div>
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="offcanvas"
          >
            <i className="flaticon-close"></i>
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="offcanvas-menu offcanvas-menu-2">
            <ul className="main-menu">
              <li className="active-menu">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index-2.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 02</a>
                  </li>
                  <li>
                    <a className="active" href="index-4.html">
                      Home 03
                    </a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 04</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home 05</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home 06</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="event-list.html">Event List</a>
                  </li>
                  <li>
                    <a href="event-single.html">Event Single</a>
                  </li>
                  <li>
                    <a href="schedule.html">Event Schedule</a>
                  </li>
                  <li>
                    <a href="speaker-one.html">Speakers 01</a>
                  </li>
                  <li>
                    <a href="speaker-two.html">Speakers 02</a>
                  </li>
                  <li>
                    <a href="speaker-single.html">Speaker Single</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="price.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="login-register.html">Login Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-standard.html">Latest News</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="meeta-hero-section-3 d-flex align-items-center"
        style={{ backgroundImage: "url(assets/images/hero-3.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="meeta-countdown-wrap">
                <div className="meeta-countdown-date">
                  <h3 className="number">17</h3>
                  <span>September</span>
                </div>
                <div
                  className="meeta-countdown-3 countdown"
                  data-countdown="2025/05/8"
                  data-format="short"
                >
                  <div className="single-countdown">
                    <span className="count countdown__time daysLeft"></span>
                    <span className="value countdown__time daysText"></span>
                  </div>
                  <div className="single-countdown countdown-2">
                    <span className="count countdown__time hoursLeft"></span>
                    <span className="value countdown__time hoursText"></span>
                  </div>
                  <div className="single-countdown countdown-3">
                    <span className="count countdown__time minsLeft"></span>
                    <span className="value countdown__time minsText"></span>
                  </div>
                  <div className="single-countdown countdown-4">
                    <span className="count countdown__time secsLeft"></span>
                    <span className="value countdown__time secsText"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeta-hero-content">
                <h3 className="text" data-aos-delay="700" data-aos="fade-up">
                  November 10-12, Boston, Canada
                </h3>
                <h2 className="title" data-aos-delay="800" data-aos="fade-up">
                  Education confernce 2025
                </h2>
                <div
                  className="hero-btn"
                  data-aos-delay="900"
                  data-aos="fade-up"
                >
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

export default Slider;
