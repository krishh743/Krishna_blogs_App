"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { BlogCard } from "@/app/components/BlogCard";
import { blogsData } from "@/app/data/blogs";
import Pagination from "@/app/components/pagination/Pagination";

import { Button } from "antd";

import { FaArrowLeft, FaPenNib, FaFireAlt } from "react-icons/fa";

function Page() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-xl">
                <FaFireAlt className="text-white text-2xl" />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Trending Blogs
                </h1>

                <p className="text-gray-400 mt-1">
                  Explore powerful stories, ideas, and insights from creators
                  worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => router.push("/")}
              className="!h-12 !rounded-2xl !border-0 !bg-white/10 !px-6 !text-white backdrop-blur-xl hover:!bg-orange-500 hover:!text-white transition duration-300"
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Home
              </div>
            </Button>

            <Button
              onClick={() => router.push("/Admin-pages/create-post")}
              className="!h-12 !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !via-pink-500 !to-purple-600 !px-6 !font-semibold !text-white shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-2">
                <FaPenNib />
                Create Post
              </div>
            </Button>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Discover Stories That
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Inspire & Educate
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl leading-8">
              Read blogs from passionate creators, explore trending topics, and
              stay updated with the latest ideas, technology, lifestyle, and
              innovations.
            </p>
          </div>
        </div>

        {/* Blog Cards ,grid grid-cols-1 md:grid-cols-2 gap-8*/}
        <div className="">
          {blogsData.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 shadow-xl">
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
