import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useContext } from 'react'
import { Global } from '../context/Global'

const Chair = ({transaction}) => {

   const{removetransactions} = useContext(Global)
   
  return (
    <div>
    
<div className='flex justify-between items-center font-bold text-sm'> 
        <h1 className='mr-3 text-xs'>AccountName</h1>
        <h1  className='mr-3 text-xs'>AccountNumber</h1>
    
    
    
        <h1  className='mr-3 text-xs'>Amount</h1>
        
        

     </div>
     <div onClick={() => removetransactions(transaction.id)} className='flex justify-between items-center text-xs bg-white p-2 rounde text-green-600'>
        <h1>{transaction.name}</h1>
        <h1>{transaction.account}</h1>
        <h1>{transaction.amount}</h1>
        
        
        
     </div>
     </div>
  )
}

export default Chair
