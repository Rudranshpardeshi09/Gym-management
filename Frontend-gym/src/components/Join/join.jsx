import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Join() {
  const [membership, setMembership] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-black text-white px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-blue-500"
        >
          PowerFlex Gym
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl mt-4 text-white font-medium"
        >
          Welcome, <span className="text-blue-400">Be a Member</span>
        </motion.p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Phone No</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-2 rounded-lg text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Membership Type</label>
            <select
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg text-amber-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent"
            >
              <option value="" disabled>Select Membership</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="half-yearly">Half-Yearly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-black font-semibold py-2 rounded-lg shadow-md"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 w-[90%] max-w-sm text-center"
              onClick={(e) => e.stopPropagation()} // prevent click bubbling
            >
              <h2 className="text-2xl font-bold mb-2 text-blue-600">💪 Thank You! 💪</h2>
              <p className="text-sm text-gray-600 mb-4">
                Your membership form has been submitted successfully.
              </p>
              <button
                onClick={closeModal}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              > 
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
