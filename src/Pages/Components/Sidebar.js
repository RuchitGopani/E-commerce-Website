import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Sidebar({ status, setSidebar }) {
  return (
    <div className={` h-screen bg-sidebar p-6  flex-col items-start fixed  top-0 ${status ? 'left-0 lg:relative lg:w-15 w-4/5' : '-left-[100%] hidden lg:left-0 w-0 lg:w-20 lg:relative'} z-10 lg:flex transition-all overflow-hidden`}>

      <div className='flex items-center justify-between relative'>
        <div className='flex items-center justify-center gap-x-4' onClick={() => (setSidebar(true))}>

          <p className='drop-shadow-md'><svg id="logo-35" width="38" height="29" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg></p>
          <p className='font-semibold text-xl text-gray-200 '>ABCD</p>
        </div>
        <AiOutlineClose className='w-8 h-8 text-white lg:hidden' onClick={() => (setSidebar(false))} />
      </div>

<div className='menues w-full h-full mt-16 border-t-2 border-sidebar-border'>
      <div className='w-full h-auto '>
        <p className={`font-semibold text-sidebar-menu p-1 py-3 ${status ? "" : "hidden"}`}>Main</p>
        <div>
        <Link to='/'><div className='py-3 w-full h-14 items-end border-b-2 border-sidebar-border'>
            <HiOutlineHome className='w-6 h-6 text-sidebar-menu inline mr-2'/>
            <p className={`font-medium text-sm text-sidebar-menu inline ${status ? "" : "hidden"}`}>Dashboard</p>
          </div></Link>
        </div>
      </div>
      <div className='w-full h-auto '>
        <p className={`font-semibold text-sidebar-menu p-1 py-3 ${status ? "" : "hidden"}`}>App</p>
        <div>
          <div className={`py-3 w-full h-14  items-end border-b-2 border-sidebar-border`}>
            <MdOutlinePeopleAlt className={`w-6 h-6 text-sidebar-menu mr-2 inline ${status ? "mr-2" : ""}`}/>
            <p className={`font-medium text-sm text-sidebar-menu inline ${status ? "" : "hidden"}`}>Customers</p>
          </div>
         <Link to='/bar'> <div className='py-3 w-full h-14 items-end border-b-2 border-sidebar-border'>
            <BiSolidBarChartAlt2 className='w-6 h-6 text-sidebar-menu mr-2 inline'/>
            <p className={`font-medium text-sm text-sidebar-menu inline ${status ? "" : "hidden"}`}>Bars</p>
          </div></Link>
        </div>
      </div>

</div>
    </div>
  )
}

export default Sidebar