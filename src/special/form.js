import React from 'react'

const Form = () => {
  return (
    <div>
      

     



  <div className='m-3 p-2 text-cyan-500 flex justify-center font-bold text-2xl'>
    <h1 >SignUp</h1>
  </div>

  <div className='m-6'>
    <form>
      <div className='flex justify-center m-4'>
      <label htmlFor='your name'>Your name</label>
      </div>
      <div>
       <input type='text ' placeholder='your name' className='w-full ring-1 ring-gray-300 rounded-md px-4 outline-none 
       focus:ring-2 focus:ring-teal-300
       '/>

      </div>

      <div className='flex justify-center m-4'>
      <label htmlFor='your name'>Email</label>
      </div>
      <div>

       <input type='email' placeholder='Enter Email' 
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
       '/>

      </div>
   <div className='mx-12 mt-6 p-2 flex justify-center items-center text-white bg-cyan-500 w-[150px] rounded'>

   <input type='submit'/>
   </div>

    </form>

  </div>
</div>


    
  )
}

export default Form
