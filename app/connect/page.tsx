import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='bg-gradient-to-tr from-teal-500 to-sky-700 min-h-screen flex justify-around p-5'>

      <div className='ring-2 ring-gray-500 bg-gradient-to-br from-sky-900 to-purple-900 p-4 sm:max-h-[28em] max-h-[10em] min-h-[30em]  w-[15em] sm:w-[32em] gap-10 flex flex-wrap justify-around rounded-xl relative overflow-hidden shadow-2xl'>

      <div className=''> {/* making this outward extra container of div isolates it from the flex parent property */}
  <div className='bg-red-400 m-1 rounded-md p-2 inline-block hover:scale-[110%]' style={{ fontFamily: 'Arial, sans-serif' }}>
    <div className='inline-block'>
      <Image alt='' src={'/Logos/Gmail.png'} width={50} height={40} className='inline-block' />
    </div>
    <div className='hidden sm:inline-block p-2 text-xs sm:text-base'>Email: jmgutierrez122091@gmail.com</div>
  </div>
</div>


<div className=''> {/* making this outward extra container of div isolates it from the flex parent property */}
  <div className='bg-red-400 m-1 rounded-md p-2 flex flex-row hover:scale-[110%]' style={{ fontFamily: 'Arial, sans-serif' }}>
    <Link className='flex flex-row' href={'https://www.facebook.com/jaymark.gutierrez.5/'}>
      <Image alt='' src={'/Logos/facebookicon.png'} width={40} height={40} />
      <div className='hidden sm:inline-block p-2 text-xs sm:text-base'>https://www.facebook.com/jaymark.gutierrez.5/</div>
    </Link>
  </div>
</div>

<div className=''> {/* making this outward extra container of div isolates it from the flex parent property */}
  <div className='bg-red-400 m-1 rounded-md p-2 flex flex-row hover:scale-[110%]' style={{ fontFamily: 'Arial, sans-serif' }}>
    <Link className='flex flex-row' href={'https://www.instagram.com/jmarkz_008/'}>
      <Image alt='' src={'/Logos/Instagram.png'} width={40} height={40} />
      <div className='hidden sm:inline-block p-2 text-xs sm:text-base'>https://www.instagram.com/jmarkz_008/</div>
    </Link>
  </div>
</div>

<div className=''> {/* making this outward extra container of div isolates it from the flex parent property */}
  <div className='bg-red-400 m-1 rounded-md p-2 flex flex-row hover:scale-[110%]' style={{ fontFamily: 'Arial, sans-serif' }}>
    <Image alt='' src={'/Logos/phone-call.png'} width={40} height={40} />
    <div className='hidden sm:inline-block p-2 text-xs sm:text-base'>(+63) 9461789442</div>
  </div>
</div>




      </div>

  </div>

  );
}

export default Page;
