import React from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import devAnimation from "../assets/developer skills.json";
import "../../src/orbit.css"; // orbit animation CSS

const Hero = () => {
  return (
    <section className="md:h-[100vh] md:mt-2 mt-30 bg-[#0d1117] text-white flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 px-6 md:px-20  md:pt-0  md:gap-32 overflow-hidden">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-purple-400">Praveenkumar</span>
        </h1>

        <div className="text-cyan-400 text-xl sm:text-2xl md:text-3xl mt-4">
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

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          MERN Stack Developer passionate about building interactive UIs and scalable backend systems.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
            Hire Me
          </button> */}
        </div>
      </div>

      {/* RIGHT SECTION - Animation */}
      <div className="w-full md:w-[500px] max-w-xs sm:max-w-md md:max-w-lg">
        <Lottie animationData={devAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
