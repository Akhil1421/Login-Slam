import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const firstName = useRef("")
  const lastName = useRef("")
  const phone = useRef("")
  const username = useRef("")
  const email = useRef("")
  const password = useRef("")
  
  const handleClick = async()=>{
    const data = {
      first_name : firstName.current.value,
      last_name : lastName.current.value,
      phone_no : phone.current.value,
      username : username.current.value,
      password : password.current.value,
      email: email.current.value
    }
    try {
      let response = await axios.post("https://api.slamapp.co/auth/signup",data,{withCredentials : true})
      console.log(response)
      window.location.href = "http://portal.slamapp.co/"
    } catch (error) {
        alert(error.response?.data ? [Object.keys(error.response.data),Object.values(error.response.data)] : error.message)
    } 
  }
  return (
    <div className='slide-up form2'>
      <h2 className='slide-up'>Create Account</h2>
        <div>
          <input type="text" placeholder='First Name' ref={firstName}></input>
        </div>
        <div>
          <input type="text" placeholder='Last Name' ref={lastName}></input>
        </div>
        <div>
          <input type="text" placeholder='Phone' ref={phone}></input>
        </div>
        <div>
          <input type="text" placeholder='Username' ref={username}></input>
        </div> 
        <div>
          <input type="email" placeholder='Email' ref={email}></input>
        </div>
        <div>
            <input type="password" placeholder="Password"  className='slide-up' ref={password}/>
        </div>
        <div className='btn-div'>
            <button className='slide-up' onClick={handleClick}>Sign Up</button>
        </div>
        <div className='option'>
          <span>Already have an account ? Click to <Link to="/">Login</Link></span>
        </div>
    </div>
  )
}

export default SignUp
