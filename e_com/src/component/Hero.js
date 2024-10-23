import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/1.jpg.jpg'


function Hero() {
  return (
    <section className=' bg-gray-300 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 mt-14' >
        
    <div className="container mx-auto flex justify-around h-full">
  
         <div className='flex flex-col justify-center flex-wrap h-full w-[50%]'>
             <div className=' font-semibold flex items-center uppercase ms-2'>
              <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
             </div>
             <h1 className='text-[5vh] leading-[1.1] font-light mb-4 uppercase'>Get the best deals on <br />
             <span className=' font-semibold '>all products</span>
             </h1>
             <Link to={"/"} className=' self-start uppercase font-semibold border-b-2 border-primary'>
                 Discover More
             </Link>
         </div>
         <div className='hidden lg:block'>
          <img src={img} alt="" className=' h-full rounded-xl' />
         </div>
    </div>
  </section>
    
    )}

export default Hero
