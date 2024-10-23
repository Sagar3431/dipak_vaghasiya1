import { Link, useNavigate } from "react-router-dom"

import { useContext, useRef, useState } from "react";
import { control } from "../App";

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { userData } = useContext(control)
  console.log(userData)
  const nav = useNavigate()
  const div = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      document.querySelectorAll('input')[0].style.borderColor = 'red'
      document.querySelectorAll('input')[1].style.borderColor = 'red'
      document.querySelectorAll('input')[2].style.borderColor = 'red'
    }
    else {
      const alreadyExist = userData.filter((data) => { return data.email === email })
      console.log(alreadyExist)
      if (alreadyExist.length === 0) {
        fetch('http://localhost:5000/user', {
          method: "post",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ name: name, email: email.toLowerCase(), password: password })
        })
          .then((res) => { return res.json() })
          .then((data) => { console.log(data) })
        nav('/signin')
      } else {
        div.current.innerHTML = 'User already exist'
        setTimeout(() => {
          div.current.innerHTML = ''
        }, 2000)
      }
    }
  }
  return (
    <section className="container h-screen flex items-center justify-center mt-6">
      <form className="w-[500px] mt-5 h-fit flex flex-col items-center md:w-1/4" onSubmit={submitHandler}>
        <h3 className="mb-10 text-4xl font-medium">Sign up</h3>
        <div className=" border-2 p-2 flex justify-center items-center">
        <i className="fa-solid fa-user  h-[100px] w-[100px] bg-blue-300 flex justify-center items-center"></i>
        </div>
        <div ref={div} className="text-red-500 w-fit h-5 mb-5"></div>
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md"
          onChange={(e) => { return setName(e.target.value,e.target.style.borderColor = '') }}
          placeholder="Name" type="text" />
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md"
          onChange={(e) => { return setEmail(e.target.value,e.target.style.borderColor = '') }}
          placeholder="Email" type="email" />
        <input className="w-11/12 h-10 ps-5 mb-5 border border-gray-400 rounded-md" onChange={(e) => { return setPassword(e.target.value,e.target.style.borderColor = '') }} type="password" placeholder="Password" />
        <button type="submit" className="w-11/12 h-10 mb-4 rounded-full font-medium bg-black text-white">Sign up</button>
        <Link to='/signin' className="underline" >Already have an account?</Link>
      </form>
    </section>
  )
}

export default SignUp
