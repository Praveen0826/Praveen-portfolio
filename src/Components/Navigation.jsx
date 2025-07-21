import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
   { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
 { name: 'My Works', href: '#mywork' },
  { name: 'Contact Us', href: '#contactus' },
];

  return (
    <>
      {/* Navbar */}
      <nav  className="bg-transparent backdrop-blur-lg border-b border-white/10 fixed w-full top-0 left-0 z-50 shadow-md">

        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#FF5C8A]">
            PK
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex  text-lg space-x-8 font-medium text-white">
            {navLinks.map((link) => (
  <li key={link.name}>
    <a href={link.href} className="hover:text-[#8240e8] transition">
      {link.name}
    </a>
  </li>
))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden text-white text-3xl">
            <button
              onClick={() => setIsOpen(true)}
              className="transition duration-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
     <div
  className={`fixed top-0 right-0 w-64 h-full bg-black/30 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-500 ease-in-out z-50 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
        <div className="p-6 relative h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>

          <h2 className="text-xl font-bold text-white mb-6 mt-2">Menu</h2>
          <ul className="space-y-6 font-medium text-white text-lg">
            {navLinks.map((link) => (
  <li key={link.name}>
    <a href={link.href}
    onClick={() => setIsOpen(false)} className="hover:text-[#8240e8] transition">
      {link.name}
    </a>
  </li>
))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
