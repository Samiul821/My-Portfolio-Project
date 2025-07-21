import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Projects from "../../../../public/Projects.json";
import line1 from "../../../assets/line-1.png";
import line2 from "../../../assets/line-2.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ProjectsModal from "./ProjectsModal";

const MyProjects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  console.log("ProjectsModal:", ProjectsModal);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current && paginationRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.pagination.el = paginationRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();

      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.update();
    }
  }, [swiper]);

  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-[2%] lg:px-[12%] overflow-hidden bg-gradient-to-br from-[#fffce8] to-[#f9f6ff]">
      <img
        src={line1}
        alt=""
        className="absolute left-0 top-1/4 w-40 md:w-64 z-0 pointer-events-none"
      />
      <img
        src={line2}
        alt=""
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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop={true}
        onSwiper={setSwiper}
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#a78bfa] via-[#60a5fa] to-[#38bdf8] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 z-0" />
              <div className="relative z-10 bg-white rounded-xl h-full w-full p-4 flex flex-col items-center shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full bg-[#f3f3f3] rounded-lg overflow-hidden flex-shrink-0 h-56 md:h-64 lg:h-72 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center flex flex-col justify-between flex-grow px-2">
                  <h1
                    onClick={() => setSelectedProject(project)}
                    className="text-lg cursor-pointer md:text-xl font-semibold hover:text-primary transition-colors duration-300"
                  >
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

      {/* Navigation Buttons and Pagination */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-white border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white shadow-md flex items-center justify-center transition-all duration-300"
          >
            <HiOutlineArrowNarrowLeft className="text-2xl" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-white border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white shadow-md flex items-center justify-center transition-all duration-300"
          >
            <HiOutlineArrowNarrowLeft className="text-2xl transform rotate-180" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div
          ref={paginationRef}
          className="swiper-pagination mt-6 flex justify-center gap-2"
        />
      </div>

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default MyProjects;
