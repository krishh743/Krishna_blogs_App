"use client";

import { useState } from "react";
import Logo from "../../assets/logo3.png";
import Modal from "@/app/auth/SignUp";
import LoginPage from "@/app/auth/Login";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const[active,inActiv/e]=useState(false)
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
      <nav className="bg-[#f8f8f8] border-xl bg-transparent backdrop-blur-md fixed w-full top-0 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div className="text-xl font-bold">
            <a href="#page-top" className="page-scroll">
              <img
                src={Logo.src}
                className="h-10 forced-color-adjust-auto bg-transparent backdrop-blur-md"
                alt="Logo"
              />
            </a>
          </div>

          <div
            className={`md:flex space-x-6 ${
              isOpen
                ? "flex flex-col md:flex-row absolute top-16 left-0 w-full bg-white shadow-md md:static md:shadow-none p-4 md:p-0"
                : "hidden"
            }`}
          >
            <a
              href="#features"
              className="page-scroll hover:text-orange-500 hover:underline py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="page-scroll hover:text-orange-500 hover:underline py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="page-scroll hover:text-orange-500 hover:underline py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="page-scroll hover:text-orange-500 hover:underline py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div>
              <button
                onClick={handleOpenModal}
                className="hover:text-orange-500 hover:underline py-2 md:py-0"
              >
                SignIn
              </button>{" "}
              /{" "}
              <button
                onClick={handleOpenModalForLogin}
                className="hover:text-orange-500 hover:underline py-2 md:py-0"
              >
                LogIn
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-xl"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Render Modal if showModal is true */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
        {loginCancel && <LoginPage onClose={()=>setLoginCancel(false)} />}
      </>
  );
};
