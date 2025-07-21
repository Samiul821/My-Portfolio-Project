import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef(null);

  // Focus management for accessibility
  useEffect(() => {
    if (formRef.current) {
      formRef.current.querySelector("input")?.focus();
    }
  }, []);

  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully ✅",
            icon: "success",
            confirmButtonColor: "#16a34a",
          });
          reset();
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            text: "Failed to send message ❌. Please try again.",
            icon: "error",
            confirmButtonColor: "#dc2626",
          });
          console.error(error);
        }
      );
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50/50 via-white to-white px-[4%] sm:px-[8%] lg:px-[12%] overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-primary mb-8 sm:mb-12 tracking-tight animate-[fadeIn_0.5s_ease-out_0.1s_both]">
        Let’s Talk
      </h1>

      <div className="w-full grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {/* Left: Contact Form */}
        <div className="lg:col-span-2 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl pt-8 sm:pt-10 pb-6 sm:pb-8 px-6 sm:px-8 lg:px-12 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-[fadeIn_0.5s_ease-out_0.2s_both]">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6 sm:mb-8 animate-[fadeIn_0.5s_ease-out_0.3s_both]">
            Get In Touch
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className="border-b-2 border-gray-300 w-full py-3 sm:py-4 text-sm sm:text-base placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-200 animate-[fadeIn_0.5s_ease-out_0.4s_both]"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="border-b-2 border-gray-300 w-full py-3 sm:py-4 text-sm sm:text-base placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-200 animate-[fadeIn_0.5s_ease-out_0.4s_both]"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                {...register("phone", { required: "Phone is required" })}
                type="text"
                placeholder="Your Phone"
                className="border-b-2 border-gray-300 w-full py-3 sm:py-4 text-sm sm:text-base placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-200 animate-[fadeIn_0.5s_ease-out_0.5s_both]"
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs sm:text-sm mt-1 animate-[fadeIn_0.5s_ease-out_0.6s_both]">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                placeholder="Your Message"
                className="border-b-2 border-gray-300 w-full py-3 sm:py-4 text-sm sm:text-base placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-200 animate-[fadeIn_0.5s_ease-out_0.6s_both]"
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1 animate-[fadeIn_0.5s_ease-out_0.7s_both]">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary mt-6 sm:mt-8 mx-auto text-white text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 hover:bg-primary-dark transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg animate-[fadeIn_0.5s_ease-out_0.8s_both]"
            >
              Submit Now <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 sm:p-6 flex items-center gap-4 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-[fadeIn_0.5s_ease-out_0.3s_both]">
            <div className="text-yellow-400 text-2xl sm:text-3xl bg-yellow-50 rounded-full p-3 sm:p-4 shadow">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-gray-900">
                Bogura, Bangladesh
              </p>
              <p className="text-gray-500 text-sm sm:text-base">My Address</p>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 sm:p-6 flex items-center gap-4 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-[fadeIn_0.5s_ease-out_0.4s_both]">
            <div className="text-yellow-400 text-2xl sm:text-3xl bg-yellow-50 rounded-full p-3 sm:p-4 shadow">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-gray-900">
                smsamiul821@gmail.com
              </p>
              <p className="text-gray-500 text-sm sm:text-base">My Email</p>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 sm:p-6 flex items-center gap-4 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-[fadeIn_0.5s_ease-out_0.5s_both]">
            <div className="text-yellow-400 text-2xl sm:text-3xl bg-yellow-50 rounded-full p-3 sm:p-4 shadow">
              <FaPhone />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-gray-900">
                +880 133-062-4539
              </p>
              <p className="text-gray-500 text-sm sm:text-base">My Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
