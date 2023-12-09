import React from 'react'

function Smallbutton({type,name}) {
  return (
    <div className='flex w-max justify-center'>
            <button className='font-semibold p-2 px-3 bg-blue-700 hover:bg-blue-950 hover:text-white hover:font-semibold text-white text-semibold text-xs rounded-md ease-in transition-all' type={type}>{name}</button>
    </div>
  )
}

export default Smallbutton