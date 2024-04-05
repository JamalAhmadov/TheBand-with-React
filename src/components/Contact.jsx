import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



const Contact = () => {
  return (
    <ul className="sm:w-1/2">
      <li className="flex items-center gap-3"> <FaLocationDot /> Chicago, US</li>
      <li className="flex items-center gap-3"> <FaPhoneAlt /> Phone: +00 151515</li>
      <li className="flex items-center gap-3"> <IoMdMail /> Email: mail@mail.com</li>
    </ul>
  );
};

export default Contact;