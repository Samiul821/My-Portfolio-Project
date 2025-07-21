import React from "react";
import { Motion, spring } from "react-motion";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import MyImage from "../../../assets/image (9).png";

const AboutMe = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-yellow-50 to-purple-200 px-[2%] lg:px-[12%] overflow-hidden">
      {/* Shape 1: Top Left */}
      <Motion
        defaultStyle={{ y: 0 }}
        style={{ y: spring(-10, { stiffness: 120, damping: 7 }) }}
      >
        {({ y }) => (
          <img
            src={shape1}
            alt="Shape 1"
            className="absolute -top-5 left-0 w-lg lg:w-xl pointer-events-none"
            style={{ transform: `translateY(${y}px)` }}
          />
        )}
      </Motion>

      {/* Shape 2: Bottom Right */}
      <Motion
        defaultStyle={{ y: 0 }}
        style={{ y: spring(-15, { stiffness: 100, damping: 8 }) }}
      >
        {({ y }) => (
          <img
            src={shape2}
            alt="Shape 2"
            className="absolute bottom-0 right-5 w-lg lg:w-xl pointer-events-none"
            style={{ transform: `translateY(${y}px)` }}
          />
        )}
      </Motion>

      {/* Heading */}
      <Motion
        defaultStyle={{ y: -20, opacity: 0 }}
        style={{
          y: spring(0, { stiffness: 120, damping: 20 }),
          opacity: spring(1, { stiffness: 120, damping: 20 }),
        }}
      >
        {({ y, opacity }) => (
          <h1
            className="text-2xl text-primary sm:text-3xl md:text-4xl font-bold mb-2 text-center"
            style={{ transform: `translateY(${y}px)`, opacity }}
          >
            About Me
          </h1>
        )}
      </Motion>

      {/* Subtitle */}
      <Motion
        defaultStyle={{ y: 20, opacity: 0 }}
        style={{
          y: spring(0, { stiffness: 120, damping: 20 }),
          opacity: spring(1, { stiffness: 120, damping: 20 }),
        }}
      >
        {({ y, opacity }) => (
          <p
            className="text-base sm:text-lg mb-8 md:mb-10 text-center"
            style={{ transform: `translateY(${y}px)`, opacity }}
          >
            Who I am and what I love to do
          </p>
        )}
      </Motion>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center justify-between relative z-10">
        {/* Image */}
        <Motion
          defaultStyle={{ scale: 0.8, opacity: 0 }}
          style={{
            scale: spring(1, { stiffness: 120, damping: 20 }),
            opacity: spring(1, { stiffness: 120, damping: 20 }),
          }}
        >
          {({ scale, opacity }) => (
            <div className="flex justify-center lg:justify-start">
              <img
                src={MyImage}
                alt="My Image"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] h-auto rounded-lg shadow-lg"
                style={{ transform: `scale(${scale})`, opacity }}
              />
            </div>
          )}
        </Motion>

        {/* Text Content */}
        <Motion
          defaultStyle={{ opacity: 0 }}
          style={{ opacity: spring(1, { stiffness: 120, damping: 20 }) }}
        >
          {({ opacity }) => (
            <div
              className="text-center lg:text-left space-y-4"
              style={{ opacity }}
            >
              <p className="text-sm sm:text-base md:text-lg mb-4">
                Hello! I’m Md Samiul Islam, a passionate MERN Stack Developer
                from Bangladesh. My journey started with curiosity and has grown
                into a deep love for crafting modern, efficient, and beautiful
                web applications.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                I specialize in building full-stack solutions using MongoDB,
                Express, React, and Node.js. I enjoy solving problems, learning
                new technologies, and turning creative ideas into reality
                through clean and optimized code.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                Beyond coding, I’m interested in design, writing clean
                documentation, and continuously improving user experiences. In
                my free time, I love reading, playing sports, and reflecting on
                how I can become better — as a developer and as a human being.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold">
                Let's build something amazing together!
              </p>
            </div>
          )}
        </Motion>
      </div>
    </section>
  );
};

export default AboutMe;
