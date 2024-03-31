'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/Screenshots/Overall2.png','/Screenshots/Leche-Plan.png', '/Screenshots/Sign-in.png', '/Screenshots/Upload-Photo.png'];
const Proj: React.FC<{ images: string[] ; src: string , logopics: string[], text: string, link: string}> = ({
    images = ['/Screenshots/Overall2.png','/Screenshots/Leche-Plan.png', '/Screenshots/Sign-in.png', '/Screenshots/Upload-Photo.png'] ,
    src = '/Screenshots/Canva-Phone.png',
    logopics = ['Github.png','Mongodblogo.png','Firebaselogo.png', 'nextjs.png', 'Tailwindlogo.png','Vercel.png' ] ,
    text = `This is a basic e-commerce website with authentication. You can easily upload photos whether thru phone or via website. Pictures are stored in Firebase and for data, I used MongoDB.` ,
    link = 'https://bit.ly/4aDTZ3X'
}) => {
        const [nophone, setnophone] = useState(false)
        const [nolink, setNolink] = useState(false)




        useEffect(() => {

            if (src==='') {
                setnophone(true)
            }
            if (link === '') {
                setNolink(true)
            }


        const divs = document.querySelectorAll('.floating-div') as NodeListOf<HTMLElement>;
        divs.forEach(div => {
            const xPos = Math.floor(Math.random() * (window.innerWidth - div.offsetWidth));
            const yPos = Math.floor(Math.random() * (window.innerHeight - div.offsetHeight));
            div.style.left = `${xPos}px`;
            div.style.top = `${yPos}px`;
        });

        setInterval(() => {
            divs.forEach(div => {
                const deltaX = Math.random() * 10 - 5;
                const deltaY = Math.random() * 10 - 5;
                const rect = div.getBoundingClientRect();
                const newX = rect.left + deltaX;
                const newY = rect.top + deltaY;
                div.style.left = `${newX}px`;
                div.style.top = `${newY}px`;
            });
        }, 1000);
    }, [src, link]);


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // const logos = ['Github.png','Mongodblogo.png','Firebaselogo.png', 'nextjs.png', 'Tailwindlogo.png','Vercel.png' ]
    return (
        <section className=' flex justify-around items-center sm:p-3 relative'>
            <div className='floating-div p-3 grid grid-flow-row md:grid-flow-col bg-violet-300 max-w-[70em] shadow-2xl rounded-md'>
            <div className='bg-red-100 text-sm sm:text-lg relative items-center justify-center p-2'>
                    <p className='pr-8'>{text}</p>
                   {!nolink ? <p className=''>Link: <Link href={link} className="text-sky-800">{link}</Link></p> : ''  }
                    <div className='flex flex-row justify-around py-2 mt-3'>
                    {logopics.map((logopic, index) => (
                            <Image title={`${logopic}`} key={index} alt=''  src={`/Logos/${logopic}`} width={ 20} height={20} className="sm:w-[2em] sm:h-[2em]" />
                        ))}

                    </div>
                </div>

                <div className='bg-gray-300 items-center flex-row flex sm:max-w-[18.5em] text-sm sm:text-lg relative  justify-around'>
                {!nophone ?
                    <div className='flex items-center'>
                    <Image alt='' width={100} height={100}
                        src={src}
                    />

                </div>
                        : ''}

                    <div className='p-2'>
                     <button className='absolute  top-1/2 transform -translate-y-1/2 bg-gray-300 opacity-80 hover:opacity-100 hover:bg-red-300 rounded-full p-2' onClick={handlePrevImage}>
                    &lt;
                    </button>
                    <div className='bg-purple-300 rounded-md flex items-center justify-center p-2'>


                        <Image src={images[currentImageIndex]} width={200} height={200} alt='' />
                    </div>
                    <button className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 opacity-80 hover:opacity-100 hover:bg-red-300 rounded-full p-2' onClick={handleNextImage}>
                    &gt;
                    </button>
                    </div>

                </div>


            </div>


        </section>
    );
};

export default Proj;