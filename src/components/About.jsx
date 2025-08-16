import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 font-clash">
      <div className="flex flex-col md:flex-row items-center gap-12  mt-28 max-w-7xl w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-purple-600 w-72 h-72 md:w-96 md:h-96 rounded-xl shadow-xl"
        ></motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className=" md:text-4xl lg:text-6xl font-extrabold text-white mb-4 font-clash">
            Hi, I'm Shabnam Mammadova
          </h1>

          <TypeAnimation
            sequence={["I'm a Junior Frontend Developer", 2000, "", 500]}
            wrapper="span"
            speed={40}
            cursor={true}
            style={{
              fontSize: "1.75rem",
              display: "inline-block",
              fontWeight: "600",
              color: "#7e22ce",
            }}
            repeat={Infinity}
          />
          <p className="mt-4 text-white text-xl max-w-md">
            Passionate about building responsive and interactive web
            applications with clean and modern design using React, Typescript,
            and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
