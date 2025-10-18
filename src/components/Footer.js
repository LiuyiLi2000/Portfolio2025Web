import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Liuyi Li. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/LiuyiLi2000" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/liuyi-li/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:liuyili@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
