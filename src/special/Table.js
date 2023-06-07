import React, { useState } from 'react'
import Chair from './chair'

const Table = ({transaction }) => {
  const [limit, setLimit] = useState(transaction)
  return (
    
    <div className='bg-slate-300 shadow-md w-full p-3 overflow-hidden '  >
   {  limit.length =3 ?   <Chair transaction={transaction}/> :<div></div> }

    </div>
  
    
  )
}

export default Table
