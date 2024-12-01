import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Register()
{
    const navigate=useNavigate()
    const [user,setuser]=useState({username:'',email:'',mobile:'',address:'',password:''})
    
    const input=(ev)=>{
        ev.preventDefault();
        console.log(user)
        fetch('https://mlm.jpsw.in/customer/post',{
            method: 'post',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            alert('User Registered')
            navigate('/')
        })
        .catch(e=>console.log(e))
    }
   
    return(
        <div className="col-9 container">
            <h2 className="text-success fw-light mt-5 mb-5">Welcome, Create Account with Us</h2>
      <form className="w-50 m-auto" onSubmit={(e)=>{input(e)}}>
      <input type="text" className="form-control" placeholder='name' onChange={(e)=>{setuser({...user,username:e.target.value})}} required /><br/>
      <input type="email" className="form-control" placeholder='email' onChange={(e)=>{setuser({...user,email:e.target.value})}} required  /><br/>
      <input type="number" className="form-control" placeholder='mobile' onChange={(e)=>{setuser({...user,mobile:e.target.value})}} required/><br/>
      <input type="text" className="form-control" placeholder='address' onChange={(e)=>{setuser({...user,address:e.target.value})}} required/><br/>
               <input type="password" className="form-control" placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}} required/><br/>
                <button className="btn btn-success" >Register</button>
      
      </form>
                
        </div>
    )
}
export default Register;