'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Typewriter from './components/title';
import Pic2 from '/2.jpg';
import Pic3 from './3.jpg';
import Pic4 from './4.jpg';


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
    <main className="flex flex-col ">

      <div className="bg-red-300 flex justify-center">
        <div className="relative bg-green-500">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 opacity-85 rounded-full p-4 hover:bg-pink-300 hover:opacity-75 hover:scale-110 transition duration-200"
            onClick={prevImage}
          >
            {'<'}
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 opacity-85 rounded-full p-4  hover:bg-pink-300 hover:opacity-75 hover:scale-110 transition duration-200"
            onClick={nextImage}
          >
            {'>'}
          </button>
          <Image
            className="mt-[3em] rounded-full"
            src={images[currentImageIndex]}
            alt=""
            width="400"
            height="400"
          />
        </div>

      </div>
      <Typewriter text = 'Hi! I`m Jay Mark Gutierrez. Full Stack Developer' delay = {200} />
    </main>
  );
}
