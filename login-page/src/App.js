import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import SignUp from './signUp';

function App() {
  return (
    <div className="App">
      <div className='inner-app'>
          <Routes>
            <Route path="/" index element = {<Login/>}/>
            <Route path="/signup" element = {<SignUp/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
