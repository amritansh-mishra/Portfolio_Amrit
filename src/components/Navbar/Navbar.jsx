import React, { useState } from "react";
{
  /** in navbar i need 4 icons, github, linkdin, toogle menu and cross. Search from React-icons */
}
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  const [activeSection, setactiveSection] = useState(false);

  const menuItems = [
    {id:"about", label:"About"},
    {id:"experience", label:"Experience"},
    {id:"skills", label:"Skills"},
    {id:"education", label:"Education"},
    {id:"work", label:"Work"}
  ]

  return (
    { /** Scroll krte hue baground add krna h varna byDefault hi rkhna h */},

      <nav className="bg-transparent">
        <div className="text-white flex justify-between item center">
          {/** logo */}
          <div className="font-bold text-lg cursor-pointer">
            <span className="text-[#fadbca]">&lt;</span>
            <span className="text-white">Amritansh</span>
            <span className="text-[#fadbca]"> / </span>
            <span className="text-white">Mishra</span>
            <span className="text-[#fadbca]">&gt;</span>
          
          {/** Desktop-Menu */}
          </div>
            <ul className=" md:flex space-x-8 text-[#b8b1b7]">
              {menuItems.map((item) => (
                <li key={item.id} className="">

                <button>
                  {item.label}
                </button>
              
                </li>
              ))}
            </ul>
        </div>
      </nav>

  );


};

export default Navbar;
