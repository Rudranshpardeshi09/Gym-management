// src/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  Clock,
  Users,
  TimerReset,
  ShieldCheck,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gymMembers")) || [];
    setMembers(stored);

    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("gymMembers")) || [];
      setMembers(updated);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-2 sm:px-6 py-8 sm:py-12 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg shadow-md"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-white font-extrabold text-xl tracking-wide flex items-center gap-2">
            <img src="/src/logo.png" className="w-15 h-15 text-blue-500" />
            POWERFLEX
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-white hover:text-blue-400 transition font-medium"
            >
              <Menu className="w-5 h-5" />
              Menu
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-lg shadow-lg ring-1 ring-white/10 backdrop-blur-md z-50">
                <Link to="/join" className="block px-4 py-2 text-sm text-white hover:bg-blue-500" onClick={() => setDropdownOpen(false)}>Join Now</Link>
                <Link to="/" className="block px-4 py-2 text-sm text-white hover:bg-blue-500" onClick={() => setDropdownOpen(false)}>Login</Link>
                <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-500" onClick={() => { setDropdownOpen(false); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>About Us</button>
                <Link to="/members" className="block px-4 py-2 text-sm text-white hover:bg-blue-500" onClick={() => setDropdownOpen(false)}>Members</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-white hover:bg-blue-500" onClick={() => setDropdownOpen(false)}>Contact Us</Link>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Spacing below navbar */}
      <div className="h-16 sm:h-20" />

      {/* Background glows */}
      <motion.div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 blur-3xl rounded-full opacity-30 z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500 blur-2xl rounded-full opacity-30 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Hero Section */}
      <motion.div className="relative z-10 text-center mb-20">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Welcome to PowerFlex Gym
        </h1>
        <h2 className="mt-20 sm:mt-8 text-lg sm:text-xl md:text-2xl font-semiboldC tracking-wider">
          YOUR ULTIMATE FITNESS DESTINATION 24/7
        </h2>
        <p className="mt-8 sm:mt-8 text-base sm:text-lg md:text-2xl Font-extrabold text-white text-da-300 max-w-xs sm:max-w-2xl mx-auto">
          Transform your body and mind
        </p>*
        <motion.div whileHover={{ scale: 1.1 }} className="inline-block mt-6 sm:mt-8">
          <Link to="/join" className="px-15 sm:px-10 py-2 sm:py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
            ADD MEMBER
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-20 max-w-xs sm:max-w-6xl mx-50 mb-10 sm:mb-7 z-10 relative">
        <StatCard icon={<Users />} label="Active Members" count={members.length} />
        <StatCard icon={<TimerReset />} label="Trainers" count={18} />
        <StatCard icon={<ShieldCheck />} label="Programs" count={24} />
      </div>

      {/* Newest Members Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20 px-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Newest Members</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.slice(-3).reverse().map((member, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-xl text-gray-200 shadow">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.email}</p>
              <p className="text-sm">Joined: {member.joinDate}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="relative z-10 max-w-xs sm:max-w-5xl mx-auto mt-16 sm:mt-32 mb-10 sm:mb-20 px-2 sm:px-4 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6">
          About PowerFlex Gym
        </h2>
        <p className="text-base sm:text-lg text-gray-300 text-center max-w-xs sm:max-w-3xl mx-auto mb-4 sm:mb-8">
          At PowerFlex, we redefine fitness with cutting-edge technology, 24/7 access,
          and expert-led programs. Our mission is to empower individuals of all levels
          to achieve their goals—whether it's building muscle, burning fat, or embracing
          a healthier lifestyle.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-grey-400">Our Vision</h3>
            <p className="text-gray-300">
              We envision a world where fitness is accessible, empowering, and
              transformative for everyone. Our facilities blend innovation with
              community spirit to help you unlock your full potential.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-md shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-grey-400">Why Choose Us?</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>24/7 smart gym access</li>
              <li>Expert trainers & personalized plans</li>
              <li>Group classes & holistic wellness</li>
              <li>Clean, safe, and community-driven space</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Decorative Bodybuilder Image */}
      <img
        src="/src/bodybuilder.png"
        alt="Bodybuilder"
        className="hidden md:block absolute top-1/3 right-0 transform -translate-y-1/2 h-[150vh] -l-full object-cover shadow-2xl z-0"
      />
    </motion.div>
  );
}

// StatCard Component
function StatCard({ icon, label, count }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4 bg-white/5 rounded-xl px-6 py-6 text-white shadow-lg backdrop-blur-md"
    >
      <div className="text-blue-400">
        {React.cloneElement(icon, { size: 36 })}
      </div>
      <div>
        <div className="text-3xl font-bold">
          <CountUp end={count} duration={2} />
        </div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </motion.div>
  );
}
