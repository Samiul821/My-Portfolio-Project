import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";

const Rootlayout = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* padding bottom to avoid overlap */}
        <Outlet />
      </main>
      <Footer />

      {showBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Rootlayout;
