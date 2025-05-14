"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  onClose: () => void;
}

const LoginPage: React.FC<ModalProps> = ({ onClose }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false, // Prevent NextAuth from redirecting by default
      email,
      password,
    });

    if (res?.error) {
      console.log("Login Error:", res.error); // Log the actual message
      setError("Invalid email or password.");
    } else {
      // Redirect after successful login
      router.push("/all-pages/categories-blogs");
      onClose(); // Optional: Close modal after successful login
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 relative animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white">
            Login
          </h3>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-red-500 transition-colors"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            className="px-4 py-2 border border-orange-300 rounded-md"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="px-4 py-2 border border-orange-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full text-white bg-gray-800 hover:bg-orange-800 rounded-lg px-4 py-2 font-medium"
          >
            Login
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-1">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
