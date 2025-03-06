import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-gray-800">Simone Liu</h1>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/experience" className="text-gray-700 hover:text-blue-600">
            Experience
          </Link>
          <Link to="/education" className="text-gray-700 hover:text-blue-600">
            Education
          </Link>
          <a
            href="/Simone Liu - Resume 2025.pdf"
            download
            className="text-gray-700 hover:text-blue-600"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 shadow-md">
          <Link
            to="/"
            className="py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className="py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/education"
            className="py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <a
            href="/Simone Liu - Resume 2025.pdf"
            download
            className="py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
