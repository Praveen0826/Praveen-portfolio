import React from 'react'
import clientwebsite from '../assets/client.png'

function Clients() {
  return (
   <section className="py-10 bg-[#0d1117] text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" data-aos="zoom-in-up">My Work</h2>

    <div className="bg-[#111827] rounded-lg border border-purple-600 shadow-md p-6" data-aos="fade-up">
      <img src={clientwebsite} alt="Client Website" className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
      <p className="text-sm text-gray-300 mt-2">
        I designed and developed a modern personal portfolio website for a freelance client using html, Tailwind CSS, and Javascript. The site is fully responsive, fast-loading, and optimized for showcasing their work.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.drpk.in/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
        {/* <a href="https://github.com/yourgithub/project" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a> */}
      </div>
    </div>
  </div>
</section>

  )
}

export default Clients