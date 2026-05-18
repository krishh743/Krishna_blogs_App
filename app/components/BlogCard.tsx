import Link from "next/link";
import { useState } from "react";

import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";

export const BlogCard = ({ blog }: { blog: any }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 12);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <Link href={`blogs/${blog.slug}`}>
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 blur-md opacity-70"></div>

                <img
                  src="/images/profile-krishna.png"
                  alt="Author"
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Techs Krishna
                </p>

                <p className="text-xs text-gray-400">Blog Creator ✨</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white leading-9 mb-4 group-hover:text-orange-400 transition duration-300">
            {blog.title}
          </h2>

          {/* Summary */}
          <p className="text-gray-300 leading-7 text-sm mb-6">
            {blog.summary.split(" ").slice(0, 20).join(" ")}
            ...
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            {/* Date */}
            <p className="text-sm text-gray-400">📅 {blog.date}</p>

            {/* Like Button */}
            <button
              onClick={handleLike}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-orange-500 transition duration-300"
            >
              {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}

              <span>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
