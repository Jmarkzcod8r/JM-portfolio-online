'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-600 flex justify-between items-center p-3">
      <div className=" items-center gap-10 hidden sm:flex p-2 ml-2">
        <Link href="/" className='hover:scale-[120%]'>
          <span className="bg-cyan-600 rounded-md p-2 cursor-pointer">Home</span>
        </Link>
        <Link href="/projects" className='hover:scale-[120%]'>
          <span className="bg-cyan-600 rounded-md p-2 cursor-pointer">Projects</span>
        </Link>
        <Link href="/skills" className='hover:scale-[120%]'>
          <span className="bg-cyan-600 rounded-md p-2 cursor-pointer">Skills</span>
        </Link>
        <Link href="/experience" className='hover:scale-[120%]'>
          <span className="bg-cyan-600 rounded-md p-2 cursor-pointer">Experience</span>
        </Link>
        <Link href="/connect" className='hover:scale-[120%]'>
          <span className="bg-cyan-600 rounded-md p-2 cursor-pointer">Connect</span>
        </Link>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 bg-slate-600 w-[50%] p-4 z-20 ml-2">
          <Link href="/">
            <span className="block text-white p-2 cursor-pointer">Home</span>
          </Link>
          <Link href="/projects">
            <span className="block text-white p-2 cursor-pointer">Projects</span>
          </Link>
          <Link href="/skills">
            <span className="block text-white p-2 cursor-pointer">Skills</span>
          </Link>
          <Link href="/experience">
            <span className="block text-white p-2 cursor-pointer">Experience</span>
          </Link>
          <Link href="/connect">
            <span className="block text-white p-2 cursor-pointer">Connect</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;