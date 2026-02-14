import React, { useEffect, useState } from "react";
{
  /** in navbar i need 4 icons, github, linkdin, toogle menu and cross. Search from React-icons */
}
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);  // for responsive toggle menu ki menu is open or not
  const [activeSection, setActiveSection] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  //Check scroll and change backround button 
  useEffect(() => {
    const handleScroll = ()=> {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll);  
  }, []);


  const menuItems = [
    {id:"about", label:"About"},
    {id:"experience", label:"Experience"},
    {id:"skills", label:"Skills"},
    {id:"education", label:"Education"},
    {id:"work", label:"Work"}
  ]


   // when we click we'll get directed to particular function
    const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    { /** Scroll krte hue baground add krna h varna byDefault hi rkhna h */},

      <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScroll ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>

        <div className="text-white flex justify-between item center">
          {/** logo */}
          <div className="font-bold text-lg cursor-pointer">
            <span className="text-[#fca311]">&lt;</span>
            <span className="text-[#e5e5e5]">Amritansh</span>
            <span className="text-[#fca311]"> / </span>
            <span className="text-[#e5e5e5]">Mishra</span>
            <span className="text-[#fca311]">&gt;</span>
          
          {/** Desktop-Menu */}
          </div>
            <ul className=" md:flex space-x-8 text-[#e9d7d7]">
              {menuItems.map((item) => (
                //On hovering colour changes 
                <li key={item.id} className= {`cursor-pointer hover:text-[#fca311] ${
                    activeSection ===item.id? "text-[#fca311]": "text-[#e9d7d7]" }`} >

                <button onClick={() => handleMenuItemClick(item.id)}>
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
