import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 text-secondary py-8 px-[2%] lg:px-[12%] mt-10 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start text-center sm:text-left">
        {/* Left: Branding */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Samiul's Portfolio
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Full-stack developer creating web apps with React & Node.js.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              { href: "#about", label: "About Me" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            Connect with Me
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 text-xl sm:text-2xl">
            {[
              {
                href: "https://github.com/Samiul821",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/md-samiul-islam890",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://www.facebook.com/smsamiul890",
                icon: <FaFacebook />,
                label: "Facebook",
              },
              {
                href: "mailto:smsamiul821@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 pt-4 text-center text-sm sm:text-base text-gray-400 border-t border-gray-200/50">
        © {new Date().getFullYear()} Samiul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
