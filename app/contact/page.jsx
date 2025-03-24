"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID

      );

      if (response.status === 200) {
        setIsSent(true);
        reset();
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      className="py-10 flex justify-center items-center min-h-screen px-4 bg-black"
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 2 } }}
        className="w-full max-w-3xl p-6 sm:p-8 bg-gray-900 rounded-lg border border-gray-700 shadow-lg"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-3xl font-semibold text-yellow-500 text-center">
            Let's work together
          </h3>
          <p className="text-gray-400 text-center">
            Unlock possibilities and bring ideas to life! Let’s connect and make it happen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              {...register("firstname", { required: true })}
              type="text"
              placeholder="Firstname"
              className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
            />
            <input
              {...register("lastname", { required: true })}
              type="text"
              placeholder="Lastname"
              className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
            />
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
              className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <select
            {...register("service", { required: "Please select a service" })}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3"
            onChange={(e) => setValue("service", e.target.value)}
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Logo Design">Logo Design</option>
          </select>
          {errors.service && (
            <p className="text-red-500">{errors.service.message}</p>
          )}

          <textarea
            {...register("message", {
              required: "Message is required",
              maxLength: 500,
            })}
            placeholder="Type your message here (Max 500 characters)."
            rows={5}
            className="w-full bg-gray-800 text-white border border-gray-600 p-3 rounded-md"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full p-3 rounded-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition border-yellow-500/50 border-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {isSent && (
            <p className="text-yellow-500 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
        </form>
      </motion.div>
    </motion.section>
  );
}
