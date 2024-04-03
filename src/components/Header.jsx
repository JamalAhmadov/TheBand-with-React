import React from "react";
import Navbar from "./Navbar";
import SearchBtn from "./SearchBtn";

const Header = () => {
  return (
    <div className="flex items-center bg-black text-white h-12 w-full justify-between fixed top-0 z-10">
        <Navbar />
        <SearchBtn />
    </div>
  );
};

export default Header;
