import React from "react";
import Hero from "./Hero";
import Specials from "./Specials"; // Import the 'Specials' component
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  );
};

export default Main;
