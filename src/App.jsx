
import './App.css'
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import Productdisplay from './Productdisplay.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import { createContext, useEffect, useState } from 'react';
import Checkout from './Checkout.jsx';
export const userInfo=createContext()
export const usercart=createContext()
function App() {
  const [username,setusername]=useState(false)
  const [cart,setcart]=useState([])
  useEffect(()=>{
   
   
      let u=JSON.parse(window.localStorage.getItem('cartlist')) || [];
      setcart(u)

  },[username])
  return (
    <div className="App">
      <userInfo.Provider value={{username,setusername}}>
        <usercart.Provider value={{cart,setcart}}>
     <Header></Header>
     <div className='row container justify-content-around m-0' id='basicFrame'>
     <SideBar></SideBar>
     <Routes>
      <Route path='/' element={<Productdisplay></Productdisplay>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/register' element={<Register></Register>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/checkout' element={<Checkout></Checkout>}/>
     </Routes>
     </div>
     
    
    <Footer></Footer>
    </usercart.Provider>
    </userInfo.Provider>
    </div>
  );
}

export default App;
