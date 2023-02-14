import {  useRef, useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
// import Header from "./Header";
const LoginIn=()=> {
    const userRef = useRef()
    const navigate = useNavigate()
    const [loginUser,setLoginUser]=useState("")
    const [loginPass,setLoginPass]=useState("")
    // const loginUserCollect =(e)=>{
    //    const l = e.target.value
    //    setLoginUser(l)
    // //    const a =setLogin(l)
    // //    console.log(e.target.value)
    // }
    
    // const loginPassCollect =(e)=>{
    //    const l = e.target.value
    //    setLoginPass(l)
    // //    const a =setLogin(l)
    // //    console.log(e.target.value)
    // }
    const submitLogin =(e)=>{
        alert(`you have succesful login with ${loginPass} and ${loginUser}`)
        e.preventDefault();
        
    }
    useEffect(()=>{
        userRef.current.focus();
    },[])
    // useEffect(()=>{

    // })
    return ( 
        <div className="formLog">
        
             <form onSubmit={submitLogin }>
                 <label >Username</label>
                 <input type="text" ref={userRef} value={loginUser} onChange={(e)=>setLoginUser(e.target.value)} placeholder="username" required/>
                 <label >Password</label>
                 <input type="password" placeholder="password" value={loginPass} onChange={(e)=>setLoginPass(e.target.value)} required/>
                 <button  type="submit" onClick={()=>navigate("/landing")}>Log in</button>
                 <span>if you dont have account <Link to="/signUp">sign up </Link></span>
             </form>
             
        </div>
     );
}

export default LoginIn;