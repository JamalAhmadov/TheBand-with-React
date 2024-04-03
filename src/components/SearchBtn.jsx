import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBtn = () => {
  return (
    <div className="h-full w-16 flex items-center justify-center hover:bg-red-700 ">
      <FaMagnifyingGlass />
    </div>
  );
};

export default SearchBtn;
