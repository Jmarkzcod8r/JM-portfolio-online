import React from 'react'
import Image from 'next/image'

const Page = () => {

  const logos = ['Githublogo.png', 'Reactlogo.png', 'Redis.png']; // Replace with your actual logos

  return (
    <div className='bg-gradient-to-tr from-teal-500 to-sky-700 min-h-screen grid justify-items-center pt-5'>
      <div className='w-[15em] xl:w-[30em] bg-sky-300 h-[4em] grid grid-cols-3 gap-2 justify-items-center'>
        {logos.map((logo, index) => (
          <Image src={`/Logos/${logo}`} key={index} alt='' width={40} height={40} className='m-2'/>
        ))}
      </div>
    </div>
  )
}

export default Page;
