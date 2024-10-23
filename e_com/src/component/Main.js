
import { Link } from 'react-router-dom'


function Main() {
    
  return (
    <div>
      
<header>
  <nav className=' h-full flex  sm:justify-center leading-6 gap-5 '>
    <div className="">
      <div className="flex flex-wrap sm:flex-1 lg:flex-1 md:flex-1 justify-around h-full  items-center">
        <div className="flex flex-col  items-center space-x-8 p-7">
          
          <div className=" flex flex-wrap  md:flex justify-around space-x-4">
            <Link to='/' className="hover:text-indigo-600 text-gray-700">Home</Link>
            <Link to='/About' className="hover:text-indigo-600 text-gray-700">About</Link>
            <Link to='/Service' className="hover:text-indigo-600 text-gray-700">Service</Link>
            <Link to='/Blog' className="hover:text-indigo-600 text-gray-700">Blogs</Link>
          </div>
        </div>
        {/* <div className="flex flex-wrap space-x-4 justify-end items-center">
          
          {signIn ? <div className=' font-semibold flex '><h1 className='me-3 text-green-600 text-xl'>welcome {userFound[0].name}</h1><Link className="text-gray-800 text-sm border-red-200 mt-1" to='/signout'>LogOut </Link></div> : <div>
            <Link  to='/signin' className=" bg-slate-400  px-4 py-2 rounded text-white text-sm me-4">LOGIN</Link>
          <Link to='/signup' className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link></div>}
        </div> */}
      </div>
    </div>
  </nav>
  
</header>
    </div>
  )
}

export default Main
