import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Dumbbell } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-100 py-10 sm:py-20 px-2 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xs sm:max-w-2xl md:max-w-5xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-xl"
      >
        <div className="text-center mb-6 sm:mb-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">Contact Us</h1>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">We're here to help! Reach out with any questions or feedback.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">Address</h2>
                <p className="text-gray-600 text-xs sm:text-base">Powerflex Gym, 123 Fitness Lane, Muscle City, MH 400001</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">Phone</h2>
                <p className="text-gray-600 text-xs sm:text-base">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">Email</h2>
                <p className="text-gray-600 text-xs sm:text-base">support@powerflexgym.com</p>
              </div>
            </div>

            <iframe
              className="w-full h-40 sm:h-60 rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609956485!2d72.74110100778866!3d19.082522318363807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b7a60e9e3%3A0x69fe042c2d5e6613!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719821536373!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-xs sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-xs sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="mt-1 block w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-xs sm:text-base"
                required
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition text-xs sm:text-base"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

