import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const projects = [
  {
    name: "E-commerce",
    link: "https://mini-project-e-vommerce-deployment.vercel.app",
    github:
      "https://github.com/Shabnammammadova/Mini-Project-e-commerce-deployment",
    img: "https://static.vecteezy.com/system/resources/previews/029/726/214/non_2x/3d-purple-illustration-icon-of-shopping-review-in-online-marketplace-using-smartphone-right-side-free-png.png",
  },
  {
    name: "ToDo App",
    link: "https://to-do-app-three-green-98.vercel.app/",
    github: "https://github.com/Shabnammammadova/ToDo-App",
    img: "https://www.megaprofitapps.com/wp-content/uploads/2023/09/Mega-Terms-and-Conditions-App-Icon.svg",
  },
  {
    name: "Tic Tac Toe",
    link: "https://tic-tac-toe-eta-ivory-19.vercel.app/",
    github: "https://github.com/Shabnammammadova/TicTacToe-.",
    img: "https://cdn-icons-png.flaticon.com/512/8002/8002181.png",
  },
  {
    name: "Calculator App",
    link: "https://calculator-app-topaz-three.vercel.app",
    github: "https://github.com/Shabnammammadova/Calculator-App",
    img: "https://img.icons8.com/Dusk_Wired/512/7950F2/apple-calculator.png",
  },
];

const Project = () => {
  return (
    <section id="projects" className="mx-auto px-4 py-16 bg-black font-clash">
      <h1 className="text-5xl font-bold text-purple-600 mb-12 text-center font-clash">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 perspective  pt-3 max-w-6xl m-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-500  shadow-purple-600 cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-60 object-contain group-hover:brightness-75 transition duration-500"
            />
            <div className="absolute inset-0 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#1A1B24] text-white hover:bg-white px-6 py-3 rounded-lg cursor-pointer  hover:text-fuchsia-700 text-sm tracking-wider font-semibold outline-none border transition-all duration-300">
                  <FaGithub />
                </button>
              </a>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1A1B24] text-white hover:bg-white px-6 py-3 rounded-lg cursor-pointer  hover:text-fuchsia-700 text-sm tracking-wider font-semibold outline-none border transition-all duration-300">
                  <RiArrowRightUpLine />
                </button>
              </a>
            </div>
            <div className="px-6 py-4 text-center bg-black">
              <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition duration-300">
                {project.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
