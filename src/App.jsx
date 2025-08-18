import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <Skills />
      <Project />
    </div>
  );
};

export default App;
