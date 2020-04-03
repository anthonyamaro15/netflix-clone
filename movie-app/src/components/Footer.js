import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="web-links">
          <a
            href="https://github.com/anthonyamaro15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/anthonyamaro15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPerson />
          </a>
        </div>

        <p>&copy; copyright by anthony amaro 2020</p>
      </footer>
    </div>
  );
};

export default Footer;
