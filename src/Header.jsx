import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { userInfo, usercart } from "./App";
function Header() {
  const navigate=useNavigate()
  const c=useContext(usercart)
  const username=useContext(userInfo)
  return (

    <div className="header">
        <div>
      <div>
        <nav className="navbar navbar-expand p-0 text-warning" style={{fontSize:'13px'}}>
        {
              (!username.username ?  <ul className="navbar nav ms-auto">
            
              <li className="navbar-item m-2" onClick={()=>{navigate('/login')}} >Log In</li>
              <li className="navbar-item m-2"  onClick={()=>{navigate('/register')}}>Create Account</li>
             
            </ul>  : <ul  className="navbar nav ms-auto">
            <li className="navbar-item m-2" onClick={()=>{username.setusername(null); navigate('/')}}>Log Out</li>
            <li className="navbar-item m-2" onClick={()=>{navigate('/checkout')}}>Check Out</li>
            </ul>
            )
            }
        
        </nav>
      </div>
      <div className="row  ">
        <div className="col-sm pe-0 ps-1">
        <h1 id="icon"  onClick={()=>{navigate('/')}}><i className="bi bi-lungs-fill text-success"></i></h1>
          <h1 className=" m-0" onClick={()=>{navigate('/')}}><p>Nutrition</p></h1>
         <p className="fs-3  fw-light" style={{position:'relative',bottom:'17px'}}>Supplements</p>
        </div>
        <div className="col-sm ps-5 ms-4">
          <div className="input-group mt-4 ">
            <input className="form-control" type="text" />
            <button className="btn btn-success text-white">Search</button>{" "}
          </div>
        </div>
        <div className="col-sm ms-2 text-end text-white">
          <button className="btn btn-success p-1 text-white" id="cart" onClick={()=>{navigate('/cart')}}><span className="">Cart</span>
          <p className="m-0"><span className="bi bi-cart-fill display-5 "></span> <span className="cartNum text-success fw-bold">{c.cart.length}</span></p></button>
        </div>
      </div>
      
      <nav className="navbar navbar-expand mx-auto p-0 px-2" id="subHeading">
        <div className="navbar-header">
          <h2 >Categories</h2>
        </div>
        <ul className="navbar nav ms-auto ">
          <li className="navbar-item m-2" > <Link to={'/'}  style={{textDecoration:'none',color:'whitesmoke'}}>Home</Link></li>
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle text-light" href="" data-bs-toggle="dropdown">
              Catalog
            </a>
            <ul className="dropdown-menu p-0" id='dropdownCatalog'>
              <li className="">
                <Link className="dropdown-item ">Vitamins</Link>
              </li>
              <li className="">
                <Link className="dropdown-item ">Tea & COffee</Link>
              </li>
              <li>
                <Link className="dropdown-item ">Grocery Products</Link>
              </li>
              <li>
                <Link className="dropdown-item ">Diet Nutrition</Link>
              </li>
              <li>
                <Link className="dropdown-item ">Body & BAth</Link>
              </li>
              <li>
                <Link className="dropdown-item ">Sports Nutrition</Link>
              </li>
              <li>
                <Link className="dropdown-item ">Supplements</Link>
              </li>
            
            </ul>
          </li>
          <li className="navbar-item m-2"><Link  style={{textDecoration:'none',color:'whitesmoke'}}>Blog</Link></li>
          <li className="navbar-item m-2"><Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/about'}>About Us</Link></li>
          <li className="navbar-item m-2"><Link  style={{textDecoration:'none',color:'whitesmoke'}}>Documentation</Link></li>
          <li className="navbar-item m-2"><Link style={{textDecoration:'none',color:'whitesmoke'}} to={'/contact'}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
    </div>
  );
}
export default Header;
