import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );

    tl.fromTo(logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "back.out(1.7)" },
      "-=0.5"
    );

    tl.fromTo(".nav-link",
      { x: -70, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  return (

    <nav ref={navRef} className="w-full fixed top-0 z-50  p-4 shadow-md bg-blur backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="text-2xl font-bold tracking-tight">
          <span className="text-red-600 ">Thirtysix</span>
          <span className="text-white">studio</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition ease-in-out duration-300"
        >
          {isMobileMenuOpen ? (
            <TfiClose className="w-6 h-6" />
          ) : (
            <TfiAlignJustify className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Links */}
        <div ref={linksRef} className="hidden lg:flex items-center space-x-8 text-lg">
          {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="nav-link group relative text-white  transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300 transform origin-left"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Links */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden absolute top-16 left-0 w-full bg-black h-[100vh] backdrop-blur-md shadow-lg p-6 space-y-6  transition-all ease-in-out duration-500 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="block text-white font-semibold text-xl hover:text-red-600 transition duration-300"
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