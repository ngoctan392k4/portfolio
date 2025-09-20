import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import projects from './assets/projects'
import Projects from "./components/Projects/Projects";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects projectContent={projects} />;


  </div>;
};

export default App;
