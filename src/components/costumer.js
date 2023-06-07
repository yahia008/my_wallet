
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsFillDiamondFill} from 'react-icons/bs'
import Menu from '../special/Menu'


const Costumer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8ehguzq', 'template_wq9jd7c', form.current, 'PAjsIF_psJwW1vxtW')
          .then((result) => {
              console.log(result.text);
              console.log('sent');

              
          }, (error) => {
              console.log(error.text);
          });
      };

    
  return (
    <div className='bg-black h-screen flex justify-center items-center'>

    
      <div className='bg-white sm:h-[550px] sm:w-[350px] w-[300px] h-[500px]'>
      <div className='bg-white shadow-xl p-2 flex justify-between items-center'>
    <div className=' flex items-center'>

      <BsFillDiamondFill color='green'/><span className='font-bold ml-1'>MWIA</span>
      </div>
   <Menu/>
      </div>
      <div className='flex justify-center items-center text-lg font-bold m-2'>
        <h1> Costumer service </h1>
        
      </div>
      <form ref={form} onSubmit={sendEmail} className=''>

        <div  className='p-2 flex flex-col justify-center items-center'>
        <label className='font-bold text-sm mb-2'>Name</label>
      <input type="text" name="user_name" className=' rounded 
          focus:ring-2  ring-1
          p-1
          ml-2
          focus:ring-teal-300'/> 
        </div>


        <div  className='p-2 flex flex-col justify-center items-center'>
        
      
      <label className='font-bold text-sm mb-2'>Email</label>
      <input type="email" name="user_email"  className=' rounded 
          focus:ring-2  ring-1
          p-1
          ml-2
          focus:ring-teal-300'/>

        </div>
     <div  className='p-2 flex flex-col justify-center items-center'>
     <label className='font-bold text-sm mb-2'>Message</label>
      <textarea name="message"  className=' rounded 
          focus:ring-2  ring-1
          p-1
          ml-2
          focus:ring-teal-300'/>
      <input type="submit" value="Send"  className='mt-2 bg-green-400 text-white
      rounded
      p-2
      '/>
     </div>
      
    </form>

      </div>
      </div>
  )

}

export default Costumer
