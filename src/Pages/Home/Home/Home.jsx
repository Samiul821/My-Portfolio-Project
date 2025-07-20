import React from "react";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
      {/* Scroll to Top Button */}
      <button className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Home;
