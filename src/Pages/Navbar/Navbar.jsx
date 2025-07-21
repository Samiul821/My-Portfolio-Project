import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from "../../assets/50426.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  // Scroll to top and clear hash on load
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
    if (window.location.hash) {
      window.location.hash = ""; // Clear any URL hash
    }
    setLoaded(true); // Mark page as loaded
  }, []);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect which section is in view
  useEffect(() => {
    if (!loaded) return; // Skip observer until page is loaded

    const sectionIds = navItems.map((item) => item.toLowerCase());
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 30% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(
          `Intersecting: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`
        );
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [loaded]);

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#27ae60",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolling ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="px-[2%] lg:px-[12%] flex justify-between items-center py-4 lg:py-6">
        {/* Mobile Menu Icon */}
        <div className="md:hidden bg-primary pt-2 pb-1 px-2 rounded-lg">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white cursor-pointer"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Avatar} alt="Avatar" className="h-12 rounded-full" />
          <span className="text-2xl md:text-4xl font-bold text-secondary">
            SAMIUl.
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:block md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <motion.li
                  key={item}
                  variants={linkVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <a
                    href={`#${id}`}
                    className={`font-medium px-2 py-1 transition duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 h-[3px] w-6 rounded-full bg-primary transition-all duration-300 ${
                        isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                      }`}
                    ></span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1YqyzltnqPAfhxvNvDR7PGDWaKl9rWgBX/view?usp=sharing"
          target="_blank"
          className="text-white text-[14px] md:text-lg bg-primary px-4 py-2 rounded-full hover:bg-[#27ae60] transition font-medium flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          Resume <span className="ml-2 text-[14px] md:text-lg">↓</span>
        </motion.a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white p-6 shadow-sm"
        >
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <motion.li
                  key={item}
                  variants={linkVariants}
                  whileHover="hover"
                  onClick={() => setIsOpen(false)}
                  className="relative group"
                >
                  <a
                    href={`#${id}`}
                    className={`text-base font-medium px-2 py-1 transition duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 h-[3px] w-6 rounded-full bg-primary transition-all duration-300 ${
                        isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                      }`}
                    ></span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
