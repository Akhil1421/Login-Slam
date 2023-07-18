import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import axios from 'axios';
import Loading from './loading';

function App() {
  useEffect(()=>{
    const getInfo = async()=>{
        try {
          setCalled(true)
          let response = await axios.get("https://api.slamapp.co/profile/account",{withCredentials:true})
          window.location.href = "http://portal.slamapp.co"
        } catch (error) {
          setCalled(false)
           console.log(error)
        }
    }
    getInfo()
  },[])
  let [called, setCalled] = useState(false)
  return (
    <div className="App">
      <div className='inner-app'>
          <Routes>
            <Route path="/" index element = {<Login setCalled={setCalled}/>}/>
            <Route path="/signup" element = {<SignUp setCalled={setCalled}/>}/>
          </Routes>
      </div>
      <Loading display=  {called ? true : false} />
    </div>
  );
}

export default App;
