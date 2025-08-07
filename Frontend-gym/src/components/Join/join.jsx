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
    joinDate: "",
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
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-green-200 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-black/70 backdrop-blur-md text-green-200 shadow-md">
        <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-widest uppercase flex items-center gap-2 text-green-300">
            <img src="/src/logo.png" alt="logo" className="w-10 h-10 object-contain" />
            POWERFLEX GYM
          </div>
          <div className="flex gap-6 font-medium text-sm sm:text-base">
            <Link to="/home" className="hover:text-green-200 transition">Home</Link>
            <Link to="/members" className="hover:text-green-200 transition">Members</Link>
            <Link to="/" className="hover:text-green-200 transition">Login/Signup</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full max-w-4xl p-10 rounded-2xl shadow-2xl bg-black/80 border border-green-700"
        >
          <h2 className="text-4xl font-bold text-center text-green-500 mb-10 tracking-wide">
            <UserPlus className="inline mr-2" /> ADD NEW MEMBER
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-semibold text-green-200">👤 Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-green-600 focus:ring-2 focus:ring-green-300 outline-none text-green-200"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-green-200">📧 Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-green-600 focus:ring-2 focus:ring-green-200 outline-none text-green-200"
                  required
                />
              </div>
            </div>

            {/* Row 2: Contact and Membership Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-semibold text-green-200">📞 Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-green-600 focus:ring-2 focus:ring-green-300 outline-none text-green-200"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-green-200">💼 Membership Type</label>
                <select
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-green-600 focus:ring-2 focus:ring-green-300 outline-none text-green-200"
                  required
                >
                  <option value="">-- Select Membership --</option>
                  <option value="Monthly">📅 Monthly</option>
                  <option value="Quarterly">📆 Quarterly</option>
                  <option value="Half-Yearly">🗓️ Half-Yearly</option>
                  <option value="Yearly">🧾 Yearly</option>
                </select>
              </div>
            </div>

            {/* Row 3: Join Date and Payment Mode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-semibold text-green-200">📅 Date of Joining</label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-green-600 focus:ring-2 focus:ring-green-300 outline-none text-green-200"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-green-200">💳 Payment Mode</label>
                <div className="flex items-center gap-6 mt-1">
                  <label className="flex items-center gap-2 text-green-150">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Online"
                      checked={formData.paymentMode === "Online"}
                      onChange={handleChange}
                      className="accent-green-300 scale-110"
                      required
                    />
                    🌐 Online
                  </label>
                  <label className="flex items-center gap-2 text-green-200">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Cash"
                      checked={formData.paymentMode === "Cash"}
                      onChange={handleChange}
                      className="accent-green-300 scale-110"
                      required
                    />
                    💵 Cash
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-300 text-black hover:bg-green-500 transition-all duration-300 py-3 rounded-lg font-bold shadow-xl uppercase tracking-wider"
            >
              ➕ Add Member
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}