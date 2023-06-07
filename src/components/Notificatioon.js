import React from 'react'
import { BsFillDiamondFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Global } from '../context/Global'
import { useContext } from 'react'
import Table from '../special/Table'

const Notificatioon = () => {

    const {transactions} = useContext(Global)

  return (
    <div className='bg-black h-screen flex justify-center items-center'>

        <div className='bg-white sm:h-[550px] sm:w-[350px] w-[300px] h-[500px]'>
        <div className='bg-white shadow-xl p-2 flex justify-between items-center'>
    <div className=' flex items-center'>

      <BsFillDiamondFill color='green'/><span className='font-bold ml-1'>MWIA</span>
      </div>
  <button className='bg-green-700 p-1 rounded-sm'><Link to='/dashboard'>Back</Link></button>
   
   


        </div>

        <div className='bg-gray-300 mt-4 p-1 flex justify-center items-center m-3'> 
      <h1 className='font-bold text-sm'>Notification</h1>
      </div>  

      <div>
      {transactions.map((transaction, index) => <Table transaction={transaction} key={index}/>)}
       
      </div>
      
    </div>
    </div>
  )
}

export default Notificatioon
