import React, { useState } from "react";

const NavbarItem = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
    >
      <button className="h-12 w-24 flex items-center justify-center hover:bg-stone-400 hover:text-black focus:outline-none">
        {props.text}
        {props.icon}
      </button>
      {props.hasDropdown && isDropdownOpen && (
        <div className="absolute left-0  w-32 bg-white shadow-md">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 text-black"
              >
                Merchandise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 text-black"
              >
                Extras
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 text-black"
              >
                Media
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
