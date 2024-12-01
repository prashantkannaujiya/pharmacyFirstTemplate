import { useContext, useState } from "react";
import { userInfo } from "./App";
import { useNavigate } from "react-router-dom";

function Login()
{
    const username=useContext(userInfo)
    const navigate=useNavigate()
   

    const [user,setuser]=useState({username:'',password:'',grant_type:'password'})
    const input=(ev)=>{
        alert('LOGIN')
        const urlencoded = new URLSearchParams();
urlencoded.append("UserName",user.username);
urlencoded.append("Password", user.password);
urlencoded.append("grant_type", "password");
        console.log(user)
        ev.preventDefault()
        fetch('https://mlm.jpsw.in/store/login',{
            method: 'post',
            mode: 'cors',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
           
        })
.then(res=>res.json())
        .then((data)=>{
            window.localStorage.setItem('token',data.access_token)
console.log(data)
alert('LOGIN')
username.setusername(true)
navigate('/');
        }).catch(e=>{console.log(e)})
    }
    return(
        <div className="col-9 container">
            <h2 className="text-success fw-light mt-5 mb-5">Welcome, Please Login</h2>
      <form className=" w-50 m-auto" onSubmit={(e)=>{input(e)}}>
      <input type="text" className="form-control" placeholder='name' onChange={(e)=>{setuser({...user,username:e.target.value})}} required /><br/>
      <input type="password" className="form-control" placeholder='Password' onChange={(e)=>{setuser({...user,password:e.target.value})}} required/><br/>
               
                <button className="btn btn-success">Login</button>
      
      </form>
                
        </div>
    )
}
export default Login;