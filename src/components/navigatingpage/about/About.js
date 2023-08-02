import React from "react";

const About = () => {
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
                      <li className="active-menu">
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/pages">Pages</a>
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
                            <a href="pricing">Pricing</a>
                          </li>
                          <li>
                            <a href="/faq">FAQ</a>
                          </li>
                          <li>
                            <a href="/login">Login Register</a>
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
                <li className="active-menu">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
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
                      <a href="pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/login">Login Register</a>
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
          <div className="container">
            <div className="page-banner-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-banner text-center">
                    <h2 className="title">About Event</h2>
                    <ul className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Event
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meeta-about-section section-padding">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-7">
                <div
                  className="meeta-about-images"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-4.png)",
                  }}
                >
                  <div className="image">
                    <img src="assets/images/about-1.jpg" alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="meeta-section-title-2 meeta-about-title">
                  <h4 className="sub-title">An event for</h4>
                  <h2 className="main-title">
                    Designers, Web developers & Design
                  </h2>
                </div>

                <div className="meeta-about-content">
                  <p>
                    We’re inviting the top creatives in the tech industry from
                    all over the world to come learn, grow, scrape their knees,
                    try new things, to be vulnerable, and to have epic
                    adventures
                  </p>
                  <p>
                    We’re inviting the top creatives in the tech industry from
                    all over the world to come learn, grow, scrape their knees,
                    try new things, to be vulnerable, and to have epic
                    adventures together, this time both in-person
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meeta-features-section section-padding">
          <div
            className="shape-1"
            data-aos-delay="700"
            data-aos="zoom-in"
          ></div>
          <img
            className="shape-2"
            src="assets/images/shape/shape-11.png"
            alt=""
          />
          <div className="container">
            <div className="meeta-features-wrap">
              <div className="row">
                <div className="col-lg-4">
                  <div className="meeta-section-title-2">
                    <h4 className="sub-title">Reason to join conference</h4>
                    <h2 className="main-title">Why attend conference</h2>
                  </div>
                  <div className="feature-item feature-1">
                    <div className="feature-icon">
                      <img src="assets/images/feature-icon-1.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h3 className="title">
                        <a href="#">Trainings & Awards</a>
                      </h3>
                      <p>
                        We’re inviting the top creatives in the tech industry
                        from all over the world to come learn, grow, scrape
                        their{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item feature-2">
                    <div className="feature-icon">
                      <img src="assets/images/feature-icon-2.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h3 className="title">
                        <a href="#">World className Speaker</a>
                      </h3>
                      <p>
                        We’re inviting the top creatives in the tech industry
                        from all over the world to come learn, grow, scrape
                        their{" "}
                      </p>
                    </div>
                  </div>
                  <div className="feature-item feature-3">
                    <div className="feature-icon">
                      <img src="assets/images/feature-icon-3.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h3 className="title">
                        <a href="#">Evening Concert</a>
                      </h3>
                      <p>
                        We’re inviting the top creatives in the tech industry
                        from all over the world to come learn, grow, scrape
                        their{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item feature-4">
                    <div className="feature-icon">
                      <img src="assets/images/feature-icon-4.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h3 className="title">
                        <a href="#">3 Days Conference</a>
                      </h3>
                      <p>
                        We’re inviting the top creatives in the tech industry
                        from all over the world to come learn, grow, scrape
                        their{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meeta-speakers meeta-speakers-5 section-padding">
          <div className="container">
            <div className="meeta-section-title-2 text-center">
              <h4 className="sub-title">Speakers</h4>
              <h2 className="main-title text-white">
                World className Speakers
              </h2>
            </div>

            <div className="row gy-5 meeta-speakers-row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-1.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Mike Fermalin</a>
                      </h4>
                      <p className="speaker-designation">Lead Speaker</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-2.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Harnold Min</a>
                      </h4>
                      <p className="speaker-designation">Lead Speaker</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-3.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Joakim Ken</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-4.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Andrew Inon</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-5.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">kin Joan</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-6.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Aronic Kenan</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-7.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Kinda Mona</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-speaker">
                  <div className="speaker-image">
                    <a href="speaker-single.html">
                      <img src="assets/images/speaker-8.jpg" alt="Speaker" />
                    </a>
                  </div>
                  <div className="speaker-content">
                    <div className="speaker-content-box">
                      <h4 className="speaker-name">
                        <a href="speaker-single.html">Mike Fermalin</a>
                      </h4>
                      <p className="speaker-designation">Developer</p>
                    </div>
                    <img
                      className="speaker-shape-1"
                      src="assets/images/shape/shape-8.png"
                      alt=""
                    />
                    <div className="speaker-shape-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meeta-gallery meeta-gallery-2 section-padding">
          <div className="container">
            <div className="meeta-section-title-2 text-center">
              <h4 className="sub-title">Photo Gallery</h4>
              <h2 className="main-title">Have A Look On Gallery</h2>
            </div>

            <div className="row g-0">
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-1.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-1.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-2.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-2.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-3.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-3.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-4.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-4.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-5.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-5.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-gallery">
                  <div className="gallery-image">
                    <img src="assets/images/gallery-6.jpg" alt="Gallery" />
                  </div>
                  <div className="gallery-content">
                    <div className="gallery-content-wrap">
                      <a
                        href="assets/images/gallery-6.jpg"
                        className="gallery-plus image-popup"
                      >
                        <span></span>
                      </a>
                      <h4 className="gallery-title">
                        <a href="#">Developer Conference 2022</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="meeta-event-sponsors-2 section-padding"
          style={{ backgroundImage: "url(assets/images/bg/sponsor-bg-2.jpg)" }}
        >
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
                    Join our mailing list to stay up to date on all things
                    Expotin
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
                    2022 Copyright Meeta Designed by Pixelcurve . All Rights
                    Reserved
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
      </div>
    </div>
  );
};

export default About;
