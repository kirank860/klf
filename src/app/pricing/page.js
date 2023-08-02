import React from "react";

const page = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="meeta-header-section meeta-header-4">
          <div className="header-middle header-sticky">
            <div className="container-fluid custom-container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-4">
                  <div className="header-logo">
                    <a href="index-2.html">
                      <img src="assets/images/logo-4.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="header-navigation">
                    <ul className="main-menu">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li className="active-menu">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/event_list">Event List</a>
                          </li>
                          <li>
                            <a href="/event_single">Event Single</a>
                          </li>
                          <li>
                            <a href="/event_schedule">Event Schedule</a>
                          </li>
                          <li>
                            <a href="/event_speaker1">Speakers 01</a>
                          </li>
                          <li>
                            <a href="/event_speaker2">Speakers 02</a>
                          </li>
                          <li>
                            <a href="/speaker_single">Speaker Single</a>
                          </li>
                          <li>
                            <a href="/gallery">Gallery</a>
                          </li>
                          <li>
                            <a className="active" href="/pricing">
                              Pricing
                            </a>
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
                            <a href="/blogGrid">Blog Grid</a>
                          </li>
                          <li>
                            <a href="/blogNews">Latest News</a>
                          </li>
                          <li>
                            <a href="/blogDetails">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-8">
                  <div className="header-meta">
                    <div className="header-actions">
                      <div className="header-action">
                        <button className="icon-open-container">
                          <span className="action-text">My Cart</span>
                          <i className="flaticon-shopping-cart"></i>
                          <span className="count">3</span>
                        </button>
                      </div>
                      <div className="header-action d-none d-sm-block">
                        <div className="header-search">
                          <a className="search-btn" href="#">
                            <i className="flaticon-loupe"></i>
                          </a>
                          <div className="search-wrap">
                            <div className="search-inner">
                              <i
                                id="search-close"
                                className="flaticon-close search-close"
                              ></i>
                              <div className="search-cell">
                                <form action="#">
                                  <div className="search-field-holder">
                                    <input
                                      className="main-search-input"
                                      type="search"
                                      placeholder="Search Your Keyword..."
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="header-btn d-none d-md-block">
                      <a href="price.html" className="btn btn-3 btn-primary">
                        Buy Ticket Now
                      </a>
                    </div>

                    <div className="header-toggle d-md-none">
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="active-menu">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/event_list">Event List</a>
                    </li>
                    <li>
                      <a href="/event_single">Event Single</a>
                    </li>
                    <li>
                      <a href="/event_schedule">Event Schedule</a>
                    </li>
                    <li>
                      <a href="/event_speaker1">Speakers 01</a>
                    </li>
                    <li>
                      <a href="/event_speaker2">Speakers 02</a>
                    </li>
                    <li>
                      <a href="/speaker_single">Speaker Single</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a className="active" href="/pricing">
                        Pricing
                      </a>
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
                      <a href="/blogGrid">Blog Grid</a>
                    </li>
                    <li>
                      <a href="/blogNews">Latest News</a>
                    </li>
                    <li>
                      <a href="/blogDetails">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section page-banner-section">
          <div className="shape-2"></div>
          <div className="container">
            <div className="page-banner-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-banner text-center">
                    <h2 className="title">Pricing Table</h2>
                    <ul className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="meeta-pricing meeta-pricing-2 meeta-pricing-4 meeta-pricing-5 section-padding">
          <div className="container">
            <div className="meeta-section-title-2 section-title-4 text-center">
              <h4 className="sub-title">Ticket Price</h4>
              <h2 className="main-title">Get Your Tickets Now</h2>
            </div>

            <div className="row gy-5 justify-content-center meeta-pricing-row">
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing color-1">
                  <div className="pricing-header">
                    <h3 className="price_title">Basic Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>45
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing color-2">
                  <div className="pricing-header">
                    <h3 className="price_title">Standard Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>65
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing color-3">
                  <div className="pricing-header">
                    <h3 className="price_title">Premium Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>85
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn btn-primary" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="meeta-pricing-2 meeta-pricing-3 section-padding">
          <div className="container">
            <div className="meeta-section-title-2 section-title-3 text-center">
              <h4 className="sub-title">Ticket Price</h4>
              <h2 className="main-title">Get Your Tickets Now</h2>
            </div>

            <div className="row gy-5 justify-content-center meeta-pricing-row">
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing">
                  <div className="pricing-header">
                    <h3 className="price_title">Basic Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>45
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing active">
                  <div className="pricing-header">
                    <h3 className="price_title">Standard Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>65
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="single-pricing">
                  <div className="pricing-header">
                    <h3 className="price_title">Premium Pass</h3>
                    <div className="price">
                      <span>
                        <sup>$</sup>85
                      </span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>Back Row Seat</li>
                      <li>Free Lunch & Snacks</li>
                      <li>Event Certificate</li>
                      <li>1 Workshop</li>
                    </ul>
                    <a className="btn" href="#">
                      Book A Seat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="meeta-event-sponsors-2 section-padding">
          <div className="container">
            <div className="meeta-section-title-2 text-center">
              <h2 className="main-title">Event Sponsors</h2>
            </div>

            <div className="meeta-sponsor-active">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="meeta-sponsor-logo">
                      <img src="assets/images/sponsors-5.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="meeta-sponsor-logo">
                      <img src="assets/images/sponsors-6.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="meeta-sponsor-logo">
                      <img src="assets/images/sponsors-7.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="meeta-sponsor-logo">
                      <img src="assets/images/sponsors-8.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="meeta-footer-section"
        style={{ backgroundImage: "url(assets/images/bg/footer-bg.jpg)" }}
      >
        <div className="footer-widget text-center">
          <div className="container">
            <div className="footer-logo">
              <a href="index-2.html">
                <img src="assets/images/footer-logo-1.png" alt="Logo" />
              </a>
            </div>

            <div className="footer-newsletter">
              <p>
                Join our mailing list to stay up to date on all things Expotin
              </p>

              <div className="footer-newsletter-form">
                <form action="#">
                  <input type="text" placeholder="Your Email" />
                  <button className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>

            <div className="footer-widget-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>

            <div className="footer-copyright">
              <p>
                2022 Copyright Meeta Designed by Pixelcurve. All Rights Reserved
              </p>
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

export default page;
