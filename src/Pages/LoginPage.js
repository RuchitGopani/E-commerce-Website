import React,{ useEffect, useState } from 'react'
import InputText from './Components/MiniComponents/InputText'
import Button from './Components/MiniComponents/Button'
import { Link, Navigate } from 'react-router-dom'
import { checkUserAsync, selectError, selectLoggedInUser, setErrorNull } from '../Redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

function LoginPage() {
    const [loginForm, setLoginForm] = useState({email:"", password: ""})

    const dispatch = useDispatch();
    const LoggedInUser = useSelector(selectLoggedInUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkUserAsync(loginForm));
     }
     const error = useSelector(selectError);

     useEffect(()=>{
        if(error){
        alert(error.message);
        dispatch(setErrorNull());
        }
     },[error])

const handleChange = (e) => {
    setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
  return (<>
  {LoggedInUser && <Navigate to='/' replace={true}></Navigate>}
    <div className='w-screen h-screen flex justify-center items-center p-20 md:p-10 bg-blue-950 md:bg-white m-0 overflow-y-hidden'>
        <div className='flex w-full max-w-5xl max-h-regcard bg-blue-950 h-full rounded-2xl shadow-3xl overflow-hidden '>
            
            <form className=' p-12 flex flex-col justify-center items-center w-full h-full bg-white' onSubmit={(e)=>handleSubmit(e)}>
                <h1 className='text-blue-950 font-semibold text-3xl mb-8'>
                    Log In
                </h1>
                <InputText name={'email'} id={'email'} label={'Email'} placeholder={'barrytone@gamil.com'} type={'email'} handleChange={(e)=>handleChange(e)}/>
                <InputText name={'password'} id={'password'} label={'Password'} placeholder={'Password'} type={'password'} handleChange={(e)=>handleChange(e)}/>
                <Button type={'submit'} name={'Sign In'}/>
                <span className='text-gray-500 font-semibold text-sm mt-4'>Create New Acoount? <Link to='/signup'><span className='text-blue-800 hover:underline hover:underline-offset-4'>Sign Up</span></Link></span>
            </form>
            <div className=' hidden justify-center items-center w-full min-w-2/4 h-full top-0 left-0 md:flex'>
                <img src="./logo192.png" alt="" className='w-2/4 h-auto' />
            </div>


        </div>
    </div>
    </>
  )
}

export default LoginPage