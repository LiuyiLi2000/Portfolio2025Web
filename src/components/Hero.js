import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/hero-bg.jpg"; 

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>Liuyi Li</h1>
          <h2>Designer × Front-End Developer</h2>
          <p>
            I design and build visually balanced experiences — 
            where minimalism meets emotion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

