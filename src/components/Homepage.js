import React from "react";
import Hero from "./HomepageComponents/Hero";
import Specials from "./HomepageComponents/Specials";
import Testimonials from "./HomepageComponents/Testimonials";
import About from "./HomepageComponents/About";

const Homepage = () => {
  return (
    <main>
      <Hero aria-label="Hero section" />
      <Specials aria-label="Specials section" />
      <Testimonials aria-label="Testimonials section" />
      <About aria-label="About section" />
    </main>
  );
};

export default Homepage;