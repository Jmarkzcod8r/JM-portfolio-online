'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Typewriter from './components/title';
import Pic2 from '/2.jpg';
import Pic3 from './3.jpg';
import Pic4 from './4.jpg';
import Link from 'next/link';


export default function Home() {
  const images = ['/Me.jpg','/3.jpg','/2.jpg',  '/6.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="bg-gradient-to-tr from-teal-500 to-sky-700 flex flex-col min-h-screen ">

      <div className=" flex justify-center">
        <div className="relative  ">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white opacity-60 rounded-full p-4 hover:bg-sky-300 hover:opacity-75 hover:scale-110 transition duration-200"
            onClick={prevImage}
          >
            {'<'}
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-white opacity-60 rounded-full p-4  hover:bg-sky-300 hover:opacity-75 hover:scale-110 transition duration-200"
            onClick={nextImage}
          >
            {'>'}
          </button>
          <Image
            className="mt-[3em] rounded-full ring-2 ring-orange-400"
            src={images[currentImageIndex]}
            alt=""
            width="400"
            height="400"
          />
        </div>

      </div>
      <Typewriter text = 'Hi! I`m Jay Mark Gutierrez' initialDelay = {180} />
      <h2 className="text-3xl font-bold text-center mt-8 font-serif">Full Stack Developer</h2>
      <div className='flex justify-center p-5'>
        <Link href={'https://github.com/Jmarkzcod8r'} className='p-6 hover:scale-125' target="_blank">
          <Image alt='' src='/Logos/Githublogo.png' width={40} height={40} />
        </Link>
        <Link href={'https://bit.ly/3VAtMPm'} className='p-6 hover:scale-125' target="_blank">
          <Image alt='' src='/Logos/resume.png' width={40} height={40} />
        </Link>

      </div>

    </main>
  );
}
