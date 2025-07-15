import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function MemberAdded() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem("gymMembers")) || [];
    setMembers(storedMembers);
  }, []);

  const getExpiryDate = (joinDate, membershipType) => {
    const baseDate = dayjs(joinDate);
    switch (membershipType.toLowerCase()) {
      case "monthly":
        return baseDate.add(1, "month").format("YYYY-MM-DD");
      case "quarterly":
        return baseDate.add(3, "month").format("YYYY-MM-DD");
      case "half-yearly":
        return baseDate.add(6, "month").format("YYYY-MM-DD");
      case "yearly":
        return baseDate.add(1, "year").format("YYYY-MM-DD");
      default:
        return "N/A";
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedMembers = members.filter((_, index) => index !== indexToDelete);
    setMembers(updatedMembers);
    localStorage.setItem("gymMembers", JSON.stringify(updatedMembers));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-2 sm:p-4 md:p-6 text-white">
      {/* Header / Navbar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-4"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white">🏋️ Members List</h1>
        <Link
          to="/join"
          className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add New Member
        </Link>
      </motion.div>

      {/* Members Table */}
      <div className="overflow-x-auto">
        {members.length > 0 ? (
          <table className="min-w-full text-xs sm:text-sm bg-gray-800 shadow rounded-lg overflow-hidden">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Name</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Email</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Phone</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Membership Type</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Join Date</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Expiry Date</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Payment Type</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {members.map((member, index) => (
                <tr key={index} className="hover:bg-gray-700 transition">
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">{member.name}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">{member.email}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">{member.phone}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300 capitalize">{member.membership}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">{member.joinDate}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">
                    {getExpiryDate(member.joinDate, member.membership)}
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-gray-300">{member.paymentType}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4">
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 sm:px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400 text-center">No members added yet.</p>
        )}
      </div>
    </div>
  );
}