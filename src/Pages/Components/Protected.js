import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser, setUserfromLocalstorage } from '../../Redux/UserSlice';
import { Navigate } from 'react-router-dom';

function Protected({children}) {
  const dispatch = useDispatch();
let user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    dispatch(setUserfromLocalstorage(user));
  return children;
}

export default Protected