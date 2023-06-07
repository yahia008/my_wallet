import React from 'react'
import { Link } from 'react-router-dom'


const List = ({item}) => {
  return (
    <div>
     <li className='text-white p-2 hover:bg-black rounded-sm'><Link to={item.link}>{item.title}</Link></li>
    

    </div>
  )
}

export default List
