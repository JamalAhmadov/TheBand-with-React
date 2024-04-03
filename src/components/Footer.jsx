import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full min-h-60 flex items-center justify-center ">
      <div className="flex flex-col gap-4 opacity-65">
        <div className="flex justify-center gap-1 ">
          <FaFacebookSquare size={26} />
          <FaInstagram size={26} />
          <FaFacebookSquare size={26} />
          <FaInstagram size={26} />
          <FaFacebookSquare size={26} />
          <FaInstagram size={26} />
        </div>
        <p className="text-center"> 
          Powered by <a href="">w3.css</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
