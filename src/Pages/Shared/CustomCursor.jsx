import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs"; // Better aesthetic icon

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      animate={{
        x: position.x - 20,
        y: position.y - 20,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-400 shadow-lg flex items-center justify-center animate-pulse">
        <BsStars className="text-white text-lg" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
