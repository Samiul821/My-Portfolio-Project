import React from "react";
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
          confirmButtonColor: "#16a34a", // tailwind green-600
        });
        reset();
      },
      (error) => {
        Swal.fire({
          title: "Oops!",
          text: "Failed to send message ❌. Please try again.",
          icon: "error",
          confirmButtonColor: "#dc2626", // tailwind red-600
        });
        console.error(error);
      }
    );
};


  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50 via-white to-white  px-[2%] lg:px-[12%] overflow-hidden">


      <h1 className="text-[22px] font-bold text-center text-primary md:text-[35px] lg:text-5xl mb-8">Let`s Talk</h1>

      <div className="w-full grid lg:grid-cols-3 gap-10">
        {/* Left: Contact Form */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-xl pt-[60px] pb-[30px] px-[25px] lg:px-[65px]">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("from_name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className="border-b w-full py-4 outline-none placeholder-gray-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="border-b w-full py-4 outline-none placeholder-gray-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
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
                className="border-b w-full py-4 outline-none placeholder-gray-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                placeholder="Message"
                className="border-b w-full py-4 outline-none placeholder-gray-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary mt-14 mx-auto hover:bg-green-600 text-white text-lg px-6 py-4 cursor-pointer rounded-full flex items-center gap-2"
            >
              Submit Now <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
            <div className="text-yellow-400 text-3xl bg-yellow-50 rounded-full p-4 shadow">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-bold text-lg">Bogura, Bangladesh</p>
              <p className="text-gray-500">My Address</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
            <div className="text-yellow-400 text-3xl bg-yellow-50 rounded-full p-4 shadow">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-bold text-lg">smsamiul821@gmail.com</p>
              <p className="text-gray-500">My Email</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
            <div className="text-yellow-400 text-3xl bg-yellow-50 rounded-full p-4 shadow">
              <FaPhone />
            </div>
            <div>
              <p className="font-bold text-lg">+880 133-062-4539</p>
              <p className="text-gray-500">My Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
