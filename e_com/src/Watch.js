import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';
import { Link } from 'react-router-dom';

function Watch() {
  const { watchList, removeFromWatchList, addToCart } = useContext(CardContext);

  return (
    <div className='mt-28 p-4 sm:p-10 lg:p-20'>
      <h1 className='text-4xl sm:text-5xl flex flex-wrap justify-center items-center font-extrabold uppercase underline'>Watch List</h1>
      <div className='flex flex-col justify-center p-4 sm:p-10 lg:p-20 w-full gap-y-2 h-[520px] lg:h-full  overflow-y-auto overflow-x-hidden border-b '>
        {watchList.length === 0 ? (
          <p className="text-center text-gray-500">Your watch list is empty.</p>
        ) : (
          watchList.map((item) => (
            <div key={item.id} className="flex flex-wrap sm:space-x-12 w-full justify-between border-b-8 ">
              <div className='flex justify-center sm:ms-10 items-center h-[150px] sm:w-[200px]'>
                <img src={item.images[0]} alt='' className="w-[120px] sm:w-full h-[100px]" />
              </div>
              <div className='flex flex-col justify-center items-center h-[150px] sm:w-[300px]'>
                <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
                <p className="text-sm">{item.category}</p>
                <p className="text-sm">Discount $: {item.discountPercentage}</p>
                <span className="text-red-600">Price</span> $:{item.price}
              </div>
              <div onClick={() => removeFromWatchList(item.id)} className='cursor-pointer flex justify-center items-center h-[150px]'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div  className='flex justify-center items-center sm:w-[200px]'>
                <button onClick={() => {addToCart(item, item.id);removeFromWatchList(item.id)}} className='bg-gray-200 flex p-2 sm:p-4 justify-center items-center text-primary w-full font-medium'>
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='flex flex-col gap-y-3 py-4 sm:flex-row'>
        <div>
          <Link to={"/"} className='bg-gray-200 flex p-2 sm:p-4 justify-center items-center text-primary w-full font-medium'>
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Watch;
