import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import ProfileImage from '../../assets/profile.jpeg';


const About = () => {
  return (
    <section 
    id="about"
    className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between "> 
        {/**left side content */}
        <div className="text-center md:w-1/2 md:text-left mt-8 md:mt-0">

         {/**greetings*/}
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ">
           Hi, I'm
         </h1>

         {/**name */}
         <h2 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-[#fca311]">
           Amrit
         </h2>

         {/**Skills with typing effect */}
         <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium">
            I'm a{" "}
            <span className="text-[#fca311] font-semibold">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h3>
        {/** about me paragraph */}
        <p className=" text-base sm:text-lg md:text-lg text-white mb-10 mt-8 leading-relaxed ">
          I’m a passionate software developer who enjoys turning ideas into real, working applications through clean and efficient code. I have a strong interest in building user-friendly web experiences and love working with modern technologies like React and JavaScript to solve real-world problems. I’m constantly learning new tools and improving my skills, whether it’s through projects, debugging challenges, or exploring better ways to design and optimize applications.
        </p>

        {/** Resume Button */}
        <a 
        href="" //Google Derive Link For Resume.
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
        style={{
          background: 'linear-gradient(90deg, #9333ea, #ec4899)',
        }}>
          
          DOWNLOAD CV 
        </a>
        </div>

        {/**right side content */}
        <div className="md:w-1/2 flex justify-center md:justify-end"> 

        <Tilt className="w-68 h-48 sm:w-64 md:w-[20rem] md:h-[20rem] border-4 border-black rounded-full"
         tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.05}
          gyroscope={true}>

          <img 
          src={ProfileImage} 
          alt="Amritansh Mishra"
          className=" w-full h-full rounded-full object-cover"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(252, 163, 17, 0.5))' }}
          />
        </Tilt>

        
        </div>
      </div>

    </section>
  );
};

export default About;