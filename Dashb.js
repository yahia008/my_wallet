import React from 'react'
import {BsFillDiamondFill} from 'react-icons/bs'
import Menu from '../special/Menu'
import Avatar from '../special/Avatar'
import Ballance from '../special/Ballance'
import History from '../special/History'


const Dashb = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>

        
  <div className='bg-white sm:h-[550px] sm:w-[350px] w-[300px] h-[500px]'>
    <div className='bg-white shadow-xl p-2 flex justify-between items-center'>
    <div className=' flex items-center'>

      <BsFillDiamondFill color='green'/><span className='font-bold ml-1'>MWIA</span>
      </div>
   <Menu/>
      </div>
      
      <Avatar/>
      <Ballance/>
      
        <div>Top notifications</div>
        <History/>
        
    

      

    </div>        
 
        
      
    </div>
  )
}

export default Dashb
