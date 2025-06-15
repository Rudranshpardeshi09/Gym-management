// src/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500">
          Welcome to PowerFlex Gym
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Transform your body, build strength, and boost your energy with our state-of-the-art gym equipment and expert trainers.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition"
        >
          Join Now
        </motion.button>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <FeatureCard
          Icon={Dumbbell}
          title="Strength Training"
          desc="Modern machines and free weights to build muscle and power."
        />
        <FeatureCard
          Icon={Flame}
          title="Fat Burn Programs"
          desc="High-intensity cardio sessions for quick and lasting results."
        />
        <FeatureCard
          Icon={HeartPulse}
          title="Health & Wellness"
          desc="Yoga, stretching, and wellness guidance for a healthier life."
        />
        <FeatureCard
          Icon={Clock}
          title="24/7 Access"
          desc="Workout anytime — our gym is open around the clock."
        />
      </div>
    </div>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 text-center"
    >
      <Icon className="mx-auto text-blue-600 w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}
