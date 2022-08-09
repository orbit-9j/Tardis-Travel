import React from "react";

import Ad from "../components/Ad";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

const Home = ({ items }) => {
  return (
    <div className="home">
      <About />
      <Ad />
      <Testimonials />
      <Products items={items} />
    </div>
  );
};

export default Home;
