import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const ProjectsModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#00000095] backdrop-blur-sm transition-opacity duration-700 ease-in-out"
        style={{ opacity: isOpen ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl max-h-[90vh] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(40px)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight animate-[fadeIn_0.5s_ease-out_0.1s_both]">
            {project.name}
          </h3>

          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 sm:h-48 md:h-64 object-contain rounded-xl mb-6 border border-gray-200 animate-[fadeIn_0.5s_ease-out_0.2s_both]"
          />

          <p className="text-sm sm:text-base text-gray-500 mb-4 font-medium animate-[fadeIn_0.5s_ease-out_0.3s_both]">
            {project.category}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed animate-[fadeIn_0.5s_ease-out_0.4s_both]">
            {project.description}
          </p>

          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
            Tech Stack
          </h4>
          <ul className="list-disc list-inside mb-6 text-gray-600 text-sm sm:text-base animate-[fadeIn_0.5s_ease-out_0.6s_both]">
            {project.stack.map((tech, i) => (
              <li key={i} className="py-1">
                {tech}
              </li>
            ))}
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 animate-[fadeIn_0.5s_ease-out_0.7s_both]">
            Features
          </h4>
          <ul className="list-disc list-inside mb-6 text-gray-600 text-sm sm:text-base animate-[fadeIn_0.5s_ease-out_0.8s_both]">
            {project.features.map((feat, i) => (
              <li key={i} className="py-1">
                {feat}
              </li>
            ))}
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 animate-[fadeIn_0.5s_ease-out_0.9s_both]">
            Challenges
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed animate-[fadeIn_0.5s_ease-out_1s_both]">
            {project.challenges}
          </p>

          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 animate-[fadeIn_0.5s_ease-out_1.1s_both]">
            Improvements
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed animate-[fadeIn_0.5s_ease-out_1.2s_both]">
            {project.improvements}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-lg font-medium істерік:bg-primary hover:text-white transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              GitHub
            </a>
          </div>

          <div className="text-right">
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={onClose}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;