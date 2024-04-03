import React from "react";
import NavbarItem from "./NavbarItem";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <NavbarItem text="HOME" href="#home" />
      <NavbarItem text="BAND" href="#band" />
      <NavbarItem text="TOUR" href="#tour" />
      <NavbarItem text="CONTACT" href="#contact" />
      <NavbarItem text="MORE" icon={<MdArrowDropDown />} />
    </div>
  );
};

export default Navbar;
