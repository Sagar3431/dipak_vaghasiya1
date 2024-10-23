import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ProductDitails from "./ProductDitails";
import Footer from "./component/Footer";

import { createContext, useEffect, useState } from "react";
import SignIn from "./component/Login";
import SignUp from "./component/Signup";
import SignOut from "./component/Logout";
import CheckOut from "./component/CheckOut";
import Payment from "./component/Payment";
import About from "./component/About";
import Blog from "./component/Blog";
import Service from "./component/Service";
import Watch from "./Watch";
import ScrollTop from "./component/ScrollTop";






export const control=createContext()
 function App() {
  const [userData, setUserData] = useState([]);
  const [userFound, setUserFound] = useState([]);
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then((res) => { return res.json() })
      .then((data) => {
        setUserData(data)
      })
  }, [])
  return (
   <div className=" overflow-hidden">
    <control.Provider value={{userData, signIn, setSignIn, userFound, setUserFound}}>
      <BrowserRouter>
      <ScrollTop />
      <Header/>
      
        <Routes>
       
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/:id" element={<ProductDitails/>}></Route>
        <Route path="/watch/:id" element={<Watch/>}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Service" element={<Service />} />
        
        
         
        </Routes>
        <Sidebar/>
   
        <Footer/>
      </BrowserRouter>
    </control.Provider>
    

   </div>
  );
}

export default App;
