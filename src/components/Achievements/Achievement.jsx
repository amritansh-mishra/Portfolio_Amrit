import React from "react";
import { achievement } from "../../constants";

const Achievements = () => {
  return (
   <section
         id=""
         className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom-2"
       >
         {/**Section title */}
   
         <div className=" text-center mb-10">
           <h2 className="text-4xl text-white font-semibold ">ACHIEVEMENTS</h2>
           <div className="w-44 h-1 bg-[#fca311] mx-auto mt-1 rounded-full"></div>
           <p className="text-gray-300 mt-4 text-lg sm:text-xl font-semibold">
            
           </p>
         </div>
   
         {/**Experience timeline */}
   
         <div className="relative">
           {/** Vertical line */}
           <div className=" absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
   
           {/**Experience Enteries */}
           {achievement.map((edu, index) => (
             <div
               key={edu.id}
               className={`flex flex-col sm:flex-row items-center mb-16 ${
                 index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
               }`}
             >
               {/**Timeline circle */}
               <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#fca311] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                 <img
                   src=""
                   alt=""
                   className="w-full h-full object-cover rounded-full"
                 />
                 {/** experience.img and .company */}
               </div>
               {/**Content Section */}
               <div
                 className={`w-full sm:w-[45%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(252,163,17,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                   index % 2 === 0
                     ? "sm:mr-auto" // even - pushes to LEFT
                     : "sm:ml-auto" // odd - pushes to RIGHT
                 } ml-4 mr-4`}
               >
                 {/** flex container for image and text */}
                 <div className=" flex items-center space-x-6">
                   {/**Compny logo */}
                   <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                     <img
                       className="w-full h-full object-cover"
                       src=""
                       alt={edu.school}
                     />{" "}
                     {/** experience.img .company */}
                   </div>
   
                   {/**Role,Company name, and Date */}
                   <div className="flex flex-col justify-between">
                     <div>
                       <h3 className="text-xl sm:text-2xl text-white font-semibold">
                         {edu.degree}
                       </h3>
                       <h4 className="text-md sm:text-sm text-gray-300">
                         {edu.school}
                       </h4>
                       <h4 className="text-md sm:text-sm text-gray-400 mt-2">
                         {edu.date}
                       </h4>
                     </div>
                   </div>
                 </div>
                 <div>
                   <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
                   <p className="mt-4 text-gray-400 ">{edu.desc}</p>                 
                 </div>
               </div>
             </div>
           ))}
         </div>
       </section>
  );
};

export default Achievements;