"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

interface ModalProps {
  onClose: () => void;
  openSignup: () => void;
}

const LoginPage: React.FC<ModalProps> = ({ onClose, openSignup, }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid email or password.");
      } else {
        router.push("/all-pages/categories-blogs");
        onClose();
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full"></div>

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]">

        {/* Top Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-300 hover:text-red-400 transition duration-300"
        >
          <RxCross2 size={26} />
        </button>

        {/* Content */}
        <div className="p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Welcome Back
            </h2>

            <p className="text-gray-300 mt-3 text-sm leading-6">
              Login to explore blogs, save your favorites, and connect with creators worldwide.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 focus-within:border-orange-500 transition duration-300">
                <FaEnvelope className="text-orange-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 focus-within:border-pink-500 transition duration-300">
                <FaLock className="text-pink-400" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-orange-400 hover:text-orange-300 transition duration-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-4 text-lg font-semibold text-white shadow-2xl transition duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}

              {!loading && (
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </form>

          {/* Bottom Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-300">
              Don’t have an account?{" "}
             <button
  type="button"
  onClick={openSignup}
  className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold text-transparent hover:opacity-80"
>
  Create Account
</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;