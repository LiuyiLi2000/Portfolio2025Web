import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/project1.jpg";
import proj2 from "../assets/project2.jpg";
import proj3 from "../assets/project3.jpg";

const projects = [
  {
    title: "Drip Café",
    year: "2025",
    description:
      "A minimal and cozy coffee shop website designed and built in Webflow, blending smooth scroll animations with handcrafted visual details.",
    img: proj2,
    link: "https://dripcafe-66ca1f.webflow.io/", 
  },
  {
  title: "Food Decider",
  year: "2024",
  description:
    "A playful React web app that helps users decide what to eat, drink, or snack on when they can’t make up their mind. Built with React, Vite, Tailwind CSS.",
  img: proj3,
  link: "https://liuyili2000.github.io/Food-Decider/",
},

  {
    title: "Toto Park Website",
    year: "2023",
    description:
      "An interactive landing page introducing Toronto’s outdoor parks. Built with HTML, CSS, and JavaScript to highlight playful and natural vibes.",
    img: proj1,
    link: "https://liuyili2000.github.io/TotoPark/GreenSpace/",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PROJECTS 
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="project-img"
              style={{ backgroundImage: `url(${p.img})` }}
            ></div>
            <div className="project-info">
              <h3>
                {p.title} <span className="year-tag">· {p.year}</span>
              </h3>
              <p>{p.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

