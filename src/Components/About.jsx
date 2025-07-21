import React, { useEffect } from 'react';
import profile from '../assets/profileimage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='about' className="w-full flex flex-wrap bg-[#0d1117] py-16 px-4 md:px-12">
      {/* LEFT - IMAGE */}
      <div
        className="w-full md:w-[40%] flex justify-center items-center relative"
        data-aos="zoom-in"
      >
        <div className="relative z-10">
          <img
            src={profile}
            alt="About Me"
            className="w-[300px] md:w-[400px] md:h-[500px] h-[400px] rounded-xl  shadow-lg transition-transform hover:scale-105"
          />
        </div>

        {/* Glowing Background Ring */}
        <div className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[520px] bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl rounded-xl opacity-20 z-0"></div>
      </div>

      {/* RIGHT - TEXT */}
      <div
        className="w-full md:w-[60%] md:pl-10 pt-10 md:pt-0 text-white"
        
      >
        <h1 className="text-center mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#FF5C8A]">
          About Me
        </h1>
        <p className="text-gray-300 py-4 md:text-xl text-base text-justify" data-aos="zoom-in">
          Hello! I'm Praveenkumar, a passionate front-end developer with over a year of experience
          specializing in modern web technologies like React and Tailwind CSS. My journey in web development
          has been fueled by a deep interest in creating visually appealing and highly functional user interfaces.
          I take pride in crafting innovative web pages that not only meet client expectations but also push the
          boundaries of creativity and usability.
        </p>
        <p className="text-gray-300 md:text-xl text-base pb-4 text-justify" data-aos="zoom-in">
          Throughout my career, I’ve consistently received positive feedback for my work, which drives me to continually
          improve and expand my skill set. I am committed to staying updated with the latest trends in front-end development
          and am always eager to learn and implement new techniques that enhance the user experience.
        </p>
        <p className="text-gray-300 md:text-xl text-base text-justify" data-aos="zoom-in">
          I bring over <span className="text-purple-400 font-semibold">3 years</span> of professional experience in web development.
        </p>
      </div>
    </div>
  );
}

export default About;
