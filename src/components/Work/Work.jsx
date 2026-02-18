import React from "react";
import { projects } from "../../constants";
const Work = () => {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">

        <div className=" text-center mb-10">
          <h2 className="text-white text-4xl font-semibold">PROJECTS</h2>
          <div className="w-36 h-1 bg-[#fca311] mx-auto mt-1 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg sm:text-xl font-semibold"> A showcase of projects I have worked on, highlighting my skills and experiences in various technology</p>
        </div>

        {/**Project grids */}

        <div className="text-center">
          <p className="text-red-500 text-3xl font-bold mt-10">Will - Update - This - Section - Soon</p>
        </div>


    </section>
  );
};

export default Work;