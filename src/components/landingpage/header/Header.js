import React from "react";
// import "./Header.css";
const Header = () => {
  return (
    <div class="main-wrapper">
      <div class="meeta-header-section meeta-header-2 meeta-header-3">
        <div class="header-middle header-sticky">
          <div class="container">
            <div class="header-wrap">
              <div class="header-logo header-logo-3">
                <a class="logo-black" href="index-2.html">
                  <img src="assets/images/logo-3.png" alt="Logo" />
                </a>
                <a class="logo-white" href="index-2.html">
                  <img src="assets/images/logo-4.png" alt="Logo" />
                </a>
              </div>

              <div class="header-navigation d-none d-lg-block">
                <ul class="main-menu">
                  <li class="active-menu">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="/event_list">Event List</a>
                      </li>
                      <li>
                        <a class="active" href="/event_single">
                          Event Single
                        </a>
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
                  <li>
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
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

              <div class="header-meta">
                <div class="header-btn d-none d-md-block">
                  <a href="price.html" class="btn-2">
                    Buy Ticket
                  </a>
                </div>

                <div class="header-toggle d-lg-none">
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
  );
};

export default Header;
