import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext';
import { Link, useNavigate } from 'react-router-dom';
import { CardContext } from '../context/CardContext';
import CardIteam from './CardIteam';
import { control } from '../App';


function Sidebar() {
    const {isOpen,handleClose}= useContext(SidebarContext);
    const{cart,clearCart,total,itemAmount}=useContext(CardContext)
   const {signIn} = useContext(control)
   const checkout =useNavigate()

   const sagar=()=>{
    handleClose();
    if(!signIn)
    {
      checkout("/signin")
    }
    else{
      checkout("/CheckOut")
      
    }
   }
    
  return (
    <div className={`${
        isOpen ? 'right-0':'-right-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35wh] 
        xl:max-w-[90vh]  transition-all duration-300 z-20 px-4 lg:px-[35px] ;`
        }>
               <div className=' flex justify-between items-center py-6 border-b'>
                <div className=' uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
                <div onClick={handleClose} className=' cursor-pointer w-8 h-8 flex justify-center items-center'>
                <i className="fa fa-forward"></i>
                </div>
               </div>
               <div className='flex flex-col gap-y-2 h-[520px] lg:h-[350px] overflow-y-auto overflow-x-hidden border-b'>
               {cart.map(item=>{
              return <>
              <CardIteam item={item} key={item.id}/>
              
              </>

            })}
               </div>
               <div className=' flex flex-col  gap-y-3 py-4'>
                <div className=' flex w-full  justify-between items-center'>
                  <div className=' uppercase font-semibold'>Total Amount : <span>{parseFloat(total).toFixed(2)}</span></div>
                  <div onClick={()=>clearCart()} className=' cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><i className="fa-solid fa-trash"></i></div>
                </div>
                  <div >
                  <Link to={"/"} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View cart</Link>
                <button onClick={()=>sagar()} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium mt-3'>Cheakout</button>
                  </div>
               </div>
             </div>
  )
}

export default Sidebar
