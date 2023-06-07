import { createContext, useReducer, useState } from "react";
import { Appreducer } from "./reduce";

const  initialState = { 
  transactions :[
     
  ],

  
}
  export const Global = createContext(initialState)

 export const GlobalProvider = ({children})=> {
   const [state, dispatch] = useReducer(Appreducer, initialState)

   function addTransactions (transactions) {
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transactions
    })
   }

   function removetransactions (id) {
    dispatch
    ({
      type:'REM_TRANSACTION',
      payload:id
    })
   }
   
    return (
       
         <Global.Provider value={
           { transactions: state.transactions,
            
            addTransactions ,
  
            removetransactions
         
    }
         }>
            {children}
         </Global.Provider>
    )
}