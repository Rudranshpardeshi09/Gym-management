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
    <div className="relative min-h-screen bg-[#f4f4f4] overflow-hidden text-gray-800 font-sans">

      {/* 🔵 Background Gradient Blobs */}
      <div className="absolute top-0 -left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-10 -right-10 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm shadow-md text-gray-700">
  <div className="w-full px-6 py-3 flex justify-between items-center">
    
    {/* Left: Logo/Title */}
    <div className="text-xl font-extrabold tracking-wide flex items-center gap-2 text-red-500">
      <img src="/src/logo.png" alt="logo" className="w-10 h-10 object-contain" />
      POWERFLEX GYM
    </div>

    {/* Right: Nav Links */}
    <div className="flex gap-6 font-medium text-sm sm:text-base">
      <Link to="/home" className="hover:text-blue-600 transition">Home</Link>
      <Link to="/members" className="hover:text-blue-600 transition">Members</Link>
      <Link to="/" className="hover:text-blue-600 transition">Login/Signup</Link>
    </div>
  </div>
</nav>


      {/* Main Content */}
      <div className="pt-28 px-4 flex items-center justify-center z-10 relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-white/70 backdrop-blur-md border border-gray-200"
        >
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
            <UserPlus className="inline mr-2" /> Add New Member
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Membership Type</label>
                <select
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out"
                  required
                >
                  <option value="">-- Select Membership --</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Date of Joining</label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Payment Mode</label>
                <div className="flex items-center gap-6 mt-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Online"
                      checked={formData.paymentMode === "Online"}
                      onChange={handleChange}
                      className="accent-blue-500"
                      required
                    />
                    Online
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMode"
                      value="Cash"
                      checked={formData.paymentMode === "Cash"}
                      onChange={handleChange}
                      className="accent-blue-500"
                      required
                    />
                    Cash
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-blue-400 transition-all duration-300 py-3 rounded-md font-bold shadow-lg uppercase tracking-wider"
            >
              ➕ Add Member
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
