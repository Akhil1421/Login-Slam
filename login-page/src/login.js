import React,{useRef} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Login = () => {
    let userName = useRef('')
    let password = useRef('')
    let handleClick = async()=>{
        let data = {
            username : userName.current.value,
            password : password.current.value
        }
        try {
            let response = await axios.post("https://api.slamapp.co/auth/login",data,{withCredentials : true})
            console.log(response)
            window.location.href = "http://portal.slamapp.co/"
        } catch (error) {
            alert(error.response?.data ? [Object.keys(error.response.data),Object.values(error.response.data)] : error.message)
        }        
    }
  return (
    <div className='slide-up form'>
      <h2 className='slide-up'>Sign In To Your Account</h2>
    <div>
        <input type="text" placeholder="Username"  className='slide-up' ref={userName}/>
    </div>
    <div>
        <input type="password" placeholder="Password"  className='slide-up' ref={password}/>
    </div>
    <div className='btn-div'>
        <button className='slide-up' onClick={handleClick}>Sign In</button>
    </div>
    <div className='option'>
        <span>Don't have an account ? <Link to="/signup">SignUp</Link></span>
    </div>
    </div>
  )
}

export default Login
