import React from 'react'
import  {BsFillDiamondFill} from 'react-icons/bs'
import Menu from '../special/Menu'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useContext } from 'react'
import { Global } from '../context/Global'


const Deposit = () => {
  const {addTransactions  } = useContext(Global)
  
const [name, setName] = useState('')
const [amount, setAmount] =useState(0)
const  [account, setAccount] = useState(0)

const onSubmit = (e) => {
  e.preventDefault()
  
const  newTransaction = {
    id:Math.floor(Math.random()*100000000),
    name,
    amount:-amount,
    account
    
  }
  addTransactions (newTransaction)
  setAmount('')
  setName('')
  setAccount('')
}

const canSave = Boolean(name) && Boolean(amount) && Boolean(account)



  return (
   
    <div className='bg-black h-screen flex justify-center items-center'>

        
  <div className='bg-white sm:h-[550px] sm:w-[350px] w-[300px] h-[500px]'>
    <div className='bg-white shadow-xl p-2 flex justify-between items-center mb-2'>
    <div className=' flex items-center'>

      <BsFillDiamondFill color='green'/><span className='font-bold ml-1'>MWIA</span>
      </div>
  <button className='bg-green-700 p-1 rounded-sm'><Link to='/dashboard'>Back</Link></button>
      </div>
      <div className='flex justify-center items-center text-lg font-bold m-2'>
        <h1>Wellcome To MWIA </h1>
        
      </div>

    <div className='bg-gray-300 mt-2 p-1 flex justify-center items-center m-3'> 
      <h1 className='font-bold text-sm'>Withdraw</h1>
      </div>  
      <div>
        <form onSubmit={onSubmit}>
         <div className='p-2 flex flex-col justify-center items-center'>
          <label className='font-bold text-sm mb-2'>AccountName:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='outline-none 
          rounded 
          focus:ring-2  ring-1
          p-1
          ml-2
          focus:ring-teal-300'/>
         </div>

         <div className='p-2 flex flex-col justify-center items-center'>
          <label className='font-bold text-sm mb-2'>Amount:</label>
          <input type='number' placeholder='Enter Number'
          value={amount} onChange={(e) => setAmount(e.target.value)} 
          className='outline-none 
          rounded 
          p-1
          
          focus:ring-2  ring-1
          
          focus:ring-teal-300'/>
         </div>

         <div className='p-2 flex flex-col justify-center items-center'>
          <label className='font-bold text-sm mb-2'>AccountNumber:</label>
          <input type='number' placeholder='Enter Ammount' 
          value={account} onChange={(e) => setAccount(e.target.value)}
          className='outline-none 
          rounded 
          p-1
          focus:ring-2  ring-1
          ml-2
          focus:ring-teal-300'/>
         </div>
       
        <div className='flex justify-center items-center m-3 '>
          <input className='bg-green-800 rounded-sm p-1' type='submit' disabled={!canSave}/>
        </div>

        </form>
      </div>
     
    

      

    </div>        
 
        
      
    </div>
  )
}

export default Deposit
