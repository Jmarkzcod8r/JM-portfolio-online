import React from 'react'
import Image from 'next/image'

const Page = () => {

  const logos = [
    'Githublogo.png', 'Reactlogo.png', 'Redis.png', 'HTMLlogo.png', 'CSSlogo.png',
    'Firebaselogo.png', 'django.png', 'Mongodblogo.png', 'nextjs.png', 'pythonlogo.png',
    'python-anywhere.png','JSlogo.png' ,'Reactbootstraplogo.png', 'Redis.png', 'selenium.png',
    'sqlite.png', 'Tailwindlogo.png', 'Vercel.png', 'Php.png', 'Typescript.png'
  ];

  const getLogoTooltip = (logoName: string) => {
    // Extract the name from the logo file name by removing 'logo' and the file extension
    return logoName.replace('logo', '').replace('.png', '').replace('.jpg', '');
  };

  return (
    <div className='bg-gradient-to-tr from-teal-500 to-sky-700 min-h-screen flex justify-around h-auto p-5'>

<div className='bg-gradient-to-tr from-green-600 to-lime-700 p-4 h-auto sm:max-h-[28em] w-auto sm:w-[30em] flex flex-wrap justify-around rounded-xl relative overflow-hidden shadow-2xl'>
  {logos.map((logo, index) => (
    <div key={index} className='m-2 relative' title={getLogoTooltip(logo)}>
      <Image src={`/Logos/${logo}`} alt='' width={60} height={60} className='ring-2 ring-sky-400 rounded-full hover:scale-[120%]' />
      {/* <div className='absolute inset-0 rounded-full bg-sky-400 blur-[10px] opacity-50'></div> */}
    </div>
  ))}
</div>

  </div>

  );
        }

export default Page;
