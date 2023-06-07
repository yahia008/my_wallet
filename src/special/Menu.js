import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'
import List from './List'
import { Data } from './data'

const Menu = () => {

const [toggle, setToggle] = useState(true)

const handleToggle =()=> {
    setToggle(!toggle)
}



  return (
    <div className='relative'>
    <div>
       <div onClick={handleToggle} className='mb-2'>
      {toggle?<AiOutlineMenu size='1.5rem'/>:<GrClose className='3.5rem'/>}
        </div>

      </div>
      <div className={`${toggle?'hidden': 'flex '} bg-green-700 absolute 
    min-width-[140px] top-7  z-10 rounded right-0 p-3
    `}><ul className='list-none flex flex-col justify-center items-start'>
         {Data.map((item, index) =><List item ={item} key={index}/> )}
        </ul></div>
    </div>
    
  )
}

export default Menu
