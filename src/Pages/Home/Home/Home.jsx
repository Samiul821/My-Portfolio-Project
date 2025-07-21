import React from "react";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import MyProjects from "../MyProjects/MyProjects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default Home;
