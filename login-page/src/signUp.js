import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css';
import "./App.css"

const SignUp = ({setCalled}) => {
  const firstName = useRef("")
  const lastName = useRef("")
  const username = useRef("")
  const email = useRef("")
  const password = useRef("")
  const [value,setValue] = useState() 
  const handleClick = async()=>{
    const data = {
      first_name : firstName.current.value,
      last_name : lastName.current.value,
      phone_no : `+${value}`,
      username : username.current.value,
      password : password.current.value,
      email: email.current.value
    }
    setCalled(true)
    try {
      let response = await axios.post("https://api.slamapp.co/auth/signup",data,{withCredentials : true})
      console.log(response)
      window.location.href = "http://portal.slamapp.co/"
    } catch (error) {
        setCalled(false)
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
        <div style={{display:'flex',width:'102%'}}>
          <PhoneInput country={'in'} containerStyle={{width:'100%',textIndent:'0',marginTop:'2vh'}}
              inputStyle={{paddingLeft:'48px',width:'100%',height:'70%',border:'solid 2px #000000'}}
              value={value} dropdownStyle={{height:'200px'}} buttonStyle={{border:'solid 2px #000000'}}
              onChange={setValue}/>
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
