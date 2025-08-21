import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const projects = [
  {
    name: "E-commerce",
    link: "https://mini-project-e-vommerce-deployment.vercel.app",
    github:
      "https://github.com/Shabnammammadova/Mini-Project-e-commerce-deployment",
    img: "https://cdn-icons-png.freepik.com/512/11800/11800110.png",
  },
  {
    name: "ToDo App",
    link: "https://to-do-app-three-green-98.vercel.app/",
    github: "https://github.com/Shabnammammadova/ToDo-App",
    img: "https://cdn-icons-png.flaticon.com/512/1648/1648230.png",
  },
  {
    name: "Tic Tac Toe",
    link: "https://tic-tac-toe-eta-ivory-19.vercel.app/",
    github: "https://github.com/Shabnammammadova/TicTacToe-.",
    img: "https://cdn-icons-png.freepik.com/512/6169/6169090.png",
  },
  {
    name: "Calculator App",
    link: "https://calculator-app-topaz-three.vercel.app",
    github: "https://github.com/Shabnammammadova/Calculator-App",
    img: "https://cdn-icons-png.flaticon.com/512/5885/5885046.png",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="mx-auto px-4 py-20 bg-black text-white font-clash"
    >
      <h1 className="text-5xl font-bold  text-purple-700 mb-16 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden bg-[#1a1b24]/30 backdrop-blur-md border border-purple-700 shadow-xl transform hover:scale-[1.02] transition-all duration-500 group"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-60 object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black hover:bg-purple-400 hover:text-white transition-colors duration-300 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black hover:bg-purple-400 hover:text-white transition-colors duration-300 text-xl"
              >
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="px-6 py-4 bg-black text-center">
              <h2 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
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
