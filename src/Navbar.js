import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl text-gray-900">
              Fahad's Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                to="https://fahadmasood.hashnode.dev/"
                target="_blank"
                className="bg-yellow-900 px-3 py-1 rounded-md text-white hover:text-gray-700 hover:bg-transparent transition duration-150"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-gray-700 transition duration-150"
              >
                About
              </Link>
              <Link
                to="/skills"
                className="text-gray-900 hover:text-gray-700 transition duration-150"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-gray-900 hover:text-gray-700 transition duration-150"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-gray-700 transition duration-150"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="https://fahadmasood.hashnode.dev/"
              target="_blank"
              className="block text-gray-900 hover:text-gray-700 transition duration-150"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="block text-gray-900 hover:text-gray-700 transition duration-150"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="block text-gray-900 hover:text-gray-700 transition duration-150"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="block text-gray-900 hover:text-gray-700 transition duration-150"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block text-gray-900 hover:text-gray-700 transition duration-150"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
