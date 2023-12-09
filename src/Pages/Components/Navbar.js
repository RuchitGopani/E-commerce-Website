import React,{useState,useEffect} from 'react'
import { FiMenu, FiSearch, FiBell } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BiFullscreen } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsers, setUsersEmpty } from '../../Redux/UserSlice'
import { capitalizeWord } from './Dashboard'
import { useNavigate } from 'react-router-dom'

function Navbar({setSidebar}) {
    const logout = () => {
        localStorage.removeItem('user');
        dispatch(setUsersEmpty())
        navigate('/login');
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectAllUsers);
  const [menutoggle, setMenutoggle] = useState(false);
  useEffect(()=>{
    console.log(menutoggle);
  },[menutoggle])
    return (
        <>
            <div className='desktop w-full h-18 md:h-14 hidden md:flex justify-between p-4 rounded-xl shadow-3xl'>
                <div className='flex gap-x-4 justify-center items-center'>
                    <FiMenu onClick={()=>(setSidebar())}/>
                    <div className='relative flex items-center'>
                        <FiSearch className='absolute font-bold left-3' />
                        <input type="text" placeholder='Search...' className='w-full h-auto rounded-full bg-gray-100 px-4 p-2 pl-10 outline-none text-xs' />
                    </div>
                    <p className='hidden md:flex text-gray-500 items-center text-xs whitespace-nowrap'>Mega Menu <MdKeyboardArrowDown className='text-base' /></p>
                </div>
                <div className='flex gap-x-4 text-base items-center justify-center'>
                    <p>EN</p>
                    <AiOutlineAppstoreAdd className='text-xl'/>
                    <BiFullscreen className='text-xl'/>
                    <div className='relative px-2 flex items-center justify-center'>
                        <FiBell className='text-xl'/>
                        <span className='absolute bg-red-500 rounded-full py-[2px] px-2 top-[-12px] right-[-5px] text-xs flex items-center text-white'>1</span>
                    </div>
                    <div className='flex gap-x-3 mx-2 relative ' onClick={() => {setMenutoggle(prev => !prev);}}>
                        <img src="./60111.jpg" alt=""  className='rounded-full w-8 h-8'/>
                        <p className='flex text-gray-500 items-center text-xs'>{capitalizeWord(user.firstname)}<MdKeyboardArrowDown className='text-base ' /></p>
                        <div className={` bg-white transition-all ${menutoggle ? 'absolute flex flex-col rounded-md top-12 right-0 max-w-10' : 'hidden top-0 right-0'}`}>
                            <p className='p-4 text-xs' onClick={()=>logout()}>Log Out</p>
                        </div>
                    </div>
                    <IoSettingsOutline className='text-xl'/>
                </div>
            </div>
            <div className='mobile w-full h-14 flex md:hidden justify-between p-4 rounded-xl shadow-3xl'>
                <div className='flex gap-x-4 justify-between items-center w-full'>
                    <FiMenu onClick={()=>(setSidebar())}/>
                    <div className='relative flex items-center w-full'>
                        <FiSearch className='absolute font-bold left-3' />
                        <input type="text" placeholder='Search...' className='w-full h-auto rounded-full bg-gray-100 px-4 p-2 pl-10 outline-none text-xs' />
                    </div>
                    <p className='hidden md:flex text-gray-500 items-center text-xs whitespace-nowrap'>Mega Menu <MdKeyboardArrowDown className='text-base' /></p>
                    <div className='relative px-2 flex items-center justify-center'>
                        <FiBell className='text-xl'/>
                        <span className='absolute bg-red-500 rounded-full py-[2px] px-2 top-[-12px] right-[-5px] text-xs flex items-center text-white'>1</span>
                    </div>
                    <div className='relative min-w-12 min-h-12 '>
                        <img src="./60111.jpg" alt=""  className='rounded-full max-w-12 max-h-12' onClick={() => {setMenutoggle(prev => !prev);}}/>
                        <div className={` bg-white transition-all md:hidden ${menutoggle ? 'absolute rounded-md top-12 right-0 max-w-10' : 'hidden top-0 right-0'}`}>
                            <p className='p-4 text-xs whitespace-nowrap' onClick={()=>logout()}>Log Out</p>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Navbar