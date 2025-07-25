"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";

export default function PromptInput() {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSubmit() {
    if (!searchTerm.trim()) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: searchTerm,
          conversationId: "64f03d4d5c2b5cf49f4c17a0", // ✅ Replace with dynamic ID
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      console.log("Message saved:", data);
      setSearchTerm("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="p-6 border-t border-gray-200">
      <div className="relative">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ask me Anything"
          value={searchTerm}
          className="w-full p-4 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <IoSparklesOutline className="w-5 h-5 text-purple-500" />
        </div>
      </div>
      <div className="flex items-end justify-end mt-3">
        <div className="flex items-end space-x-4">
          <span className="text-sm text-gray-500">0/1000</span>
          <button
            onClick={() => handleSubmit()}
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
          >
            <span className="text-sm">Send</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
