import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom"; 


export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-white flex items-center justify-center px-2 sm:px-4">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Create Account</h1>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-1 w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
  Already have an account?{" "}
  <Link to="/" className="text-blue-600 hover:underline">
    Login
  </Link>
</p>
      </motion.div>


    </div>
  );
}