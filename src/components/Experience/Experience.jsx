import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
   <section
   id="experiences"
   className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient">

    {/**Section title */}

    <div className=" text-center mb-10">
      <h2 className="text-4xl text-white font-semibold ">
        EXPERIENCE
      </h2>
      <div className="w-36 h-1 bg-[#fca311] mx-auto mt-1 rounded-full"></div>
      <p className="text-white mt-4 text-lg font-semibold">
        Heloo there I'm very unexperienced fellow 
     </p>
    </div>
    {/**Experience timeline */}
    <div className="relative">

      {/** Vertical line */}
      <div className=" absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full">
         {/**Experience Enteries */}
         {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}>

            {/**Timeline circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              
              <img 
              src="" 
              alt="" 
              className="w-full h-full object-cover rounded-full"/> {/** experience.img and .company */}
            
            </div>

            {/** Square box content section */}

            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>

            </div>

          </div>
         ))}

      </div>

    </div>
   </section>
  );
};

export default Experience;