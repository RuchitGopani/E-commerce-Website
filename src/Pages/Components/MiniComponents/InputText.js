import React from 'react'

function InputText({name,label,id,placeholder,type,handleChange,att}) {
    return (
        <div className='flex flex-col mt-6 w-full'>
            <label htmlFor={name} className='font-semibold text-blue-950 flex text-md'>{label}</label>
            <input required {...att} type={type} placeholder={placeholder} name={name} id={id} className='w-full h-10 border-b-2 border-blue-950 placeholder-gray-400 outline-none p-1 px-2 text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e)=>handleChange(e)}/>
        </div>
    )
}

export default InputText