import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>ABOUT</h2>
        <p>
       I combine design intuition with front-end logic to build interfaces. 
       </p>
       <p>
       I craft user experiences with a focus on clarity, tone, and subtle interactions. With strong skills in both visual design and coding, I bring concepts to life using HTML, CSS, JavaScript, and React, bridging the gap between aesthetic vision and functional implementation. 
       </p>
       <p>
       I also leverage AI tools to accelerate design workflows, explore creative directions, and enhance problem-solving, integrating the latest technology into every project I take on.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
