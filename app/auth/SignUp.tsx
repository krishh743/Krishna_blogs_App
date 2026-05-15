"use client";

import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  RxCross2,
  RxPerson,
  RxEnvelopeClosed,
  RxLockClosed,
} from "react-icons/rx";

interface ModalProps {
  onClose: () => void;
  openLogin: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      // Check Existing User
      const resUserExists = await fetch("/services/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        setLoading(false);
        return;
      }

      // Register User
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPassword("");

        router.push("/");
        onClose();
      } else {
        setError("Registration failed.");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl"></div>

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        {/* Gradient Top Border */}
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-300 transition hover:text-red-400"
        >
          <RxCross2 size={26} />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent">
              Create Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              Join our blogging community and start sharing your thoughts,
              stories, and ideas with the world.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition duration-300 focus-within:border-orange-500">
                <RxPerson className="text-orange-400" size={20} />

                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition duration-300 focus-within:border-pink-500">
                <RxEnvelopeClosed className="text-pink-400" size={20} />

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition duration-300 focus-within:border-purple-500">
                <RxLockClosed className="text-purple-400" size={20} />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <Button
              htmlType="submit"
              loading={loading}
              className="!h-14 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !via-pink-500 !to-purple-600 !text-lg !font-semibold !text-white shadow-2xl transition duration-300 hover:!scale-[1.02]"
            >
              {loading ? "Creating Account..." : "Register Now"}
            </Button>

            {/* Login */}
            <p className="pt-2 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <button
                type="button"
                onClick={openLogin}
                className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold text-transparent hover:opacity-80"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
