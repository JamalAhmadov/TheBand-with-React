import React from "react";
import NavbarItem from "./NavbarItem";
import { MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex items-center ">
      <div className="md:hidden cursor-pointer hover:bg-red-700  block p-4">
        <GiHamburgerMenu size={24} />
      </div>
      <div className=" hidden items-center md:flex ">
        <NavbarItem text="HOME" href="#home" />
        <NavbarItem text="BAND" href="#band" />
        <NavbarItem text="TOUR" href="#tour" />
        <NavbarItem text="CONTACT" href="#contact" />
        <NavbarItem text="MORE" hasDropdown="true" icon={<MdArrowDropDown />} />
      </div>
    </div>
  );
};

export default Navbar;
