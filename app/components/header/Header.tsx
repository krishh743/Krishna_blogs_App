"use client";


import { useRouter } from "next/navigation";
import Banner from "../../assets/intro-bg.jpg";
import { Button } from "antd";

interface HeaderData {
  title: string;
  paragraph: string;
}

export const Header = (props: { data: HeaderData }) => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/all-pages/categories-blogs");
  };
  return (
    <header
      id="header"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Banner.src})` }}
    >
      <div className="intro h-full flex items-center justify-center relative overflow-hidden">
  
  {/* Dark Overlay */}
  <div className="overlay bg-black/70 w-full h-full absolute top-0 left-0"></div>

  {/* Animated Gradient Blur */}
  <div className="absolute w-72 h-72 bg-orange-500/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
  <div className="absolute w-72 h-72 bg-pink-500/30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

  <div className="container relative z-10 text-center text-white px-6">
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">

      {/* Heading */}
      <h1 className="text-5xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        {props.data ? props.data.title : "Loading"}
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-2xl text-gray-200 leading-8 max-w-3xl tracking-wide">
        {props.data ? props.data.paragraph : "Loading"}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300 text-white px-8 py-6 rounded-2xl text-lg shadow-2xl hover:shadow-orange-500/50"
        >
          Explore Blogs 🚀
        </Button>

        {/* <button className="border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-medium shadow-lg">
          Start Writing ✍️
        </button> */}
      </div>

    </div>
  </div>
</div>
    </header>
  );
};

// import {
//   ReactElement,
//   JSXElementConstructor,
//   ReactNode,
//   ReactPortal,
// } from "react";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import styles from "./Header.module.css";
// import Logo from "../../assets/logo3.png";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
//   const profileRef = useRef<HTMLDivElement>(null);

//   const toggleMenu = (): void => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleProfile = (): void => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   const handleClickOutside = (event: MouseEvent): void => {
//     if (
//       profileRef.current &&
//       !profileRef.current.contains(event.target as Node)
//     ) {
//       setIsProfileOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   //   #ad8ded

//   return (
//     <>
//       <nav className="bg-[#f8f8f8] border-xl top-0 shadow-xl bg-transparent backdrop-blur-sm sticky">
//         <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="/" // Corrected to use root path
//             className="flex items-center space-x-3 rtl:space-x-reverse h-[30px] sm:h-[100px] md:h-[30px] lg:h-[30px] xl:h-[30px] 2xl:h-[80px]"
//           >
//             <img src={Logo.src} className="h-full" alt="Flowbite Logo" />
//             <span className="self-center text-white  font-bold whitespace-nowrap sm:text-sm lg:text-sm xl:text-sm">
//               {/* Krishna's blog */}
//             </span>
//           </a>

//           <div className="flex items-center md:order-2 space-x-3 gap-2 md:space-x-0 rtl:space-x-reverse relative">
//             <span className="text-xl font-bold cursor-pointer hover:text-[#a27fe7]">
//               Login
//             </span>
//             <span className="text-xl font-bold cursor-pointer">|</span>
//             <span className="text-xl font-bold cursor-pointer hover:text-[#a27fe7]">
//               SignUp
//             </span>
//           </div>

//           <div
//             className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//               isMenuOpen ? "" : "hidden"
//             }`}
//             id="navbar-user"
//           >
//             <ul className="flex flex-col font-bold text-xl p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//               <li>
//                 <a
//                   href="/"
//                   className="block py-2 px-3 hover:text-[#a27fe7] "
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="block py-2 px-3  hover:text-[#a27fe7]"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="block py-2 px-3 hover:text-[#a27fe7]"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/pricing"
//                   className="block py-2 px-3 hover:text-[#a27fe7]"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="block py-2 px-3 hover:text-[#a27fe7]"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
