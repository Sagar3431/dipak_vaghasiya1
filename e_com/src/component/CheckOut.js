import React, { useContext, useState } from 'react'
import { CardContext } from '../context/CardContext'
import { useNavigate } from 'react-router-dom';





function CheckOut() {
    const{cart,total,itemAmount,removeFromCart,gst,increment,decrement}=useContext(CardContext);
    const order=useNavigate()

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAdsress]=useState("");
    const [city,setCity]=useState("");
  
    const dipak=()=>{

        setTimeout(() => {
            order('/')
            alert("Order Placed")
        }, 1000);
    }
   

  return (
    
    <div className='flex flex-col justify-center items-center'>
           <div className="mt-28 p-5">
            <h1 className="flex items-center justify-center  font-bold text-blue-600 text-md lg:text-3xl">
                
                Checkout Page 
            </h1>
        </div>
        <div className="container border-2 border-black py-2 mb-4  mx-auto">
            <div className="px-5 py-5 justify-evenly items-center w-full  mx-auto md:flex-row">
                <div className="flex flex-col md:w-full ">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" method="post" action>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input value={fname} onChange={(e)=>{setFname(e.target.value)}} name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input value={lname} onChange={(e)=>{setLname(e.target.value)}} name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea value={address} onChange={(e)=>{setAdsress(e.target.value)}}
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            {/* <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div> */}
                        </div>
                    </form>
                </div>
                <div className="flex flex-col  ml-0 lg:ml-12 lg:w-2/5">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold">Order Summary
                        </h2>
                        <div className='p-1 border-2 w-[300px] flex flex-col font-semibold'>
                            Billing Address : <br />
                          Name :  {fname + " " +lname} <br />
                          Email : {email} <br />
                          City : {city} <br />
                          address : {address}
                        </div>
                        <div className="mt-8  ">
                            <div className="flex flex-col  space-y-4">
                                {  
                                   cart.map(item=>(
                                    <div className="flex flex-wrap justify-center items-center space-x-12  ">
                                    <div >
                                        <img src={item.images[0]}  alt=''
                                            className="w-[100px] h-[100px]"/>
                                    </div>
                                    <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                                      <div onClick={()=>decrement(item.id)} className='flex-1 flex justify-center items-center cursor-pointer'><i className="fa-solid fa-minus"></i></div>
                                      <div className='h-full flex justify-center items-center px-2'>{item.amount}</div>
                                      <div onClick={()=>increment(item.id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><i className="fa-solid fa-plus"></i></div>
                                    </div>
                                    <div >
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <p className="text-sm">{item.category}</p>
                                        <span className="text-red-600">Price</span> $:{item.price}
                                    </div>
                                    <div onClick={()=>removeFromCart(item.id)} className=' cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                   )) 
                                }
                              
                            </div>
                        </div>
                        <div className="flex p-4 mt-4">
                            <h2 className="text-xl font-bold">ITEMS {itemAmount}</h2>
                        </div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2">$ : {total}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2">$ : {parseFloat(gst).toFixed(2)}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">$ : {parseFloat(total + gst).toFixed(2)}</span></div>

                           
                    </div>
                </div>

                <div className="mt-11 mx-5 w-full  rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div className="w-full p-3 border-b border-gray-200">
                            <div className="mb-5">
                                <label  className="flex items-center cursor-pointer">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                    
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" alt=''/>
                                </label>
                            </div>
                            
                            <div>
                                <div className="mb-3">
                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                    <div>
                                        <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                    <div>
                                        <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                                    </div>
                                </div>
                                <div className="mb-3 -mx-2 flex items-end">
                                    <div className="px-2 w-1/4">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                        <div>
                                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                <option value="01">01 - January</option>
                                                <option value="02">02 - February</option>
                                                <option value="03">03 - March</option>
                                                <option value="04">04 - April</option>
                                                <option value="05">05 - May</option>
                                                <option value="06">06 - June</option>
                                                <option value="07">07 - July</option>
                                                <option value="08">08 - August</option>
                                                <option value="09">09 - September</option>
                                                <option value="10">10 - October</option>
                                                <option value="11">11 - November</option>
                                                <option value="12">12 - December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="px-2 w-1/4">
                                        <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                    <div className="px-2 w-1/4">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                        <div>
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3">
                            <label  className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" alt=''/>
                            </label>
                        </div>
                        <div className="mb-5 flex justify-start p-2 gap-3">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                <label  className="flex items-center cursor-pointer"> Cash On Delevery : $ {parseFloat(total + gst).toFixed(2)}</label>
                        </div>

                       
                    </div>
                    <div className="mt-4  mx-11 w-full">
                                <button  onClick={()=>{dipak()}} 
                                    className="w-[200px] px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">place the order </button>
                            </div>

                           
                
            </div>
        </div>
      
    </div>
  )
}

export default CheckOut
