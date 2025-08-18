// RootLayout.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { FaArrowUp, FaComments } from "react-icons/fa";
import Chatbot from "../components/Chatbot";
import { AnimatePresence, motion } from "framer-motion";

const RootLayout = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-24 right-8 z-[9999] bg-primary hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-opacity duration-300"
        aria-label="Open Chatbot"
      >
        <FaComments size={20} />
      </button>

      {/* Chatbot Window with Animation */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed bottom-20 right-2 sm:bottom-32 sm:right-8 z-[9999] w-[95%] sm:w-auto"
          >
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RootLayout;
