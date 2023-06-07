import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import { Global } from '../context/Global'
import { useContext } from 'react'

const Avatar = () => {

  const {login} = useContext(Global)
  
  return (
    <div className='bg-slate-100 shadow-sm flex justify-between items-center p-3'>
      <div><RxAvatar size='2.5rem'/></div>
      <div className='text-sm font-bold'><h6>yahyyatijjani99@gmail</h6></div>
    </div>
  )
}

export default Avatar
