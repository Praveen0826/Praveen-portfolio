import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-950 text-white py-6 shadow-inner"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left text-lg text-gray-400">
          © 2025 <span className="text-purple-400 font-semibold">Praveenkumar</span>. All rights reserved.
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/Praveen0826"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/praveenkumar-d-852175248/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:praveenkumardpk08@gmail.com"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
