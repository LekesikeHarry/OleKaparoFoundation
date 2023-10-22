import React from "react";
import "./home.css";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <section>charity desc</section>
      <section>our work</section>
      <section>testimonials</section>
      <section>latest blogs</section>
    </>
  );
}
