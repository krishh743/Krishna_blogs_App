import { useState } from "react";
import Logo from "../../assets/logo3.png";


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav id="menu" className=" bg-[#f8f8f8] border-xl  bg-transparent backdrop-blur-md  fixed w-full top-0  shadow-md z-50">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
          <a href="#page-top" className="page-scroll">
                   <img src={Logo.src} className="h-10 forced-color-adjust-auto bg-transparent backdrop-blur-md" alt=" Logo" />

          </a>
        </div>
        <div
          className={`md:flex space-x-6 ${
            isOpen ? "flex flex-col md:flex-row absolute top-16 left-0 w-full bg-white shadow-md md:static md:shadow-none p-4 md:p-0" : "hidden"
          }`}
        >
          <a
            href="#features"
            className="page-scroll hover:text-blue-600 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="page-scroll hover:text-blue-600 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="page-scroll hover:text-blue-600 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          
          <a
            href="#contact"
            className="page-scroll hover:text-blue-600 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
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
  );
};