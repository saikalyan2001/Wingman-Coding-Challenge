import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("7 days");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center  lg:w-28 px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleMenu}
      >
        <span>{selectedOption}</span>
        <svg
          className="ml-2 -mr-1 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              onClick={() => handleSelect("7 days")}
            >
              7 days
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              onClick={() => handleSelect("30 days")}
            >
              30 days
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              onClick={() => handleSelect("45 days")}
            >
              45 days
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
