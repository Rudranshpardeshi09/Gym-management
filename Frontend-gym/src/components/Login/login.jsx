import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Dumbbell, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function CombinedLoginSignup() {
  const [view, setView] = useState("none");
  const [showPassword, setShowPassword] = useState(false);

  const formVariants = {
    hidden: { y: -80, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 60, opacity: 0, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-700 to-black text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
          <h1 className="text-4xl md:text-3xl font-bold tracking-wide text-white">
            POWERFLEX GYM
          </h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li className="hover:text-gray-300 cursor-pointer transition">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition">
              <Link to="/members">Members</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition">
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen pt-28 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[400px] min-h-[400px] bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-2 pt-8 shadow-2xl overflow-hidden"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5 animate-pulse border-dashed" />

          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6 text-white animate-pulse" />
            <h2 className="text-3xl font-bold tracking-wide">POWERFLEX GYM</h2>
          </div>

          {/* Form Section */}
          <AnimatePresence mode="wait">
            {view !== "none" && (
              <motion.div
                key={view}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <h2 className="text-xl font-semibold uppercase tracking-wide">
                    {view === "login" ? "Login" : "Sign Up"}
                  </h2>
                </div>
                <form className="space-y-5">
                  {view === "signup" && (
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2 text-gray-300">
                        <User className="w-4 h-4" /> Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4" /> Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-300 mb-1">
                      <Lock className="w-4 h-4" /> Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={view === "login" ? "Enter password" : "Create password"}
                      className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white pr-10 outline-none transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-[37px] right-3 text-gray-400 hover:text-white transition"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
                  >
                    {view === "login" ? "Login" : "Sign Up"}
                  </button>

                  <div className="text-center mt-4 text-sm text-gray-400">
                    {view === "login" ? (
                      <>
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setView("signup")}
                          className="text-white underline hover:text-gray-300"
                        >
                          Sign Up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setView("login")}
                          className="text-white underline hover:text-gray-300"
                        >
                          Login
                        </button>
                      </>
                    )}
                  </div>

                  {/* Back Button */}
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      onClick={() => setView("none")}
                      className="text-sm text-gray-300 hover:text-white underline"
                    >
                      ← Back to options
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center Buttons */}
          {view === "none" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-10 mt-17"
            >
              <button
                onClick={() => setView("login")}
                className="w-80 py-4 text-lg rounded-full font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-200"
              >
                Login
              </button>
              <button
                onClick={() => setView("signup")}
                className="w-80 py-4 text-lg rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition-all duration-200"
              >
                Sign Up
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
