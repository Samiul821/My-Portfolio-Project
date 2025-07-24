import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, scroller } from "react-scroll";
import Avatar from "../../assets/50426.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to home section on initial load
  useEffect(() => {
    // Scroll to home section on initial load
    const timer = setTimeout(() => {
      scroller.scrollTo("home", {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    }, 100);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-4 bg-white shadow-md z-50">
      {/* Logo and Title */}
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="cursor-pointer flex items-center gap-2"
      >
        <img src={Avatar} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-xl font-bold text-gray-800">Samiul</h1>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6">
        {navItems.map(({ name, to }) => (
          <li
            key={name}
            className="text-gray-700 hover:text-blue-600 capitalize text-lg cursor-pointer duration-200"
          >
            <Link
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-primary border-b-2 border-primary pb-1"
              className="cursor-pointer hover:text-primary transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <div className="hidden md:flex">
        <a
          href="https://drive.google.com/file/d/1YqyzltnqPAfhxvNvDR7PGDWaKl9rWgBX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[14px] md:text-lg bg-primary px-4 py-2 rounded-full hover:bg-[#27ae60] transition font-medium flex items-center"
        >
          Resume <span className="ml-2 text-[14px] md:text-lg">↓</span>
        </a>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div
        onClick={toggleMenu}
        className="md:hidden z-50 text-2xl cursor-pointer"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-8 shadow-md z-40">
          {navItems.map(({ name, to }) => (
            <li key={name} className="text-gray-700 text-xl">
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-primary font-semibold"
                className="cursor-pointer hover:text-primary transition block"
                onClick={toggleMenu}
              >
                {name}
              </Link>
            </li>
          ))}
          <a
            href="https://drive.google.com/file/d/1YqyzltnqPAfhxvNvDR7PGDWaKl9rWgBX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-300"
          >
            Resume
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
