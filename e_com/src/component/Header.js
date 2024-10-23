import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { Link,  useParams } from 'react-router-dom'
import { CardContext } from '../context/CardContext'
import Main from './Main'
import { control } from '../App'

function Header() {
    const {isOpen,setIsOpen}=useContext(SidebarContext)
    const[isActive,setIsActive]=useState(false)
    const {itemAmount,witemAmount}=useContext(CardContext)
    const {id}=useParams()
    const { signIn,userFound } = useContext(control)
    
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          window.scrollY>60?setIsActive(true):setIsActive(false)
        })
      })


      

  return (
    <header className={`${isActive?"bg-gray-400 top-0":" bg-gray-300"} fixed  w-full z-10 transition-all p-4 flex flex-wrap justify-center `}>
    <div className=' container mx-auto flex  items-center justify-between h-full   flex-wrap  '>
   <Link to={"/"}>
     <div className=' font-semibold text-3xl flex flex-wrap sm:justify-center'>
      E-Commerce
     </div>
   </Link>
   
 
   <div className=' flex flex-wrap justify-start'>
   <Main/>
   </div>
   
   <div className='flex justify-end items-center'>
   <div className="flex flex-wrap space-x-4 justify-start items-center">
          
          {signIn ? <div className=' font-semibold flex  '><h1 className='me-3 text-green-600 text-xl'>welcome {userFound[0].name}</h1><Link className="text-gray-800 text-sm border-red-200 mt-1" to='/signout'>LogOut </Link></div> : <div>
            <Link  to='/signin' className=" bg-slate-400  px-4 py-2 rounded text-white text-sm me-4">LOGIN</Link>
          <Link to='/signup' className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link></div>}
        </div>
   <Link to={`/watch/${id}`}  className='w-[100px] cursor-pointer flex relative justify-around me-0 '>
    <button  className='mt-2'>
    <i className="fa-solid fa-heart"></i>
    <div className='bg-red-500 absolute right-10 top-6 text-[12px] w-[18px] h-[18px]  text-white rounded-full flex justify-center items-center'>{witemAmount}</div>
    
    </button>
    </Link>

    
     
    <div  className='w-[100px] cursor-pointer flex relative justify-around '>
    
   
    
    <div onClick={()=>{setIsOpen(!isOpen)}} className='me-28'>
      
    <i className="fa-solid fa-bag-shopping "></i>
    <div className='bg-red-500 absolute right-13 top-5 text-[12px] w-[18px] h-[18px]  text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>

    
    </div>
   </div>

   

    

   
    </div>
  </header>
  )
}

export default Header
