import React from "react";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import MyProjects from "../MyProjects/MyProjects";
import Contact from "../Contact/Contact";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const skills = useLoaderData();

  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills skills={skills} />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default Home;
