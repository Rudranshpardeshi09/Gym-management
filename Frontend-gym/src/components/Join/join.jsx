import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import "./join.css";

export default function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    membershipType: "",
    paymentMode: "",
    joinDate: "", // Added joinDate field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      name: formData.name,
      email: formData.email,
      phone: formData.contact,
      membership: formData.membershipType,
      paymentType: formData.paymentMode,
      joinDate: formData.joinDate,
    };

    const existingMembers = JSON.parse(localStorage.getItem("gymMembers")) || [];
    const updatedMembers = [...existingMembers, newMember];
    localStorage.setItem("gymMembers", JSON.stringify(updatedMembers));

    alert("✅ Member Added Successfully!");
    navigate("/members");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-500 to-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-black/40 backdrop-blur-md text-white shadow-md">
        <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
            <img src="/src/logo.png" alt="logo" className="w-10 h-10 object-contain" />
            POWERFLEX GYM
          </div>

          {/* Right: Navigation links */}
          <div className="flex gap-6 font-medium text-sm sm:text-base">
            <Link to="/home" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/members" className="hover:text-gray-300 transition">Members</Link>
            <Link to="/" className="hover:text-gray-300 transition">Login/Signup</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="card-glow-hover w-full max-w-lg p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            <UserPlus className="inline mr-2" /> ADD MEMBER
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">👤 Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 rounded-lg bg-black/10 border border-white/20 focus:ring-2 focus:ring-white outline-none text-white"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-lg bg-black/10 border border-white/20 focus:ring-2 focus:ring-white outline-none text-white"
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block mb-1 font-semibold">📞 Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full px-4 py-2 rounded-lg bg-black/10 border border-white/20 focus:ring-2 focus:ring-white outline-none text-white"
                required
              />
            </div>

            {/* Membership Type */}
            <div>
              <label className="block mb-1 font-semibold">💼 Membership Type</label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-white/20 focus:ring-2 focus:ring-white outline-none text-white"
                required
              >
                <option value="">-- Select Membership --</option>
                <option value="Monthly">📅 Monthly</option>
                <option value="Quarterly">📆 Quarterly</option>
                <option value="Half-Yearly">🗓️ Half-Yearly</option>
                <option value="Yearly">🧾 Yearly</option>
              </select>
            </div>

            {/* Date of Joining */}
            <div>
              <label className="block mb-1 font-semibold">📅 Date of Joining</label>
              <input
                type="date"
                name="joinDate"
                value={formData.joinDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/10 border border-white/20 focus:ring-2 focus:ring-white outline-none text-white"
                required
              />
            </div>

            {/* Payment Mode */}
            <div>
              <label className="block mb-2 font-semibold">💳 Payment Mode</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="Online"
                    checked={formData.paymentMode === "Online"}
                    onChange={handleChange}
                    className="accent-black scale-110"
                    required
                  />
                  🌐 Online
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="Cash"
                    checked={formData.paymentMode === "Cash"}
                    onChange={handleChange}
                    className="accent-black scale-110"
                    required
                  />
                  💵 Cash
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-2 rounded-lg font-semibold shadow-md"
            >
              Add Member
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
