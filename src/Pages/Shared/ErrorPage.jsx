import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming React Router is used; remove if not applicable

const ErrorPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const iconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 px-[4%] lg:px-[12%] py-10">
      <motion.div
        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 max-w-md text-center animate-[fadeIn_0.5s_ease-out_0.2s_both]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-primary mb-4">
          404
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6">
          Oops! Page Not Found
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          The page you are looking for might have been removed, renamed, or does
          not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-200"
        >
          Go Back Home{" "}
          <motion.div variants={iconVariants} animate="animate">
            <FaArrowRight className="ml-2" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
