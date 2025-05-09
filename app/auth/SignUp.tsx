"use client";

import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  onClose: () => void;
}


// app/api/auth/[...nextauth]    krishnakushwaha743 vdqAPQOnbCJ166rX

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("/services/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("/services/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(res,"res")

      if (res.ok) {
        const form = e.target as HTMLFormElement;
        console.log(form,"form")
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 relative animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white">
            Sign Up
          </h3>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-red-500 transition-colors"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:bg-orange-300 dark:border-orange-300 dark:text-white"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:bg-orange-300 dark:border-orange-300 dark:text-white"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:bg-orange-300 dark:border-orange-300 dark:text-white"
          />
<Button htmlType="submit" type="primary">
  Register
</Button>

          {error && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-1">
              {error}
            </div>
          )}

          <p className="text-sm text-right mt-2 text-zinc-600 dark:text-zinc-300">
            Already have an account?{" "}
            <Link href="/" className="text-green-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
