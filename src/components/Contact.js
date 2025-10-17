import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or new ideas.</p>
        <a href="mailto:liuyili@example.com" className="contact-btn">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;

