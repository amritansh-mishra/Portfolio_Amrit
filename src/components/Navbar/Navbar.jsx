import React, { useEffect, useState } from "react";
{
  /** in navbar i need 4 icons, github, linkdin, toogle menu and cross. Search from React-icons */
}
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menuOpen = false (menu hidden) for toogle bar responsiveness

  const [activeSection, setActiveSection] = useState("");

  const [isScroll, setIsScroll] = useState(false);

  //Check scroll and change backround button
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
  ];

  // when we click we'll get directed to particular function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    {
      /** Scroll krte hue baground add krna h varna byDefault hi rkhna h */
    },
    (
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScroll
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center ">
          {/** logo */}
          <div className="font-bold text-lg cursor-pointer ">
            <span className="text-[#fca311]">&lt;</span>
            <span className="text-[#e5e5e5]">Amritansh</span>
            <span className="text-[#fca311]">/</span>
            <span className="text-[#e5e5e5]">Mishra</span>
            <span className="text-[#fca311]">&gt;</span>
            {/** Desktop-Menu */}
          </div>

          <ul className=" hidden md:flex gap-8 text-[#e9d7d7]">
            {menuItems.map((item) => (
              //On hovering colour changes , Apply highlighting based on active section
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#fca311] ${
                  activeSection === item.id
                    ? "text-[#fca311]"
                    : "text-[#e9d7d7]"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/** Social Media Icons */}
          <div className=" hidden md:flex space-x-4 ">
            {/** targert blank so that link opens at a new page*/}
            <a
              href="https://github.com/amritansh-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="  text-[#e9d7d7] hover:text-[#fca311]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amritansh-mishra-393a58303"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#e9d7d7] hover:text-[#fca311] "
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/**Mobile menu icons */}
          <div className="md:hidden">
            {menuOpen ? (
              <FiX
                className="cursor-pointer text-3xl text-[#fca311]"
                onClick={() => setMenuOpen(false)} // Opens menu when togglebar clicked
              />
            ) : (
              <FiMenu
                className="cursor-pointer text-3xl text-[#fca311]"
                onClick={() => setMenuOpen(true)} // Closes menu when X clicked
              />
            )}
          </div>
        </div>



        {/**Mobile Menu Items */},
        {/**Checking whether the website is opened in mobile screen or not */}
        
        {menuOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-30 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-[#e5e5e5]">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#fca311]
                    ${activeSection === item.id ? "text-[#fca311]" : ""}`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/amritansh-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  text-[#e9d7d7] hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amritansh-mishra-393a58303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-[#e9d7d7] hover:text-white "
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    )
  );
};

export default Navbar;
