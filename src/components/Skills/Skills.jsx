import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" py-24 px-24 md:px-[7vw]  lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className=" mb-1 text-center ">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold ">
          SKILLS
        </h2>
      </div>

      <div className="w-24 h-1 bg-[#fca311] mx-auto rounded-full"></div>
      <div>
        <p className="text-gray-300 mt-4 text-lg sm:text-xl font-semibold">
          A collection of technical things that inspires me and itnrigues me for
          projects
        </p>
      </div>

      {/** skills categories */}

      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.id}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4">
              {category.title}
            </h3>

            {/** Skills item - 3 per row on larger screens */} 

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              gyroscope={true}
            >
              <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-8 bg-transparent border-2 border-gray-500 rounded-3xl py-2 px-2 "
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name}logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 "
                    />
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
