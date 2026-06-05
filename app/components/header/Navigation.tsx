"use client";

import { useState } from "react";
import Logo from "../../assets/logo3.png";
import Modal from "@/app/auth/SignUp";
import LoginPage from "@/app/auth/Login";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginCancel,setLoginCancel]=useState(false)

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOpenModal = () => {
    setShowModal(true);
    setIsOpen(false);
  };

  const handleOpenModalForLogin = ()=>{
    setLoginCancel(true);

  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
  <div className="container mx-auto flex items-center justify-between px-6 py-4">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <a href="#page-top" className="group flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-lg opacity-60 group-hover:opacity-100 transition duration-300 rounded-full"></div>

          <img
            src={Logo.src}
            className="relative h-12 w-12 rounded-full object-cover border-2 border-white/20 shadow-xl"
            alt="Logo"
          />
        </div>

        <div className="hidden sm:block">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Techs Krishna
          </h1>

          <p className="text-xs text-gray-300 tracking-widest">
            BLOG PLATFORM
          </p>
        </div>
      </a>
    </div>

    {/* Desktop Menu */}
    <div
      className={`md:flex items-center gap-8 ${
        isOpen
          ? "flex flex-col absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-0 md:static md:bg-transparent md:border-0"
          : "hidden"
      }`}
    >

      {[
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#contact", label: "Contact" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="relative text-white text-lg font-medium hover:text-orange-400 transition duration-300 group"
        >
          {item.label}

          {/* Underline Animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}

      {/* Auth Buttons */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">

        <button
          onClick={handleOpenModal}
          className="px-6 py-2 rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg"
        >
          Sign Up
        </button>

        <button
          onClick={handleOpenModalForLogin}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-xl hover:scale-105 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white text-2xl shadow-lg hover:bg-orange-500/20 transition duration-300"
      aria-label="Toggle navigation"
      onClick={toggleMenu}
    >
      {isOpen ? "✕" : "☰"}
    </button>
  </div>
</nav>

      {/* Render Modal if showModal is true */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
        {loginCancel && <LoginPage onClose={()=>setLoginCancel(false)} />}
      </>
  );
};
