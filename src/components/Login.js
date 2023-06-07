import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Dashb from './Dashb'
import { Global } from '../context/Global'


const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
   
//console.log('Username:', email);
//console.log('Password:', password);

const handleLogin = (e) => {
  e.preventDefault()
  // Perform the login logic here, such as sending a request to the server
  // with the entered username and password
  
  console.log('Username:', email);
  console.log('Password:', password);
};



  return (
    <div className='flex justify-center items-center h-screen bg-black w-full'>
    <div className='bg-white sm:h-[65%] mt-8 sm:w-[300px]  sm:mx-0  h-[65%] mx-12 shadow-lg  w-[250px] rounded-xl' >

<div className='m-3 p-2 text-cyan-500 flex justify-center font-bold text-2xl'>
<h1 >Login</h1>
</div>

<div className='m-6'>
<form onSubmit={handleLogin}>
  
  <div className='flex justify-center m-4'>
  <label htmlFor='your name'>Email</label>
  </div>
  <div>

   <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' 
   className='w-full ring-1 ring-gray-300 
   rounded-md px-4 outline-none 
   focus:ring-2 focus:ring-teal-300
   '/>

  </div>

  <div className='flex justify-center m-4'>
  <label htmlFor='your name'>Password</label>
  </div>
  <div>

   <input type=' password ' placeholder='Enter Password' 
   className='w-full ring-1 ring-gray-300 
   rounded-md px-4 outline-none 
   focus:ring-2 focus:ring-teal-300
   
   '
   value={password} onChange={(e)=> setPassword(e.target.value)}/>

  </div>
<div className='mx-12 mt-[30px] p-2 flex justify-center
items-center text-white bg-cyan-500 w-[150px] rounded'>

<Link to='/dashboard' ><input type='submit'/></Link>
</div>

</form>

</div>
</div>
  </div>
  )
}

export default Login
