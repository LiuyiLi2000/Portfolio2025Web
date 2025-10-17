import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;

