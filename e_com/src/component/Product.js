import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../context/CardContext'



function Product({product}) {
    const{id,category,images,discountPercentage,price,title}=product
    const {addToCart,addToWatchList,watchList,removeFromWatchList}=useContext(CardContext)

    const isItemInWatchList = watchList.some((item) => item.id === id);
     
    const handleAddToWatchList = () => {
      if (isItemInWatchList) {
        removeFromWatchList(id);
      } else {
        addToWatchList(product, id);
      }
    };

    
    // const handleLinkClick = () => {
    //   // Scroll to the top of the page
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // };
    
   
    
  return (
     
    <div className='mt-10' >
          
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
          <div className='w-full h-full flex justify-center items-center'>
            <Link to={`/product/${id}`} className='w-[200px] mx-auto flex justify-center items-center'>
              <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={images[0]} alt="" />
            </Link>
          </div>
          <div className='  absolute top-2 right-0 group-hover:right-2 p-1 flex flex-col items-center justify-center gap-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={()=>addToCart(product,id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <i className="fa fa-plus text-3xl"></i> 
            </div>
            </button>
            <Link  className='w-12 h-12 flex justify-center items-center bg-white text-primary drop-shadow-xl' to={`/product/${id} `}>
            <i className="fa fa-eye"></i>

            </Link>
            
            <button  onClick={handleAddToWatchList} className={`w-12 h-12 flex justify-center items-center bg-white text-${isItemInWatchList ? 'red' : 'primary'} drop-shadow-xl`}>
            <i className={`fa-solid fa-heart${isItemInWatchList ? ' text-red-500' : ''}`}></i>

            </button>
            
          </div>
        </div>
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>
            {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className=' font-semibold mb-1'>{title}</h2>
          </Link>
          <div className=' font-semibold'>
            Discount: {discountPercentage}
          </div>
          <div className=' font-semibold'>
            $ {price}
          </div>
        </div>
    </div>
  )
}

export default Product
