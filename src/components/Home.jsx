import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Navbar transparent />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
