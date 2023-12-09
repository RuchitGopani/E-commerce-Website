import React, { useState } from 'react'
import InputText from './Components/MiniComponents/InputText'
import Button from './Components/MiniComponents/Button'
import { Link } from 'react-router-dom'
import { createUsersAsync } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function RegistrationPage() {
    const [regform, setRegform] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(regform.confirmpassword,regform.password)
        if (regform.password == regform.confirmpassword) { 
            setRegform(current => {
                const {confirmpassword, ...rest} = current;
                return rest;
              });
        dispatch(createUsersAsync(regform));
        navigate('/');
    }
    else {
        alert("confirm password doesn't match with password.")
    }
}

const handleChange = (e) => {
    setRegform(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
return (
    <div className='w-screen h-screen flex justify-center items-center p-20 md:p-10 bg-blue-950 md:bg-white m-0 overflow-y-hidden'>
        <div className='flex w-full max-w-5xl max-h-regcard bg-blue-950 h-full rounded-2xl shadow-3xl overflow-hidden '>
            <div className=' flex justify-center items-center w-full min-w-2/4 h-full invisible top-0 left-0 absolute md:relative md:visible'>
                <img src="./logo192.png" alt="" className='w-2/4 h-auto' />
            </div>
            <form className=' p-12 flex flex-col justify-center items-center w-full h-full bg-white' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='text-blue-950 font-semibold text-3xl mb-4'>
                    Registration
                </h1>
                <div className='grid grid-cols-2 gap-x-4'>

                    <InputText name={'firstname'} id={'firstname'} label={'First Name'} placeholder={'Barry'} type={'text'} handleChange={handleChange} att={{ minLength: 3, maxLength: 15 }} />
                    <InputText name={'lastname'} id={'lastname'} label={'Last Name'} placeholder={'Tone'} type={'text'} handleChange={handleChange} att={{ minLength: 3, maxLength: 15 }} />
                </div>
                <InputText name={'email'} id={'email'} label={'Email'} placeholder={'barrytone@gamil.com'} type={'email'} handleChange={handleChange} />
                <InputText name={'password'} id={'password'} label={'Password'} placeholder={'Password'} type={'password'} handleChange={handleChange} />
                <InputText name={'confirmpassword'} id={'confirmpassword'} label={'Confirm Password'} placeholder={'Confirm Password'} type={'password'} handleChange={handleChange}/>
                <Button type={'submit'} name={'Sign Up'} />
                <span className='text-gray-500 font-semibold text-sm mt-4'>Already have a Acoount? <Link to='/login'><span className='text-blue-800 hover:underline hover:underline-offset-4'>Sign in</span></Link></span>
            </form>


        </div>
    </div>
)
}

export default RegistrationPage