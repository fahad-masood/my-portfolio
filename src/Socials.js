import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="mx-auto my-auto flex items-center space-x-4">
      <a
        href="#"
        className="text-gray-900 hover:text-gray-700 transition duration-150"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-400 transition duration-150"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-pink-500 hover:text-pink-400 transition duration-150"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-blue-700 hover:text-blue-600 transition duration-150"
      >
        <FaLinkedinIn className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Socials;
