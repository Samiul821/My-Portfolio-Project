import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    title: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Interactive UI",
    borderColors: ["#61dafb", "#3b82f6"], // Light blue → Blue
  },
  {
    id: 2,
    title: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Web scripting",
    borderColors: ["#facc15", "#f59e0b"], // Yellow → Orange
  },
  {
    id: 3,
    title: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Web structure",
    borderColors: ["#ef4444", "#f87171"], // Red shades
  },
  {
    id: 4,
    title: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Styling",
    borderColors: ["#3b82f6", "#60a5fa"], // Blue shades
  },
  {
    id: 5,
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Utility CSS",
    borderColors: ["#38bdf8", "#0ea5e9"], // Sky blue
  },
  {
    id: 6,
    title: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Server JS",
    borderColors: ["#22c55e", "#16a34a"], // Green
  },
  {
    id: 7,
    title: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Node framework",
    borderColors: ["#6b7280", "#4b5563"], // Gray
  },
  {
    id: 8,
    title: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL DB",
    borderColors: ["#10b981", "#059669"], // Teal/green
  },
  {
    id: 9,
    title: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Version control",
    borderColors: ["#f97316", "#ea580c"], // Orange
  },
  {
    id: 10,
    title: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "Backend service",
    borderColors: ["#fbbf24", "#f59e0b"], // Yellow-orange
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-50 via-pink-50 to-purple-100 px-[2%] lg:px-[12%] overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-primary"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Skills
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base sm:text-lg mb-12 text-center max-w-xl mx-auto text-gray-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Technologies and tools I excel in
      </motion.p>

      {/* Skills Marquee */}
      <div className="relative z-10">
        <Marquee speed={50} gradient={false} pauseOnHover>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{
                scale: 1.12,
                zIndex: 20,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mx-4 w-40 sm:w-44 md:w-48"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderImage: `linear-gradient(45deg, ${skill.borderColors.join(
                  ", "
                )}) 1`,
                borderImageSlice: 1,
                borderRadius: "1rem",
              }}
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-900">
                {skill.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
