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
                            <a href="/pricing">Pricing</a>
                          </li>
                          <li>
                            <a href="/faq">FAQs</a>
                          </li>
                          <li>
                            <a href="/login">Login Register</a>
                          </li>
                        </ul>
                      </li>
                      <li className="active-menu">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/blogGrid">Blog Grid</a>
                          </li>
                          <li>
                            <a className="active" href="/blogNews">
                              Latest News
                            </a>
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
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/faq">FAQs</a>
                    </li>
                    <li>
                      <a href="/login">Login Register</a>
                    </li>
                  </ul>
                </li>
                <li className="active-menu">
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
                    <h2 className="title">Our Blogs</h2>
                    <ul className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Our Blogs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section blog-standard-section section-padding">
          <div className="container">
            <div className="blog-standard-wrap">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog-post-wrap">
                    <div className="single-blog-post">
                      <div className="blog-img">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/blog-s-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <span className="category color-4">Conference</span>
                        <div className="blog-meta">
                          <span className="meta">
                            <i className="far fa-user"></i>{" "}
                            <a href="#"> Adam Hirachin</a>
                          </span>
                          <span className="meta">
                            <i className="far fa-calendar-alt"></i> Octobor 09,
                            2022
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            Registration for opening workshop{" "}
                          </a>
                        </h3>
                        <p>
                          We’re inviting the top creatives in the tech industry
                          from all over the world to come learn, grow, scrape
                          their knees, try new things, to be vulnerable, epic
                          adventures{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-blog-post">
                      <div className="blog-img">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/blog-s-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <span className="category color-2">Conference</span>
                        <div className="blog-meta">
                          <span className="meta">
                            <i className="far fa-user"></i>{" "}
                            <a href="#"> Adam Hirachin</a>
                          </span>
                          <span className="meta">
                            <i className="far fa-calendar-alt"></i> Octobor 09,
                            2022
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            Registration for opening workshop{" "}
                          </a>
                        </h3>
                        <p>
                          We’re inviting the top creatives in the tech industry
                          from all over the world to come learn, grow, scrape
                          their knees, try new things, to be vulnerable, epic
                          adventures{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-blog-post">
                      <div className="blog-img">
                        <a href="blog-details.html">
                          <img src="assets/images/blog/blog-s-3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <span className="category color-1">Conference</span>
                        <div className="blog-meta">
                          <span className="meta">
                            <i className="far fa-user"></i>{" "}
                            <a href="#"> Adam Hirachin</a>
                          </span>
                          <span className="meta">
                            <i className="far fa-calendar-alt"></i> Octobor 09,
                            2022
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            Registration for opening workshop{" "}
                          </a>
                        </h3>
                        <p>
                          We’re inviting the top creatives in the tech industry
                          from all over the world to come learn, grow, scrape
                          their knees, try new things, to be vulnerable, epic
                          adventures{" "}
                        </p>
                      </div>
                    </div>

                    <div className="meeta-pagination">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <span className="page-link">
                            <i className="flaticon-back"></i>
                          </span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">2</span>
                        </li>
                        <li className="page-item disabled">
                          <a className="page-link" href="#">
                            <i className="flaticon-next"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-sidebar">
                    <div className="sidebar-widget sidebar-widget-1">
                      <form className="search-form" action="#">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>

                    <div className="sidebar-widget">
                      <div className="widget-title">
                        <h3 className="title">Recent Posts</h3>
                      </div>
                      <div className="recent-posts">
                        <ul>
                          <li>
                            <a className="post-link" href="blog-details.html">
                              <div className="post-thumb">
                                <img
                                  src="assets/images/blog/r-post-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="post-text">
                                <h4 className="title">
                                  Cupidatat non proident sunt culpa
                                </h4>
                                <span className="post-meta">
                                  <i className="far fa-calendar-alt"></i>{" "}
                                  Octobor 09, 2022
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="post-link" href="blog-details.html">
                              <div className="post-thumb">
                                <img
                                  src="assets/images/blog/r-post-2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="post-text">
                                <h4 className="title">
                                  Cupidatat non proident sunt culpa
                                </h4>
                                <span className="post-meta">
                                  <i className="far fa-calendar-alt"></i>{" "}
                                  Octobor 09, 2022
                                </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="post-link" href="blog-details.html">
                              <div className="post-thumb">
                                <img
                                  src="assets/images/blog/r-post-3.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="post-text">
                                <h4 className="title">
                                  Cupidatat non proident sunt culpa
                                </h4>
                                <span className="post-meta">
                                  <i className="far fa-calendar-alt"></i>{" "}
                                  Octobor 09, 2022
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="sidebar-widget">
                      <div className="widget-title">
                        <h3 className="title">Categories</h3>
                      </div>
                      <ul className="category">
                        <li className="cate-item">
                          <a href="#">
                            <i className="flaticon-next"></i> Industry{" "}
                            <span className="post-count">(11)</span>
                          </a>
                        </li>
                        <li className="cate-item">
                          <a href="#">
                            <i className="flaticon-next"></i> Business{" "}
                            <span className="post-count">(02)</span>
                          </a>
                        </li>
                        <li className="cate-item">
                          <a href="#">
                            <i className="flaticon-next"></i> Construction{" "}
                            <span className="post-count">(0)</span>
                          </a>
                        </li>
                        <li className="cate-item">
                          <a href="#">
                            <i className="flaticon-next"></i> Factory{" "}
                            <span className="post-count">(231)</span>
                          </a>
                        </li>
                        <li className="cate-item">
                          <a href="#">
                            <i className="flaticon-next"></i> Estate{" "}
                            <span className="post-count">(45)</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar-widget">
                      <div
                        className="widget-banner"
                        style={{
                          backgroundImage:
                            "url(assets/images/blog/sidebar-img.jpg);",
                        }}
                      >
                        <h4 className="sub-title">Upcoming Events</h4>
                        <h3 className="title">
                          2022 Creative meetup & music event
                        </h3>
                        <a className="btn btn-primary" href="price.html">
                          Book Your Seat
                        </a>
                      </div>
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
        style={{ backgroundImage: "url(assets/images/bg/footer-bg.jpg);" }}
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
  );
};

export default page;
