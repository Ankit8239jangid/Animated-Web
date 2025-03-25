import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mx-auto max-w-md text-center">
          <strong className="block text-xl font-bold sm:text-2xl md:text-3xl ">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-3 sm:p-4 text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Section */}
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center  lg:text-left text-sm sm:text-base lg:text-lg leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
              aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {[
                { name: 'Facebook', icon: <FaFacebookF />, href: '#' },
                { name: 'Instagram', icon: <FaInstagram />, href: '#' },
                { name: 'Twitter', icon: <FaTwitter />, href: '#' },
                { name: 'GitHub', icon: <FaGithub />, href: '#' },
                { name: 'Dribbble', icon: <FaDribbble />, href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:text-blue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-3 gap-8 text- lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-semibold ">Services</strong>
              <ul className="mt-4 space-y-2 ">
                {['Marketing', 'Graphic Design', 'App Development', 'Web Development'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-semibold ">About</strong>
              <ul className="mt-4 space-y-2 ">
                {['About', 'Careers', 'History', 'Our Team'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-semibold ">Support</strong>
              <ul className="mt-4 space-y-2 ">
                {['FAQs', 'Contact', 'Live Chat'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-xs  sm:text-sm leading-relaxed">
            © Company 2025. All rights reserved.
            <br />
            Created by{' '}
            <a href="#" className="underline hover:text-blue-600 transition-colors duration-200">
              Ankit
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-blue-600 transition-colors duration-200">
              Ankit Jangid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;