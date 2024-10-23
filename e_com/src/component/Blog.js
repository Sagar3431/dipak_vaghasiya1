import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../img/3.jpg.jpg'
import img4 from '../img/4.jpg.jpg'
import img5 from '../img/5.jpg.jpg'

function Blog() {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800 mt-28">
    <div className="p-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 py-12 mt-6">
            <Link className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" to={'/'}>
                <div className="relative overflow-hidden h-72">
                    <img className="object-cover w-full h-full transition-all hover:scale-110"
                        src={img3} alt=""/>
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                    <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                        alt=""/>
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="text-base leading-7 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </Link>
            <Link className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" to={'/'}>
                <div className="relative overflow-hidden h-72">
                    <img className="object-cover w-full h-full transition-all hover:scale-110"
                        src={img4} alt=""/>
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                    <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                        alt=""/>
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="text-base leading-7 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </Link>
            <Link className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" to={'/'}>
                <div className="relative overflow-hidden h-72">
                    <img className="object-cover w-full h-full transition-all hover:scale-110"
                        src={img5} alt=""/>
                </div>
                <div className="relative z-20 p-8 -mt-16 ">
                    <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                        alt=""/>
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        John Doe • 6th Jun, 2022
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="text-base leading-7 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </Link>
            
        </div>
    </div>
</section>
  )
}

export default Blog
