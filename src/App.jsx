import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
