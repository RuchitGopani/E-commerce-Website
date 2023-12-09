import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectLoggedInUser } from '../Redux/UserSlice'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const [sidebar, setSidebar] = useState(false)
  const NotSidebar = () => {
    setSidebar(prev => !prev);
  }
  const user = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  return (
    <>
    {!user && navigate('/login') }
    <div className={'flex w-screen h-screen'}>

    <Sidebar status={sidebar} setSidebar={setSidebar}/>
    <div className='flex flex-col w-full max-w-screen transition-all'>
    <Navbar setSidebar={NotSidebar}/>
    <Outlet/>
    </div>
    </div>

    </>
  )
}

export default MainPage