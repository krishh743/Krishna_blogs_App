"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../../assets/logo3.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = (): void => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

//   #ad8ded

  return (
    <>
      <nav className="bg-[#f8f8f8] border-xl top-0 shadow-xl bg-transparent backdrop-blur-sm sticky">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/" // Corrected to use root path
            className="flex items-center space-x-3 rtl:space-x-reverse h-[30px] sm:h-[100px] md:h-[30px] lg:h-[30px] xl:h-[30px] 2xl:h-[80px]"
          >
            <img
              src={Logo.src}
              className="h-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-white  font-bold whitespace-nowrap sm:text-sm lg:text-sm xl:text-sm">
              {/* Krishna's blog */}
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-3 gap-2 md:space-x-0 rtl:space-x-reverse relative">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            > */}
            <span className="text-xl font-bold cursor-pointer hover:text-[#a27fe7]">Login</span>
            <span className="text-xl font-bold cursor-pointer">|</span>
            <span className="text-xl font-bold cursor-pointer hover:text-[#a27fe7]">SignUp</span>
            {/* </button> */}
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              SigIn
            </button> */}
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-bold text-xl p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a href="/" className="block py-2 px-3 hover:text-[#a27fe7] " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3  hover:text-[#a27fe7]">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="block py-2 px-3 hover:text-[#a27fe7]">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="block py-2 px-3 hover:text-[#a27fe7]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 hover:text-[#a27fe7]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
