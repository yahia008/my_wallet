import React from 'react'
import Table from './Table'
import { useContext } from 'react'
import { Global } from '../context/Global'



const History = () => {
  const {transactions} = useContext(Global)
  

  
  return (
    <div >
    <div >
        
      {transactions.map((transaction, id)=> (
            <Table transaction={transaction} key={id}/>
            ))}
    </div>
    </div>
  )
}

export default History
