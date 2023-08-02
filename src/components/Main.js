import React from "react";
import Header from "./landingpage/header/Header";
import Slider from "./landingpage/silder/Slider";
import About from "./landingpage/about/About";
import Videosection from "./landingpage/videosection/Videosection";
import Footer from "./landingpage/footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Videosection />
      <Footer />
    </div>
  );
};

export default Main;
