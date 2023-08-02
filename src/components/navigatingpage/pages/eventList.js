import React from "react";

const Pages = () => {
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
                            <a className="active" href="/event-list">
                              Event List
                            </a>
                          </li>
                          <li>
                            <a href="">Event Single</a>
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
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index-2.html">Home 01</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 02</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 03</a>
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
                <li className="active-menu">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a className="active" href="event-list.html">
                        Event List
                      </a>
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

        <div className="section page-banner-section">
          <div className="shape-2"></div>
          <div className="container">
            <div className="page-banner-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-banner text-center">
                    <h2 className="title">Event List</h2>
                    <ul className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Event List
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="meeta-event-list section-padding">
          <div className="container">
            <div className="meeta-event-list-wrap">
              <div className="event-list-top-bar">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="event-list-search">
                      <form action="#">
                        <div className="row g-0">
                          <div className="col-md-5">
                            <div className="single-form">
                              <i className="fas fa-search"></i>
                              <input type="text" placeholder="Search Event" />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="single-form form-border">
                              <i className="fas fa-map-marker-alt"></i>
                              <input type="text" placeholder="Location" />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="form-btn">
                              <button className="btn btn-primary">
                                Find Event
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="event-filter-wrap">
                      <div className="event-collapse-btn">
                        <button
                          className="btn collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFilters"
                        >
                          <i className="fa fa-filter"></i>
                          Hide Filters
                        </button>
                      </div>
                      <div className="event-list-btn">
                        <ul className="nav">
                          <li>
                            <button data-bs-toggle="tab" data-bs-target="#grid">
                              <i className="fas fa-th-large"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              className="active"
                              data-bs-toggle="tab"
                              data-bs-target="#list"
                            >
                              <i className="fas fa-list"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse" id="collapseFilters">
                  <div className="event-list-tag">
                    <ul>
                      <li>
                        <a href="#">Featured Event</a>
                      </li>
                      <li>
                        <a href="#">Upcoming</a>
                      </li>
                      <li>
                        <a href="#">Organizers</a>
                      </li>
                      <li>
                        <a href="#">Day</a>
                      </li>
                      <li>
                        <a href="#">Price</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="event-list-bottom-bar">
                <div className="event-list-btn">
                  <a className="event-btn" href="#">
                    <i className="flaticon-back"></i>
                  </a>
                  <a className="event-btn" href="#">
                    <i className="flaticon-next"></i>
                  </a>
                </div>
              </div>
              <div className="event-list-content-wrap">
                <div className="tab-content">
                  <div className="tab-pane" id="grid">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-list-1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="cat">Featured</span>
                              <span className="price">$25</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream{" "}
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-l-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="price">$25</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream{" "}
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-l-3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="price">Free</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream{" "}
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-list-4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="price">Free</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream{" "}
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-list-5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="cat">Featured</span>
                              <span className="price">$25</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="event-list-item">
                          <div className="event-img">
                            <a href="event-single.html">
                              <img
                                src="assets/images/event/event-list-6.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="event-list-content">
                            <div className="event-price">
                              <span className="price">$25</span>
                            </div>
                            <h3 className="title">
                              <a href="event-single.html">
                                Virtual Event with Protected Content and Hidden
                                Livestream{" "}
                              </a>
                            </h3>
                            <div className="meta-data">
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                1:00AM-2:00AM
                              </span>
                              <span>
                                <i className="fas fa-map-marker-alt"></i> Sand
                                diego, Canada
                              </span>
                            </div>
                            <div className="event-desc">
                              <p>
                                Managing a popular open source project can be
                                daunting at first. How do we maintain all these
                                issues, or automatically trigger enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris
                              </p>
                            </div>
                            <a className="ticket-link" href="price.html">
                              Get Ticket Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane show active" id="list">
                    <div className="event-list-item event-list d-lg-flex align-items-center">
                      <div className="event-img">
                        <a href="event-single.html">
                          <img
                            src="assets/images/event/event-list-1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="event-list-content">
                        <div className="event-price">
                          <span className="cat">Featured</span>
                          <span className="price">$25</span>
                        </div>
                        <h3 className="title">
                          <a href="event-single.html">
                            Virtual Event with Protected Content and Hidden
                            Livestream{" "}
                          </a>
                        </h3>
                        <div className="meta-data">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            1:00AM-2:00AM
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt"></i> Sand
                            diego, Canada
                          </span>
                        </div>
                        <div className="event-desc">
                          <p>
                            Managing a popular open source project can be
                            daunting at first. How do we maintain all these
                            issues, or automatically trigger enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                          </p>
                        </div>
                        <a className="ticket-link" href="price.html">
                          Get Ticket Now
                        </a>
                      </div>
                      <span className="event-time">
                        <span>01</span>Am
                      </span>
                    </div>
                    <div className="event-list-item event-list d-lg-flex align-items-center">
                      <div className="event-img">
                        <a href="event-single.html">
                          <img src="assets/images/event/event-l-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="event-list-content">
                        <div className="event-price">
                          <span className="price">$25</span>
                        </div>
                        <h3 className="title">
                          <a href="event-single.html">
                            Walking on the Village Mountain
                          </a>
                        </h3>
                        <div className="meta-data">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            1:00AM-2:00AM
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt"></i> Sand
                            diego, Canada
                          </span>
                        </div>
                        <div className="event-desc">
                          <p>
                            Managing a popular open source project can be
                            daunting at first. How do we maintain all these
                            issues, or automatically trigger enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                          </p>
                        </div>
                        <a className="ticket-link" href="price.html">
                          Get Ticket Now
                        </a>
                      </div>
                      <span className="event-time">
                        <span>03</span>Am
                      </span>
                    </div>
                    <div className="event-list-item event-list d-lg-flex align-items-center">
                      <div className="event-img">
                        <a href="event-single.html">
                          <img src="assets/images/event/event-l-3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="event-list-content">
                        <div className="event-price">
                          <span className="price">Free</span>
                        </div>
                        <h3 className="title">
                          <a href="event-single.html">
                            Wedding of James & Helen
                          </a>
                        </h3>
                        <div className="meta-data">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            1:00AM-2:00AM
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt"></i> Sand
                            diego, Canada
                          </span>
                        </div>
                        <div className="event-desc">
                          <p>
                            Managing a popular open source project can be
                            daunting at first. How do we maintain all these
                            issues, or automatically trigger enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                          </p>
                        </div>
                        <a className="ticket-link" href="price.html">
                          Get Ticket Now
                        </a>
                      </div>
                      <span className="event-time">
                        <span>05</span>Am
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-next-prev-btn text-center">
                <a className="event-btn" href="#">
                  <i className="flaticon-back"></i> Previous
                </a>
                <a className="event-btn btn-next" href="#">
                  Next <i className="flaticon-next"></i>
                </a>
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

export default Pages;
