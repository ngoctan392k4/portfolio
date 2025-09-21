import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import projects from './assets/projects'
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects projectContent={projects} />
    <Contact />
    <Footer />
  </div>;
};

export default App;
