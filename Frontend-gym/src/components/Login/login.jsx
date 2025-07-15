import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Dumbbell, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
/* import { Eye, EyeOff, Lock } from "lucide-react"; */

export default function CombinedLoginSignup() {
  const [view, setView] = useState("none");
  const [showPassword, setShowPassword] = useState(false);

  const formVariants = {
    hidden: { y: -100, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 100, opacity: 0, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-zinc-500  to-black text-white px-4 relative">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r backdrop-blur-md border-b border-white/2">
        <div className="max-w-8xl mx-auto px-10 py-2 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white mb-6 tracking-wide text-center animate-fadeScale">
  POWERFLEX GYM
</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/home">Home</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/members">Members</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/join">Join</Link></li>
          </ul>
        </div>
      </nav>

      {/* Page Content with Top Padding */}
      <div className="flex items-center justify-center pt-24">
        <div className="relative w-full max-w-md min-h-[520px] bg-neutral-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8 pt-6 flex flex-col items-center justify-start">
          {/* Gym Heading */}
          <h1 className="text-4xl font-bold text-white mb-6 tracking-wide text-center">
            POWERFLEX GYM
          </h1>

          {/* Form Slides In */}
          <AnimatePresence mode="wait">
            {view !== "none" && (
              <motion.div
                key={view}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
                transition={{ duration: 0.4 }}
                className="w-full absolute top-20 left-0 px-8"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Dumbbell className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-semibold uppercase tracking-wide">
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
                        className="w-full px-4 py-2 mt-1 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
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
                      className="w-full px-4 py-2 mt-1 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
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
    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white outline-none pr-10"
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute top-[37px] right-3 text-gray-400 hover:text-white"
    tabIndex={-1}
  >
    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
  </button>
</div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    {view === "login" ? "Login" : "Sign Up"}
                  </button>

                  {/* Switch between login/signup */}
                  <div className="text-center mt-4 text-sm text-gray-400">
                    {view === "login" ? (
                      <>
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setView("signup")}
                          className="text-white underline"
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
                          className="text-white underline"
                        >
                          Login
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Centered Buttons when no form is visible */}
          {view === "none" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-15 p-8"
            >
              <button
                onClick={() => setView("login")}
                className="w-3/4 py-3 text-lg rounded-full font-semibold bg-white text-black hover:bg-gray-200 transition"
              >
                Login
              </button>
              <button
                onClick={() => setView("signup")}
                className="w-3/4 py-3 text-lg rounded-full font-semibold bg-black border border-white text-white hover:bg-neutral-800 transition"
              >
                Sign Up
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}