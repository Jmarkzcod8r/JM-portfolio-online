import React from 'react';

const Page = () => {
  return (
    <div className='bg-gradient-to-tr from-teal-500 to-sky-700 min-h-screen flex justify-around p-5'>

      <div className='ring-2 ring-gray-500 bg-gradient-to-br from-sky-900 to-purple-900 p-4 sm:max-h-[28em]    w-auto sm:w-[32em] sm:flex justify-around rounded-xl relative overflow-hidden shadow-2xl'>
          <div className='h-auto block '>   {/* making this outward extra container of div isolates it from the flex parent property */}
          <div className='bg-red-400 m-5 rounded-md p-2' style={{ fontFamily: 'Arial, sans-serif' }}>
          Company:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;  Uvocorp.com <br/>
            Position:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; Freelance Writer for Programming Students specifically &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; located in the US<br/>
        Duration:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; March 2023 - October 2023
        </div>
        {/* </div>
        <div>  */}
            {/* making this outward extra container of div isolates it from the flex parent property */}
          <div className='bg-red-400 m-5 rounded-md p-2' style={{ fontFamily: 'Arial, sans-serif' }}>
          Company:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;  Sarangani Energy Corporation <br/>
            Position:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; Plant Operator incharge of maintaining functional operation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for coal-powered plant <br/>
        Duration:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; April 2016 - Present

        </div>


        </div>

      </div>

  </div>

  );
}

export default Page;
