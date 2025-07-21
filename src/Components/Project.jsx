import customerchatbot from '../assets/customerai.jpg';
import pkgames from '../assets/pkgames.png';
import aichatbot from '../assets/aichatbot.png';
import stickypass from '../assets/Stickypass.jpg';

function Project() {
  const projects = [
    {
      title: 'Ai Chatbot',
      image: aichatbot,
      subtitle: 'AI-powered chatbot built with Gemini API for natural, human-like conversations.Delivers smart, real-time responses for enhanced user engagement.',
      link: 'https://ai-chatbot-g-api.vercel.app/',
    },
    {
      title: 'StickPass',
      image: stickypass,
      subtitle: 'A secure password manager to store and manage your credentials. Built for easy access and strong encryption.',
      link: 'https://github.com/Praveen0826/StickPass',
    },
    {
      title: 'Customer Support Chatbot',
      image: customerchatbot,
      subtitle: 'Customer-focused chatbot with support-oriented features.',
      link: 'https://customer-support-chatbot-fu72.onrender.com'  
    },
    {
      title: 'PK Games',
      image: pkgames,
      subtitle: 'Engaging web-based gaming platform offering fun and interactive experiences.',
      link: 'https://pkgaming.netlify.app/',
    },
  ];

  return (
    <section className="py-12 bg-[#0d1117] text-white">
      <h1 className="text-center text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#FF5C8A]" data-aos="zoom-in-up">
        Projects
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center md:text-3xl text-xl font-bold mb-10" data-aos="zoom-in-up">
          Every line of code tells a story — here are a few of mine.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0d1117] border border-indigo-500 rounded-lg overflow-hidden shadow-lg transition-all md:w-[500px] mt-10 hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full md:h-58 h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
