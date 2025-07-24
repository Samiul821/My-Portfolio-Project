import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, scroller } from "react-scroll";
import Avatar from "../../assets/50426.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[82px] py-1.5 flex items-center justify-between px-[4%] lg:px-[12%] z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md translate-y-0"
          : "bg-transparent translate-y-0"
      }`}
    >
      {/* Hamburger - Mobile Left */}
      <div
        onClick={toggleMenu}
        className="md:hidden z-50 text-2xl cursor-pointer"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo - Center */}
      <div className="absolute left-1/3 -translate-x-1/2 md:static md:translate-x-0">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <img src={Avatar} alt="Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl md:text-[45px] font-bold text-secondary">Samiul.</h1>
        </Link>
      </div>

      {/* Resume Button - Mobile & Desktop Right */}
      <div className="z-50">
        <a
          href="https://drive.google.com/file/d/1YqyzltnqPAfhxvNvDR7PGDWaKl9rWgBX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[14px] md:text-lg bg-primary px-4 py-2 rounded-full hover:bg-[#27ae60] transition font-medium flex items-center"
        >
          Resume <span className="ml-2 text-[14px] md:text-lg">↓</span>
        </a>
      </div>

      {/* Nav Links - Only Desktop */}
      <ul className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
        {navItems.map(({ name, to }) => (
          <li
            key={name}
            className="text-secondary hover:text-primary capitalize  cursor-pointer duration-200"
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

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-8 shadow-md z-40">
          {navItems.map(({ name, to }) => (
            <li key={name} className="text-secondary text-xl">
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
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#27ae60] duration-300"
          >
            Resume
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
