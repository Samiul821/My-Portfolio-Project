import React from "react";
import Projects from "../../../../public/Projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // 🔥 Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import line1 from "../../../assets/line-1.png";
import line2 from "../../../assets/line-2.png";

const MyProjects = () => {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-[2%] lg:px-[12%] overflow-hidden bg-gradient-to-br from-[#fffce8] to-[#f9f6ff]">
      {/* Background line images */}
      <img
        src={line1}
        alt="Decoration Left"
        className="absolute left-0 top-1/4 w-40 md:w-64  z-0 pointer-events-none"
      />
      <img
        src={line2}
        alt="Decoration Right"
        className="absolute right-0 bottom-1/4 w-xl lg:w-3xl z-0 pointer-events-none"
      />

      <h1 className="text-[22px] font-bold text-center text-primary md:text-[35px] lg:text-5xl mb-4">
        My Projects
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        A collection of my work built with modern technologies and creative
        design.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden group"
            >
              {/* Gradient shadow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#a78bfa] via-[#60a5fa] to-[#38bdf8] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 z-0" />

              {/* Main card content */}
              <div className="relative z-10 bg-white rounded-xl h-full w-full p-4 flex flex-col items-center shadow-md group-hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="w-full bg-[#f3f3f3] rounded-lg overflow-hidden flex-shrink-0 h-56 md:h-64 lg:h-72 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Text content */}
                <div className="mt-4 text-center flex flex-col justify-between flex-grow px-2">
                  <h1 className="text-lg md:text-xl font-semibold hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h1>
                  <p className="text-sm text-[#808080] mt-2">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyProjects;
