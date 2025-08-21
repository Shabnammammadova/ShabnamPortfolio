import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenBurger(false);
    }
  };

  return (
    <main className="lg:max-w-[1450px] w-full ">
      <header className="fixed top-0 left-0 w-full z-[99999999] bg-black  font-clash text-white">
        <div className="flex items-center justify-between p-5 ml-4 mr-4">
          <div>
            <h1 className="font-extrabold  text-3xl cursor-pointer text-pretty  text-purple-700 ">
              Shabnam
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex items-center justify-between gap-10">
              <li
                className="cursor-pointer text-2xl relative group font-medium"
                onClick={() => scrollToSection("about")}
              >
                About
                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
              </li>
              <li
                className="cursor-pointer text-2xl relative group font-medium"
                onClick={() => scrollToSection("skills")}
              >
                Skills
                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
              </li>
              <li
                className="cursor-pointer text-2xl relative group font-medium"
                onClick={() => scrollToSection("projects")}
              >
                Projects
                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
              </li>
              <button
                className="w-[180px] h-[50px] bg-purple-700 text-white rounded-full border-0 outline-none cursor-pointer relative shadow-lg overflow-hidden group"
                onClick={() => scrollToSection("contact")}
              >
                <span className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 text-lg uppercase tracking-tight transition-all duration-500 group-hover:top-[-100%]">
                  Contact me
                </span>
                <span className="absolute w-full top-[150%] left-0 transform -translate-y-1/2 text-lg uppercase tracking-[1px] transition-all duration-500 group-hover:top-1/2">
                  Go!
                </span>
              </button>
            </ul>
            <button className="block lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="flex items-center justify-center m-auto flex-col gap-10 pb-6">
            <li
              className="cursor-pointer text-2xl relative group font-medium"
              onClick={() => scrollToSection("about")}
            >
              About
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
            </li>
            <li
              className="cursor-pointer text-2xl relative group font-medium"
              onClick={() => scrollToSection("skills")}
            >
              Skills
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
            </li>
            <li
              className="cursor-pointer text-2xl relative group font-medium"
              onClick={() => scrollToSection("projects")}
            >
              Projects
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
            </li>
            <button
              className="w-[180px] h-[50px] bg-purple-700 text-white rounded-full border-0 outline-none cursor-pointer relative shadow-lg overflow-hidden group"
              onClick={() => scrollToSection("contact")}
            >
              <span className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 text-lg uppercase tracking-tight transition-all duration-500 group-hover:top-[-100%]">
                Contact me
              </span>
              <span className="absolute w-full top-[150%] left-0 transform -translate-y-1/2 text-lg uppercase tracking-[1px] transition-all duration-500 group-hover:top-1/2">
                Go!
              </span>
            </button>
          </ul>
        )}
      </header>
    </main>
  );
};

export default Navbar;
