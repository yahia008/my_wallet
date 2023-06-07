import React, { useState } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {RiCustomerServiceFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Global } from '../context/Global'
import { useContext } from 'react'

const Ballance = () => {
  const {transactions} = useContext(Global)
  console.log(transactions)


  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc, item)=> (acc += item), 0).toFixed(2)

const [eye, setEye] = useState(true)
const HandleEye = () => {
    setEye(!eye)
}

  return (

    <div className='mt-2 flex justify-center items-center flex-col'>
     <div className='bg-black w-[250px] rounded-lg p-3'>
 <div className='text-white flex justify-between items-center font-bold'>
     <div>Toltal
 {eye?<AiFillEye onClick={HandleEye}/> :
   <AiFillEyeInvisible onClick={HandleEye}/>}
 </div>
<Link to='/service'><RiCustomerServiceFill size='2rem'/></Link> 
  </div>


 {eye?<div className='flex justify-center 
 items-center'><TbCurrencyNaira size='2rem'
  color='white'/> <h1 className='text-white
   font-bold text-xl'>{total}</h1>
   </div>:
 
 <div className='flex justify-center
  items-center' ><h1 className='font-bold 
  text-3xl text-white'>****</h1>
  </div>}

     </div>
     <div className='flex '>
     <div className='bg-green-700 rounded text-white m-6 p-2 flex justify-center'>
      <button className='mr-2'>
        <Link to='/deposit'>Deposit</Link></button>

       
     
     </div>
     <div className='bg-green-700 rounded text-white m-6 p-2 flex justify-center'><button className='mr-2'><Link to='/withdraw'> Withdraw </Link></button>

       
     
</div>

     </div>
    </div>
  )
}

export default Ballance
