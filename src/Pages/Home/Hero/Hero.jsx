import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/image (9).png";
import MonogoDbPng from "../../../assets/MongoDB.png";
import NodePng from "../../../assets/Node.js.png";
import ExpressPng from "../../../assets/Express.png";
import ReactPng from "../../../assets/React.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // Animation variants for subtle inward jumping
  const logoVariants = {
    animate: {
      x: [0, -5, 0], // Reduced movement for subtler effect
      y: [0, -5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5, // Slightly faster for a smoother feel
        ease: "easeInOut",
      },
    },
  };

  const changingWords = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Enthusiast",
    "JavaScript Ninja",
    "Node.js Backend Developer",
    "Passionate Coder",
  ];

  return (
    <section id="home" className="lg:min-h-screen md:h-[calc(80vh-80px)] flex flex-col md:flex-row items-center justify-between py-10 pt-24 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 px-[4%] lg:px-[12%] gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#B3A206]">
          Hello,
        </h3>
        <h1 className="text-4xl md:text-[45px] lg:text-[90px] font-extrabold text-secondary">
          I Am Samiul.
        </h1>
        <h2 className="text-xl md:text-[22px] lg:text-[32px] font-semibold text-primary">
          <Typewriter
            words={changingWords}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-[#585858] md:text-lg max-w-xl mx-auto md:mx-0">
          Hello! I am Samiul from Bangladesh. Passionate about building modern,
          clean, and scalable web applications.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="mt-4 px-6 py-3 bg-primary text-white font-medium rounded-full flex items-center gap-2 hover:bg-green-600 transition">
            Hire Me <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden bg-blue-300 relative">
          <img
            src={HeroImage}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>

        {/* Floating Logos Inside Image */}
        {/* Top Left Logo */}
        <motion.div
          className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2"
          variants={logoVariants}
          animate="animate"
        >
          <img
            src={MonogoDbPng}
            alt="MongoDB"
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Top Right Logo */}
        <motion.div
          className="absolute top-[20%] right-[20%] transform translate-x-1/2 -translate-y-1/2"
          variants={logoVariants}
          animate="animate"
        >
          <img
            src={ExpressPng}
            alt="Express"
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Bottom Right Logo */}
        <motion.div
          className="absolute bottom-[20%] right-[20%] transform translate-x-1/2 translate-y-1/2"
          variants={logoVariants}
          animate="animate"
        >
          <img
            src={ReactPng}
            alt="React"
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Bottom Left Logo */}
        <motion.div
          className="absolute bottom-[20%] left-[20%] transform -translate-x-1/2 translate-y-1/2"
          variants={logoVariants}
          animate="animate"
        >
          <img
            src={NodePng}
            alt="Node.js"
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
