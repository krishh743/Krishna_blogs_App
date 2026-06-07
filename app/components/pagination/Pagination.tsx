"use client";

import React, { useState } from "react";
import { FaFire, FaClock, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: PaginationProps) {
  const [activeTab, setActiveTab] = useState("trending");

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  return (
    <div className="mt-16 flex justify-center">
  <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 shadow-2xl">

    {/* Prev Button */}
    <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
      ← Prev
    </button>

    {/* Page Numbers */}
    <div className="flex items-center gap-3">

      <button className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-bold shadow-lg scale-110">
        1
      </button>

      <button className="w-11 h-11 rounded-full bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition duration-300">
        2
      </button>

      <button className="w-11 h-11 rounded-full bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition duration-300">
        3
      </button>

      <button className="w-11 h-11 rounded-full bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition duration-300">
        4
      </button>

      <span className="text-gray-400 text-lg">...</span>

      <button className="w-11 h-11 rounded-full bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition duration-300">
        10
      </button>
    </div>

    {/* Next Button */}
    <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
      Next →
    </button>
  </div>
</div>
  );
}

export default Pagination;
