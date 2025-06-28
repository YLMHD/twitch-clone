import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTwitch} className="text-purple-600 text-2xl mr-2" />
          <span className="font-bold text-xl text-primary">StreamFlux</span>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-200 ease-in-out ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 border-t md:border-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-4 md:py-0 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
