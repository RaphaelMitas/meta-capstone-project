import React from "react";
import Hero from "./HomepageComponents/Hero";
import Specials from "./HomepageComponents/Specials";
import Testimonials from "./HomepageComponents/Testimonials";
import About from "./HomepageComponents/About";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default Homepage;
