import React from 'react';

// Importing images from assets folder

// import html from '../assets/html.png';
// import css from '../assets/css.png';
import javascript from '../assets/JavaScript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwindcss.png';
import vue from '../assets/vue.png';
import vuetify from '../assets/veutify.png';
// import reactnative from '../assets/react.png';
import java from '../assets/java.png';
// import express from '../assets/Express.png';
import node from '../assets/Node.png';
import postgres from '../assets/PostgresSQL.png';
import mongodb from '../assets/MongoDB.png';
import firebase from '../assets/firebase.png';
import expressjs from '../assets/newex.png';
import git from '../assets/git.png';
import elixir from '../assets/elixir.png';
import vite from '../assets/vite.png';
import phoenix from '../assets/phoenix.png';
import python from '../assets/python.png';
import Mysql from '../assets/MYSQL.png';

const skills = [
//   { name: 'HTML', image: html },
//   { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'React', image: react },
  { name: 'Tailwind CSS', image: tailwind },
  { name: 'Vue', image: vue },
  { name: 'Vuetify', image: vuetify },
  { name: 'React Native', image: react },
  { name: 'Java', image: java },
//   { name: 'Express JS', image: express },
  { name: 'Node JS', image: node },
  { name: 'PostgreSQL', image: postgres },
  { name: 'MongoDB', image: mongodb },
  { name: 'Firebase', image: firebase },
  { name: 'Express JS', image: expressjs },
  { name: 'Git', image: git },
  { name: 'Elixir', image: elixir },
  { name: 'Vite', image: vite },
  { name: 'Phoenix', image: phoenix },
  { name: 'Python', image: python },
    { name: 'MySQL', image: Mysql },

];

const Skill = () => {
  return (
    <section className="py-24 bg-[#0d1117] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#FF5C8A]" data-aos="zoom-in-up">My Skills</h2>
        <p className='text-center text-3xl font-bold mb-10' data-aos="zoom-in">I Experience with this Technology</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-20 justify-items-center px-20 mt-20">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 group transition-transform hover:scale-105">
              <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
