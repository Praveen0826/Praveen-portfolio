import React from "react";
import Typewriter from "typewriter-effect";
import Lottie from 'lottie-react';
import devAnimation from '../assets/developer skills.json';

// ICON IMPORTS
// import reactIcon from "../assets/react.png";
// import jsIcon from "../assets/JavaScript.png";
// import nodeIcon from "../assets/Node.png";
// import tailwindIcon from "../assets/tailwindcss.png";
// import mongoIcon from "../assets/MongoDB.png";
// import vueIcon from "../assets/vue.png";
// import vuetifyIcon from "../assets/veutify.png";
// import postgresIcon from "../assets/PostgresSQL.png";
// import elixirIcon from "../assets/elixir.png";

import "../../src/orbit.css"; // orbit animation CSS

// ICON ARRAY
// const techStack = [
//   reactIcon,
//   jsIcon,
//   nodeIcon,
//   tailwindIcon,
//   mongoIcon,
//   vueIcon,
//   vuetifyIcon,
//   postgresIcon,
//   elixirIcon,
// ];

const Hero = () => {
  return (
    <section className="h-[100vh] bg-[#0d1117] text-white flex flex-col md:flex-row    px-12 gap-32 relative overflow-hidden md:pl-30" >
      
      {/* LEFT SIDE - Intro */}
      <div className=" w-[1/2] z-10 md:pt-64 pt-46">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-purple-400">Praveenkumar</span>
        </h1>
        <div className="text-cyan-400 md:text-3xl text-2xl mt-6">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Freelancer",
                "MERN Stack Developer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </div>
        <p className="text-gray-400 mt-5">
          MERN Stack Developer passionate about building interactive UIs and scalable backend systems.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
           Hire Me
        </button>
      </div>

     <div className="w-full md:w-[500px] pt-36">
  <Lottie animationData={devAnimation} loop={true} />
</div>

      {/* RIGHT SIDE - Orbiting Icons */}
      {/* <div className="orbit-container relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10">
        <div className="orbit-ring absolute inset-0 rounded-full border border-purple-500" />
        {techStack.map((icon, index) => (
          <div
            key={index}
            className={`orbit-item orbit-item-${index} absolute top-1/2 left-1/2`}
          >
            <img
              src={icon}
              alt={`tech-${index}`}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
        ))}
      </div> */}

      {/* BACKGROUND GLOW */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700 rounded-full blur-3xl opacity-20 z-0" /> */}
    </section>
  );
};

export default Hero;
