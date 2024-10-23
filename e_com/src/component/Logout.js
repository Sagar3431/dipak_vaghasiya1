import { useContext } from "react"

import { useNavigate } from "react-router-dom"
import { control } from "../App"

const SignOut = () => {
    const nav = useNavigate()
    const { userFound, setSignIn } = useContext(control)
    const clickHandler = () => {
        setSignIn(false)
        nav('/')
    }
    return (
        
        <section className="container h-screen flex items-center justify-center">
            
            <div className="w-full h-fit flex flex-col items-center justify-center">
                
                <h3 className="mb-10 text-4xl font-medium">Sign Out</h3>
                <br />
               

               
                <div className="w-11/12 h-10 mb-5 text-center text-3xl font-medium md:w-1/4">Welcome, <span className="text-red-600 ">{userFound[0].name}</span></div>
                <button className="w-[400px] h-10 mb-4 mt-10 rounded-full font-medium bg-black text-white md:w-1/4" onClick={clickHandler}>SignOut</button>
            </div>
        </section>
    )
}

export default SignOut
