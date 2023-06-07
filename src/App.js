
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import Home from './components/Home';
import SignUp from './components/Signup';
import Dashb from './components/Dashb';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Notificatioon from './components/Notificatioon';
import Costumer from './components/costumer';


function App() {
  return (
  <div>
  <BrowserRouter>
    
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='singup' element={<SignUp/>}/>
  <Route path='dashboard' element ={<Dashb/>}/>
  <Route path='deposit' element ={<Deposit/>}/>
  <Route path='withdraw' element ={<Withdraw/>}/>
  <Route path='notification' element ={<Notificatioon/>}/>
  <Route path='service' element ={<Costumer/>}/>




    </Routes>
    
    </BrowserRouter>

  </div>

  )}
export default App;
