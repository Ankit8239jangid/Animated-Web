import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Initial animation timeline
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
      }
    );

    tl.fromTo(logoRef.current,
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );

    tl.fromTo(".nav-link",
      {
        x: -70,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  return (
    <nav ref={navRef} className="w-full z-50 bg-opacity-60 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="text-2xl font-semibold">
          <span className="text-indigo-600">Thirtysix</span>studio
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 hover:text-indigo-600 focus:outline-none transition ease-in-out duration-300"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <div ref={linksRef} className="hidden lg:flex space-x-8 text-lg">
          {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="nav-link group relative transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300 transform origin-left"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`lg:hidden fixed top-16 left-0 rounded-xl w-full h-screen bg-white text-center p-8 space-y-6 transition-all ease-in-out duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="block text-zinc-900 font-semibold text-2xl transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
