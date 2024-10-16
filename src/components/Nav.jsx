import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing Feather Icons

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`md:hidden w-full z-50 border-b border-navb bg-white h-16 fixed top-1`}>
      <div className="flex justify-between items-center h-full pl-4">
        {/* Hamburger menu icon */}
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FiX size={24} style={{ strokeWidth: 2 }} />
          ) : (
            <FiMenu size={24} style={{ strokeWidth: 2 }} />
          )}
        </button>
      </div>

      {/* Menu items only visible when isOpen is true */}
      <div className={`${isOpen ? "block" : "hidden"} bg-white w-full h-screen`}>
        <ul className="flex flex-col space-y-4 pl-4 font-semibold py-4 text-4xl">
          <li className="hover:text-textgrey">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-textgrey">
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="hover:text-textgrey">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Github
            </a>
          </li>
          <li className="hover:text-textgrey">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex gap-16 font-medium pl-8">
      <li className="hover:text-navhover">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-navhover">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-navhover">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </li>
      <li className="hover:text-navhover">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed md:border-b  bg-white w-screen md:w-screen z-50 border-navb md:h-16 flex items-center md:px-4">
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <DesktopNav />
    </nav>
  );
};

export default Nav;
