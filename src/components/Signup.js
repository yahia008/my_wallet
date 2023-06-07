import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../special/form'

const SignUp = () => {
  return (
    <div className='bg-black w-full flex justify-center h-screen items-center '>
     
    <div className='bg-cyan-800 sm:w-[80%] sm:h-[80%] rounded sm:flex justify-between  h-[100%]  wrap' >
     <div className='p-8 m-8 text-white sm:w-[50%]  sm:h-[50%]  '>
     
     <div className=' p-6 m-3 '>
       <h1 className='mb-5 text-2xl font-bold'>MWIA</h1>
       <h2>Invest with us and enjoy Amaizing benefits </h2>
     </div>
     <div>
     <div  className='p-3 mx-10 mb-6
      bg-cyan-400 flex rounded
       justify-center 
       items-center w-[100px] h'>


<Link to='/login'> <h1>Login</h1></Link>
      
       
     </div>
     
     </div>
     </div>
      <div className='h-[100%] bg-cyan-800 sm:w-[35%] w-full '>
        <div  className='bg-white sm:h-[85%] mt-8 w-[300px]  sm:mx-0  h-[80%] mx-12 shadow-lg  rounded-xl' >
        <Form/>
         
        </div>
      </div>
     </div>  
   </div>
  )
}

export default SignUp
