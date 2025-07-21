import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-100 px-[4%] lg:px-[12%] py-10">
      <motion.div
        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center animate-[fadeIn_0.5s_ease-out_0.2s_both]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-live="polite"
        aria-label="Loading page content, please wait"
      >
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          variants={spinnerVariants}
          animate="rotate"
        />
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
          Loading...
        </p>
      </motion.div>
    </section>
  );
};

export default LoadingPage;
