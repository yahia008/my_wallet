import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-black flex justify-center items-center h-screen w-full'>
      
    <div className='flex-col justify-center items-center'>
      <h1 className='text-white text-4xl font-bold text-center'>MWIA</h1>
      <div className=' mt-3'>

       <h1 className='text-white mb-2 text-center'>Hi Wellcome To MWIA Web App</h1>

       
      
       <div className='flex justify-center mt-2'>

     <Link to='/singup'> <button className='bg-white p-2 rounded font-bold hover:bg-slate-300'>Get Started</button></Link> 
       </div>
      </div>

    </div>
  </div>
  )
}

export default Home
