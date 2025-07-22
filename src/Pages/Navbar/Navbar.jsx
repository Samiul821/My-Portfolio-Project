import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from "../../assets/50426.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent auto scroll to hash section
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  // Link hover animation
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
            {navItems.map(({ name, to }) => (
              <motion.div key={name} variants={linkVariants} whileHover="hover">
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-250} // changed from -200 to -250
                  duration={500}
                  activeClass="text-primary border-b-2 border-primary pb-1"
                  className="cursor-pointer hover:text-primary transition"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
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
            {navItems.map(({ name, to }) => (
              <motion.div key={name} variants={linkVariants} whileHover="hover">
                <li>
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="text-primary font-semibold"
                    className="cursor-pointer hover:text-primary transition block"
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {name}
                  </Link>
                </li>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
