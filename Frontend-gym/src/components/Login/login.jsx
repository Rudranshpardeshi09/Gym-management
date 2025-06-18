import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-white flex flex-col">
      {/* Modern Frosted Glass Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-white/30 via-sky-100/40 to-white/20 backdrop-blur-lg shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex space-x-10">
          <Link
            to="/home"
            className="text-gray-800 font-semibold hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-semibold hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-semibold hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
          <Link
            to="/gallery"
            className="text-gray-800 font-semibold hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-300 transform hover:scale-105"
          >
            Gallery
          </Link>
        </div>
      </motion.nav>

      {/* Spacer to avoid overlap */}
      <div className="h-20" />

      {/* Login Card Section */}
      <div className="flex flex-1 items-center justify-center px-4">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Dumbbell className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Gym Login</h1>
          </div>

          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
  
}
