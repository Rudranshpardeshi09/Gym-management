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
    <div className="min-h-screen bg-black text-green-500 px-4 py-6 sm:px-8 md:px-16 lg:px-32">
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
      >
        <h1 className="text-3xl font-bold tracking-tight text-green-500">🏋️ Members List</h1>
        <Link
          to="/join"
          className="px-4 py-2 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition font-semibold"
        >
          + Add New Member
        </Link>
      </motion.div>

      {/* Table or Message */}
      <div className="overflow-x-auto rounded-xl border border-green-700 bg-neutral-900 shadow-xl">
        {members.length > 0 ? (
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-green-900 border-b border-green-600">
              <tr>
                {["Name", "Email", "Phone", "Membership", "Join Date", "Expiry Date", "Payment", "Action"].map((head) => (
                  <th key={head} className="px-4 py-3 text-left font-bold text-green-400 uppercase tracking-wider">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-green-700">
              {members.map((member, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-950 transition-colors"
                >
                  <td className="px-4 py-3 text-green-100">{member.name}</td>
                  <td className="px-4 py-3 text-green-100">{member.email}</td>
                  <td className="px-4 py-3 text-green-100">{member.phone}</td>
                  <td className="px-4 py-3 capitalize text-green-100">{member.membership}</td>
                  <td className="px-4 py-3 text-green-100">{member.joinDate}</td>
                  <td className="px-4 py-3 text-green-100">{getExpiryDate(member.joinDate, member.membership)}</td>
                  <td className="px-4 py-3 text-green-100">{member.paymentType}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 rounded-md text-xs font-bold border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-8 text-green-400">No members added yet.</p>
        )}
      </div>
    </div>
  );
}