import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import EducationCerts from "../components/EducationCerts";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] antialiased selection:bg-[#0071e3] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCerts />
      </main>
    </div>
  );
};

export default Portfolio;
