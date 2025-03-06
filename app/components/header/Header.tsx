// "use client";

import { useRouter } from 'next/navigation'

import Banner from "../../assets/intro-bg.jpg";

interface HeaderData {
  title: string;
  paragraph: string;
}

export const Header = (props: { data: HeaderData }) => {
  const router = useRouter(); // Initialize useRouter

  const handleGetStarted = () => {
    router.push("/"); // Navigate to /BlogsCategories
  };
  return (
    <header
      id="header"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Banner.src})` }}
    >
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {props.data ? props.data.paragraph : "Loading"}
            </p>
            <button // Change <a> to <button>
              onClick={handleGetStarted} // Use onClick handler
              className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get Started
            </button>

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
