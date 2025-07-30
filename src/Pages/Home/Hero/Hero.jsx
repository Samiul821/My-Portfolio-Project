import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/image (9).png";
import MonogoDbPng from "../../../assets/MongoDB.png";
import NodePng from "../../../assets/Node.js.png";
import ExpressPng from "../../../assets/Express.png";
import ReactPng from "../../../assets/React.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

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
    <section className="lg:min-h-screen md:h-[calc(80vh-80px)] flex flex-col md:flex-row items-center justify-between py-10 pt-24 bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 px-[4%]  xl:px-[12%] gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h3 className="text-2xl md:text-4xl lg:text-[45px] xl:text-[60px] font-bold text-[#B3A206]">
          Hello,
        </h3>
        <h1 className="text-4xl md:text-[45px] lg:text-[65px] xl:text-[90px] font-extrabold text-secondary">
          I Am Samiul.
        </h1>
        <h2 className="text-xl md:text-[22px] lg:text-[28px] xl:text-[32px] font-semibold text-primary">
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
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
          <a
            href="https://github.com/Samiul821"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary transition-all duration-200 transform hover:scale-110"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-samiul-islam890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary transition-all duration-200 transform hover:scale-110"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SmSamiul890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary transition-all duration-200 transform hover:scale-110"
            aria-label="Visit my Twitter profile"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="mt-4 px-6 py-3 bg-primary text-white font-medium rounded-full flex items-center gap-2 hover:bg-green-600 transition cursor-pointer"
          >
            Hire Me <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden bg-blue-300 relative">
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
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-xl shadow-lg"
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
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-xl shadow-lg"
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
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-xl shadow-lg"
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
            className="p-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
