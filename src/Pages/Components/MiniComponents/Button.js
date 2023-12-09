import React from 'react'

function Button({ name, type }) {
    return (
        <div className='flex mt-10 w-full justify-center'>
            <button className='font-semibold p-3 px-6 bg-blue-950 hover:bg-sky-300 hover:text-blue-950 hover:font-semibold text-white text-semibold text-xl rounded-lg ease-in transition-all' type={type}>{name}</button>
        </div>
    )
}

export default Button