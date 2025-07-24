import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import MyProjects from "../MyProjects/MyProjects";
import Contact from "../Contact/Contact";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const skills = useLoaderData();

  // পেজ লোডে হোম সেকশনে স্ক্রল
  useEffect(() => {
    const timer = setTimeout(() => {
      scroller.scrollTo("home", {
        smooth: true,
        offset: -80, // নেভবারের উচ্চতা অনুযায়ী
        duration: 500,
      });
    }, 100);

    // ব্রাউজারের ডিফল্ট স্ক্রল রিসেট
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills skills={skills} />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
