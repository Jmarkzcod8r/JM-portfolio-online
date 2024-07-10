'use client'

import React from 'react'
import Proj from './proj'

const page = () => {
  return (
    <div className='bg-gradient-to-tr from-teal-500 to-sky-700 min-h-screen flex flex-col'>
        <div className=' relative '>
      <Proj
       images = {['/Screenshots/Overall2.png','/Screenshots/Leche-Plan.png', '/Screenshots/Sign-in.png', '/Screenshots/Upload-Photo.png']}
       src = {'/Screenshots/Canva-Phone.png'}
       logopics = {['Github.png','Mongodblogo.png','Firebaselogo.png', 'Typescript.png','nextjs.png', 'Tailwindlogo.png','Vercel.png' ] }
       text = {`This is a basic e-commerce website with authentication. You can easily upload photos whether thru phone or via website. Pictures are stored in Firebase and for data, I used MongoDB for the database. You can make stores and add products to it with details such as name, price, description, count in stock etc.`}
      //  link = {'https://bit.ly/4aDTZ3X'}
      link = {'https://next-amazona-basic.vercel.app/'}

      />
      </div>
      <div className=' relative'>
       <Proj
       images = {['/Screenshots/Data-Profiling.png','/Screenshots/User.png', '/Screenshots/Data-Profiling2.png', '/Screenshots/Register.png']}
       src = {'/Screenshots/Canva-delsa-phone.png'}
       logopics = {['Github.png','Mongodblogo.png','Firebaselogo.png', 'nextjs.png', 'Tailwindlogo.png','Vercel.png' ] }
       text = {`This is a web app I made for a friend of mine to assist her for her thesis. The purpose of this project is to  gather data from people in a certain city or community just like a survey.`}
       link = {'https://bit.ly/3PFU92o'}
      />
      </div>
      <div className=' relative'>
       <Proj
       images = {['/Screenshots/devjourn3.png','/Screenshots/devjourn4.png', '/Screenshots/devjourn2.png', '/Screenshots/devjourn.png']}
       src = {'/Screenshots/phone-devjourn2.png'}
       logopics = {['Redis.png','Github.png','Mongodblogo.png','Firebaselogo.png', 'nextjs.png', 'Tailwindlogo.png','Vercel.png' ] }
       text = {`This is a journal web app I personally use as a way to store details on some days. It consists of a list mapped out on the left side so that easy access on previous days is available. There are also some secondary textboxes on the right for comments and notes.
                 A search functionality is located on top to search for entries containing the search query. REDIS was used for the search in able to speed up the reult. Also, google authentication has been integrated as I made it the only way to sign up for now as I think It's more secure.      `}
       link = {'https://www.devjourn.com'}
      />
      </div>

      <div className=' relative'>
       <Proj
       images = {['/Screenshots/JMlinen-web2.png','/Screenshots/web-JMlinen2.png']}
       src = {'/Screenshots/phone-JMlinen.png'}
       logopics = {['Github.png','Mongodblogo.png', 'nextjs.png', 'Tailwindlogo.png','Vercel.png' ] }
       text = {`This web app is meant for those in the clothing industry. More often, someone wants to send the dimensions of T-shirt he wants ot be made to a certain tailoring store
                and this tool can help easily send those information. A link is provided for the client as a means to share his newly set shirt design. A search functionality is also available to
                  easily retrieve the entry from the database.     `}
       link = {'https://jmlinen-tau.vercel.app/'}
      />
      </div>
      <div className=' relative'>
       <Proj
       images = {['/Screenshots/Django-web.png']}
       src = {''}
       logopics = {['django.png','Github.png','sqlite.png', 'python-anywhere.png' ] }
       text = {`This is a Django web app that lets you upload photos and views it as well. The photos are stores as static files and retrieved accordingly. Each photo is stored as an object with title, description and tags. Options to delete all or a single item is available. It's hosted at pythonanywhere.com               `}
       link = {'https://bit.ly/49jtvDI'}
      />
      </div>
      <div className=' relative'>
       <Proj
       images = {['/Screenshots/2D.png']}
       src = {''}
       logopics = {['django.png','Github.png','sqlite.png' ] }
       text = {`This is a simple 2D html game. A snowman character can be controlled with A,S,W and D. The goal is to simply get to the home without being touch by the falling suns. HTML and CSS were the only ones needed.      `}
       link = {'https://bit.ly/3IX4Z0a'}
      />
      </div>

      <div className=' relative'>
       <Proj
       images = {['/Screenshots/Red-Bubble.png']}
       src = {''}
       logopics = {['pythonlogo.png','Github.png','selenium.png'] }
       text = {`This is a red bubble design uploader. It uses selenium to automate the manual task of uploading designs to the print on demand site - 'redbubble.com'. This has been proven helpful to reduce the time needed to put up your output into your shop. A typical 3 hours worth of basic inputs of your art, title, tags and description on each of your item would be reduced to forty-five minutes estimate.  `}
       link = {''}
      />
      </div>

      <div className=' relative'>
       <Proj
       images = {['/Screenshots/Bible-quiz.png']}
       src = {''}
       logopics = {['Github.png','Firebaselogo.png','CSSlogo.png' ,'Reactlogo.png' ] }
       text = {`This is a simple react app I made back in the day with firebase and react. The purpose of this project is to test how much one knows about the bible as it has 100 questions as a challenge.       `}
       link = {''}
      />
      </div>
    </div>
  )
}

export default page
